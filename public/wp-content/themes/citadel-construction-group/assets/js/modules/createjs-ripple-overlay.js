const MAP_POINT_FALLBACKS = {
  'rogers-obrien-construction-company': ['rogers-obrien', 'r-o'],
  'charles-pankow-builders-ltd': ['pankow'],
  'choate-construction-company': ['choate'],
  'imc-construction': ['imc'],
  'krusinski-construction-company': ['krusinski'],
  'saunders-construction-inc': ['saunders'],
  'lease-crutcher-lewis': ['lewis'],
};

/*
 * Ripple tuning guide:
 * - `ringCount`: how many rings are spawned per ripple burst. Higher values make
 *   the burst feel fuller, but also add more active tweens at once.
 * - `poolSize`: how many ring bitmaps are prebuilt and recycled. Keep this at or
 *   above `ringCount` to avoid creating extra bitmaps during a burst.
 * - `ringRadius`: the base size of each ring before it animates. Larger values
 *   make the ripple read as physically larger on screen.
 * - `ringStrokeWidth`: the thickness of the ring outline. Thicker strokes read
 *   heavier and more visible; thinner strokes feel lighter and cleaner.
 * - `ringDurationMs`: how long one ring takes to finish its expansion and fade.
 *   Larger values slow the ripple down and make it feel calmer.
 * - `staggerDelayMs`: the delay between each ring starting inside the same burst.
 *   Larger values spread the rings apart in time and reduce the “shockwave” feel.
 * - `maxScale`: how far a ring grows before it disappears. Larger values make the
 *   ripple travel farther from its center point.
 * - `maxAlpha`: the starting opacity of each ring. Lower values make the ripple
 *   softer and less visually aggressive; higher values make it punchier.
 * - `loopCount`: how many times the same ripple sequence should repeat after it
 *   starts. Use `1` for a single pass, `2` or more for repeated pulses, and `0`
 *   to keep looping continuously until the module is destroyed.
 * - `loopDelay`: additional delay in ms inserted between loop passes. Use `0`
 *   for back-to-back loops, or raise it to create breathing room between pulses.
 * - `compositeOperation`: CreateJS blend mode used by the ripple container.
 *   Useful for visual experiments like `lighter`, `lighten`, `overlay`, etc.
 * - Keep these values local to experiment 2 so the default map stays unchanged.
 */
const DEFAULT_RING_COUNT = 4;
const DEFAULT_STAGGER_DELAY_MS = 100;
const DEFAULT_RING_DURATION_MS = 760;
const DEFAULT_MAX_SCALE = 2.2;
const DEFAULT_MAX_ALPHA = 0.72;
const DEFAULT_RING_RADIUS = 72;
const DEFAULT_RING_STROKE_WIDTH = 18;
const DEFAULT_POOL_SIZE = 4;

