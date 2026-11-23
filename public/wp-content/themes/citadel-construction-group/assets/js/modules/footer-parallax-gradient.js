const MOBILE_MAX_WIDTH = 860;
const LOOP_DURATION_MS = 5200;
const OVERSIZE_HEIGHT_RATIO = 2;
const BASE_POSITION_Y = 0.42;
const SCROLL_Y_AMPLITUDE = 0.34;
const LOOP_Y_AMPLITUDE = 0.16;
const GRADIENT_COLORS = ['#f7f7f8', '#dedfe1', '#ea984f', '#c77331'];
const GRADIENT_RATIOS = [0, 0.24, 0.67, 1];

const SECONDARY_LOOP_DURATION_MS = 8100;
const SECONDARY_BASE_POSITION_Y = 0.58;
const SECONDARY_SCROLL_Y_AMPLITUDE = 0.26;
const SECONDARY_LOOP_Y_AMPLITUDE = 0.14;
const SECONDARY_ALPHA = 0.4;
const SECONDARY_GRADIENT_COLORS = [
  'rgba(255,221,147,0)',
  'rgba(255,221,147,0.55)',
  'rgba(234,152,79,0.6)',
  'rgba(199,115,49,0)',
];
const SECONDARY_GRADIENT_RATIOS = [0, 0.35, 0.65, 1];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

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
      if (existing.dataset.loaded === 'true') {
        const resolved = Promise.resolve();
        pendingByUrl.set(url, resolved);
        return resolved;
      }

      const pending = new Promise((resolve, reject) => {
        existing.addEventListener('load', () => {
          existing.dataset.loaded = 'true';
          resolve();
        });
        existing.addEventListener('error', () => reject(new Error(`Failed to load script: ${url}`)));
      });

      pendingByUrl.set(url, pending);
      return pending;
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

const getScaledCanvasRect = (canvas) => {
  const rect = canvas.getBoundingClientRect();
  return {
    width: Math.max(1, rect.width || 1),
    height: Math.max(1, rect.height || 1),
  };
};

const clearGraphics = (shape) => {
  shape.graphics.clear();
  return shape;
};

