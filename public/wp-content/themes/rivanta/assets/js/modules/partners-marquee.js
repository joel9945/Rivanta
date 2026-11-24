export function initPartnersMarquee() {
  const module = document.querySelector('[data-module="partners-marquee"]');
  if (!module) {
    return;
  }

  const list = module.querySelector('[data-marquee-list]');
  if (!list) {
    module.dataset.status = 'empty';
    return;
  }

  const shuffleItems = (items) => {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return items;
  };

  const originalItems = Array.from(list.children);
  if (originalItems.length < 2) {
    module.dataset.status = 'insufficient-items';
    return;
  }

  if (module.dataset.marqueePreserveOrder !== '1') {
    list.replaceChildren(...shuffleItems([...originalItems]));
  }
  const reducedMotionMode = module.dataset.marqueeReducedMotionMode === 'slow' ? 'slow' : 'static';
  const inViewOnly = module.dataset.marqueeInViewOnly !== '0';
  const speed = Number(module.dataset.marqueeSpeed || '30');
  const baseDurationSeconds = Number.isFinite(speed) && speed > 0 ? speed : 30;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion && reducedMotionMode === 'static') {
    module.dataset.motion = 'reduced';
    module.dataset.status = 'ready';
    return;
  }

  const durationSeconds = prefersReducedMotion && reducedMotionMode === 'slow'
    ? baseDurationSeconds * 2
    : baseDurationSeconds;
  const requestedDirection = module.dataset.marqueeDirection || 'left';
  const direction = requestedDirection === 'right' ? 'right' : 'left';
  module.style.setProperty('--marquee-duration', `${durationSeconds}s`);
  module.style.setProperty('--marquee-animation-name', direction === 'right' ? 'rivanta-marquee-right' : 'rivanta-marquee-left');
  module.dataset.marqueeDirection = direction;
  module.dataset.marqueeInViewOnly = inViewOnly ? '1' : '0';
  module.dataset.marqueeReducedMotionMode = reducedMotionMode;
  if (prefersReducedMotion) {
    module.dataset.motion = 'reduced';
  }

  const clones = Array.from(list.children).map((item) => item.cloneNode(true));
  clones.forEach((clone) => {
    clone.setAttribute('aria-hidden', 'true');
    list.appendChild(clone);
  });

  list.classList.add('is-marquee-animated');

  const play = () => {
    list.style.animationPlayState = 'running';
    module.dataset.playState = 'running';
  };

  const pause = () => {
    list.style.animationPlayState = 'paused';
    module.dataset.playState = 'paused';
  };

  let isModuleInView = !inViewOnly;
  let isLogoHovered = false;

  const syncPlayState = () => {
    if (isLogoHovered) {
      pause();
      return;
    }

    if (!inViewOnly || isModuleInView) {
      play();
      return;
    }

    pause();
  };

  const logoNodes = Array.from(list.querySelectorAll('.rivanta-partners-logo-link'));

  const swapToActiveLogo = (logoNode) => {
    const image = logoNode.querySelector('img[data-marquee-logo-active-src]');
    if (!image) {
      return;
    }

    const activeSrc = image.dataset.marqueeLogoActiveSrc || '';
    if (activeSrc === '') {
      return;
    }

    const activeAlt = image.dataset.marqueeLogoActiveAlt || image.alt;
    image.src = activeSrc;
    image.alt = activeAlt;
  };

  const swapToDefaultLogo = (logoNode) => {
    const image = logoNode.querySelector('img[data-marquee-logo-default-src]');
    if (!image) {
      return;
    }

    const defaultSrc = image.dataset.marqueeLogoDefaultSrc || '';
    if (defaultSrc === '') {
      return;
    }

    const defaultAlt = image.dataset.marqueeLogoDefaultAlt || image.alt;
    image.src = defaultSrc;
    image.alt = defaultAlt;
  };

  logoNodes.forEach((logoNode) => {
    logoNode.addEventListener('mouseenter', () => {
      isLogoHovered = true;
      swapToActiveLogo(logoNode);
      syncPlayState();
    });

    logoNode.addEventListener('mouseleave', () => {
      isLogoHovered = false;
      swapToDefaultLogo(logoNode);
      syncPlayState();
    });

    logoNode.addEventListener('focusin', () => {
      swapToActiveLogo(logoNode);
    });

    logoNode.addEventListener('focusout', () => {
      swapToDefaultLogo(logoNode);
    });
  });

  if (!inViewOnly) {
    syncPlayState();
    module.dataset.status = 'ready';
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isModuleInView = entry.isIntersecting;
        syncPlayState();
      });
    },
    { threshold: 0 }
  );

  observer.observe(module);
  syncPlayState();
  module.dataset.status = 'ready';
}