const normalizeKey = (value) => {
  return String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const clamp01 = (value) => {
  return Math.max(0, Math.min(1, Number(value) || 0));
};

const createRingCanvas = (radius, strokeWidth) => {
  const size = Math.ceil((radius + strokeWidth) * 2);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  if (!context) {
    return canvas;
  }

  const center = size / 2;
  const gradient = context.createRadialGradient(
    center,
    center,
    Math.max(0, radius - strokeWidth),
    center,
    center,
    radius + strokeWidth
  );

  gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(0.42, 'rgba(255, 236, 216, 0.12)');
  gradient.addColorStop(0.72, 'rgba(255, 180, 91, 0.5)');
  gradient.addColorStop(1, 'rgba(255, 147, 30, 1)');

  context.clearRect(0, 0, size, size);
  context.strokeStyle = gradient;
  context.lineWidth = strokeWidth;
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.stroke();

  return canvas;
};

const createRingBitmap = (createjs, ringCanvas) => {
  const bitmap = new createjs.Bitmap(ringCanvas);
  bitmap.regX = ringCanvas.width / 2;
  bitmap.regY = ringCanvas.height / 2;
  bitmap.visible = false;
  bitmap.alpha = 1;
  bitmap.scaleX = 1;
  bitmap.scaleY = 1;
  bitmap.rotation = 0;
  bitmap.skewX = 0;
  bitmap.skewY = 0;
  return bitmap;
};

const resolvePartnerPoint = (pointMap, activeKey) => {
  const normalizedKey = normalizeKey(activeKey);
  if (!normalizedKey) {
    return null;
  }

  const exactPoint = pointMap?.[normalizedKey];
  if (exactPoint && Number.isFinite(exactPoint.x) && Number.isFinite(exactPoint.y)) {
    return {
      x: clamp01(exactPoint.x),
      y: clamp01(exactPoint.y),
    };
  }

  const aliases = MAP_POINT_FALLBACKS[normalizedKey] || [];
  for (const [candidateKey, candidatePoint] of Object.entries(pointMap || {})) {
    const normalizedCandidateKey = normalizeKey(candidateKey);
    if (normalizedCandidateKey === normalizedKey || aliases.some((alias) => normalizedCandidateKey.includes(alias))) {
      return {
        x: clamp01(candidatePoint?.x),
        y: clamp01(candidatePoint?.y),
      };
    }
  }

  return null;
};

export function createRippleOverlay({
  stage,
  module,
  canvas,
  pointMap,
  createjs = window.createjs,
  ease = 'bounceOut',
  eases = null,
  loopCount = 1,
  loopDelay = 0,
  maskAnimation = false,
  maskDisplayObject = null,
  compositeOperation = 'lighter',
  ringCount = DEFAULT_RING_COUNT,
  staggerDelayMs = DEFAULT_STAGGER_DELAY_MS,
  ringDurationMs = DEFAULT_RING_DURATION_MS,
  maxScale = DEFAULT_MAX_SCALE,
  maxAlpha = DEFAULT_MAX_ALPHA,
  ringRadius = DEFAULT_RING_RADIUS,
  ringStrokeWidth = DEFAULT_RING_STROKE_WIDTH,
  poolSize = DEFAULT_POOL_SIZE,
} = {}) {
  if (!stage || !module || !canvas || !createjs?.Tween || !createjs?.Container || !createjs?.Bitmap) {
    return {
      trigger() {},
      destroy() {},
    };
  }

  const rippleContainer = new createjs.Container();
  rippleContainer.name = 'citadel-ripple-overlay';
  rippleContainer.mouseEnabled = false;
  rippleContainer.mouseChildren = false;
  rippleContainer.compositeOperation = compositeOperation;
  rippleContainer.mask = maskAnimation ? maskDisplayObject : null;
  stage.addChild(rippleContainer);

  const ringCanvas = createRingCanvas(ringRadius, ringStrokeWidth);
  const ringPool = Array.from({ length: Math.max(poolSize, ringCount) }, () => createRingBitmap(createjs, ringCanvas));
  const activeRings = new Set();
  let observer = null;
  let lastObservedKey = normalizeKey(module.dataset.activeKey || '');
  const easingOptions = Array.isArray(eases) && eases.length ? eases : [ease];
  const loopTimers = new Set();
  const canvasWidth = Number(canvas.width || stage.canvas?.width || 1277);
  const canvasHeight = Number(canvas.height || stage.canvas?.height || 809);

  const resolveEaseFn = (value) => {
    if (typeof value === 'function') {
      return value;
    }

    if (typeof value === 'string' && createjs.Ease?.[value]) {
      return createjs.Ease[value];
    }

    return createjs.Ease?.bounceOut || createjs.Ease?.sineOut || createjs.Ease?.quadOut || createjs.Ease?.linear;
  };

  const acquireRing = () => {
    const ring = ringPool.pop() || createRingBitmap(createjs, ringCanvas);
    ring.visible = true;
    ring.alpha = maxAlpha;
    ring.scaleX = 0.18;
    ring.scaleY = 0.18;
    ring.rotation = 0;
    ring.skewX = 0;
    ring.skewY = 0;
    ring.x = 0;
    ring.y = 0;
    return ring;
  };

  const releaseRing = (ring) => {
    if (!ring) {
      return;
    }

    if (ring.__citadelRippleTween) {
      createjs.Tween.removeTweens(ring);
      ring.__citadelRippleTween = null;
    }

    if (ring.parent === rippleContainer) {
      rippleContainer.removeChild(ring);
    }

    activeRings.delete(ring);
    ring.visible = false;
    ring.alpha = 1;
    ring.scaleX = 1;
    ring.scaleY = 1;
    ring.x = 0;
    ring.y = 0;
    ring.rotation = 0;
    ring.skewX = 0;
    ring.skewY = 0;
    ringPool.push(ring);
  };

  const spawnBurst = (centerX, centerY) => {
    for (let index = 0; index < ringCount; index += 1) {
      const ring = acquireRing();
      ring.x = centerX;
      ring.y = centerY;
      rippleContainer.addChild(ring);
      activeRings.add(ring);

      const targetScale = maxScale + (index * 0.18);
      const tween = createjs.Tween.get(ring, { override: true });
      ring.__citadelRippleTween = tween;
      const easeFn = resolveEaseFn(easingOptions[index % easingOptions.length]);

      // Staggered tween start times distribute ring animation work across frames to prevent workload spikes and maintain smooth playback.
      tween
        .wait(index * staggerDelayMs)
        .to({ scaleX: targetScale, scaleY: targetScale, alpha: 0 }, ringDurationMs, easeFn)
        .call(() => {
          releaseRing(ring);
        });
    }
  };

  const clearLoopTimers = () => {
    loopTimers.forEach((timerId) => {
      window.clearTimeout(timerId);
    });
    loopTimers.clear();
  };

  const clearActiveRings = () => {
    Array.from(activeRings).forEach((ring) => {
      releaseRing(ring);
    });
  };

  const playBurst = (point, iteration = 0) => {
    spawnBurst(point.x * canvasWidth, point.y * canvasHeight);

    const isInfiniteLoop = loopCount === 0;
    const nextIteration = iteration + 1;
    if ((!isInfiniteLoop && nextIteration >= loopCount) || (isInfiniteLoop && loopCount !== 0 && nextIteration >= loopCount)) {
      return;
    }

    const cycleDuration = Math.max(ringDurationMs, staggerDelayMs * Math.max(1, ringCount));
    const cycleDelay = cycleDuration + Math.max(0, Number(loopDelay) || 0);
    const timerId = window.setTimeout(() => {
      loopTimers.delete(timerId);
      playBurst(point, nextIteration);
    }, cycleDelay);

    loopTimers.add(timerId);
  };

  const trigger = (pointOrX, pointY) => {
    let point = null;

    if (typeof pointOrX === 'string') {
      point = resolvePartnerPoint(pointMap, pointOrX);
    } else if (Number.isFinite(pointOrX) && Number.isFinite(pointY)) {
      point = {
        x: clamp01(pointOrX / canvasWidth),
        y: clamp01(pointY / canvasHeight),
      };
    } else if (pointOrX && typeof pointOrX === 'object') {
      point = {
        x: clamp01(pointOrX.x),
        y: clamp01(pointOrX.y),
      };
    }

    if (!point) {
      return;
    }

    clearLoopTimers();
    clearActiveRings();
    playBurst(point);
  };

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName !== 'data-active-key') {
        return;
      }

      const nextKey = normalizeKey(module.dataset.activeKey || '');
      // Update only when `data-active-key` attribute changes to a new non-empty value.
      if (!nextKey || nextKey === lastObservedKey) {
        return;
      }

      lastObservedKey = nextKey;
      const point = resolvePartnerPoint(pointMap, nextKey);
      if (point) {
        clearLoopTimers();
        clearActiveRings();
        playBurst(point);
      }
    });
  });

  observer.observe(module, {
    attributes: true,
    attributeFilter: ['data-active-key'],
  });

  const destroy = () => {
    clearLoopTimers();

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    clearActiveRings();

    ringPool.forEach((ring) => {
      createjs.Tween.removeTweens(ring);
    });

    rippleContainer.removeAllChildren();
    if (rippleContainer.parent === stage) {
      stage.removeChild(rippleContainer);
    }
  };

  return {
    trigger,
    stop() {
      // Prevent another burst while allowing the rings already on stage to
      // complete their current tween.
      clearLoopTimers();
    },
    clear() {
      clearLoopTimers();
      clearActiveRings();
    },
    destroy,
    container: rippleContainer,
  };
}
