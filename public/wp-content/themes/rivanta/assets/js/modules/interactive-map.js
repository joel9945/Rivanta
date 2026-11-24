import { INDIA_MAP_DOTS } from './india-map-dots.js';
import { createExperiment3IntroController } from './interactive-map-experiment-3-intro.js';
import { createInteractiveMapPinController } from './interactive-map-pin-controller.js';
import { fitMapToViewport } from './map-layout.js';

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
// Keep regional overlays and their tweens on the stage for future use.
// Set to true to restore their visibility during partner highlights.
const MAP_REGIONAL_OVERLAYS_VISIBLE = false;
const MAP_GRADIENT_BASE_ALPHA = 0.6992;
const MAP_GRADIENT_ACTIVE_ALPHA = 0.5;
const MAP_MOBILE_BREAKPOINT = '(max-width: 767px)';
const MAP_MOBILE_STAGE_FADE_ALPHA = 0.14;
const MAP_MOBILE_FOCUS_SCALE_MULTIPLIER = 0.9;
const MAP_MOBILE_FOCUS_MIN_SCALE = 1.08;
const MAP_MOBILE_FOCUS_MAX_SCALE = 2.2;
const MAP_MOBILE_FOCUS_FINAL_DURATION = 420;
const MAP_MOBILE_ACTIVATION_DEDUPE_MS = 380;
const MAP_PIN_BASE_ALPHA = 0.8;
const MAP_PIN_SELECTED_HQ_ALPHA = 1;
const MAP_PIN_ANIMATION = {
  popDurationMs: 240,
  popStaggerMs: 38,
  introHoldMs: 140,
  manualHoldMs: 0,
  restingRepopulateDurationMs: 1200,
};

const MAP_PIN_VISUAL = {
  fillColor: '#FFFFFF',
  fillAlpha: 1,
  ringColor: '#FFFFFF',
  ringAlpha: 0.95,
  ringStrokeWidth: 2,
  centerX: 0,
  centerY: 0,
  innerRadius: 4.8,
  outerRadius: 5.8,
  hq: {
    fillColor: '#FFFFFF',
    fillAlpha: 1,
    ringColor: '#FFFFFF',
    ringAlpha: 1,
    ringStrokeWidth: 2.2,
    innerRadius: 5,
    outerRadius: 6.1,
  },
};

// Direct instance property mapping for map-canvas.js (instance names are stable across exports).
const PARTNER_OVERLAY_INSTANCES = {
  'saunders-construction-inc':          (r) => [r.instance_1],
  'charles-pankow-builders-ltd':        (r) => [r.instance_2, r.instance_3, r.instance_4, r.instance_5, r.instance_6, r.instance_7],
  'rogers-obrien-construction-company': (r) => [r.instance_8],
  'imc-construction':                   (r) => [r.instance_9],
  'lease-crutcher-lewis':               (r) => [r.instance_10],
  'choate-construction-company':        (r) => [r.instance_11, r.instance_12, r.instance_13, r.instance_14, r.instance_15, r.instance_16, r.instance_17, r.instance_18],
  'krusinski-construction-company':     (r) => [r.instance_19, r.instance_20, r.instance_21, r.instance_22, r.instance_23, r.instance_24],
};

const MAP_HQ_INSTANCE_PROP_BY_PARTNER = {
  'rogers-obrien-construction-company': 'instance',
  'charles-pankow-builders-ltd': 'instance_1',
  'choate-construction-company': 'instance_2',
  'imc-construction': 'instance_4',
  'krusinski-construction-company': 'instance_5',
  'saunders-construction-inc': 'instance_6',
  'lease-crutcher-lewis': 'instance_7',
};

const MAP_PARTNER_PREFIX_BY_KEY = {
  'rogers-obrien-construction-company': 'ro',
  'charles-pankow-builders-ltd': 'pankow',
  'choate-construction-company': 'choate',
  'imc-construction': 'imc',
  'krusinski-construction-company': 'krusinski',
  'saunders-construction-inc': 'saunders',
  'lease-crutcher-lewis': 'lewis',
};

