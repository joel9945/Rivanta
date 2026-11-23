const INTRO_CYCLE_GRADIENT_DELAY_MS = 1500;
const INTRO_CYCLE_STEP_DELAY_MS = 240;

export function createExperiment3IntroController(config) {
  const {
    module,
    mapHeader,
    mapStage,
    mapControls,
    mapAnimationContainer = null,
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
    clearRippleOverlay = () => {},
    fadeGradientToDefault,
    applyIntroGradientBaseline,
    setBaseGradientAlpha,
    resetBaseGradientAlpha,
    introSettings = {},
    onResting = null,
  } = config;

  const introGradientDelayMs = Math.max(0, Number(introSettings.gradientDelayMs ?? INTRO_CYCLE_GRADIENT_DELAY_MS));
  const introStepDelayMs = Math.max(0, Number(introSettings.stepDelayMs ?? INTRO_CYCLE_STEP_DELAY_MS));
  const introPinHoldMs = Math.max(0, Number(introSettings.pinHoldMs ?? 140));
  const introGradientFadeDelayMs = Math.max(0, Number(introSettings.gradientFadeDelayMs ?? 180));
  const introGradientFadeDurationMs = Math.max(0, Number(introSettings.gradientFadeDurationMs ?? 760));

  let introCycleStarted = false;
  let introCycleActive = false;
  let introCycleToken = 0;
  let introCycleTimer = 0;
  let introCompletedOnce = false;

  const clearIntroCycleTimer = () => {
    if (introCycleTimer) {
      window.clearTimeout(introCycleTimer);
      introCycleTimer = 0;
    }
  };

  const settleIntoRestingState = () => {
    module.dataset.loaded = 'true';
    module.dataset.introState = 'resting';
    delete module.dataset.introCycleActive;
    clearRippleOverlay();
    clearIntroCycleTimer();
    resetBaseGradientAlpha();
    resetMobileMapView(() => {
      setBaseGradientAlpha(1);
      clearActiveSelection();
      hideCardInstantly();
      resetGradientToCenter();
      hideAllPartnerOverlaysInstantly();
      clearRippleOverlay();
      const pinRepopulatePromise = runRestingPinRepopulate();
      fadeGradientToDefault({
        startAlpha: 1,
        delayMs: introGradientFadeDelayMs,
        durationMs: introGradientFadeDurationMs,
      });
      clearMapIntroStyles();

      if (typeof onResting === 'function') {
        const gradientSettlePromise = new Promise((resolve) => {
          window.setTimeout(resolve, introGradientFadeDelayMs + introGradientFadeDurationMs + 100);
        });
        Promise.all([Promise.resolve(pinRepopulatePromise), gradientSettlePromise]).then(onResting);
      }
    });
  };

  const cancelCycle = ({ complete = true } = {}) => {
    if (complete) {
      introCompletedOnce = true;
      module.dataset.loaded = 'true';
      module.dataset.introState = 'resting';
    }
    if (!introCycleActive && !introCycleStarted) {
      return;
    }

    introCycleToken += 1;
    introCycleStarted = true;
    introCycleActive = false;
    delete module.dataset.introCycleActive;
    clearRippleOverlay();
    clearIntroCycleTimer();
  };

  const startPartnerIntroCycle = () => {
    if (introCycleStarted || !Array.isArray(partnerList) || partnerList.length === 0) {
      return;
    }

    introCycleStarted = true;
    introCycleActive = true;
    module.dataset.introCycleActive = 'true';
    clearRippleOverlay();
    hideAllPinsForIntro();
    clearIntroCycleTimer();
    hideCardInstantly();

    const cycleToken = ++introCycleToken;
    const partnerOrder = partnerList
      .map((partner) => partner.partner_key || partner.name || partner.short_name)
      .filter((value) => String(value || '').trim() !== '');

    const runStep = (index) => {
      if (cycleToken !== introCycleToken || !introCycleActive) {
        return;
      }

      if (index >= partnerOrder.length) {
        introCycleActive = false;
        delete module.dataset.introCycleActive;
        clearIntroCycleTimer();
        introCompletedOnce = true;
        settleIntoRestingState();
        return;
      }

      setActive(partnerOrder[index], {
        suppressCard: true,
        suppressRipple: true,
        pinMode: 'intro',
        pinHoldMs: introPinHoldMs,
        onTransitionComplete: () => {
          if (cycleToken !== introCycleToken || !introCycleActive) {
            return;
          }

          introCycleTimer = window.setTimeout(() => {
            runStep(index + 1);
          }, introStepDelayMs);
        },
      });
    };

    introCycleTimer = window.setTimeout(() => {
      if (cycleToken !== introCycleToken || !introCycleActive) {
        return;
      }

      applyIntroGradientBaseline();
      runStep(0);
    }, introGradientDelayMs);
  };

  const primeMapIntro = () => {
    const introTargets = [
      { node: mapHeader, y: 34, scale: 1 },
      { node: mapStage, y: 56, scale: 0.94 },
      { node: mapControls, y: 28, scale: 1 },
    ];

    introTargets.forEach((target) => {
      if (!target.node) {
        return;
      }

      target.node.style.opacity = '0';
      target.node.style.transform = `translateY(${target.y}px) scale(${target.scale})`;
      target.node.style.willChange = 'opacity, transform';
    });

    if (mapAnimationContainer) {
      mapAnimationContainer.style.transform = 'rotate3d(1, 0, 0, 15deg)';
      mapAnimationContainer.style.willChange = 'transform';
    }

    const buttons = getControlButtons();
    buttons.forEach((button) => {
      button.style.opacity = '0';
      button.style.transform = 'translateY(10px)';
    });
  };

  const playMapIntro = () => {
    const introTargets = [
      { node: mapHeader, delayMs: 0 },
      { node: mapStage, delayMs: 1040 },
      { node: mapControls, delayMs: 1960 },
    ];

    introTargets.forEach((target) => {
      if (!target.node) {
        return;
      }

      target.node.style.transition = `opacity 920ms ease ${target.delayMs}ms, transform 1040ms cubic-bezier(0.22, 1, 0.36, 1) ${target.delayMs}ms`;
    });

    if (mapAnimationContainer) {
      // Keep the stylesheet opacity transition intact while the inline transform tilt runs.
      mapAnimationContainer.style.transition = 'opacity 240ms ease, transform 1040ms cubic-bezier(0.22, 1, 0.36, 1) 1040ms';
    }

    const buttons = getControlButtons();
    buttons.forEach((button, index) => {
      const delayMs = 2080 + Math.min(640, index * 96);
      button.style.transition = `opacity 640ms ease ${delayMs}ms, transform 680ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`;
    });

    window.requestAnimationFrame(() => {
      introTargets.forEach((target) => {
        if (!target.node) {
          return;
        }

        target.node.style.opacity = '1';
        target.node.style.transform = 'translateY(0) scale(1)';
      });

      if (mapAnimationContainer) {
        mapAnimationContainer.style.transform = 'rotate3d(1, 0, 0, 0deg)';
      }

      buttons.forEach((button) => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      });
    });
  };

  const clearMapIntroStyles = () => {
    const introNodes = [mapHeader, mapStage, mapControls];
    introNodes.forEach((node) => {
      if (!node) {
        return;
      }

      node.style.opacity = '';
      node.style.transform = '';
      node.style.transition = '';
      node.style.willChange = '';
    });

    if (mapAnimationContainer) {
      mapAnimationContainer.style.transform = '';
      mapAnimationContainer.style.transition = '';
      mapAnimationContainer.style.willChange = '';
    }

    const buttons = getControlButtons();
    buttons.forEach((button) => {
      button.style.opacity = '';
      button.style.transform = '';
      button.style.transition = '';
    });
  };

  const armMapIntroOnViewportEntry = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isRestoredPage = performance.getEntriesByType('navigation')[0]?.type === 'reload';
    const isDirectMapLoad = window.location.hash === '#map';
    module.dataset.loaded = 'false';
    module.dataset.introState = 'armed';

    if (reducedMotion || isRestoredPage || isDirectMapLoad) {
      module.dataset.loaded = 'true';
      module.dataset.introState = 'resting';
      introCompletedOnce = true;
      delete module.dataset.introCycleActive;
      clearMapIntroStyles();
      showRestingPinsInstantly();
      return;
    }

    let introPlayed = false;
    const isMapVisibleNow = () => {
      const rect = module.getBoundingClientRect();
      const viewportHeight = Math.max(1, window.innerHeight || 1);
      return rect.bottom > 0 && rect.top < viewportHeight * 0.92;
    };

    const playIntro = () => {
      if (introCompletedOnce || introPlayed) {
        return;
      }

      introPlayed = true;
      module.dataset.loaded = 'true';
      module.dataset.introState = 'played';
      playMapIntro();
      startPartnerIntroCycle();
    };

    const resetIntro = () => {
      if (module.dataset.activeKey) {
        return;
      }
      if (!introPlayed && !introCompletedOnce) {
        return;
      }

      introPlayed = false;
      if (introCompletedOnce) {
        settleIntoRestingState();
        return;
      }

      module.dataset.loaded = 'false';
      module.dataset.introState = 'armed';
      delete module.dataset.introCycleActive;
      clearRippleOverlay();
      hideAllPinsForIntro();
      cancelCycle({ complete: false });
      introCycleStarted = false;
      resetBaseGradientAlpha();
      resetMobileMapView(() => {
        primeMapIntro();
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      playIntro();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }

      const isFullyOffscreen = entry.boundingClientRect.bottom <= 0 || entry.boundingClientRect.top >= window.innerHeight;
      if (isFullyOffscreen) {
        resetIntro();
        return;
      }

      if (!entry.isIntersecting) {
        return;
      }

      playIntro();
    }, {
      threshold: [0, 0.05],
      rootMargin: '0px',
    });

    observer.observe(module);

    if (isMapVisibleNow()) {
      window.setTimeout(() => {
        playIntro();
      }, 30);
    }
  };

  return {
    armMapIntroOnViewportEntry,
    cancelCycle,
    primeMapIntro,
  };
}
