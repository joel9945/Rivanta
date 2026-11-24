/**
 * header-logo-canvas.js
 *
 * Renders the Rivanta header logo on a createjs canvas and animates the
 * US-outline path being drawn on as a stroke when the page first loads.
 *
 * How it works:
 *   1. The SVG logo file is fetched and parsed. The US outline path
 *      (#us_x5F_outline_x5F_path), the RIVANTA letter group (#rivanta),
 *      and the tagline group (#national_x5F_construction_x5F_group) are
 *      extracted separately.
 *   2. A createjs Stage is created on the <canvas data-logo-canvas> element.
 *      Static tagline shapes are drawn once in grey. RIVANTA letter shapes
 *      are redrawn whenever the logo color needs to change (white on dark
 *      backgrounds, black on light backgrounds).
 *   3. On page load the US outline strokes on over TRACE_DURATION_MS using
 *      sampled points from the SVG path and a cubic ease-out. With
 *      prefers-reduced-motion the stroke is drawn immediately at full progress.
 *   4. The stroke color flips to white when the hero enters its locked orange
 *      phase, and back to orange when the hero is at rest or the user has
 *      scrolled past it.
 *   5. The RIVANTA letter color is re-evaluated on scroll and section change
 *      by sampling the background color of whichever page section sits
 *      directly below the header.
 *
 * Dependencies:
 *   - createjs (loaded dynamically from the CDN URL in data-logo-createjs-url)
 *   - SVG logo served from data-logo-svg-url (rivanta-logo-svg-line.svg)
 *
 * Triggered by:
 *   main.js → initHeaderLogoCanvas()
 */

import { HEADER_LOGO_TRACE_POINTS } from './header-logo-trace-points.js';

const LOGO_WIDTH = 609.1;
const LOGO_HEIGHT = 223.3;
const COLOR_ORANGE = '#EA984F';
const COLOR_SECONDARY = '#808284';
const COLOR_LIGHT = '#FFFFFF';
const COLOR_DARK = '#000000';
const COLOR_OFF_BLACK = '#0F141B';
const TRACE_DURATION_MS = 3000;
const SVG_COMMAND_TOKEN_PATTERN = /([AaCcHhLlMmQqSsTtVvZz])|([-+]?\d*\.?\d+(?:e[-+]?\d+)?)/g;

// Parses a CSS rgb() or rgba() color string into a plain { r, g, b, a } object.
// Returns null if the string is not a recognised rgb/rgba value.
const toRgbTuple = (colorString) => {
  const match = String(colorString || '').match(/rgba?\(([^)]+)\)/i);
  if (!match) {
    return null;
  }

  const parts = match[1].split(',').map((part) => Number.parseFloat(part.trim()));
  if (parts.length < 3 || parts.some((value) => Number.isNaN(value))) {
    return null;
  }

  return {
    r: Math.max(0, Math.min(255, parts[0])),
    g: Math.max(0, Math.min(255, parts[1])),
    b: Math.max(0, Math.min(255, parts[2])),
    a: Number.isFinite(parts[3]) ? Math.max(0, Math.min(1, parts[3])) : 1,
  };
};

// Calculates relative luminance for an { r, g, b } tuple using the WCAG 2.x
// formula. Returns a value in the range [0, 1] where 0 is black and 1 is white.
const getLuminance = ({ r, g, b }) => {
  const normalize = (value) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b);
};

// Walks up the DOM from element until it finds an ancestor with a non-transparent
// computed background color. Falls back to opaque black if none is found.
const resolveBackgroundColor = (element) => {
  let cursor = element;
  while (cursor && cursor !== document.documentElement) {
    const color = toRgbTuple(window.getComputedStyle(cursor).backgroundColor);
    if (color && color.a > 0.04) {
      return color;
    }

    cursor = cursor.parentElement;
  }

  return { r: 0, g: 0, b: 0, a: 1 };
};

// Returns COLOR_DARK or COLOR_LIGHT — whichever contrasts better against the
// given background color tuple — based on WCAG luminance threshold.
const chooseContrastingColor = (backgroundColor) => {
  const luminance = getLuminance(backgroundColor);
  return luminance > 0.42 ? COLOR_DARK : COLOR_LIGHT;
};