export async function initFooterParallaxGradient() {
  const section = document.querySelector('[data-module="footer-parallax-gradient"]');
  if (!section) {
    return;
  }

  const headline = section.querySelector('[data-footer-gradient-headline]');
  const canvas = section.querySelector('[data-footer-gradient-canvas]');
  const fallback = section.querySelector('[data-footer-gradient-fallback]');
  const createjsUrl = section.dataset.footerCreatejsUrl || '';

  if (!headline || !canvas || !createjsUrl) {
    return;
  }

  try {
    await loadScript(createjsUrl);
  } catch {
    return;
  }

  const createjsGlobal = window.createjs;
  if (!createjsGlobal || typeof createjsGlobal.Stage !== 'function') {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let loopRafId = 0;
  let isVisible = false;
  let geometry = { width: 1, height: 1 };

  const stage = new createjsGlobal.Stage(canvas);
  stage.autoClear = true;
  stage.enableMouseOver(0);

  const gradientShape = new createjsGlobal.Shape();
  const secondaryGradientShape = new createjsGlobal.Shape();
  secondaryGradientShape.compositeOperation = 'lighter';
  stage.addChild(gradientShape, secondaryGradientShape);

  const setFallbackState = (showFallback) => {
    if (!fallback) {
      return;
    }

    fallback.style.opacity = showFallback ? '1' : '0';
    fallback.style.visibility = showFallback ? 'visible' : 'hidden';
  };

  const resizeStage = () => {
    const { width, height } = getScaledCanvasRect(canvas);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const nextWidth = Math.max(1, Math.round(width * pixelRatio));
    const nextHeight = Math.max(1, Math.round(height * pixelRatio));
    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }

    stage.scaleX = pixelRatio;
    stage.scaleY = pixelRatio;

    geometry = { width, height };
    return geometry;
  };

  const renderFrame = (timestamp) => {
    const { width, height } = geometry;
    const animationEnabled = !prefersReducedMotion.matches && window.innerWidth > MOBILE_MAX_WIDTH;
    const maxScrollable = Math.max((document.documentElement.scrollHeight || 1) - (window.innerHeight || 1), 1);
    const scrollProgress = animationEnabled ? clamp((window.citadelScroll?.getY() ?? window.scrollY ?? 0) / maxScrollable, 0, 1) : 0.5;
    const cycle = animationEnabled ? ((timestamp % LOOP_DURATION_MS) / LOOP_DURATION_MS) * Math.PI * 2 : 0;
    const secondaryCycle = animationEnabled
      ? ((timestamp % SECONDARY_LOOP_DURATION_MS) / SECONDARY_LOOP_DURATION_MS) * Math.PI * 2
      : 0;

    const positionY = clamp(
      BASE_POSITION_Y + (scrollProgress - 0.5) * SCROLL_Y_AMPLITUDE + Math.cos(cycle) * LOOP_Y_AMPLITUDE,
      0,
      1,
    );
    const secondaryPositionY = clamp(
      SECONDARY_BASE_POSITION_Y +
        (scrollProgress - 0.5) * SECONDARY_SCROLL_Y_AMPLITUDE -
        Math.cos(secondaryCycle) * SECONDARY_LOOP_Y_AMPLITUDE,
      0,
      1,
    );

    const oversizeHeight = height * OVERSIZE_HEIGHT_RATIO;
    const offsetY = positionY * (oversizeHeight - height);
    const secondaryOffsetY = secondaryPositionY * (oversizeHeight - height);

    clearGraphics(gradientShape)
      .graphics.beginLinearGradientFill(GRADIENT_COLORS, GRADIENT_RATIOS, 0, 0, 0, oversizeHeight)
      .drawRect(0, 0, width, oversizeHeight);
    gradientShape.y = -offsetY;

    clearGraphics(secondaryGradientShape)
      .graphics.beginLinearGradientFill(SECONDARY_GRADIENT_COLORS, SECONDARY_GRADIENT_RATIOS, 0, 0, 0, oversizeHeight)
      .drawRect(0, 0, width, oversizeHeight);
    secondaryGradientShape.y = -secondaryOffsetY;
    secondaryGradientShape.alpha = SECONDARY_ALPHA;


    stage.update();
  };

  const stopLoop = () => {
    if (loopRafId === 0) {
      return;
    }

    window.cancelAnimationFrame(loopRafId);
    loopRafId = 0;
  };

  const updateAnimation = () => {
    if (!isVisible || document.hidden) {
      stopLoop();
      return;
    }
    const animationEnabled = !prefersReducedMotion.matches && window.innerWidth > MOBILE_MAX_WIDTH;
    if (!animationEnabled) {
      stopLoop();
      renderFrame(0);
      return;
    }

    if (loopRafId !== 0) {
      return;
    }

    const tick = (timestamp) => {
      renderFrame(timestamp);
      loopRafId = window.requestAnimationFrame(tick);
    };

    loopRafId = window.requestAnimationFrame(tick);
  };

  section.classList.add('has-canvas');
  headline.classList.add('has-canvas');
  setFallbackState(false);
  resizeStage();
  renderFrame(0);
  const visibilityObserver = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
    updateAnimation();
  }, { threshold: 0 });
  visibilityObserver.observe(section);
  document.addEventListener('visibilitychange', updateAnimation);

  window.addEventListener('scroll', () => {
    if (isVisible && !document.hidden && loopRafId === 0) {
      renderFrame(performance.now());
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    stopLoop();
    resizeStage();
    updateAnimation();
  }, { passive: true });

  if (typeof prefersReducedMotion.addEventListener === 'function') {
    prefersReducedMotion.addEventListener('change', () => {
      stopLoop();
      updateAnimation();
    });
  } else if (typeof prefersReducedMotion.addListener === 'function') {
    prefersReducedMotion.addListener(() => {
      stopLoop();
      updateAnimation();
    });
  }
}
