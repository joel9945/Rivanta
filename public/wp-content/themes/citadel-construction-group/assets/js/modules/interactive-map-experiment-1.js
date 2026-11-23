const MAP_COMPOSITION_ID = '6BBC61D64AAC439EB6CBC155EFAE038B';

const MAP_POINT_FALLBACKS = {
  'rogers-obrien-construction-company': ['rogers-obrien', 'r-o'],
  'charles-pankow-builders-ltd': ['pankow'],
  'choate-construction-company': ['choate'],
  'imc-construction': ['imc'],
  'krusinski-construction-company': ['krusinski'],
  'saunders-construction-inc': ['saunders'],
  'lease-crutcher-lewis': ['lewis'],
};

const MAP_GRADIENT_SCALE = 2;
const MAP_GRADIENT_COLORS = ['#F19B43', '#975A2D', '#F19B43', '#975A2D', '#F19B43', '#975A2D', '#F19B43', '#A56430'];
const MAP_GRADIENT_RATIOS = [0.031, 0.153, 0.306, 0.439, 0.569, 0.714, 0.855, 0.992];
const MAP_GRADIENT_BASE_RADIUS = 1249.2;
const MAP_GRADIENT_PATH = 'Ehj0A/OMAAAh+cMDHpAAAMAAAB+cg';
const MAP_GRADIENT_EDGE_TIE_EPSILON = 0.02;
const MAP_OVERLAY_FADE_MS = 220;
const MAP_GRADIENT_BASE_ALPHA = 0.6992;
const MAP_GRADIENT_ACTIVE_ALPHA = 0.5;
const MAP_MOBILE_BREAKPOINT = '(max-width: 767px)';
const MAP_MOBILE_STAGE_FADE_ALPHA = 0.14;
const MAP_MOBILE_FOCUS_SCALE_MULTIPLIER = 0.9;
const MAP_MOBILE_FOCUS_MIN_SCALE = 1.08;
const MAP_MOBILE_FOCUS_MAX_SCALE = 2.2;
const MAP_MOBILE_FOCUS_PREVIEW_MULTIPLIER = 0.82;
const MAP_MOBILE_FOCUS_PREVIEW_DURATION = 320;
const MAP_MOBILE_FOCUS_FINAL_DURATION = 420;
const MAP_MOBILE_CARD_REVEAL_DELAY = 240;
const MAP_MOBILE_ACTIVATION_DEDUPE_MS = 380;

// Explicit mapping for the current exported map-canvas.js display list (frame 1).
const MAP_OVERLAY_INDEX_BY_PARTNER = {
  'rogers-obrien-construction-company': [4, 8, 11],
  'charles-pankow-builders-ltd': [5, 12],
  'choate-construction-company': [3, 7, 16],
  'imc-construction': [1, 10, 15],
  'krusinski-construction-company': [6, 14],
  'saunders-construction-inc': [2, 17, 18],
  'lease-crutcher-lewis': [9, 13],
};