// Returns the CSS display width and height of the canvas element as reported
// by getBoundingClientRect, falling back to the SVG coordinate dimensions.
const getScaledCanvasRect = (canvas) => {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, rect.width || LOGO_WIDTH);
  const height = Math.max(1, rect.height || LOGO_HEIGHT);
  return { width, height };
};

// Dynamically loads an external script by URL. Deduplicates concurrent and
// repeated calls for the same URL so the script is only ever inserted once.
// Returns a Promise that resolves when the script is ready.
const loadScript = (() => {
  const pendingByUrl = new Map();

  return (url) => {
    if (!url) {
      return Promise.reject(new Error('Missing script URL'));
    }

    if (pendingByUrl.has(url)) {
      return pendingByUrl.get(url);
    }

    const existing = document.querySelector(`script[src="${url}"]`);
    if (existing) {
      existing.dataset.loaded = 'true';
      const resolved = Promise.resolve();
      pendingByUrl.set(url, resolved);
      return resolved;
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => {
        script.dataset.loaded = 'true';
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.head.appendChild(script);
    });

    pendingByUrl.set(url, promise);
    return promise;
  };
})();

// Ensures createjs.Graphics.getSVGPath exists. The CDN build omits this helper,
// so a minimal shim is attached when it is missing. Returns false if createjs
// or its Graphics class is not present at all.
const ensureGetSvgPath = (createjsGlobal) => {
  if (!createjsGlobal || !createjsGlobal.Graphics) {
    return false;
  }

  if (typeof createjsGlobal.Graphics.getSVGPath === 'function') {
    return true;
  }

  // The CDN build used on the site does not expose this helper,
  // so we provide a small compatibility shim.
  createjsGlobal.Graphics.getSVGPath = (pathData) => String(pathData || '');
  return true;
};

// Tokenises an SVG path data string (the `d` attribute) into an alternating
// array of command letters (strings) and numeric arguments (numbers).
const toSvgTokens = (pathData) => {
  const tokens = [];
  const input = String(pathData || '');
  SVG_COMMAND_TOKEN_PATTERN.lastIndex = 0;

  let match = SVG_COMMAND_TOKEN_PATTERN.exec(input);
  while (match) {
    if (match[1]) {
      tokens.push(match[1]);
    } else if (match[2]) {
      tokens.push(Number.parseFloat(match[2]));
    }

    match = SVG_COMMAND_TOKEN_PATTERN.exec(input);
  }

  return tokens;
};

