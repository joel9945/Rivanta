export function initScrollspyNav() {
  const header = document.querySelector('[data-module="scrollspy-nav"]');
  if (!header) {
    return;
  }

  const navList = header.querySelector('[data-nav-list]');
  const navIndicator = header.querySelector('[data-nav-indicator]');
  const navLinks = Array.from(header.querySelectorAll('.citadel-site-nav-link'));
  if (navLinks.length === 0) {
    header.dataset.status = 'no-links';
    return;
  }

  const hero = document.getElementById('hero');
  const aboutSection = document.getElementById('about');
  const partnersSection = document.getElementById('partners');
  const caseStudiesSection = document.getElementById('case-studies');
  const mapSection = document.getElementById('map');
  const principalsSection = document.getElementById('principals');
  const findPartnerSection = document.getElementById('find-partner');
  const footerBrandSection = document.getElementById('footer-brand');

  const sectionById = new Map();

  const getAnchorTarget = (hash) => {
    if (!hash || !hash.startsWith('#') || hash === '#' || hash.length < 2) {
      return null;
    }

    try {
      const section = document.querySelector(hash);
      if (!section) {
        return null;
      }

      return {
        element: section,
      };
    } catch {
      return null;
    }
  };

  const resolveAnchorScrollTop = (targetElement, hash = '') => {
    const headerHeight = header.offsetHeight || 0;
    const targetRect = targetElement.getBoundingClientRect();
    const targetDocumentTop = window.citadelScroll?.getTop(targetElement)
      ?? (window.scrollY || window.pageYOffset || 0) + targetRect.top;
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;

    // Use the section's actual document position rather than re-adding the current scroll
    // offset, which causes deep-link jumps to drift by one section when the hero pin is active.
    // Put the header probe inside the destination. Leaving it a few pixels
    // above About hides the mobile pager and changes the header height again.
    return Math.max(0, targetDocumentTop - headerHeight + (isMobileViewport ? 16 : 2));
  };

  const navigateToAnchor = (hash, options = {}) => {
    const {
      updateHistory = true,
      scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      forceQueueThroughHero = false,
    } = options;
    const anchorTarget = getAnchorTarget(hash);
    if (!anchorTarget || !anchorTarget.element) {
      return;
    }

    const currentScrollY = window.citadelScroll?.getY() ?? window.scrollY ?? 0;
    const headerHeight = header.offsetHeight || 0;
    const scrollTop = resolveAnchorScrollTop(anchorTarget.element, hash);
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const heroNavState = hero && typeof hero.getSequenceNavigationState === 'function'
      ? hero.getSequenceNavigationState()
      : null;
    const releaseBoundaryY = heroNavState && Number.isFinite(heroNavState.releaseBoundaryY)
      ? heroNavState.releaseBoundaryY
      : 0;
    const isAtOrPastHeroRelease = currentScrollY >= Math.max(0, releaseBoundaryY - 1);
    const shouldQueueThroughHero = forceQueueThroughHero
      ? Boolean(
        hero &&
        heroNavState &&
        heroNavState.motion === 'standard' &&
        typeof hero.queueAnchorNavigation === 'function'
      )
      : Boolean(
        hero &&
        heroRect &&
        heroRect.bottom > headerHeight + 1 &&
        heroNavState &&
        heroNavState.motion === 'standard' &&
        !heroNavState.complete &&
        !isAtOrPastHeroRelease &&
        typeof hero.queueAnchorNavigation === 'function'
      );

    if (updateHistory) {
      window.history.pushState(null, '', hash);
    } else if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash);
    }

    if (shouldQueueThroughHero) {
      const queued = hero.queueAnchorNavigation(scrollTop, hash);
      if (queued) {
        return;
      }
    }

    if (window.citadelScroll) window.citadelScroll.toSection(anchorTarget.element,
      () => (header.offsetHeight || 0) - (window.matchMedia('(max-width: 767px)').matches ? 16 : 2),
      scrollBehavior === 'smooth');
    else window.scrollTo({ top: scrollTop, behavior: scrollBehavior });
  };

  const handleIncomingHash = (hash) => {
    if (!hash || hash === '#hero' || !hash.startsWith('#')) {
      return;
    }

    const anchorTarget = getAnchorTarget(hash);
    if (!anchorTarget || !anchorTarget.element) {
      return;
    }

    const sectionId = hash.slice(1);
    forceHashActiveState(sectionId);

    // Preserve browser-native scroll restoration for direct loads and refreshes.
    // The hero queue is intended for explicit user navigation, not page-load hash
    // restoration, which otherwise overrides the browser's own anchor behavior.
    navigateToAnchor(hash, {
      updateHistory: false,
      scrollBehavior: 'auto',
      forceQueueThroughHero: false,
    });
  };

  navLinks.forEach((link) => {
    const hash = link.getAttribute('href') || '';
    if (!hash.startsWith('#')) {
      return;
    }

    const section = document.querySelector(hash);
    if (section) {
      sectionById.set(hash.slice(1), section);
    }

    link.addEventListener('click', (event) => {
      if (!hash.startsWith('#')) {
        return;
      }

      const anchorTarget = getAnchorTarget(hash);
      if (!anchorTarget || !anchorTarget.element) {
        return;
      }

      event.preventDefault();
      navigateToAnchor(hash);
    });
  });

  const ctaLink = header.querySelector('.citadel-site-header-cta');
  document.querySelectorAll('main a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute('href');
    if (!getAnchorTarget(hash)) return;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigateToAnchor(hash);
    });
  });
  const navRoot = header.querySelector('.citadel-site-nav');
  const prevArrow = header.querySelector('[data-mobile-nav-prev]');
  const nextArrow = header.querySelector('[data-mobile-nav-next]');
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-accent')
    .trim() || '#f2861d';

  const MOBILE_NAV_SECTIONS = ['about', 'case-studies', 'map', 'principals'];
  const MOBILE_HEADER_WHITE_SECTION_IDS = new Set(['about']);

  // Palette of the section under the header, for the logo-cover blob.
  // Sections may declare data-header-surface="white|dark|orange"; unlisted
  // sections fall back to this set (white) or dark.
  const LOGO_COVER_WHITE_SECTION_IDS = new Set(['about', 'find-partner']);

  const resolveSectionSurface = (sectionId) => {
    const section = sectionId ? document.getElementById(sectionId) : null;
    const declared = section?.dataset?.headerSurface || '';
    if (declared === 'white' || declared === 'dark' || declared === 'orange') {
      return declared;
    }

    return LOGO_COVER_WHITE_SECTION_IDS.has(sectionId) ? 'white' : 'dark';
  };

  // hidden: mobile is handled in CSS; here hidden covers over-hero and orange sections.
  const updateLogoCoverSurface = (isOverHero) => {
    const sectionId = currentProbeSectionId || refreshProbeSectionId();
    const surface = resolveSectionSurface(sectionId);
    header.dataset.logoCoverSurface = (isOverHero || surface === 'orange') ? 'hidden' : surface;
    const heroIsOrange = isOverHero && Number(hero?.dataset.progress || 0) >= 0.28;
    header.dataset.logoTone = heroIsOrange || surface === 'orange' ? 'dark' : 'brand';
    const footerHeadline = sectionId === 'footer-brand' ? footerBrandSection?.querySelector('.rivanta-footer-headline') : null;
    const overFooterFade = footerHeadline
      && (header.offsetHeight - footerHeadline.getBoundingClientRect().top) < footerHeadline.offsetHeight * 0.12;
    const ink = surface === 'white' || surface === 'orange' || heroIsOrange || overFooterFade ? '#111111' : '#ffffff';
    if (header.style.getPropertyValue('--rivanta-logo-ink') !== ink) header.style.setProperty('--rivanta-logo-ink', ink);
  };

  let currentProbeSectionId = '';

  const resolveProbeSectionId = () => {
    const headerHeight = header.offsetHeight || 0;
    const probeLine = headerHeight;
    const probeX = Math.max(1, Math.floor(window.innerWidth * 0.5));

    if (typeof document.elementsFromPoint === 'function') {
      const stack = document.elementsFromPoint(probeX, probeLine);
      for (const node of stack) {
        if (!(node instanceof HTMLElement)) {
          continue;
        }

        if (header.contains(node)) {
          continue;
        }

        const sectionCandidate = node.closest('section[id]');
        if (sectionCandidate) {
          return sectionCandidate.getAttribute('id') || '';
        }
      }
    }

    const orderedSections = [
      hero,
      aboutSection,
      partnersSection,
      caseStudiesSection,
      mapSection,
      principalsSection,
      findPartnerSection,
      footerBrandSection,
    ];

    let nearestUpcomingSectionId = '';
    let nearestUpcomingDistance = Number.POSITIVE_INFINITY;

    for (const section of orderedSections) {
      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();
      if (rect.top <= probeLine && rect.bottom > probeLine) {
        return section.getAttribute('id') || '';
      }

      if (rect.top > probeLine) {
        const distance = rect.top - probeLine;
        if (distance < nearestUpcomingDistance) {
          nearestUpcomingDistance = distance;
          nearestUpcomingSectionId = section.getAttribute('id') || '';
        }
      }
    }

    // Keep header state synchronized with logo state when the probe line
    // lands inside inter-section whitespace (common at section seams).
    if (nearestUpcomingSectionId && nearestUpcomingDistance <= 32) {
      return nearestUpcomingSectionId;
    }

    return '';
  };

  const refreshProbeSectionId = () => {
    currentProbeSectionId = resolveProbeSectionId();
    return currentProbeSectionId;
  };

  const hasHeroOverlayEntered = () => {
    if (!hero) {
      return false;
    }

    const progress = Number.parseFloat(hero.dataset.progress || '0');
    const overlayStart = hero.dataset.controller === 'native-scroll' ? 0.28 : Number.parseFloat(hero.dataset.heroOverlayTiming || '0.52');
    if (!Number.isFinite(progress) || !Number.isFinite(overlayStart)) {
      return false;
    }

    return progress >= overlayStart;
  };

  const applyModeStyles = (isContentMode, isOverHero) => {
    if (navRoot && !isMobileNavPager()) {
      navRoot.style.background = isContentMode ? 'rgba(22, 22, 22, 0.92)' : 'transparent';
      navRoot.style.boxShadow = isContentMode ? '0 8px 24px rgba(0, 0, 0, 0.16)' : 'none';
    } else if (navRoot) {
      navRoot.style.background = '';
      navRoot.style.boxShadow = '';
    }

    if (ctaLink) {
      const heroOverlayEntered = hasHeroOverlayEntered();
      const isHeroIntroPhase = isOverHero && !isContentMode && !heroOverlayEntered;
      const shouldUseOrangeCta = isContentMode || isHeroIntroPhase;
      ctaLink.style.background = shouldUseOrangeCta ? accentColor : '#ffffff';
      ctaLink.style.color = '#000000';
    }
  }

  if (ctaLink) {
    ctaLink.addEventListener('click', (event) => {
      const href = ctaLink.getAttribute('href') || '';
      if (!href.startsWith('#')) {
        return;
      }

      const anchorTarget = getAnchorTarget(href);
      if (!anchorTarget || !anchorTarget.element) {
        return;
      }

      event.preventDefault();
      navigateToAnchor(href);
    });
  }

  let currentSectionId = '';
  let sectionChangeTimer = 0;

  const updateIndicator = () => {
    if (!navList || !navIndicator) {
      return;
    }

    const navRoot = navIndicator.parentElement;
    if (!navRoot) {
      return;
    }

    const activeLink = navList.querySelector('.citadel-site-nav-link.is-active');
    if (!activeLink) {
      navIndicator.style.setProperty('--nav-indicator-width', '0px');
      navIndicator.style.setProperty('--nav-indicator-x', '0px');
      return;
    }

    const rootRect = navRoot.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const offsetX = Math.max(0, linkRect.left - rootRect.left);

    navIndicator.style.setProperty('--nav-indicator-width', `${Math.round(linkRect.width)}px`);
    navIndicator.style.setProperty('--nav-indicator-x', `${Math.round(offsetX)}px`);
  };

  const isMobileNavPager = () => window.matchMedia('(max-width: 767px)').matches;
  let mobilePagerPendingHash = '';
  let mobilePagerPinnedLeft = null;

  const syncMobileNavToActive = () => {
    if (!isMobileNavPager() || !navRoot || !navList) {
      return;
    }

    if (mobilePagerPendingHash && `#${currentSectionId}` !== mobilePagerPendingHash) {
      if (mobilePagerPinnedLeft !== null && Math.abs(navRoot.scrollLeft - mobilePagerPinnedLeft) > 2) {
        navRoot.scrollTo({ left: mobilePagerPinnedLeft, behavior: 'auto' });
      }
      return;
    }

    const activeLink = navList.querySelector('.citadel-site-nav-link.is-active');
    if (!activeLink) {
      return;
    }

    const activeItem = activeLink.closest('.citadel-site-nav-item');
    if (!activeItem) {
      return;
    }

    const targetLeft = Math.max(0, activeItem.offsetLeft - navList.offsetLeft);
    if (Math.abs(navRoot.scrollLeft - targetLeft) > 2) {
      navRoot.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
  };

  const getMobileNavItems = () => {
    if (!navList) {
      return [];
    }

    return Array.from(navList.querySelectorAll('.citadel-site-nav-item'));
  };

  const getCurrentMobileNavIndex = () => {
    if (!navRoot) {
      return 0;
    }

    const pageWidth = Math.max(1, navRoot.clientWidth);
    return Math.round(navRoot.scrollLeft / pageWidth);
  };

  const selectMobileNavIndex = (index) => {
    if (!isMobileNavPager() || !navRoot) {
      return;
    }

    const items = getMobileNavItems();
    if (items.length === 0) {
      return;
    }

    const boundedIndex = Math.max(0, Math.min(items.length - 1, index));
    const targetItem = items[boundedIndex];
    const targetLink = targetItem.querySelector('.citadel-site-nav-link');
    if (!targetLink) {
      return;
    }

    const snappedLeft = Math.max(0, targetItem.offsetLeft - navList.offsetLeft);
    mobilePagerPinnedLeft = snappedLeft;
    if (Math.abs(navRoot.scrollLeft - snappedLeft) > 2) {
      navRoot.scrollTo({ left: snappedLeft, behavior: 'auto' });
    }

    const hash = targetLink.getAttribute('href') || '';
    if (!hash.startsWith('#')) {
      return;
    }

    if (targetLink.classList.contains('is-active')) {
      if (mobilePagerPendingHash === hash) {
        mobilePagerPendingHash = '';
        mobilePagerPinnedLeft = null;
      }
      return;
    }

    mobilePagerPendingHash = hash;
    navigateToAnchor(hash);
  };

  const shouldHideHeaderForSection = (sectionId) => isMobileNavPager() && (sectionId === 'find-partner' || sectionId === 'footer-brand');

  const updateHeaderHideState = () => {
    if (!isMobileNavPager()) {
      header.classList.remove('is-header-hidden');
      return;
    }

    const sectionId = currentProbeSectionId || refreshProbeSectionId();
    header.classList.toggle('is-header-hidden', shouldHideHeaderForSection(sectionId));
  };

  const updateMobileNavVisibility = () => {
    if (!isMobileNavPager()) {
      header.classList.remove('is-mobile-nav-hidden');
      return;
    }

    const sectionId = currentProbeSectionId || refreshProbeSectionId();
    const shouldHide = sectionId === 'hero' || shouldHideHeaderForSection(sectionId);
    header.classList.toggle('is-mobile-nav-hidden', shouldHide);
  };

  const updateMobileHeaderCompactState = () => {
    if (!isMobileNavPager()) {
      header.classList.remove('is-mobile-header-compact');
      return;
    }

    const sectionId = currentProbeSectionId || refreshProbeSectionId();
    header.classList.toggle('is-mobile-header-compact', shouldHideHeaderForSection(sectionId));
  };

  const setMobileHeaderSurface = (surface) => {
    const nextSurface = surface || 'hero';
    header.dataset.mobileSurface = nextSurface;
    header.classList.toggle('is-mobile-surface-hero', nextSurface === 'hero');
    header.classList.toggle('is-mobile-surface-white', nextSurface === 'white');
    header.classList.toggle('is-mobile-surface-black', nextSurface === 'black');
  };

  const updateMobileHeaderSurface = () => {
    if (!isMobileNavPager()) {
      header.removeAttribute('data-mobile-surface');
      header.classList.remove('is-mobile-surface-hero', 'is-mobile-surface-white', 'is-mobile-surface-black');
      return;
    }

    const sectionId = currentProbeSectionId || refreshProbeSectionId();
    if (shouldHideHeaderForSection(sectionId)) {
      header.removeAttribute('data-mobile-surface');
      header.classList.remove('is-mobile-surface-hero', 'is-mobile-surface-white', 'is-mobile-surface-black');
      return;
    }

    if (sectionId === 'hero') {
      setMobileHeaderSurface('hero');
      return;
    }

    if (sectionId) {
      const surface = MOBILE_HEADER_WHITE_SECTION_IDS.has(sectionId) ? 'white' : 'black';
      setMobileHeaderSurface(surface);
      return;
    }

    // Past known sections, keep a dark surface so the fixed header remains readable over footer/meta areas.
    setMobileHeaderSurface('black');
  };

  const updateMobileNavArrows = () => {
    if (!isMobileNavPager() || !prevArrow || !nextArrow) {
      if (prevArrow) prevArrow.hidden = true;
      if (nextArrow) nextArrow.hidden = true;
      return;
    }

    const index = MOBILE_NAV_SECTIONS.indexOf(currentSectionId);
    if (index === -1) {
      prevArrow.hidden = true;
      nextArrow.hidden = true;
      return;
    }

    prevArrow.hidden = false;
    prevArrow.setAttribute('aria-label', index === 0 ? 'Go to Hero' : `Go to ${navLinks.find((link) => link.hash === '#' + MOBILE_NAV_SECTIONS[index - 1])?.textContent.trim() || 'previous section'}`);

    if (index < MOBILE_NAV_SECTIONS.length - 1) {
      nextArrow.hidden = false;
      nextArrow.setAttribute('aria-label', `Go to ${navLinks.find((link) => link.hash === '#' + MOBILE_NAV_SECTIONS[index + 1])?.textContent.trim() || 'next section'}`);
    } else {
      nextArrow.hidden = true;
    }
  };

  if (prevArrow) {
    prevArrow.addEventListener('click', () => {
      const index = MOBILE_NAV_SECTIONS.indexOf(currentSectionId);
      if (index === 0) {
        window.history.pushState(null, '', '#hero');
        if (window.citadelScroll) window.citadelScroll.to(0);
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (index > 0) {
        navigateToAnchor('#' + MOBILE_NAV_SECTIONS[index - 1]);
      }
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener('click', () => {
      const index = MOBILE_NAV_SECTIONS.indexOf(currentSectionId);
      if (index >= 0 && index < MOBILE_NAV_SECTIONS.length - 1) {
        navigateToAnchor('#' + MOBILE_NAV_SECTIONS[index + 1]);
      }
    });
  }

  const setActive = (sectionId) => {
    if (sectionId === currentSectionId) {
      return;
    }

    if (sectionId !== currentSectionId) {
      currentSectionId = sectionId;
      header.dataset.activeSection = sectionId;
      header.classList.add('is-section-changing');
      if (sectionChangeTimer) {
        window.clearTimeout(sectionChangeTimer);
      }

      sectionChangeTimer = window.setTimeout(() => {
        header.classList.remove('is-section-changing');
      }, 240);
    }

    if (mobilePagerPendingHash && mobilePagerPendingHash === `#${sectionId}`) {
      mobilePagerPendingHash = '';
      mobilePagerPinnedLeft = null;
    }

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    updateIndicator();
    syncMobileNavToActive();
    updateMobileNavArrows();
    updateMobileNavVisibility();
  };

  const forceHashActiveState = (sectionId) => {
    currentSectionId = sectionId;
    header.dataset.activeSection = sectionId;
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${sectionId}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    updateIndicator();
    syncMobileNavToActive();
    updateMobileNavArrows();
    updateMobileNavVisibility();
  };

  const updateHeaderState = () => {
    refreshProbeSectionId();

    if (!hero || !aboutSection) {
      header.classList.remove('is-over-hero', 'is-content-mode');
      updateHeaderHideState();
      updateMobileHeaderSurface();
      updateLogoCoverSurface(false);
      updateMobileHeaderCompactState();
      updateMobileNavVisibility();
      return;
    }

    const headerHeight = header.offsetHeight || 0;
    const scrollTop = window.citadelScroll?.getY() ?? window.scrollY ?? 0;
    const heroBottomY = hero.offsetTop + hero.offsetHeight;
    const aboutThresholdY = Math.max(0, aboutSection.offsetTop - headerHeight - 4);
    const isOverHero = scrollTop + headerHeight < heroBottomY;
    const isContentMode = scrollTop >= aboutThresholdY;

    header.classList.toggle('is-over-hero', isOverHero);
    header.classList.toggle('is-content-mode', isContentMode);
    applyModeStyles(isContentMode, isOverHero);
    updateHeaderHideState();
    updateMobileHeaderSurface();
    updateLogoCoverSurface(isOverHero);
    updateMobileNavVisibility();
    updateMobileHeaderCompactState();
  };

  const updateActiveState = () => {
    const probeSectionId = currentProbeSectionId || refreshProbeSectionId();

    if (probeSectionId === 'hero' || shouldHideHeaderForSection(probeSectionId)) {
      setActive('');
      updateHeaderHideState();
      return;
    }

    const headerHeight = header.offsetHeight || 0;
    const probeLine = headerHeight + 8;

    const orderedIds = ['principals', 'map', 'case-studies', 'about'];
    for (const sectionId of orderedIds) {
      const section = sectionById.get(sectionId);
      if (!section) {
        continue;
      }

      if (section.getBoundingClientRect().top <= probeLine) {
        setActive(sectionId);
        return;
      }
    }
  };

  let ticking = false;
  const onScroll = () => {
    if (document.visibilityState !== 'visible') {
      updateHeaderState();
      updateActiveState();
      return;
    }

    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(() => {
      updateHeaderState();
      updateActiveState();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('citadel:scroll', onScroll);
  window.addEventListener('citadel:hero-phase', onScroll);
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', () => {
    handleIncomingHash(window.location.hash);
  });

  let isTouchPagingNav = false;
  let touchStartScrollLeft = 0;
  let touchLatestScrollLeft = 0;
  let touchStartIndex = 0;
  if (navRoot) {
    navRoot.addEventListener('touchstart', () => {
      if (!isMobileNavPager()) {
        return;
      }

      isTouchPagingNav = true;
      touchStartScrollLeft = navRoot.scrollLeft;
      touchLatestScrollLeft = navRoot.scrollLeft;
      touchStartIndex = getCurrentMobileNavIndex();
    }, { passive: true });

    const finalizeTouchPaging = () => {
      if (!isTouchPagingNav || !isMobileNavPager()) {
        return;
      }

      isTouchPagingNav = false;
      const delta = touchLatestScrollLeft - touchStartScrollLeft;
      const threshold = Math.max(24, navRoot.clientWidth * 0.12);
      let targetIndex = touchStartIndex;

      if (Math.abs(delta) >= threshold) {
        targetIndex = touchStartIndex + (delta > 0 ? 1 : -1);
      } else {
        targetIndex = getCurrentMobileNavIndex();
      }

      selectMobileNavIndex(targetIndex);
    };

    navRoot.addEventListener('touchend', finalizeTouchPaging, { passive: true });
    navRoot.addEventListener('touchcancel', finalizeTouchPaging, { passive: true });

    // Only track scroll position while an active touch gesture is in progress; the release
    // decision is made deterministically in finalizeTouchPaging, not by re-inspecting the
    // nav bar's rest position later (that reintroduced navigation triggered by our own
    // programmatic auto-centering scrolls, not genuine user gestures).
    navRoot.addEventListener('scroll', () => {
      if (!isMobileNavPager() || !isTouchPagingNav) {
        return;
      }

      touchLatestScrollLeft = navRoot.scrollLeft;
    }, { passive: true });
  }

  if (typeof ResizeObserver !== 'undefined') {
    const headerResizeObserver = new ResizeObserver(() => {
      updateHeaderState();
      updateActiveState();
      updateIndicator();
      syncMobileNavToActive();
      updateMobileNavArrows();
      updateMobileNavVisibility();
    });
    headerResizeObserver.observe(header);
  }
  document.addEventListener('visibilitychange', () => {
    ticking = false;
    updateHeaderState();
    updateActiveState();
    updateMobileHeaderCompactState();
  });

  updateHeaderState();
  updateActiveState();
  updateIndicator();
  syncMobileNavToActive();
  updateMobileNavArrows();
  updateMobileNavVisibility();
  updateMobileHeaderCompactState();

  if (window.location.hash && window.location.hash !== '#hero') {
    const initialHash = window.location.hash;
    let userHasInteracted = false;
    let anchorLayoutObserver = null;
    ['pointerdown', 'wheel', 'touchstart', 'keydown'].forEach(type => {
      window.addEventListener(type, () => {
        userHasInteracted = true;
        anchorLayoutObserver?.disconnect();
      }, { once: true, passive: true, capture: true });
    });
    const settleInitialAnchor = () => {
      if (!userHasInteracted && window.location.hash === initialHash) {
        navigateToAnchor(initialHash, { updateHistory: false, scrollBehavior: 'auto' });
      }
    };
    document.fonts?.ready.then(() => requestAnimationFrame(settleInitialAnchor));
    window.addEventListener('citadel:layout-ready', settleInitialAnchor, { once: true });
    window.addEventListener('load', settleInitialAnchor, { once: true });
    anchorLayoutObserver = new ResizeObserver(settleInitialAnchor);
    anchorLayoutObserver.observe(document.body);
    setTimeout(() => anchorLayoutObserver.disconnect(), 2000);
    window.requestAnimationFrame(() => {
      handleIncomingHash(window.location.hash);
    });
  }

  header.dataset.status = 'ready';
}