export async function initInteractiveMap() {
  const module = document.querySelector('[data-module="interactive-map"]');
  if (!module) {
    return;
  }

  const animationContainer = module.querySelector('[data-map-animation] #animation_container');
  const canvas = module.querySelector('[data-map-animation] #canvas');
  const canvasDomOverlay = module.querySelector('[data-map-animation] #dom_overlay_container');
  const overlayContainer = module.querySelector('[data-map-overlay]');
  const hitpointsRoot = module.querySelector('[data-map-hitpoints]');
  const controlsRoot = module.querySelector('[data-map-controls]');
  const cardRoot = module.querySelector('[data-map-card]');
  const mobileMediaQuery = window.matchMedia(MAP_MOBILE_BREAKPOINT);
  let isMobileLayout = mobileMediaQuery.matches;
  let mobileFocusActive = false;
  let mobileFocusTimer = null;
  let lastControlActivationKey = '';
  let lastControlActivationAt = 0;
  let exportRoot = null;
  let stage = null;

  if (!animationContainer || !canvas || !canvasDomOverlay || !overlayContainer || !hitpointsRoot || !controlsRoot || !cardRoot) {
    module.dataset.status = 'missing-elements';
    return;
  }

  const mapCreatejsUrl = module.dataset.mapCreatejsUrl;
  const mapCanvasScriptUrl = module.dataset.mapCanvasScriptUrl;
  if (!mapCreatejsUrl || !mapCanvasScriptUrl) {
    module.dataset.status = 'missing-scripts';
    return;
  }

  const parseJson = (rawValue, fallbackValue) => {
    if (!rawValue) {
      return fallbackValue;
    }

    try {
      return JSON.parse(rawValue);
    } catch {
      return fallbackValue;
    }
  };

  const escapeHtml = (value) => {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  const normalizeKey = (value) => {
    return String(value || '')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const isHexColor = (value) => {
    return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(String(value || '').trim());
  };

  const setMobileCardMode = () => {
    cardRoot.dataset.mode = isMobileLayout ? 'mobile' : 'desktop';
  };

  const getOverlayUnionBounds = (partnerKey) => {
    const overlays = partnerOverlaysByKey.get(normalizeKey(partnerKey)) || [];
    let unionBounds = null;

    overlays.forEach((overlay) => {
      const bounds = typeof overlay?.getTransformedBounds === 'function'
        ? overlay.getTransformedBounds()
        : null;
      if (!bounds || !Number.isFinite(bounds.x) || !Number.isFinite(bounds.y) || !Number.isFinite(bounds.width) || !Number.isFinite(bounds.height)) {
        return;
      }

      const rect = {
        x: Number(bounds.x),
        y: Number(bounds.y),
        width: Number(bounds.width),
        height: Number(bounds.height),
      };

      if (!unionBounds) {
        unionBounds = rect;
        return;
      }

      const minX = Math.min(unionBounds.x, rect.x);
      const minY = Math.min(unionBounds.y, rect.y);
      const maxX = Math.max(unionBounds.x + unionBounds.width, rect.x + rect.width);
      const maxY = Math.max(unionBounds.y + unionBounds.height, rect.y + rect.height);
      unionBounds = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
      };
    });

    return unionBounds;
  };

  const applyAnimationContainerTransform = (transform) => {
    if (!animationContainer) {
      return;
    }

    animationContainer.style.transformOrigin = '0 0';
    animationContainer.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.scaleX})`;
  };

  const tweenAnimationContainerTransform = (transform, duration, onComplete) => {
    if (!animationContainer) {
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    if (mobileFocusTimer) {
      window.clearTimeout(mobileFocusTimer);
      mobileFocusTimer = null;
    }

    animationContainer.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    void animationContainer.offsetWidth;
    applyAnimationContainerTransform(transform);
    mobileFocusTimer = window.setTimeout(() => {
      mobileFocusTimer = null;
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }, duration);
  };

  const resetMobileFocus = (onComplete) => {
    module.classList.remove('is-mobile-focused');
    mobileFocusActive = false;
    if (mobileFocusTimer) {
      window.clearTimeout(mobileFocusTimer);
      mobileFocusTimer = null;
    }

    if (animationContainer) {
      animationContainer.style.transition = 'transform 360ms cubic-bezier(0.22, 1, 0.36, 1)';
      void animationContainer.offsetWidth;
      animationContainer.style.transform = 'none';

      window.setTimeout(() => {
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 360);
      return;
    }

    if (typeof onComplete === 'function') {
      onComplete();
    }
  };

  const focusMobileOnPartner = (partnerKey, onComplete) => {
    const unionBounds = getOverlayUnionBounds(partnerKey);
    if (!unionBounds) {
      module.classList.remove('is-mobile-focused');
      mobileFocusActive = false;
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    const containerBounds = animationContainer?.getBoundingClientRect();
    const baseWidth = Number(containerBounds?.width || 0);
    const baseHeight = Number(containerBounds?.height || 0);
    if (baseWidth <= 0 || baseHeight <= 0) {
      module.classList.remove('is-mobile-focused');
      mobileFocusActive = false;
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    const unionWidthDisplay = (unionBounds.width / canvasSize.width) * baseWidth;
    const unionHeightDisplay = (unionBounds.height / canvasSize.height) * baseHeight;
    const fitScale = Math.min(baseWidth / unionWidthDisplay, baseHeight / unionHeightDisplay);
    const scale = Math.max(
      MAP_MOBILE_FOCUS_MIN_SCALE,
      Math.min(MAP_MOBILE_FOCUS_MAX_SCALE, fitScale * MAP_MOBILE_FOCUS_SCALE_MULTIPLIER)
    );

    const centerX = (unionBounds.x + (unionBounds.width / 2)) / canvasSize.width * baseWidth;
    const centerY = (unionBounds.y + (unionBounds.height / 2)) / canvasSize.height * baseHeight;
    const finalTransform = {
      scaleX: scale,
      scaleY: scale,
      x: (baseWidth / 2) - (centerX * scale),
      y: (baseHeight / 2) - (centerY * scale),
    };
    const previewScale = scale * MAP_MOBILE_FOCUS_PREVIEW_MULTIPLIER;
    const previewTransform = {
      scaleX: previewScale,
      scaleY: previewScale,
      x: (baseWidth / 2) - (centerX * previewScale),
      y: (baseHeight / 2) - (centerY * previewScale),
    };

    module.classList.add('is-mobile-focused');
    tweenAnimationContainerTransform(previewTransform, MAP_MOBILE_FOCUS_PREVIEW_DURATION, () => {
      tweenAnimationContainerTransform(finalTransform, MAP_MOBILE_FOCUS_FINAL_DURATION, () => {
        mobileFocusActive = true;
        if (typeof onComplete === 'function') {
          onComplete();
        }
      });
    });
  };

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript && existingScript.dataset.loaded === 'true') {
        resolve();
        return;
      }

      const script = existingScript || document.createElement('script');
      const onLoad = () => {
        script.dataset.loaded = 'true';
        resolve();
      };
      const onError = () => reject(new Error(`Failed to load script: ${url}`));

      if (!existingScript) {
        script.src = url;
        script.async = true;
        script.addEventListener('load', onLoad, { once: true });
        script.addEventListener('error', onError, { once: true });
        document.head.appendChild(script);
      } else if (script.dataset.loaded === 'true') {
        resolve();
      } else {
        script.addEventListener('load', onLoad, { once: true });
        script.addEventListener('error', onError, { once: true });
      }
    });
  };

  const loadCompositionAssets = async (composition, scriptUrl) => {
    const lib = composition?.getLibrary?.();
    if (!lib || !window.createjs?.LoadQueue) {
      return;
    }

    const manifest = Array.isArray(lib?.properties?.manifest) ? lib.properties.manifest : [];
    if (manifest.length === 0) {
      return;
    }

    const images = composition.getImages();
    const spriteSheets = composition.getSpriteSheet();
    const scriptBaseUrl = new URL(scriptUrl || '.', document.baseURI).href.replace(/[^/]*$/, '');
    const resolvedManifest = manifest.map((item) => {
      const src = item?.src ? new URL(item.src, scriptBaseUrl).toString() : '';
      return { ...item, src };
    });

    await new Promise((resolve, reject) => {
      const loader = new window.createjs.LoadQueue(false);

      loader.addEventListener('fileload', (event) => {
        if (event?.item?.type === 'image' && event?.item?.id) {
          images[event.item.id] = event.result;
        }
      });

      loader.addEventListener('complete', () => {
        const metadata = Array.isArray(lib.ssMetadata) ? lib.ssMetadata : [];
        metadata.forEach((sheet) => {
          if (!sheet?.name || !sheet?.frames) {
            return;
          }

          const atlasImage = loader.getResult(sheet.name);
          if (!atlasImage) {
            return;
          }

          spriteSheets[sheet.name] = new window.createjs.SpriteSheet({
            images: [atlasImage],
            frames: sheet.frames,
          });
        });

        resolve();
      });

      loader.addEventListener('error', () => {
        reject(new Error('Failed to load map canvas atlas assets'));
      });

      loader.loadManifest(resolvedManifest);
    });
  };

  const getPrimaryLocation = (locations) => {
    if (!Array.isArray(locations) || locations.length === 0) {
      return null;
    }

    return locations.find((location) => location && location.is_primary) || locations[0] || null;
  };

  const getPartnerPoint = (partner, pointMap) => {
    const candidateKeys = [partner.partner_key, partner.short_name, partner.name].map(normalizeKey).filter(Boolean);
    const mapEntries = Object.entries(pointMap || {});

    for (const candidateKey of candidateKeys) {
      if (pointMap[candidateKey]) {
        return pointMap[candidateKey];
      }

      const fallbackAliases = MAP_POINT_FALLBACKS[candidateKey] || [];
      for (const [key, point] of mapEntries) {
        const normalizedEntryKey = normalizeKey(key);
        if (normalizedEntryKey === candidateKey || fallbackAliases.some((alias) => normalizedEntryKey.includes(alias))) {
          return point;
        }
      }
    }

    return { x: 0.5, y: 0.5 };
  };

  const getCardPlacement = (point, partnerKey) => {
    const x = Math.max(0, Math.min(1, Number(point?.x ?? 0.5)));
    const y = Math.max(0, Math.min(1, Number(point?.y ?? 0.5)));
    const placementFallback = y < 0.3 ? 'below' : 'above';
    const mapRect = animationContainer.getBoundingClientRect();

    if (!mapRect.width || !mapRect.height) {
      return { x, y, placement: placementFallback };
    }

    const normalizedKey = normalizeKey(partnerKey);
    const activeOverlays = partnerOverlaysByKey.get(normalizedKey) || [];
    if (activeOverlays.length === 0) {
      return { x, y, placement: placementFallback };
    }

    const parseCssLengthToPx = (value) => {
      const raw = String(value || '').trim();
      if (raw === '') {
        return 0;
      }

      if (raw.endsWith('rem')) {
        const rem = Number.parseFloat(raw);
        const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
        return Number.isFinite(rem) ? rem * (Number.isFinite(rootFontSize) ? rootFontSize : 16) : 0;
      }

      const parsed = Number.parseFloat(raw);
      return Number.isFinite(parsed) ? parsed : 0;
    };

    const measureCardSize = () => {
      const previousHidden = cardRoot.hidden;
      const previousVisibility = cardRoot.style.visibility;
      const previousPointerEvents = cardRoot.style.pointerEvents;
      const wasVisible = cardRoot.classList.contains('is-visible');

      cardRoot.hidden = false;
      cardRoot.style.visibility = 'hidden';
      cardRoot.style.pointerEvents = 'none';
      cardRoot.classList.remove('is-visible');

      const rect = cardRoot.getBoundingClientRect();

      if (previousHidden) {
        cardRoot.hidden = true;
      }
      cardRoot.style.visibility = previousVisibility;
      cardRoot.style.pointerEvents = previousPointerEvents;
      if (wasVisible) {
        cardRoot.classList.add('is-visible');
      }

      return {
        width: rect.width || 200,
        height: rect.height || 140,
      };
    };

    const getOverlayBounds = (overlay) => {
      if (!overlay) {
        return null;
      }

      if (typeof overlay.getTransformedBounds === 'function') {
        const transformed = overlay.getTransformedBounds();
        if (transformed && Number.isFinite(transformed.x) && Number.isFinite(transformed.y)) {
          return transformed;
        }
      }

      const bounds = (typeof overlay.getBounds === 'function' ? overlay.getBounds() : null) || overlay.nominalBounds;
      if (!bounds || !Number.isFinite(bounds.width) || !Number.isFinite(bounds.height)) {
        return null;
      }

      return {
        x: Number(overlay.x || 0) - Number(overlay.regX || 0) + Number(bounds.x || 0),
        y: Number(overlay.y || 0) - Number(overlay.regY || 0) + Number(bounds.y || 0),
        width: Number(bounds.width),
        height: Number(bounds.height),
      };
    };

    const getOverlapArea = (a, b) => {
      const overlapWidth = Math.max(0, Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x));
      const overlapHeight = Math.max(0, Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y));
      return overlapWidth * overlapHeight;
    };

    const style = getComputedStyle(cardRoot);
    const baseOffsetPx = parseCssLengthToPx(style.getPropertyValue('--citadel-map-card-offset'));
    const cardSizePx = measureCardSize();
    const pinX = x * mapRect.width;
    const pinY = y * mapRect.height;

    const cardWidth = cardSizePx.width;
    const cardHeight = cardSizePx.height;

    const overlayBounds = activeOverlays
      .map(getOverlayBounds)
      .filter(Boolean)
      .map((bounds) => {
        return {
          x: (bounds.x / canvasSize.width) * mapRect.width,
          y: (bounds.y / canvasSize.height) * mapRect.height,
          width: (bounds.width / canvasSize.width) * mapRect.width,
          height: (bounds.height / canvasSize.height) * mapRect.height,
        };
      });
    if (overlayBounds.length === 0) {
      return { x, y, placement: placementFallback };
    }

    const minOffsetPx = Math.max(12, (baseOffsetPx || 16) * 0.75);
    const maxOffsetPx = Math.max(minOffsetPx, Math.min(mapRect.width, mapRect.height) * 0.32);
    const offsetSteps = [
      1, 1.2, 1.4, 1.6, 1.9, 2.2, 2.6, 3,
    ];

    const priority = ['above', 'below', 'right', 'left'];
    const scoredCandidates = [];

    offsetSteps.forEach((multiplier) => {
      const offsetPx = minOffsetPx * multiplier;
      if (offsetPx > maxOffsetPx) {
        return;
      }

      const candidates = [
        {
          placement: 'above',
          centerX: pinX,
          centerY: pinY - offsetPx - (cardHeight / 2),
          offsetPx,
        },
        {
          placement: 'below',
          centerX: pinX,
          centerY: pinY + offsetPx + (cardHeight / 2),
          offsetPx,
        },
        {
          placement: 'left',
          centerX: pinX - offsetPx - (cardWidth / 2),
          centerY: pinY,
          offsetPx,
        },
        {
          placement: 'right',
          centerX: pinX + offsetPx + (cardWidth / 2),
          centerY: pinY,
          offsetPx,
        },
      ];

      candidates.forEach((candidate) => {
        const rect = {
          x: candidate.centerX - (cardWidth / 2),
          y: candidate.centerY - (cardHeight / 2),
          width: cardWidth,
          height: cardHeight,
        };

        const overlapArea = overlayBounds.reduce((total, overlayRect) => {
          return total + getOverlapArea(rect, overlayRect);
        }, 0);

        const overflowLeft = Math.max(0, -rect.x);
        const overflowRight = Math.max(0, (rect.x + rect.width) - mapRect.width);
        const overflowTop = Math.max(0, -rect.y);
        const overflowBottom = Math.max(0, (rect.y + rect.height) - mapRect.height);
        const overflowArea =
          (overflowLeft * rect.height)
          + (overflowRight * rect.height)
          + (overflowTop * rect.width)
          + (overflowBottom * rect.width);

        const horizontalPlacementPenalty = (candidate.placement === 'left' || candidate.placement === 'right') ? 1400 : 0;

        // Keep the card within stage first, then avoid overlay, then prefer shorter connectors.
        const score = (overflowArea * 35) + overlapArea + horizontalPlacementPenalty + (candidate.offsetPx * 0.25);

        scoredCandidates.push({
          placement: candidate.placement,
          offsetPx: candidate.offsetPx,
          score,
        });
      });
    });

    if (scoredCandidates.length === 0) {
      return { x, y, placement: placementFallback, offsetPx: minOffsetPx };
    }

    scoredCandidates.sort((a, b) => {
      if (a.score === b.score) {
        return priority.indexOf(a.placement) - priority.indexOf(b.placement);
      }
      return a.score - b.score;
    });

    return {
      x,
      y,
      placement: scoredCandidates[0]?.placement || placementFallback,
      offsetPx: scoredCandidates[0]?.offsetPx || minOffsetPx,
    };
  };

  const getNearestEdgeGradientTarget = (point) => {
    const x = Math.max(0, Math.min(1, Number(point?.x ?? 0.5)));
    const y = Math.max(0, Math.min(1, Number(point?.y ?? 0.5)));
    const distances = {
      left: x,
      right: 1 - x,
      top: y,
      bottom: 1 - y,
    };

    let nearestEdge = 'left';
    let nearestDistance = distances.left;
    Object.entries(distances).forEach(([edge, distance]) => {
      if (distance < nearestDistance) {
        nearestEdge = edge;
        nearestDistance = distance;
      }
    });

    const topClose = Math.abs(distances.top - nearestDistance) <= MAP_GRADIENT_EDGE_TIE_EPSILON;
    const bottomClose = Math.abs(distances.bottom - nearestDistance) <= MAP_GRADIENT_EDGE_TIE_EPSILON;
    const rightClose = Math.abs(distances.right - nearestDistance) <= MAP_GRADIENT_EDGE_TIE_EPSILON;
    const leftClose = Math.abs(distances.left - nearestDistance) <= MAP_GRADIENT_EDGE_TIE_EPSILON;

    if (y < 0.5 && topClose && (rightClose || leftClose)) {
      nearestEdge = 'top';
    } else if (y >= 0.5 && bottomClose && (rightClose || leftClose)) {
      nearestEdge = 'bottom';
    }

    if (nearestEdge === 'left') {
      return { x: 0, y };
    }
    if (nearestEdge === 'right') {
      return { x: 1, y };
    }
    if (nearestEdge === 'top') {
      return { x, y: 0 };
    }

    return { x, y: 1 };
  };

  const getCanvasGradientTarget = (edgeTarget, sourcePoint, canvasSize, gradientCenter) => {
    const width = Number(canvasSize?.width || 1277);
    const height = Number(canvasSize?.height || 809);
    const sourceX = Math.max(0, Math.min(1, Number(sourcePoint?.x ?? 0.5))) * width;
    const sourceY = Math.max(0, Math.min(1, Number(sourcePoint?.y ?? 0.5))) * height;

    const target = {
      x: Number(gradientCenter?.x || width / 2),
      y: Number(gradientCenter?.y || height / 2),
    };

    if (edgeTarget.x <= 0) {
      target.x = 0;
      target.y = sourceY;
    } else if (edgeTarget.x >= 1) {
      target.x = width;
      target.y = sourceY;
    } else if (edgeTarget.y <= 0) {
      target.x = sourceX;
      target.y = 0;
    } else {
      target.x = sourceX;
      target.y = height;
    }

    return target;
  };

  const partnerList = parseJson(module.dataset.mapPartnersJson || '', []);
  const pointMap = parseJson(module.dataset.mapPointsJson || '', {});
  if (!Array.isArray(partnerList) || partnerList.length === 0) {
    module.dataset.status = 'ready';
    return;
  }

  const renderCard = (partner) => {
    const primaryLocation = getPrimaryLocation(partner.locations);
    const point = getPartnerPoint(partner, pointMap);
    const partnerKey = partner.partner_key || partner.name || partner.short_name;
    const position = getCardPlacement(point, partnerKey);
    const locationLabel = partner.hq_location || (primaryLocation
      ? `${primaryLocation.city || ''}${primaryLocation.state ? `, ${primaryLocation.state}` : ''}`
      : 'Location details coming soon');

    const logoHtml = partner.logo_url
      ? `<img src="${escapeHtml(partner.logo_url)}" alt="${escapeHtml(partner.name || 'Partner')}" loading="lazy">`
      : '';
    const websiteHtml = partner.website_url
      ? `<a class="citadel-map-visit" href="${escapeHtml(partner.website_url)}" target="_blank" rel="noopener noreferrer">Visit Partner</a>`
      : '';

    cardRoot.dataset.placement = position.placement;
    setMobileCardMode();
    if (position.offsetPx) {
      cardRoot.style.setProperty('--citadel-map-card-offset', `${position.offsetPx}px`);
    }
    cardRoot.style.setProperty('--citadel-map-card-x', `${position.x * 100}%`);
    cardRoot.style.setProperty('--citadel-map-card-y', `${position.y * 100}%`);
    cardRoot.innerHTML = `
      <div class="citadel-map-card-inner">
        ${logoHtml}
        <h3>${escapeHtml(partner.name || 'Partner')}</h3>
        <p>${escapeHtml(locationLabel)}</p>
        ${websiteHtml}
      </div>
    `;
  };

  let activeInteractionToken = 0;
  let activeGradientTween = null;
  let maskedGradientLayer = null;
  let maskedGradientShape = null;
  const partnerOverlaysByKey = new Map();
  const canvasSize = { width: 1277, height: 809 };
  const gradientVisualCenter = { x: 638.9, y: 404.7 };
  const gradientTweenState = { x: gradientVisualCenter.x, y: gradientVisualCenter.y, scale: 1, flare: 0 };

  const applyGradientCenter = (centerX, centerY, geometryState = gradientTweenState) => {
    if (!maskedGradientShape) {
      return;
    }

    const shapeOffsetX = Number(maskedGradientShape.x || 0);
    const shapeOffsetY = Number(maskedGradientShape.y || 0);
    const localX = centerX - shapeOffsetX;
    const localY = centerY - shapeOffsetY;
    const travelScale = Number(geometryState?.scale || 1);
    const flare = Number(geometryState?.flare || 0);
    const innerRadius = Math.max(0, (MAP_GRADIENT_BASE_RADIUS * MAP_GRADIENT_SCALE) * 0.06 * flare);
    const outerRadius = Math.max(1, (MAP_GRADIENT_BASE_RADIUS * MAP_GRADIENT_SCALE) * travelScale);

    maskedGradientShape.graphics
      .clear()
      .rf(MAP_GRADIENT_COLORS, MAP_GRADIENT_RATIOS, localX, localY, innerRadius, localX, localY, outerRadius)
      .s()
      .p(MAP_GRADIENT_PATH);

  };

  const findGradientLayer = (exportRoot) => {
    const children = Array.isArray(exportRoot?.children) ? exportRoot.children : [];

    const candidate = children.find((child) => {
      if (!child || !child.shape || !child.shape.graphics) {
        return false;
      }

      const bounds = (typeof child.getBounds === 'function' ? child.getBounds() : null) || child.nominalBounds;
      return !!(bounds && Number(bounds.width) >= (canvasSize.width * 0.9) && Number(bounds.height) >= (canvasSize.height * 0.9));
    });

    return candidate || exportRoot?.instance_1 || null;
  };

  const assignPartnerOverlays = (exportRoot) => {
    partnerOverlaysByKey.clear();
    const children = Array.isArray(exportRoot?.children) ? exportRoot.children : [];

    Object.entries(MAP_OVERLAY_INDEX_BY_PARTNER).forEach(([partnerKey, indices]) => {
      const overlays = [];

      indices.forEach((index) => {
        const overlay = children[index];
        if (!overlay || !overlay.mask || overlay === maskedGradientLayer) {
          return;
        }

        overlay._off = false;
        overlay.visible = true;
        overlay.alpha = 0;

        if (window.createjs?.Tween) {
          window.createjs.Tween.removeTweens(overlay);
        }

        overlays.push(overlay);
      });

      partnerOverlaysByKey.set(partnerKey, overlays);
    });
  };

  const hideAllPartnerOverlaysInstantly = () => {
    partnerOverlaysByKey.forEach((overlays) => {
      overlays.forEach((overlay) => {
        if (window.createjs?.Tween) {
          window.createjs.Tween.removeTweens(overlay);
        }
        overlay.alpha = 0;
      });
    });

    if (maskedGradientLayer) {
      if (window.createjs?.Tween) {
        window.createjs.Tween.removeTweens(maskedGradientLayer);
      }
      maskedGradientLayer.alpha = MAP_GRADIENT_BASE_ALPHA;
    }
  };

  const showPartnerOverlayWithFade = (partnerKey) => {
    const normalizedKey = normalizeKey(partnerKey);
    const overlays = partnerOverlaysByKey.get(normalizedKey) || [];

    overlays.forEach((overlay) => {
      overlay._off = false;
      overlay.visible = true;

      if (window.createjs?.Tween && window.createjs?.Ease) {
        window.createjs.Tween.removeTweens(overlay);
        window.createjs.Tween.get(overlay, { override: true })
          .to({ alpha: 1 }, MAP_OVERLAY_FADE_MS, window.createjs.Ease.quadOut);
      } else {
        overlay.alpha = 1;
      }
    });

    if (maskedGradientLayer) {
      if (window.createjs?.Tween && window.createjs?.Ease) {
        window.createjs.Tween.removeTweens(maskedGradientLayer);
        window.createjs.Tween.get(maskedGradientLayer, { override: true })
          .to({ alpha: MAP_GRADIENT_ACTIVE_ALPHA }, MAP_OVERLAY_FADE_MS, window.createjs.Ease.quadOut);
      } else {
        maskedGradientLayer.alpha = MAP_GRADIENT_ACTIVE_ALPHA;
      }
    }
  };

  const hideCardInstantly = () => {
    cardRoot.classList.remove('is-visible');
    cardRoot.style.opacity = '';
    cardRoot.hidden = true;
  };

  const showCardWithFade = () => {
    cardRoot.hidden = false;
    void cardRoot.offsetWidth;
    cardRoot.classList.add('is-visible');
    cardRoot.style.opacity = '';
  };

  const animateGradientTo = (targetPoint, onComplete) => {
    if (!maskedGradientShape) {
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    const toPosition = getCanvasGradientTarget(targetPoint.edgeTarget, targetPoint.sourcePoint, canvasSize, gradientVisualCenter);

    if (!window.createjs || !window.createjs.Tween || !window.createjs.Ease) {
      gradientTweenState.x = toPosition.x;
      gradientTweenState.y = toPosition.y;
      gradientTweenState.scale = 1;
      gradientTweenState.flare = 0;
      applyGradientCenter(gradientTweenState.x, gradientTweenState.y, gradientTweenState);
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    if (activeGradientTween) {
      activeGradientTween.removeAllEventListeners();
    }
    window.createjs.Tween.removeTweens(gradientTweenState);

    const deltaX = toPosition.x - gradientTweenState.x;
    const deltaY = toPosition.y - gradientTweenState.y;
    const travelDistance = Math.hypot(deltaX, deltaY);
    const travelDistanceRatio = Math.min(1, travelDistance / Math.hypot(canvasSize.width, canvasSize.height));
    const travelDuration = (0.5 + travelDistanceRatio * 0.7) * 1500;
    const travelPeakScale = 1 + (travelDistanceRatio * 0.34);
    const travelFlarePeak = 0.35 + (travelDistanceRatio * 1.1);
    const travelTroughScale = 0.88 + (travelDistanceRatio * 0.06);
    const travelTroughFlare = 0.08 + (travelDistanceRatio * 0.1);
    const travelReturnScale = 1.1 + (travelDistanceRatio * 0.04);
    const travelReturnFlare = 0.22 + (travelDistanceRatio * 0.3);

    activeGradientTween = window.createjs.Tween.get(gradientTweenState, { override: true });
    activeGradientTween.addEventListener('change', () => {
      applyGradientCenter(gradientTweenState.x, gradientTweenState.y, gradientTweenState);
    });
    activeGradientTween
      .to({ x: toPosition.x, y: toPosition.y, scale: travelPeakScale, flare: travelFlarePeak }, travelDuration * 0.44, window.createjs.Ease.bounceOut)
      .to({ scale: travelTroughScale, flare: travelTroughFlare }, travelDuration * 0.2, window.createjs.Ease.sineInOut)
      .to({ scale: travelReturnScale, flare: travelReturnFlare }, travelDuration * 0.18, window.createjs.Ease.sineInOut)
      .to({ scale: 1, flare: 0 }, travelDuration * 0.18, window.createjs.Ease.bounceOut)
      .call(() => {
        applyGradientCenter(gradientTweenState.x, gradientTweenState.y, gradientTweenState);
        if (typeof onComplete === 'function') {
          onComplete();
        }
      });
  };

  const resetGradientToCenter = () => {
    if (!maskedGradientShape) {
      return;
    }

    gradientTweenState.x = gradientVisualCenter.x;
    gradientTweenState.y = gradientVisualCenter.y;
    gradientTweenState.scale = 1;
    gradientTweenState.flare = 0;
    applyGradientCenter(gradientTweenState.x, gradientTweenState.y, gradientTweenState);
  };

  const renderHitpoints = () => {
    hitpointsRoot.innerHTML = '';

    partnerList.forEach((partner, index) => {
      const point = getPartnerPoint(partner, pointMap);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'citadel-map-hitpoint';
      button.dataset.partnerKey = partner.partner_key || partner.name || partner.short_name || String(index);
      button.style.setProperty('--map-hitpoint-x', `${point.x * 100}%`);
      button.style.setProperty('--map-hitpoint-y', `${point.y * 100}%`);
      button.style.setProperty('--map-hitpoint-delay', `${Math.min(900, index * 90)}ms`);
      button.setAttribute('aria-label', `${partner.name || 'Partner'}${partner.short_name ? `, ${partner.short_name}` : ''}`);
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => setActive(button.dataset.partnerKey));
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setActive(button.dataset.partnerKey);
        }
      });
      hitpointsRoot.appendChild(button);
    });
  };

  const bindPartnerActivation = (element, partnerKey) => {
    const key = normalizeKey(partnerKey);
    const activate = (event) => {
      if (event) {
        event.preventDefault();
      }

      const now = Date.now();
      if (key === lastControlActivationKey && (now - lastControlActivationAt) < MAP_MOBILE_ACTIVATION_DEDUPE_MS) {
        return;
      }

      lastControlActivationKey = key;
      lastControlActivationAt = now;
      setActive(partnerKey);
    };

    if (window.PointerEvent) {
      element.addEventListener('pointerup', activate);
    } else {
      element.addEventListener('touchend', activate, { passive: false });
      element.addEventListener('click', activate);
    }

    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        activate(event);
      }
    });
  };

  const updateOverlay = (activeKey) => {
    overlayContainer.dataset.activePartner = activeKey;
  };

  const setActive = (partnerKey) => {
    const partner = partnerList.find((item) => normalizeKey(item.partner_key || item.name || item.short_name) === normalizeKey(partnerKey));
    if (!partner) {
      return;
    }

    const activeKey = partner.partner_key || partner.name || partner.short_name;
    const activePoint = getPartnerPoint(partner, pointMap);
    const gradientTarget = {
      edgeTarget: getNearestEdgeGradientTarget(activePoint),
      sourcePoint: activePoint,
    };
    const interactionToken = ++activeInteractionToken;
    module.dataset.activeKey = activeKey;

    hideCardInstantly();
    hideAllPartnerOverlaysInstantly();

    Array.from(hitpointsRoot.querySelectorAll('button[data-partner-key]')).forEach((button) => {
      const isActive = normalizeKey(button.dataset.partnerKey) === normalizeKey(activeKey);
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    Array.from(controlsRoot.querySelectorAll('button[data-partner-key]')).forEach((button) => {
      const buttonKey = normalizeKey(button.getAttribute('data-partner-key'));
      const isActive = buttonKey === normalizeKey(activeKey);
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');

      if (isActive) {
        const partner = partnerList.find((item) => normalizeKey(item.partner_key || item.name || item.short_name) === buttonKey);
        if (partner?.highlight_color && isHexColor(partner.highlight_color)) {
          button.style.backgroundColor = partner.highlight_color;
        }
      } else {
        button.style.backgroundColor = '';
      }
    });

    updateOverlay(activeKey);
    resetGradientToCenter();

    const revealSelection = () => {
      animateGradientTo(gradientTarget, () => {
        if (interactionToken !== activeInteractionToken) {
          return;
        }

        if (isMobileLayout) {
          showPartnerOverlayWithFade(activeKey);
          focusMobileOnPartner(activeKey, () => {
            if (interactionToken !== activeInteractionToken) {
              return;
            }

            window.setTimeout(() => {
              if (interactionToken !== activeInteractionToken) {
                return;
              }

              renderCard(partner);
              showCardWithFade();
            }, MAP_MOBILE_CARD_REVEAL_DELAY);
          });
          return;
        }

        renderCard(partner);
        showCardWithFade();
        showPartnerOverlayWithFade(activeKey);
      });
    };

    if (isMobileLayout && mobileFocusActive) {
      resetMobileFocus(revealSelection);
      return;
    }

    revealSelection();
  };

  const renderControls = () => {
    const partnerLookup = new Map(partnerList.map((partner) => {
      return [normalizeKey(partner.partner_key || partner.name || partner.short_name), partner];
    }));

    controlsRoot.querySelectorAll('button[data-partner-key]').forEach((button) => {
      const partner = partnerLookup.get(normalizeKey(button.getAttribute('data-partner-key')));
      if (partner?.highlight_color && isHexColor(partner.highlight_color)) {
        button.style.setProperty('--citadel-map-partner-highlight-color', partner.highlight_color);
      }

      bindPartnerActivation(button, button.getAttribute('data-partner-key'));
    });
  };

  const bootstrapCanvas = async () => {
    await loadScript(mapCreatejsUrl);
    await loadScript(mapCanvasScriptUrl);

    if (!window.AdobeAn || !window.createjs) {
      throw new Error('CreateJS export failed to initialize');
    }

    const composition = window.AdobeAn.getComposition(MAP_COMPOSITION_ID);
    if (!composition) {
      throw new Error('Map composition not found');
    }

    await loadCompositionAssets(composition, mapCanvasScriptUrl);

    const lib = composition.getLibrary();
    canvasSize.width = Number(lib?.properties?.width || canvasSize.width);
    canvasSize.height = Number(lib?.properties?.height || canvasSize.height);
    gradientVisualCenter.x = canvasSize.width / 2;
    gradientVisualCenter.y = canvasSize.height / 2;

    const exportRoot = new lib.mapcanvas();
    if (typeof exportRoot.gotoAndStop === 'function') {
      exportRoot.gotoAndStop(1);
    }
    maskedGradientLayer = findGradientLayer(exportRoot);
    maskedGradientShape = maskedGradientLayer?.shape || null;
    if (maskedGradientLayer) {
      maskedGradientLayer.alpha = MAP_GRADIENT_BASE_ALPHA;
    }
    assignPartnerOverlays(exportRoot);

    stage = new lib.Stage(canvas);
    window.exportRoot = exportRoot;
    window.stage = stage;

    const startAnimation = () => {
      stage.addChild(exportRoot);
      window.createjs.Ticker.framerate = lib.properties.fps;
      window.createjs.Ticker.addEventListener('tick', stage);
    };

    const syncCanvasToContainer = () => {
      animationContainer.style.width = '100%';
      animationContainer.style.height = '100%';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvasDomOverlay.style.width = '100%';
      canvasDomOverlay.style.height = '100%';
      canvasDomOverlay.style.left = '0';
      canvasDomOverlay.style.top = '0';
    };

    window.AdobeAn.compositionLoaded(lib.properties.id);
    startAnimation();
    syncCanvasToContainer();
    setMobileCardMode();
  };

  renderHitpoints();
  renderControls();

  if (typeof mobileMediaQuery.addEventListener === 'function') {
    mobileMediaQuery.addEventListener('change', (event) => {
      isMobileLayout = event.matches;
      setMobileCardMode();

      if (!isMobileLayout && mobileFocusActive) {
        resetMobileFocus();
      }
    });
  }

  module.dataset.loaded = 'true';
  module.dataset.status = 'booting';

  try {
    await bootstrapCanvas();
    resetGradientToCenter();
    hideAllPartnerOverlaysInstantly();
    delete module.dataset.activeKey;

    Array.from(hitpointsRoot.querySelectorAll('button[data-partner-key]')).forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
    });
    Array.from(controlsRoot.querySelectorAll('button[data-partner-key]')).forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
    });

    overlayContainer.removeAttribute('data-active-partner');
    cardRoot.classList.remove('is-visible');
    cardRoot.hidden = true;
    module.dataset.status = 'ready';
  } catch (error) {
    module.dataset.status = 'error';
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