// Translates a full SVG path data string into a series of createjs Graphics
// draw calls (moveTo, lineTo, bezierCurveTo, quadraticCurveTo, closePath).
// Supports M, L, H, V, C, S, Q, T, A (approximated as a line), and Z commands
// in both absolute and relative forms. Arc (A/a) is approximated as a straight
// line to the endpoint — sufficient for the logo outlines used here.
const drawSvgPath = (graphics, pathData) => {
  const tokens = toSvgTokens(pathData);
  if (tokens.length === 0) {
    return;
  }

  // Cursor position and subpath start, used to resolve relative coordinates
  // and to restore the pen position after a Z (closepath) command.
  let index = 0;
  let command = '';
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;

  // Previous cubic/quadratic control points, needed to compute the reflected
  // control point for S (smooth cubic) and T (smooth quadratic) continuations.
  // Reset to null whenever a non-curve command is encountered.
  let prevCubicControlX = null;
  let prevCubicControlY = null;
  let prevQuadraticControlX = null;
  let prevQuadraticControlY = null;

  // Advance past the current token and return it as a number, or null if the
  // next token is not a number (i.e. is a command letter or past end of input).
  const readNumber = () => {
    if (index >= tokens.length || typeof tokens[index] !== 'number') {
      return null;
    }

    const value = tokens[index];
    index += 1;
    return value;
  };

  // Returns true when the next token is a number without consuming it.
  // Used to detect implicit command repetition (e.g. multiple coordinate
  // pairs following a single M or L command letter).
  const peekIsNumber = () => index < tokens.length && typeof tokens[index] === 'number';

  while (index < tokens.length) {
    // Consume a new command letter if present; otherwise re-use the last one
    // (SVG allows implicit repetition of the previous command).
    if (typeof tokens[index] === 'string') {
      command = tokens[index];
      index += 1;
    } else if (!command) {
      break;
    }

    // Lowercase command letters use coordinates relative to the current pen
    // position; uppercase commands use absolute coordinates.
    const relative = command === command.toLowerCase();

    // M/m — moveto: lift the pen and start a new subpath.
    // Additional coordinate pairs after the first are treated as implicit
    // lineto commands (per the SVG spec).
    if (command === 'M' || command === 'm') {
      const mx = readNumber();
      const my = readNumber();
      if (mx === null || my === null) {
        break;
      }

      x = relative ? x + mx : mx;
      y = relative ? y + my : my;
      startX = x;
      startY = y;
      graphics.mt(x, y);

      // Implicit lineto for any extra coordinate pairs after the first moveto.
      while (peekIsNumber()) {
        const lx = readNumber();
        const ly = readNumber();
        if (lx === null || ly === null) {
          break;
        }

        x = relative ? x + lx : lx;
        y = relative ? y + ly : ly;
        graphics.lt(x, y);
      }

      prevCubicControlX = null;
      prevCubicControlY = null;
      prevQuadraticControlX = null;
      prevQuadraticControlY = null;
      continue;
    }

    // L/l — lineto: draw a straight line to each successive coordinate pair.
    if (command === 'L' || command === 'l') {
      while (peekIsNumber()) {
        const lx = readNumber();
        const ly = readNumber();
        if (lx === null || ly === null) {
          break;
        }

        x = relative ? x + lx : lx;
        y = relative ? y + ly : ly;
        graphics.lt(x, y);
      }

      prevCubicControlX = null;
      prevCubicControlY = null;
      prevQuadraticControlX = null;
      prevQuadraticControlY = null;
      continue;
    }

    // H/h — horizontal lineto: move only along the X axis, Y stays constant.
    if (command === 'H' || command === 'h') {
      while (peekIsNumber()) {
        const hx = readNumber();
        if (hx === null) {
          break;
        }

        x = relative ? x + hx : hx;
        graphics.lt(x, y);
      }

      prevCubicControlX = null;
      prevCubicControlY = null;
      prevQuadraticControlX = null;
      prevQuadraticControlY = null;
      continue;
    }

    // V/v — vertical lineto: move only along the Y axis, X stays constant.
    if (command === 'V' || command === 'v') {
      while (peekIsNumber()) {
        const vy = readNumber();
        if (vy === null) {
          break;
        }

        y = relative ? y + vy : vy;
        graphics.lt(x, y);
      }

      prevCubicControlX = null;
      prevCubicControlY = null;
      prevQuadraticControlX = null;
      prevQuadraticControlY = null;
      continue;
    }

    // C/c — cubic Bézier curveto: two explicit control points (x1,y1) and
    // (x2,y2) followed by the endpoint (ex,ey). The second control point is
    // remembered so that a following S command can reflect it.
    if (command === 'C' || command === 'c') {
      while (peekIsNumber()) {
        const x1 = readNumber();
        const y1 = readNumber();
        const x2 = readNumber();
        const y2 = readNumber();
        const ex = readNumber();
        const ey = readNumber();
        if ([x1, y1, x2, y2, ex, ey].some((value) => value === null)) {
          break;
        }

        const cx1 = relative ? x + x1 : x1;
        const cy1 = relative ? y + y1 : y1;
        const cx2 = relative ? x + x2 : x2;
        const cy2 = relative ? y + y2 : y2;
        const nx = relative ? x + ex : ex;
        const ny = relative ? y + ey : ey;

        graphics.bt(cx1, cy1, cx2, cy2, nx, ny);
        prevCubicControlX = cx2;
        prevCubicControlY = cy2;
        prevQuadraticControlX = null;
        prevQuadraticControlY = null;
        x = nx;
        y = ny;
      }

      continue;
    }

    // S/s — smooth cubic Bézier: omits the first control point and instead
    // reflects the previous C/S control point through the current pen position.
    // Falls back to the current position if no prior cubic command exists.
    if (command === 'S' || command === 's') {
      while (peekIsNumber()) {
        const x2 = readNumber();
        const y2 = readNumber();
        const ex = readNumber();
        const ey = readNumber();
        if ([x2, y2, ex, ey].some((value) => value === null)) {
          break;
        }

        const cx1 = prevCubicControlX === null ? x : (2 * x) - prevCubicControlX;
        const cy1 = prevCubicControlY === null ? y : (2 * y) - prevCubicControlY;
        const cx2 = relative ? x + x2 : x2;
        const cy2 = relative ? y + y2 : y2;
        const nx = relative ? x + ex : ex;
        const ny = relative ? y + ey : ey;

        graphics.bt(cx1, cy1, cx2, cy2, nx, ny);
        prevCubicControlX = cx2;
        prevCubicControlY = cy2;
        prevQuadraticControlX = null;
        prevQuadraticControlY = null;
        x = nx;
        y = ny;
      }

      continue;
    }

    // Q/q — quadratic Bézier curveto: one explicit control point (x1,y1) and
    // an endpoint (ex,ey). The control point is remembered for T continuations.
    if (command === 'Q' || command === 'q') {
      while (peekIsNumber()) {
        const x1 = readNumber();
        const y1 = readNumber();
        const ex = readNumber();
        const ey = readNumber();
        if ([x1, y1, ex, ey].some((value) => value === null)) {
          break;
        }

        const cx1 = relative ? x + x1 : x1;
        const cy1 = relative ? y + y1 : y1;
        const nx = relative ? x + ex : ex;
        const ny = relative ? y + ey : ey;

        graphics.qt(cx1, cy1, nx, ny);
        prevQuadraticControlX = cx1;
        prevQuadraticControlY = cy1;
        prevCubicControlX = null;
        prevCubicControlY = null;
        x = nx;
        y = ny;
      }

      continue;
    }

    // T/t — smooth quadratic Bézier: reflects the previous Q/T control point
    // through the current pen position. Falls back to the current position if
    // no prior quadratic command exists.
    if (command === 'T' || command === 't') {
      while (peekIsNumber()) {
        const ex = readNumber();
        const ey = readNumber();
        if (ex === null || ey === null) {
          break;
        }

        const cx1 = prevQuadraticControlX === null ? x : (2 * x) - prevQuadraticControlX;
        const cy1 = prevQuadraticControlY === null ? y : (2 * y) - prevQuadraticControlY;
        const nx = relative ? x + ex : ex;
        const ny = relative ? y + ey : ey;

        graphics.qt(cx1, cy1, nx, ny);
        prevQuadraticControlX = cx1;
        prevQuadraticControlY = cy1;
        prevCubicControlX = null;
        prevCubicControlY = null;
        x = nx;
        y = ny;
      }

      continue;
    }

    // A/a — elliptical arc: consumes all 7 arc parameters but ignores the
    // radii, rotation, and flag values. The arc is approximated as a straight
    // line to the endpoint — acceptable for the logo shapes used here, which
    // contain no visible arc segments.
    if (command === 'A' || command === 'a') {
      while (peekIsNumber()) {
        const rx = readNumber();
        const ry = readNumber();
        const rot = readNumber();
        const largeArcFlag = readNumber();
        const sweepFlag = readNumber();
        const ex = readNumber();
        const ey = readNumber();
        if ([rx, ry, rot, largeArcFlag, sweepFlag, ex, ey].some((value) => value === null)) {
          break;
        }

        const nx = relative ? x + ex : ex;
        const ny = relative ? y + ey : ey;
        graphics.lt(nx, ny);
        prevCubicControlX = null;
        prevCubicControlY = null;
        prevQuadraticControlX = null;
        prevQuadraticControlY = null;
        x = nx;
        y = ny;
      }

      continue;
    }

    // Z/z — closepath: draw a straight line back to the subpath start point
    // and reset the pen position to that start point.
    if (command === 'Z' || command === 'z') {
      graphics.cp();
      x = startX;
      y = startY;
      prevCubicControlX = null;
      prevCubicControlY = null;
      prevQuadraticControlX = null;
      prevQuadraticControlY = null;
      continue;
    }
  }
};