const MAP_GENERIC_INSTANCE_PROP_BY_PARTNER = {
  'imc-construction': ['instance_3'],
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
  let baseGradientAlpha = MAP_GRADIENT_BASE_ALPHA;
  let introController = null;
  let pinController = null;
  let gradientFadeTimer = 0;
  let stageTickHandler = null;
  let stageTickAttached = false;
  let stageRenderingRequested = true;
  let stageIsVisible = true;

  const syncStageTickSubscription = () => {
    if (!stageTickHandler || !window.createjs?.Ticker) {
      return;
    }

    const shouldAttach = stageRenderingRequested && stageIsVisible && !document.hidden;
    if (shouldAttach === stageTickAttached) {
      return;
    }

    if (shouldAttach) {
      window.createjs.Ticker.addEventListener('tick', stageTickHandler);
    } else {
      window.createjs.Ticker.removeEventListener('tick', stageTickHandler);
    }
    stageTickAttached = shouldAttach;
    module.dataset.renderState = shouldAttach ? 'running' : 'paused';
  };

  const renderStageOnce = () => {
    if (!stage) {
      return;
    }

    pinController?.sync();
    stage.update();
  };

  const resumeStageRendering = () => {
    stageRenderingRequested = true;
    syncStageTickSubscription();
  };

  const pauseStageRendering = () => {
    stageRenderingRequested = false;
    syncStageTickSubscription();
    renderStageOnce();
  };

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

  const toNumber = (value, fallback, min = -Infinity, max = Infinity) => {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) {
      return fallback;
    }

    return Math.max(min, Math.min(max, parsed));
  };

  const mapRuntimeSettings = parseJson(module.dataset.mapRuntimeSettingsJson || '', {});
  const runtimeOverlayFadeMs = toNumber(
    mapRuntimeSettings.overlayFadeMs,
    MAP_OVERLAY_FADE_MS,
    0,
    4000
  );
  const runtimeGradientBaseAlpha = toNumber(
    mapRuntimeSettings.gradientBaseAlpha,
    MAP_GRADIENT_BASE_ALPHA,
    0,
    1
  );
  const runtimeGradientActiveAlpha = toNumber(
    mapRuntimeSettings.gradientActiveAlpha,
    MAP_GRADIENT_ACTIVE_ALPHA,
    0,
    1
  );
  const runtimeMobileActivationDedupeMs = toNumber(
    mapRuntimeSettings.mobileActivationDedupeMs,
    MAP_MOBILE_ACTIVATION_DEDUPE_MS,
    0,
    3000
  );

  const runtimePinAnimation = {
    popDurationMs: toNumber(mapRuntimeSettings?.pin?.animation?.popDurationMs, MAP_PIN_ANIMATION.popDurationMs, 0, 4000),
    popStaggerMs: toNumber(mapRuntimeSettings?.pin?.animation?.popStaggerMs, MAP_PIN_ANIMATION.popStaggerMs, 0, 500),
    introHoldMs: toNumber(mapRuntimeSettings?.pin?.animation?.introHoldMs, MAP_PIN_ANIMATION.introHoldMs, 0, 4000),
    manualHoldMs: toNumber(mapRuntimeSettings?.pin?.animation?.manualHoldMs, MAP_PIN_ANIMATION.manualHoldMs, 0, 4000),
    restingRepopulateDurationMs: toNumber(
      mapRuntimeSettings?.pin?.animation?.restingRepopulateDurationMs,
      MAP_PIN_ANIMATION.restingRepopulateDurationMs,
      0,
      10000
    ),
  };

  const runtimePinVisual = {
    ...MAP_PIN_VISUAL,
    ...(mapRuntimeSettings?.pin?.visual || {}),
    hq: {
      ...MAP_PIN_VISUAL.hq,
      ...(mapRuntimeSettings?.pin?.visual?.hq || {}),
    },
  };

  runtimePinVisual.fillColor = isHexColor(runtimePinVisual.fillColor) ? runtimePinVisual.fillColor : MAP_PIN_VISUAL.fillColor;
  runtimePinVisual.ringColor = isHexColor(runtimePinVisual.ringColor) ? runtimePinVisual.ringColor : MAP_PIN_VISUAL.ringColor;
  runtimePinVisual.fillAlpha = toNumber(runtimePinVisual.fillAlpha, MAP_PIN_VISUAL.fillAlpha, 0, 1);
  runtimePinVisual.ringAlpha = toNumber(runtimePinVisual.ringAlpha, MAP_PIN_VISUAL.ringAlpha, 0, 1);
  runtimePinVisual.ringStrokeWidth = toNumber(runtimePinVisual.ringStrokeWidth, MAP_PIN_VISUAL.ringStrokeWidth, 0, 10);
  runtimePinVisual.centerX = toNumber(runtimePinVisual.centerX, MAP_PIN_VISUAL.centerX, -40, 40);
  runtimePinVisual.centerY = toNumber(runtimePinVisual.centerY, MAP_PIN_VISUAL.centerY, -40, 40);
  runtimePinVisual.innerRadius = toNumber(runtimePinVisual.innerRadius, MAP_PIN_VISUAL.innerRadius, 0, 40);
  runtimePinVisual.outerRadius = toNumber(runtimePinVisual.outerRadius, MAP_PIN_VISUAL.outerRadius, 0, 40);

  runtimePinVisual.hq.fillColor = isHexColor(runtimePinVisual.hq.fillColor) ? runtimePinVisual.hq.fillColor : MAP_PIN_VISUAL.hq.fillColor;
  runtimePinVisual.hq.ringColor = isHexColor(runtimePinVisual.hq.ringColor) ? runtimePinVisual.hq.ringColor : MAP_PIN_VISUAL.hq.ringColor;
  runtimePinVisual.hq.fillAlpha = toNumber(runtimePinVisual.hq.fillAlpha, MAP_PIN_VISUAL.hq.fillAlpha, 0, 1);
  runtimePinVisual.hq.ringAlpha = toNumber(runtimePinVisual.hq.ringAlpha, MAP_PIN_VISUAL.hq.ringAlpha, 0, 1);
  runtimePinVisual.hq.ringStrokeWidth = toNumber(runtimePinVisual.hq.ringStrokeWidth, MAP_PIN_VISUAL.hq.ringStrokeWidth, 0, 10);
  runtimePinVisual.hq.innerRadius = toNumber(runtimePinVisual.hq.innerRadius, MAP_PIN_VISUAL.hq.innerRadius, 0, 40);
  runtimePinVisual.hq.outerRadius = toNumber(runtimePinVisual.hq.outerRadius, MAP_PIN_VISUAL.hq.outerRadius, 0, 40);

  const runtimePinBaseAlpha = toNumber(mapRuntimeSettings?.pin?.baseAlpha, MAP_PIN_BASE_ALPHA, 0, 1);
  const runtimePinSelectedHqAlpha = toNumber(mapRuntimeSettings?.pin?.selectedHqAlpha, MAP_PIN_SELECTED_HQ_ALPHA, 0, 1);
  const runtimeIntroSettings = {
    gradientDelayMs: toNumber(mapRuntimeSettings?.intro?.gradientDelayMs, 1500, 0, 8000),
    stepDelayMs: toNumber(mapRuntimeSettings?.intro?.stepDelayMs, 240, 0, 4000),
    pinHoldMs: toNumber(mapRuntimeSettings?.intro?.pinHoldMs, runtimePinAnimation.introHoldMs, 0, 4000),
    gradientBaselineAlpha: toNumber(mapRuntimeSettings?.intro?.gradientBaselineAlpha, 0.4, 0, 1),
    gradientFadeDelayMs: toNumber(mapRuntimeSettings?.intro?.gradientFadeDelayMs, 180, 0, 4000),
    gradientFadeDurationMs: toNumber(mapRuntimeSettings?.intro?.gradientFadeDurationMs, 760, 0, 6000),
  };
  baseGradientAlpha = runtimeGradientBaseAlpha;

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
    if (module.dataset.mapVisual === 'india') {
      // Keep the complete India outline visible; the old focus bounds describe
      // the previous regional artwork, rather than geographic product locations.
      module.classList.remove('is-mobile-focused');
      mobileFocusActive = false;
      animationContainer.style.transform = 'none';
      if (typeof onComplete === 'function') onComplete();
      return;
    }
    const unionBounds = getOverlayUnionBounds(partnerKey);
    if (!unionBounds) {
      module.classList.remove('is-mobile-focused');
      mobileFocusActive = false;
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    // offsetWidth/offsetHeight ignore the current zoom transform, so a new
    // focus target computes correctly even mid-zoom (no un-zoom reset needed).
    const baseWidth = Number(animationContainer?.offsetWidth || 0);
    const baseHeight = Number(animationContainer?.offsetHeight || 0);
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
    module.classList.add('is-mobile-focused');
    tweenAnimationContainerTransform(finalTransform, MAP_MOBILE_FOCUS_FINAL_DURATION, () => {
      mobileFocusActive = true;
      if (typeof onComplete === 'function') {
        onComplete();
      }
    });
  };

  const isRuntimeReadyForScript = (url) => {
    if (url === mapCreatejsUrl) {
      return Boolean(window.createjs?.Stage && window.createjs?.Ticker);
    }

    if (url === mapCanvasScriptUrl) {
      return Boolean(window.AdobeAn?.getComposition?.(MAP_COMPOSITION_ID));
    }

    return false;
  };

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${url}"]`);
      if (existingScript && (existingScript.dataset.loaded === 'true' || isRuntimeReadyForScript(url))) {
        existingScript.dataset.loaded = 'true';
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
      } else if (script.dataset.loaded === 'true' || isRuntimeReadyForScript(url)) {
        script.dataset.loaded = 'true';
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
    const baseOffsetPx = parseCssLengthToPx(style.getPropertyValue('--rivanta-map-card-offset'));
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

        // Keep the card within canvas bounds first, then avoid overlays, then prefer shorter connectors.
        const outOfBoundsPenalty = overflowArea > 0 ? (200000 + (overflowArea * 80)) : 0;
        const score = outOfBoundsPenalty + overlapArea + horizontalPlacementPenalty + (candidate.offsetPx * 0.25);

        scoredCandidates.push({
          placement: candidate.placement,
          offsetPx: candidate.offsetPx,
          overflowArea,
          score,
        });
      });
    });

    if (scoredCandidates.length === 0) {
      return { x, y, placement: placementFallback, offsetPx: minOffsetPx };
    }

    const inBoundsCandidates = scoredCandidates.filter((candidate) => candidate.overflowArea <= 0);
    const prioritizedCandidates = inBoundsCandidates.length > 0 ? inBoundsCandidates : scoredCandidates;

    prioritizedCandidates.sort((a, b) => {
      if (a.score === b.score) {
        return priority.indexOf(a.placement) - priority.indexOf(b.placement);
      }
      return a.score - b.score;
    });

    return {
      x,
      y,
      placement: prioritizedCandidates[0]?.placement || placementFallback,
      offsetPx: prioritizedCandidates[0]?.offsetPx || minOffsetPx,
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

  let lastRenderedCardPartner = null;

  const renderCard = (partner) => {
    lastRenderedCardPartner = partner;
    const primaryLocation = getPrimaryLocation(partner.locations);
    const point = getPartnerPoint(partner, pointMap);
    const partnerKey = partner.partner_key || partner.name || partner.short_name;
    const locationLabel = partner.summary || partner.hq_location || (primaryLocation
      ? `${primaryLocation.city || ''}${primaryLocation.state ? `, ${primaryLocation.state}` : ''}`
      : 'Pathway details');

    // Below the mobile breakpoint the card sits on a dark background: serve
    // the partner's white-on-transparent (marquee) logo there and the on-white
    // logo otherwise. Partners without a distinct white asset keep the CSS
    // whitening-filter fallback via the --filtered class.
    const hasDistinctWhiteLogo = !!partner.marquee_logo_url && partner.marquee_logo_url !== partner.logo_url;
    const cardLogoSourceHtml = hasDistinctWhiteLogo
      ? `<source media="${MAP_MOBILE_BREAKPOINT}" srcset="${escapeHtml(partner.marquee_logo_url)}">`
      : '';
    const cardLogoClass = hasDistinctWhiteLogo ? '' : ' class="rivanta-map-card-logo--filtered"';
    const logoHtml = partner.logo_url
      ? `<span class="rivanta-map-card-logo-slot"><picture>${cardLogoSourceHtml}<img src="${escapeHtml(partner.logo_url)}" alt="${escapeHtml(partner.name || 'Partner')}" loading="lazy"${cardLogoClass}></picture></span>`
      : '';
    const isExternalUrl = /^https?:\/\//i.test(partner.website_url || '');
    const targetRelAttr = isExternalUrl ? ' target="_blank" rel="noopener noreferrer"' : '';
    const websiteHtml = partner.website_url
      ? `<a class="rivanta-map-visit" href="${escapeHtml(partner.website_url)}"${targetRelAttr}>${escapeHtml(partner.cta_label || 'Explore Pathway')}</a>`
      : '';

    const selectedControl = Array.from(controlsRoot.querySelectorAll('button[data-partner-key]'))
      .find((button) => normalizeKey(button.dataset.partnerKey) === normalizeKey(partnerKey));
    cardRoot.dataset.selectionGroup = selectedControl?.closest('.rivanta-product-tabs') ? 'product' : 'support';

    cardRoot.innerHTML = `
      <div class="rivanta-map-card-inner">
        ${logoHtml}
        <h3>${escapeHtml(partner.name || 'Partner')}</h3>
        <p>${escapeHtml(locationLabel)}</p>
        ${websiteHtml}
      </div>
    `;

    const position = getCardPlacement(point, partnerKey);
    const animRect = animationContainer.getBoundingClientRect();
    const stageRect = cardRoot.parentElement?.getBoundingClientRect?.() ?? animRect;
    const pinXInStage = (animRect.left - stageRect.left) + position.x * animRect.width;
    const pinYInStage = (animRect.top - stageRect.top) + position.y * animRect.height;
    const cardX = stageRect.width > 0 ? pinXInStage / stageRect.width : position.x;
    const cardY = stageRect.height > 0 ? pinYInStage / stageRect.height : position.y;

    cardRoot.dataset.placement = position.placement;
    setMobileCardMode();
    if (position.offsetPx) {
      cardRoot.style.setProperty('--rivanta-map-card-offset', `${position.offsetPx}px`);
    }
    cardRoot.style.setProperty('--rivanta-map-card-x', `${cardX * 100}%`);
    cardRoot.style.setProperty('--rivanta-map-card-y', `${cardY * 100}%`);
  };

  let activeInteractionToken = 0;
  let activeGradientTween = null;
  let maskedGradientLayer = null;
  let maskedGradientShape = null;
  let companyDotsLayer = null;
  const partnerOverlaysByKey = new Map();
  const canvasSize = { width: 1277, height: 809 };
  const gradientVisualCenter = { x: 638.9, y: 404.7 };
  const gradientTweenState = { x: gradientVisualCenter.x, y: gradientVisualCenter.y };

  let paintGradientBitmap = null;
  // Keep the existing gradient and selection transitions, using India as the artwork.
  const installIndiaMapMask = () => {
    if (module.dataset.mapVisual !== 'india' || !maskedGradientLayer || !window.createjs?.Shape) return;
    const mask = new window.createjs.Shape();
    const graphics = mask.graphics.beginFill('#ffffff');
    INDIA_MAP_DOTS.forEach(([x, y]) => {
      graphics.moveTo(x + 3, y).drawCircle(x, y, 3);
    });
    graphics.endFill();
    mask._off = true;
    maskedGradientLayer.mask = mask;
  };

  const installGradientBitmap = () => {
    const mask = maskedGradientLayer?.mask;
    if (!mask?.graphics?.drawAsPath) return;
    const maskCanvas = document.createElement('canvas');
    const gradientCanvas = document.createElement('canvas');
    maskCanvas.width = gradientCanvas.width = Math.ceil(canvasSize.width);
    maskCanvas.height = gradientCanvas.height = Math.ceil(canvasSize.height);
    const maskContext = maskCanvas.getContext('2d');
    const gradientContext = gradientCanvas.getContext('2d');
    if (!maskContext || !gradientContext) return;
    // Rasterize the thousands of map-dot paths once. Each tween frame then
    // composites a gradient against this reusable alpha mask.
    const matrix = maskedGradientLayer.getMatrix().invert().appendMatrix(mask.getMatrix());
    maskContext.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    mask.graphics.drawAsPath(maskContext);
    maskContext.fill();
    paintGradientBitmap = (centerX, centerY) => {
      const radius = MAP_GRADIENT_BASE_RADIUS * MAP_GRADIENT_SCALE;
      const gradient = gradientContext.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      MAP_GRADIENT_COLORS.forEach((color, index) => gradient.addColorStop(MAP_GRADIENT_RATIOS[index], color));
      gradientContext.clearRect(0, 0, gradientCanvas.width, gradientCanvas.height);
      gradientContext.globalCompositeOperation = 'source-over';
      gradientContext.fillStyle = gradient;
      gradientContext.fillRect(0, 0, gradientCanvas.width, gradientCanvas.height);
      gradientContext.globalCompositeOperation = 'destination-in';
      gradientContext.drawImage(maskCanvas, 0, 0);
      gradientContext.globalCompositeOperation = 'source-over';
    };
    paintGradientBitmap(gradientVisualCenter.x, gradientVisualCenter.y);
    maskedGradientLayer.mask = null;
    maskedGradientLayer.draw = (context) => {
      context.drawImage(gradientCanvas, 0, 0);
      return true;
    };
  };

  const applyGradientCenter = (centerX, centerY) => {
    if (!maskedGradientShape) {
      return;
    }
    if (paintGradientBitmap) {
      paintGradientBitmap(centerX, centerY);
      return;
    }

    const shapeOffsetX = Number(maskedGradientShape.x || 0);
    const shapeOffsetY = Number(maskedGradientShape.y || 0);
    const localX = centerX - shapeOffsetX;
    const localY = centerY - shapeOffsetY;
    const radius = MAP_GRADIENT_BASE_RADIUS * MAP_GRADIENT_SCALE;

    maskedGradientShape.graphics
      .clear()
      .rf(MAP_GRADIENT_COLORS, MAP_GRADIENT_RATIOS, localX, localY, 0, localX, localY, radius)
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

  const findCompanyDotsLayer = (exportRoot) => {
    if (exportRoot?.instance) {
      return exportRoot.instance;
    }

    const children = Array.isArray(exportRoot?.children) ? exportRoot.children : [];
    const candidate = children.find((child) => {
      const bounds = (typeof child?.getBounds === 'function' ? child.getBounds() : null) || child?.nominalBounds;
      return !!(bounds && Number(bounds.width) > 900 && Number(bounds.height) > 450);
    });

    return candidate || null;
  };

  // Replace the Animate export's baked-in office dots with dots built from the
  // CMS offices payload (partner.locations x/y percents from the Offices CPT).
  // Injected nodes reuse the export's location_dot symbol and the pin
  // controller's existing naming conventions, so discovery, styling, and
  // animation are unchanged. Returns false (keeping the baked-in dots) when
  // the payload carries no office coordinates at all.
  const injectCmsOfficeDots = (lib, layer) => {
    if (!layer || typeof lib?.location_dot !== 'function') {
      return false;
    }

    const officesByPartnerKey = new Map();
    partnerList.forEach((partner) => {
      const partnerKey = String(partner?.partner_key || '');
      if (!partnerKey || !Array.isArray(partner?.locations)) {
        return;
      }

      const offices = partner.locations.filter((location) => (
        location && Number.isFinite(Number(location.x_percent)) && Number.isFinite(Number(location.y_percent))
      ));
      if (offices.length > 0) {
        officesByPartnerKey.set(partnerKey, offices);
      }
    });

    if (officesByPartnerKey.size === 0) {
      return false;
    }

    // Hide the baked-in pins and remove them from prop-name discovery.
    Object.keys(layer).forEach((prop) => {
      if (!/^[a-z0-9]+_loc_\d+$/i.test(prop) && !/^instance(?:_\d+)?$/i.test(prop)) {
        return;
      }

      const node = layer[prop];
      if (node && typeof node === 'object' && typeof node.alpha === 'number') {
        node.visible = false;
        node.alpha = 0;
        delete layer[prop];
      }
    });

    const designToLocal = typeof layer.getMatrix === 'function' ? layer.getMatrix().invert() : null;

    officesByPartnerKey.forEach((offices, partnerKey) => {
      let prefix = MAP_PARTNER_PREFIX_BY_KEY[partnerKey];
      if (!prefix) {
        prefix = normalizeKey(partnerKey).replace(/[^a-z0-9]/g, '');
        if (!prefix) {
          return;
        }
        // The pin controller reads these maps at initializeFromLayer time.
        MAP_PARTNER_PREFIX_BY_KEY[partnerKey] = prefix;
      }

      const primaryIndex = Math.max(0, offices.findIndex((office) => office.is_primary === true));

      offices.forEach((office, index) => {
        const designX = (Number(office.x_percent) / 100) * canvasSize.width;
        const designY = (Number(office.y_percent) / 100) * canvasSize.height;
        const point = designToLocal ? designToLocal.transformPoint(designX, designY) : { x: designX, y: designY };

        const node = new lib.location_dot();
        const prop = index === primaryIndex ? `${prefix}_hq_cms` : `${prefix}_loc_${index}`;
        node.name = prop;
        node.setTransform(point.x, point.y, 1, 1, 0, 0, 0, 4.8, 4.8);
        layer.addChild(node);
        layer[prop] = node;

        if (index === primaryIndex) {
          MAP_HQ_INSTANCE_PROP_BY_PARTNER[partnerKey] = prop;
        }
      });
    });

    return true;
  };

  const initializePinControllerFromLayer = (layer) => {
    if (!pinController) {
      return;
    }

    pinController.initializeFromLayer(layer);
    pinController.hideAllPinsInstantly();
  };

  const assignPartnerOverlays = (exportRoot) => {
    partnerOverlaysByKey.clear();

    Object.entries(PARTNER_OVERLAY_INSTANCES).forEach(([partnerKey, getInstances]) => {
      const overlays = getInstances(exportRoot).filter(Boolean);

      overlays.forEach((overlay) => {
        overlay._off = false;
        overlay.visible = MAP_REGIONAL_OVERLAYS_VISIBLE;
        overlay.alpha = 0;

        if (window.createjs?.Tween) {
          window.createjs.Tween.removeTweens(overlay);
        }
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
      maskedGradientLayer.alpha = baseGradientAlpha;
    }
  };

  const showPartnerOverlayWithFade = (partnerKey) => {
    const normalizedKey = normalizeKey(partnerKey);
    const overlays = partnerOverlaysByKey.get(normalizedKey) || [];

    overlays.forEach((overlay) => {
      overlay._off = false;
      overlay.visible = MAP_REGIONAL_OVERLAYS_VISIBLE;

      if (window.createjs?.Tween && window.createjs?.Ease) {
        window.createjs.Tween.removeTweens(overlay);
        window.createjs.Tween.get(overlay, { override: true })
          .to({ alpha: 1 }, runtimeOverlayFadeMs, window.createjs.Ease.quadOut);
      } else {
        overlay.alpha = 1;
      }
    });

    if (maskedGradientLayer) {
      if (window.createjs?.Tween && window.createjs?.Ease) {
        window.createjs.Tween.removeTweens(maskedGradientLayer);
        window.createjs.Tween.get(maskedGradientLayer, { override: true })
          .to({ alpha: runtimeGradientActiveAlpha }, runtimeOverlayFadeMs, window.createjs.Ease.quadOut);
      } else {
        maskedGradientLayer.alpha = runtimeGradientActiveAlpha;
      }
    }
  };

  const hideCardInstantly = () => {
    cardRoot.classList.remove('is-visible');
    cardRoot.style.opacity = '';
    cardRoot.hidden = true;
  };

  const cancelGradientFade = () => {
    if (gradientFadeTimer) {
      window.clearTimeout(gradientFadeTimer);
      gradientFadeTimer = 0;
    }

    if (maskedGradientLayer && window.createjs?.Tween) {
      window.createjs.Tween.removeTweens(maskedGradientLayer);
    }
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
      applyGradientCenter(gradientTweenState.x, gradientTweenState.y);
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    if (activeGradientTween) {
      activeGradientTween.removeAllEventListeners();
    }
    window.createjs.Tween.removeTweens(gradientTweenState);

    activeGradientTween = window.createjs.Tween.get(gradientTweenState, { override: true });
    activeGradientTween.addEventListener('change', () => {
      applyGradientCenter(gradientTweenState.x, gradientTweenState.y);
    });
    activeGradientTween
      .to({ x: toPosition.x, y: toPosition.y }, 520, window.createjs.Ease.quadOut)
      .call(() => {
        applyGradientCenter(gradientTweenState.x, gradientTweenState.y);
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
    applyGradientCenter(gradientTweenState.x, gradientTweenState.y);
  };

  const renderHitpoints = () => {
    hitpointsRoot.innerHTML = '';

    partnerList.forEach((partner, index) => {
      const point = getPartnerPoint(partner, pointMap);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rivanta-map-hitpoint';
      button.dataset.partnerKey = partner.partner_key || partner.name || partner.short_name || String(index);
      button.style.setProperty('--map-hitpoint-x', `${point.x * 100}%`);
      button.style.setProperty('--map-hitpoint-y', `${point.y * 100}%`);
      button.style.setProperty('--map-hitpoint-delay', `${Math.min(900, index * 90)}ms`);
      button.setAttribute('aria-label', `${partner.name || 'Partner'}${partner.short_name ? `, ${partner.short_name}` : ''}`);
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        introController?.cancelCycle();
        setActive(button.dataset.partnerKey);
      });
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          introController?.cancelCycle();
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
      if (key === lastControlActivationKey && (now - lastControlActivationAt) < runtimeMobileActivationDedupeMs) {
        return;
      }

      lastControlActivationKey = key;
      lastControlActivationAt = now;
      introController?.cancelCycle();

      if (module.dataset.activeKey === key) {
        if (module.dataset.mapLayout === 'split') return;
        dismissSelection();
        return;
      }

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

  const clearActiveSelection = () => {
    delete module.dataset.activeKey;

    Array.from(hitpointsRoot.querySelectorAll('button[data-partner-key]')).forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
    });

    Array.from(controlsRoot.querySelectorAll('button[data-partner-key]')).forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
      button.style.backgroundColor = '';
    });

    overlayContainer.removeAttribute('data-active-partner');
    pinController?.hideAllPinsInstantly();
  };

  const dismissSelection = () => {
    // Do NOT increment activeInteractionToken — that would orphan intro cycle callbacks.
    cancelGradientFade();
    clearActiveSelection();
    hideCardInstantly();
    hideAllPartnerOverlaysInstantly();
    resetGradientToCenter();
    const pinRepopulatePromise = runRestingPinRepopulate();
    fadeGradientToDefault({ delayMs: 0, durationMs: runtimeOverlayFadeMs });
    module.dataset.introState = 'resting';

    if (isMobileLayout) {
      resetMobileFocus();
    }

    // Detach only this stage once the dismiss animations have settled. The
    // CreateJS ticker is shared with other components and must remain running.
    // Pausing must wait for the full resting pin repopulate — pausing earlier
    // freezes the canvas mid-stagger and later pins never get painted.
    const fadeSettlePromise = new Promise((resolve) => {
      window.setTimeout(resolve, runtimeOverlayFadeMs + 200);
    });
    Promise.all([Promise.resolve(pinRepopulatePromise), fadeSettlePromise]).then(() => {
      if (!module.dataset.activeKey) {
        pauseStageRendering();
      }
    });
  };

  const setActive = (partnerKey, options = {}) => {
    const suppressCard = options.suppressCard === true;
    const suppressPinHighlight = options.suppressPinHighlight === true;
    const pinMode = options.pinMode || (suppressPinHighlight ? 'intro' : 'manual');
    const pinHoldMs = Number.isFinite(Number(options.pinHoldMs))
      ? Math.max(0, Number(options.pinHoldMs))
      : null;
    const onTransitionComplete = typeof options.onTransitionComplete === 'function'
      ? options.onTransitionComplete
      : null;
    const partner = partnerList.find((item) => normalizeKey(item.partner_key || item.name || item.short_name) === normalizeKey(partnerKey));
    if (!partner) {
      if (onTransitionComplete) {
        onTransitionComplete();
      }
      return;
    }

    const activeKey = partner.partner_key || partner.name || partner.short_name;

    // Only track activeKey for manual (non-intro) selections so dismiss toggle
    // cannot fire during the intro cycle.
    if (!suppressCard) {
      module.dataset.activeKey = String(activeKey || '');
    }

    // Reattach this stage so overlay fades and gradient tweens render.
    resumeStageRendering();

    const activePoint = getPartnerPoint(partner, pointMap);
    const gradientTarget = {
      edgeTarget: getNearestEdgeGradientTarget(activePoint),
      sourcePoint: activePoint,
    };
    const interactionToken = ++activeInteractionToken;

    cancelGradientFade();
    hideCardInstantly();
    hideAllPartnerOverlaysInstantly();
    pinController?.hidePinsForTransition();

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
      // Active background comes from CSS (.is-active uses the per-button
      // --rivanta-map-partner-highlight-color var; mobile overrides it with a
      // faint white wash). Inline styles here would defeat the mobile rule.
      button.style.backgroundColor = '';
    });

    updateOverlay(activeKey);

    // Manual selections run everything in parallel so the card is never gated
    // behind gradient/overlay/pin choreography. The intro cycle keeps its
    // chained pacing in the branch below.
    if (!suppressCard) {
      const gradientDone = new Promise(resolve => animateGradientTo(gradientTarget, resolve));
      let pinsDone = Promise.resolve();
      showPartnerOverlayWithFade(activeKey);

      if (pinController) {
        if (pinMode === 'intro') {
          pinsDone = pinController.runIntroPartnerPop(activeKey, {
            holdMs: pinHoldMs ?? runtimePinAnimation.introHoldMs,
            durationMs: runtimePinAnimation.popDurationMs,
            staggerMs: runtimePinAnimation.popStaggerMs,
          });
        } else {
          pinsDone = pinController.applyManualSelectionState(activeKey, {
            holdMs: pinHoldMs ?? runtimePinAnimation.manualHoldMs,
            highlightHq: true,
            durationMs: runtimePinAnimation.popDurationMs,
            staggerMs: runtimePinAnimation.popStaggerMs,
          });
        }
      }

      if (isMobileLayout) {
        focusMobileOnPartner(activeKey);
      }

      renderCard(partner);
      showCardWithFade();
      Promise.all([gradientDone, Promise.resolve(pinsDone)]).then(() => {
        if (interactionToken === activeInteractionToken && module.dataset.activeKey === String(activeKey)) {
          pauseStageRendering();
        }
      });

      if (onTransitionComplete) {
        onTransitionComplete();
      }
      return;
    }

    resetGradientToCenter();

    const revealSelection = () => {
      animateGradientTo(gradientTarget, () => {
        if (interactionToken !== activeInteractionToken) {
          return;
        }

        const finishIntroStep = () => {
          if (interactionToken !== activeInteractionToken) {
            return;
          }

          if (onTransitionComplete) {
            onTransitionComplete();
          }
        };

        const revealPins = () => {
          if (!pinController) {
            finishIntroStep();
            return;
          }

          const pinPromise = pinController.runIntroPartnerPop(activeKey, {
            holdMs: pinHoldMs ?? runtimePinAnimation.introHoldMs,
            durationMs: runtimePinAnimation.popDurationMs,
            staggerMs: runtimePinAnimation.popStaggerMs,
          });

          Promise.resolve(pinPromise).then(() => {
            finishIntroStep();
          });
        };

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

              revealPins();
            }, runtimeOverlayFadeMs);
          });
          return;
        }

        showPartnerOverlayWithFade(activeKey);
        window.setTimeout(() => {
          if (interactionToken !== activeInteractionToken) {
            return;
          }

          revealPins();
        }, runtimeOverlayFadeMs);
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
        button.style.setProperty('--rivanta-map-partner-highlight-color', partner.highlight_color);
      }

      bindPartnerActivation(button, button.getAttribute('data-partner-key'));
    });
  };

  const mapHeader = module.querySelector('.rivanta-map-header');
  const mapStage = module.querySelector('.rivanta-map-stage');
  const mapControls = module.querySelector('.rivanta-map-controls');
  const mapAnimationShell = module.querySelector('.rivanta-map-animation');

  pinController = createInteractiveMapPinController({
    createjs: window.createjs,
    normalizeKey,
    hqInstancePropByPartner: MAP_HQ_INSTANCE_PROP_BY_PARTNER,
    partnerPrefixByKey: MAP_PARTNER_PREFIX_BY_KEY,
    genericInstancePropByPartner: MAP_GENERIC_INSTANCE_PROP_BY_PARTNER,
    baseAlpha: runtimePinBaseAlpha,
    selectedHqAlpha: runtimePinSelectedHqAlpha,
    popDurationMs: runtimePinAnimation.popDurationMs,
    popStaggerMs: runtimePinAnimation.popStaggerMs,
    pinVisual: runtimePinVisual,
  });

  const getControlButtons = () => {
    return Array.from(controlsRoot.querySelectorAll('button[data-partner-key]'));
  };

  const applyIntroGradientBaseline = () => {
    baseGradientAlpha = runtimeIntroSettings.gradientBaselineAlpha;
    if (maskedGradientLayer) {
      if (window.createjs?.Tween) {
        window.createjs.Tween.removeTweens(maskedGradientLayer);
      }
      maskedGradientLayer.alpha = baseGradientAlpha;
    }
  };

  const setBaseGradientAlpha = (alphaValue) => {
    const parsedAlpha = Number(alphaValue);
    if (!Number.isFinite(parsedAlpha)) {
      return;
    }

    baseGradientAlpha = Math.max(0, Math.min(1, parsedAlpha));
  };

  const fadeGradientToDefault = (options = {}) => {
    const defaultAlpha = runtimeGradientBaseAlpha;
    const durationMs = Math.max(0, Number(options.durationMs ?? 700));
    const delayMs = Math.max(0, Number(options.delayMs ?? 120));
    const startAlphaRaw = options.startAlpha;
    const startAlpha = Number.isFinite(Number(startAlphaRaw))
      ? Math.max(0, Math.min(1, Number(startAlphaRaw)))
      : null;

    if (!maskedGradientLayer) {
      baseGradientAlpha = defaultAlpha;
      return;
    }

    cancelGradientFade();

    const runFade = () => {
      if (!maskedGradientLayer) {
        baseGradientAlpha = defaultAlpha;
        return;
      }

      if (startAlpha !== null) {
        maskedGradientLayer.alpha = startAlpha;
      }

      if (window.createjs?.Tween && window.createjs?.Ease) {
        window.createjs.Tween.removeTweens(maskedGradientLayer);
        window.createjs.Tween.get(maskedGradientLayer, { override: true })
          .to({ alpha: defaultAlpha }, durationMs, window.createjs.Ease.quadOut)
          .call(() => {
            baseGradientAlpha = defaultAlpha;
          });
        return;
      }

      maskedGradientLayer.alpha = defaultAlpha;
      baseGradientAlpha = defaultAlpha;
    };

    if (delayMs > 0) {
      gradientFadeTimer = window.setTimeout(() => {
        gradientFadeTimer = 0;
        runFade();
      }, delayMs);
      return;
    }

    runFade();
  };

  const resetBaseGradientAlpha = () => {
    baseGradientAlpha = runtimeGradientBaseAlpha;
  };

  const resetMobileMapView = (onComplete) => {
    if (!isMobileLayout) {
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    resetMobileFocus(onComplete);
  };

  const hideAllPinsForIntro = () => {
    pinController?.hideAllPinsInstantly();
  };

  const runRestingPinRepopulate = () => {
    if (!pinController) {
      return Promise.resolve();
    }

    return pinController.runRestingRandomRepopulate({
      totalDurationMs: runtimePinAnimation.restingRepopulateDurationMs,
      durationMs: runtimePinAnimation.popDurationMs,
      staggerMs: runtimePinAnimation.popStaggerMs,
    });
  };

  const showRestingPinsInstantly = () => {
    pinController?.showRestingPinsInstantly();
  };

  introController = createExperiment3IntroController({
    module,
    mapHeader,
    mapStage,
    mapControls,
    mapAnimationContainer: animationContainer,
    getControlButtons,
    partnerList,
    setActive,
    hideCardInstantly,
    resetMobileMapView,
    clearActiveSelection,
    resetGradientToCenter,
    hideAllPartnerOverlaysInstantly,
    hideAllPinsForIntro,
    runRestingPinRepopulate,
    showRestingPinsInstantly,
    fadeGradientToDefault,
    applyIntroGradientBaseline,
    setBaseGradientAlpha,
    resetBaseGradientAlpha,
    introSettings: runtimeIntroSettings,
    onResting: () => {
      if (!module.dataset.activeKey) {
        pauseStageRendering();
      }
    },
  });

  const applyViewportFitLayout = () => {
    fitMapToViewport(module);
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
    installIndiaMapMask();
    installGradientBitmap();
    companyDotsLayer = findCompanyDotsLayer(exportRoot);
    injectCmsOfficeDots(lib, companyDotsLayer);
    initializePinControllerFromLayer(companyDotsLayer);
    if (module.dataset.mapVisual === 'india') {
      // These controls describe product pathways, not geographic facility locations.
      // Hide the old network markers while retaining the control buttons and cards.
      if (companyDotsLayer) companyDotsLayer.visible = false;
      hitpointsRoot.style.display = 'none';
    }
    if (maskedGradientLayer) {
      maskedGradientLayer.alpha = runtimeGradientBaseAlpha;
    }
    assignPartnerOverlays(exportRoot);

    stage = new lib.Stage(canvas);
    window.exportRoot = exportRoot;
    window.stage = stage;

    const startAnimation = () => {
      stage.addChild(exportRoot);
      // RAF_SYNCHED: rAF timing accuracy but ticks capped at framerate — pure RAF fires at 60fps and hammers the stage listener.
      window.createjs.Ticker.timingMode = window.createjs.Ticker.RAF_SYNCHED;
      window.createjs.Ticker.framerate = lib.properties.fps;
      stageTickHandler = (event) => {
        pinController?.sync();
        stage.update(event);
      };
      stageRenderingRequested = module.dataset.introState !== 'resting';
      syncStageTickSubscription();
      renderStageOnce();

      // Pause rendering when the canvas is off-screen. Keep the requested state
      // separate so scrolling back in does not restart an otherwise idle map.
      if (typeof IntersectionObserver !== 'undefined') {
        const visibilityObserver = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            stageIsVisible = entry.isIntersecting && entry.intersectionRatio >= 0.02;
            syncStageTickSubscription();
            if (stageIsVisible) {
              renderStageOnce();
            }
          }
        }, { threshold: [0, 0.02], rootMargin: '-112px 0px 0px 0px' });
        visibilityObserver.observe(canvas);
      }
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
    applyViewportFitLayout();
  };

  renderHitpoints();
  renderControls();

  const dismissOnOutsideClick = (event) => {
    if (module.dataset.mapLayout === 'split') return;
    if (cardRoot.hidden || !cardRoot.classList.contains('is-visible')) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    if (target.closest('.rivanta-map-card') || target.closest('[data-map-controls]')) {
      return;
    }

    dismissSelection();
  };

  if (window.PointerEvent) {
    module.addEventListener('pointerdown', dismissOnOutsideClick);
  } else {
    module.addEventListener('touchstart', dismissOnOutsideClick, { passive: true });
    module.addEventListener('mousedown', dismissOnOutsideClick);
  }

  applyViewportFitLayout();
  if (module.dataset.mapLayout === 'split') {
    module.dataset.loaded = 'true';
    module.dataset.introState = 'resting';
  } else {
    introController.primeMapIntro();
    introController.armMapIntroOnViewportEntry();
  }

  if (typeof mobileMediaQuery.addEventListener === 'function') {
    mobileMediaQuery.addEventListener('change', (event) => {
      isMobileLayout = event.matches;
      setMobileCardMode();
      applyViewportFitLayout();

      if (!isMobileLayout && mobileFocusActive) {
        resetMobileFocus();
      }
    });
  }


  // Card placement and the mobile focus zoom are measured from live rects at
  // render/focus time, so they drift when the viewport changes. Refresh the
  // whole map presentation once resizing settles: re-fit the stage, recompute
  // the mobile focus transform, redraw the canvas, and re-anchor the open card.
  let mapResizeRefreshTimer = 0;
  let lastRefreshViewportWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    window.clearTimeout(mapResizeRefreshTimer);
    mapResizeRefreshTimer = window.setTimeout(() => {
      const widthChanged = window.innerWidth !== lastRefreshViewportWidth;
      lastRefreshViewportWidth = window.innerWidth;

      applyViewportFitLayout();

      // Width changes invalidate the px-based zoom transform; height-only
      // resizes (mobile browser toolbars) must not re-trigger the zoom tween.
      const activeKey = overlayContainer.dataset.activePartner || '';
      if (widthChanged && isMobileLayout && mobileFocusActive && activeKey) {
        focusMobileOnPartner(activeKey);
      }

      // Force a canvas redraw even while the resting-state ticker is detached.
      renderStageOnce();

      if (!cardRoot.hidden && cardRoot.classList.contains('is-visible') && lastRenderedCardPartner) {
        renderCard(lastRenderedCardPartner);
      }
    }, 150);
  }, { passive: true });
  document.addEventListener('visibilitychange', syncStageTickSubscription);

  module.dataset.status = 'booting';

  try {
    await bootstrapCanvas();
    resetGradientToCenter();
    hideAllPartnerOverlaysInstantly();
    clearActiveSelection();
    cardRoot.classList.remove('is-visible');
    cardRoot.hidden = true;
    module.dataset.status = 'ready';
    if (module.dataset.mapLayout === 'split') setActive(partnerList[0].partner_key);
  } catch (error) {
    module.dataset.status = 'error';
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