// Draws a single SVG element — <path>, <polygon>, or <rect> — into a createjs
// Graphics context. The fill/stroke style must be set on the graphics object
// before calling this; only geometry is emitted here.
const drawSvgElement = (graphics, element) => {
  const tag = element.tagName.toLowerCase();
  if (tag === 'path') {
    drawSvgPath(graphics, element.getAttribute('d') || '');
  } else if (tag === 'polygon') {
    const rawPoints = (element.getAttribute('points') || '').trim();
    if (!rawPoints) {
      return;
    }

    const coords = rawPoints.split(/[\s,]+/).map(Number).filter((v) => Number.isFinite(v));
    if (coords.length < 4) {
      return;
    }

    graphics.mt(coords[0], coords[1]);
    for (let i = 2; i < coords.length; i += 2) {
      graphics.lt(coords[i], coords[i + 1]);
    }

    graphics.cp();
  } else if (tag === 'rect') {
    const rx = Number.parseFloat(element.getAttribute('x') || '0');
    const ry = Number.parseFloat(element.getAttribute('y') || '0');
    const rw = Number.parseFloat(element.getAttribute('width') || '0');
    const rh = Number.parseFloat(element.getAttribute('height') || '0');
    if (rw > 0 && rh > 0) {
      graphics.dr(rx, ry, rw, rh);
    }
  }
};

// Redraws the US-outline trace stroke on `shape` up to the given progress
// value (0..1). Uses the pre-sampled points array from sampleSvgPath and
// lifts the pen at any point whose `move` flag is set, so disconnected
// subpaths render correctly. This is called every animation frame during the
// draw-on sequence, and once at progress = 1 to set the final resting state.
const drawTraceProgress = (shape, sampledPoints, progress, strokeColor) => {
  const graphics = shape.graphics;
  graphics.clear();

  const maxIndex = Math.max(0, Math.min(sampledPoints.length - 1, Math.floor(progress * (sampledPoints.length - 1))));
  if (maxIndex < 1) {
    return;
  }

  graphics.s(strokeColor).ss(7.5, 'round', 'round');
  let started = false;

  for (let index = 0; index <= maxIndex; index += 1) {
    const point = sampledPoints[index];
    if (!started || point.move) {
      graphics.mt(point.x, point.y);
      started = true;
      continue;
    }

    graphics.lt(point.x, point.y);
  }
};

// Determines which page section is currently visible just below the header
// so its background color can be sampled for logo contrast decisions.
// Tries elementsFromPoint first (most accurate), then falls back to bounding-
// rect intersection across all homepage sections, then the active section
// data attribute, then the homepage <main> element.
const getSectionForColorSampling = (headerElement) => {
  if (!headerElement) {
    return null;
  }

  const probeLine = headerElement.offsetHeight || 0;

  if (typeof document.elementsFromPoint === 'function') {
    const probeX = Math.max(1, Math.floor(window.innerWidth * 0.5));
    const stack = document.elementsFromPoint(probeX, probeLine);
    for (const node of stack) {
      if (!(node instanceof HTMLElement)) {
        continue;
      }

      if (headerElement.contains(node)) {
        continue;
      }

      const sectionCandidate = node.closest('section, main, body');
      if (sectionCandidate) {
        return sectionCandidate;
      }
    }
  }

  const homepage = document.querySelector('main.rivanta-homepage');
  const sectionNodes = homepage ? Array.from(homepage.querySelectorAll('section[id]')) : [];
  for (const sectionNode of sectionNodes) {
    const rect = sectionNode.getBoundingClientRect();
    if (rect.top <= probeLine && rect.bottom > probeLine) {
      return sectionNode;
    }
  }

  const activeSectionId = String(headerElement.dataset.activeSection || '').trim();

  if (activeSectionId) {
    return document.getElementById(activeSectionId);
  }

  return homepage;
};

// Returns true when the hero section is still in the viewport and has entered
// its locked or completed orange state (data-sequence-lock="1" or
// data-sequence-complete="1"). Used to switch the US-outline stroke to white
// so it reads against the orange hero background.
const isHeroOrangePhase = (heroElement, headerElement) => {
  if (!heroElement) {
    return false;
  }

  const headerHeight = headerElement ? headerElement.offsetHeight || 0 : 0;
  const overHero = heroElement.getBoundingClientRect().bottom > headerHeight;
  if (!overHero) {
    return false;
  }

  const sequenceLocked = heroElement.dataset.sequenceLock === '1';
  const sequenceComplete = heroElement.dataset.sequenceComplete === '1';
  if (heroElement.dataset.controller === 'native-scroll') {
    return Number(heroElement.dataset.progress || 0) >= 0.55;
  }
  return sequenceLocked || sequenceComplete;
};

// Module entry point. Fetches the SVG logo, builds the createjs stage, runs
// the US-outline draw-on animation, and sets up MutationObserver / scroll
// listeners to keep the logo color in sync with the page background and hero
// state for the lifetime of the page.
export async function initHeaderLogoCanvas() {
  const brand = document.querySelector('[data-module="header-logo-canvas"]');
  if (!brand) {
    return;
  }

  const canvas = brand.querySelector('[data-logo-canvas]');
  const fallbackLogo = brand.querySelector('[data-logo-fallback]');
  const createjsUrl = brand.dataset.logoCreatejsUrl || '';
  const logoSvgUrl = brand.dataset.logoSvgUrl || '';
  if (!canvas || !fallbackLogo || !createjsUrl || !logoSvgUrl) {
    return;
  }

  try {
    await loadScript(createjsUrl);
  } catch {
    return;
  }

  const createjsGlobal = window.createjs;
  if (!createjsGlobal || typeof createjsGlobal.Stage !== 'function' || !ensureGetSvgPath(createjsGlobal)) {
    return;
  }

  let svgText = '';
  try {
    const svgResponse = await fetch(logoSvgUrl, { credentials: 'same-origin' });
    if (!svgResponse.ok) {
      return;
    }

    svgText = await svgResponse.text();
  } catch {
    return;
  }

  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgText, 'image/svg+xml');
  const svgRoot = svgDocument.querySelector('svg');
  if (!svgRoot) {
    return;
  }

  const usOutlineElement = svgRoot.querySelector('#us_x5F_outline_x5F_path');
  const rivantaElements = Array.from(svgRoot.querySelectorAll('#rivanta > *, #rivanta > *'));
  const staticElements = Array.from(svgRoot.querySelectorAll('#national_x5F_construction_x5F_group > *'));

  if (!usOutlineElement || rivantaElements.length === 0 || staticElements.length === 0) {
    return;
  }

  const usOutlinePathData = usOutlineElement.getAttribute('d') || '';
  if (!usOutlinePathData) {
    return;
  }

  const stage = new createjsGlobal.Stage(canvas);
  stage.enableMouseOver(0);

  const root = new createjsGlobal.Container();
  const staticContainer = new createjsGlobal.Container();
  const rivantaContainer = new createjsGlobal.Container();
  const traceShape = new createjsGlobal.Shape();

  staticElements.forEach((element) => {
    const shape = new createjsGlobal.Shape();
    shape.graphics.clear().f(COLOR_SECONDARY).s();
    drawSvgElement(shape.graphics, element);
    staticContainer.addChild(shape);
  });

  const rivantaShapes = rivantaElements.map((element) => {
    const shape = new createjsGlobal.Shape();
    rivantaContainer.addChild(shape);
    return { shape, element };
  });

  const applyRivantaColor = (nextColor) => {
    rivantaShapes.forEach(({ shape, element }) => {
      shape.graphics.clear().f(nextColor).s();
      drawSvgElement(shape.graphics, element);
    });
  };

  root.addChild(staticContainer, rivantaContainer, traceShape);
  stage.addChild(root);

  const sampledTracePoints = HEADER_LOGO_TRACE_POINTS;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const startedAt = performance.now();
  let isTraceDone = sampledTracePoints.length === 0 || prefersReducedMotion;
  let currentTraceProgress = isTraceDone ? 1 : 0;
  let currentRivantaColor = COLOR_LIGHT;
  let currentUsOutlineColor = COLOR_ORANGE;

  const syncCanvasResolution = () => {
    const { width, height } = getScaledCanvasRect(canvas);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.max(1, Math.round(width * pixelRatio));
    canvas.height = Math.max(1, Math.round(height * pixelRatio));

    stage.scaleX = (width / LOGO_WIDTH) * pixelRatio;
    stage.scaleY = (height / LOGO_HEIGHT) * pixelRatio;
    stage.update();
  };

  const header = document.querySelector('[data-module="scrollspy-nav"]');
  const hero = document.getElementById('hero');

  const applyUsOutlineColor = (nextColor) => {
    currentUsOutlineColor = nextColor;
    drawTraceProgress(traceShape, sampledTracePoints, currentTraceProgress, currentUsOutlineColor);
  };

  const refreshRivantaColor = () => {
    const section = getSectionForColorSampling(header);
    if (!section) {
      return;
    }

    const sectionBackground = resolveBackgroundColor(section);
    const nextColor = chooseContrastingColor(sectionBackground);
    if (nextColor === currentRivantaColor) {
      return;
    }

    currentRivantaColor = nextColor;
    applyRivantaColor(currentRivantaColor);
    stage.update();
  };

  const refreshUsOutlineColor = () => {
    const nextOutlineColor = isHeroOrangePhase(hero, header) ? COLOR_LIGHT : COLOR_ORANGE;
    if (nextOutlineColor === currentUsOutlineColor) {
      return;
    }

    applyUsOutlineColor(nextOutlineColor);
    stage.update();
  };

  applyRivantaColor(currentRivantaColor);
  applyUsOutlineColor(currentUsOutlineColor);
  if (isTraceDone) {
    drawTraceProgress(traceShape, sampledTracePoints, 1, currentUsOutlineColor);
  }

  syncCanvasResolution();
  refreshRivantaColor();
  refreshUsOutlineColor();

  if (!isTraceDone) {
    let traceTickerListener;
    const onTick = () => {
      const elapsedMs = performance.now() - startedAt;
      const linearProgress = Math.max(0, Math.min(1, elapsedMs / TRACE_DURATION_MS));
      const easedProgress = 1 - ((1 - linearProgress) ** 3);
      currentTraceProgress = easedProgress;

      drawTraceProgress(traceShape, sampledTracePoints, easedProgress, currentUsOutlineColor);
      stage.update();

      if (linearProgress >= 1) {
        isTraceDone = true;
        createjsGlobal.Ticker.off('tick', traceTickerListener);
      }
    };

    createjsGlobal.Ticker.framerate = 60;
    traceTickerListener = createjsGlobal.Ticker.on('tick', onTick);
  }

  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(() => {
      syncCanvasResolution();
    });
    resizeObserver.observe(canvas);
  }

  window.addEventListener('resize', syncCanvasResolution);

  if (header && typeof MutationObserver !== 'undefined') {
    const headerObserver = new MutationObserver(() => {
      refreshRivantaColor();
      refreshUsOutlineColor();
    });

    headerObserver.observe(header, {
      attributes: true,
      attributeFilter: ['class', 'data-active-section'],
    });
  }

  if (hero && typeof MutationObserver !== 'undefined') {
    const heroObserver = new MutationObserver(() => {
      refreshUsOutlineColor();
    });

    heroObserver.observe(hero, {
      attributes: true,
      attributeFilter: ['data-sequence-lock', 'data-sequence-complete', 'class'],
    });
  }

  let ticking = false;
  const refreshOnScroll = () => {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(() => {
      refreshRivantaColor();
      refreshUsOutlineColor();
      ticking = false;
    });
  };

  window.addEventListener('scroll', refreshOnScroll, { passive: true });
  window.addEventListener('rivanta:scroll', refreshOnScroll);
  window.addEventListener('rivanta:hero-phase', refreshOnScroll);

  brand.classList.add('is-logo-canvas-ready');
  fallbackLogo.setAttribute('aria-hidden', 'true');
}
