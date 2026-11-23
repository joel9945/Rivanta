export function initCaseStudiesCarousel() {
  const module = document.querySelector('[data-module="case-studies-carousel"]');
  if (!module) {
    return;
  }
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionState = (isReducedMotion) => {
    module.dataset.motion = isReducedMotion ? 'reduced' : 'standard';
  };
  applyMotionState(reducedMotionQuery.matches);

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', (event) => {
      applyMotionState(event.matches);
    });
  } else if (typeof reducedMotionQuery.addListener === 'function') {
    reducedMotionQuery.addListener((event) => {
      applyMotionState(event.matches);
    });
  }

  const viewport = module.querySelector('[data-carousel-viewport]');
  const prevButton = module.querySelector('[data-carousel-prev]');
  const nextButton = module.querySelector('[data-carousel-next]');
  const dotsRoot = module.querySelector('[data-carousel-dots]');
  const modal = module.querySelector('[data-case-study-modal]');
  const modalBackdrop = modal ? modal.querySelector('[data-case-study-modal-dismiss]') : null;
  const modalCloseButton = modal ? modal.querySelector('[data-case-study-modal-close]') : null;
  const modalTitle = modal ? modal.querySelector('#case-study-modal-title') : null;
  const modalPartner = modal ? modal.querySelector('[data-case-study-modal-partner]') : null;
  const modalLogoWrap = modal ? modal.querySelector('[data-case-study-modal-logo-wrap]') : null;
  const modalLogo = modal ? modal.querySelector('[data-case-study-modal-logo]') : null;
  const modalDescription = modal ? modal.querySelector('#case-study-modal-description') : null;
  const modalMeta = modal ? modal.querySelector('[data-case-study-modal-meta]') : null;
  const modalMediaWrap = modal ? modal.querySelector('[data-case-study-modal-media-wrap]') : null;
  const modalImage = modal ? modal.querySelector('[data-case-study-modal-image]') : null;
  const modalCta = modal ? modal.querySelector('[data-case-study-modal-cta]') : null;
  const modalCard = modal ? modal.querySelector('[data-case-study-modal-card]') : null;
  const modalState = {
    isOpen: false,
    opener: null,
  };

  const modalOriginalParent = modal ? modal.parentElement : null;
  if (modal) {
    module.dataset.caseStudyModalState = 'closed';
  }

  const getModalFocusableElements = () => {
    if (!modal) {
      return [];
    }

    return Array.from(
      modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((element) => !element.hasAttribute('hidden'));
  };

  const closeModal = () => {
    if (!modal || !modalState.isOpen) {
      return;
    }

    modal.hidden = true;
    if (modal && modalOriginalParent && modal.parentElement === document.body) {
      modalOriginalParent.appendChild(modal);
    }
    window.citadelScroll?.smoother.paused(false);
    modalState.isOpen = false;
    document.documentElement.classList.remove('is-case-study-modal-open');
    document.body.classList.remove('is-case-study-modal-open');
    module.dataset.caseStudyModalState = 'closed';

    if (modalState.opener && typeof modalState.opener.focus === 'function') {
      modalState.opener.focus({ preventScroll: true });
    }

    modalState.opener = null;
  };

  const openModalFromTrigger = (trigger) => {
    if (!modal || !trigger || !modalTitle || !modalDescription) {
      return;
    }

    const titleText = trigger.dataset.caseStudyTitle || 'Case Study';
    const partnerText = trigger.dataset.caseStudyPartner || '';
    const descriptionSource = trigger.querySelector('[data-case-study-description-source]');
    const descriptionText = descriptionSource ? descriptionSource.textContent.trim() : (trigger.dataset.caseStudyDescription || '');
    const metaText = trigger.dataset.caseStudyMeta || '';
    const imageUrl = trigger.dataset.caseStudyImageUrl || '';
    const imageAlt = trigger.dataset.caseStudyImageAlt || titleText;
    const logoUrl = trigger.dataset.caseStudyLogoUrl || '';
    const logoAlt = trigger.dataset.caseStudyLogoAlt || partnerText || 'Partner logo';
    const ctaUrl = trigger.dataset.caseStudyCtaUrl || '';
    const ctaLabel = trigger.dataset.caseStudyCtaLabel || 'Visit Project';
    const theme = trigger.dataset.caseStudyTheme === 'dark' ? 'dark' : 'light';

    modalTitle.textContent = titleText;
    modalDescription.textContent = descriptionText;

    if (modalLogoWrap && modalLogo) {
      if (logoUrl) {
        modalLogoWrap.hidden = false;
        modalLogo.src = logoUrl;
        modalLogo.alt = logoAlt;
      } else {
        modalLogoWrap.hidden = true;
        modalLogo.removeAttribute('src');
        modalLogo.alt = '';
      }
    }

    if (modalPartner) {
      if (!logoUrl && partnerText) {
        modalPartner.hidden = false;
        modalPartner.textContent = partnerText;
      } else {
        modalPartner.hidden = true;
        modalPartner.textContent = '';
      }
    }

    if (modalMeta) {
      if (metaText) {
        modalMeta.hidden = false;
        modalMeta.textContent = metaText;
      } else {
        modalMeta.hidden = true;
        modalMeta.textContent = '';
      }
    }

    if (modalMediaWrap && modalImage) {
      if (imageUrl) {
        const imageSrcset = trigger.dataset.caseStudyImageSrcset || '';
        const imageSizes = trigger.dataset.caseStudyImageSizes || '';
        modalMediaWrap.hidden = false;
        modalImage.src = imageUrl;
        if (imageSrcset) {
          modalImage.srcset = imageSrcset;
          // The modal media column is ~45vw on desktop, full width on mobile.
          modalImage.sizes = imageSizes || '(max-width: 767px) 100vw, 45vw';
        } else {
          modalImage.removeAttribute('srcset');
          modalImage.removeAttribute('sizes');
        }
        modalImage.alt = imageAlt;
      } else {
        modalMediaWrap.hidden = true;
        modalImage.removeAttribute('src');
        modalImage.removeAttribute('srcset');
        modalImage.removeAttribute('sizes');
        modalImage.alt = '';
      }
    }

    if (modalCta) {
      if (ctaUrl) {
        modalCta.hidden = false;
        modalCta.href = ctaUrl;
        modalCta.textContent = ctaLabel;
        modalCta.setAttribute('aria-label', ctaLabel);
      } else {
        modalCta.hidden = true;
        modalCta.removeAttribute('href');
        modalCta.textContent = '';
      }
    }

    if (modalCard) {
      const isDarkTheme = theme === 'dark';
      modalCard.classList.toggle('is-dark', isDarkTheme);
      modalCard.classList.toggle('bg-black', isDarkTheme);
      modalCard.classList.toggle('text-white', isDarkTheme);
      modalCard.classList.toggle('bg-white', !isDarkTheme);
      modalCard.classList.toggle('text-black', !isDarkTheme);
    }

    if (modal && modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
    modalState.opener = trigger;
    modalState.isOpen = true;
    modal.hidden = false;
    window.citadelScroll?.smoother.paused(true);
    module.dataset.caseStudyModalState = 'open';
    document.documentElement.classList.add('is-case-study-modal-open');
    document.body.classList.add('is-case-study-modal-open');

    if (modalCloseButton) {
      modalCloseButton.focus({ preventScroll: true });
    }
  };

  const isCtaEvent = (eventTarget) => {
    return Boolean(eventTarget && eventTarget.closest('[data-case-study-cta]'));
  };

  const triggerElements = Array.from(module.querySelectorAll('[data-case-study-trigger]'));

  triggerElements.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      if (isCtaEvent(event.target)) {
        return;
      }

      // The modal exists only for slides whose copy is cut off (see
      // syncCopyHeights); fully-visible slides have nothing more to show.
      if (trigger.dataset.caseStudyExpandable === '0') {
        return;
      }

      openModalFromTrigger(trigger);
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      if (trigger.dataset.caseStudyExpandable === '0') {
        return;
      }

      event.preventDefault();
      openModalFromTrigger(trigger);
    });
  });

  // Uniform copy heights: every slide's title+description block gets the
  // height of the tallest one, capped per breakpoint. Slides whose natural
  // copy exceeds the applied height get an ellipsized description and keep
  // the full-detail modal; slides that fit lose the modal affordance.
  const COPY_MAX_HEIGHT_MOBILE = 200;
  const COPY_MAX_HEIGHT_TABLET = 400;
  const COPY_MAX_HEIGHT_DESKTOP = 500;
  const copyNodes = Array.from(module.querySelectorAll('[data-case-study-copy]'));
  let postCopySync = null;

  const getCopyMaxHeight = () => {
    const width = window.innerWidth;
    if (width >= 1140) {
      return COPY_MAX_HEIGHT_DESKTOP;
    }

    if (width >= 768) {
      return COPY_MAX_HEIGHT_TABLET;
    }

    return COPY_MAX_HEIGHT_MOBILE;
  };

  const syncCopyHeights = () => {
    if (!copyNodes.length) {
      return;
    }

    // Reset to natural flow before measuring.
    module.style.removeProperty('--case-studies-copy-height');
    copyNodes.forEach((copy) => {
      copy.style.removeProperty('--case-studies-desc-lines');
    });

    const naturalHeights = copyNodes.map((copy) => copy.scrollHeight);
    const target = Math.min(Math.max(...naturalHeights), getCopyMaxHeight());
    module.style.setProperty('--case-studies-copy-height', `${target}px`);

    copyNodes.forEach((copy, index) => {
      const trigger = copy.closest('[data-case-study-trigger]');
      const isCut = naturalHeights[index] > target + 1;

      if (isCut) {
        const description = copy.querySelector('.citadel-case-studies-description');
        if (description) {
          const lineHeight = Number.parseFloat(window.getComputedStyle(description).lineHeight) || 20;
          const availableHeight = target - description.offsetTop;
          const fitLines = Math.max(1, Math.floor(availableHeight / lineHeight));
          copy.style.setProperty('--case-studies-desc-lines', String(fitLines));
        }
      }

      if (!trigger) {
        return;
      }

      // The refined cards show a concise summary and keep the fuller pathway
      // explanation in the existing dialog, even when the summary fits.
      const expandable = isCut || trigger.dataset.caseStudyDetailMode === 'summary';
      trigger.dataset.caseStudyExpandable = expandable ? '1' : '0';
      if (expandable) {
        trigger.setAttribute('role', 'button');
        trigger.tabIndex = 0;
      } else {
        trigger.removeAttribute('role');
        trigger.removeAttribute('tabindex');
      }
    });

    if (typeof postCopySync === 'function') {
      postCopySync();
    }
  };

  syncCopyHeights();
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      syncCopyHeights();
    });
  }

  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', () => {
      closeModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', () => {
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener('keydown', (event) => {
      if (!modalState.isOpen) {
        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = getModalFocusableElements();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  if (!viewport) {
    module.dataset.status = 'missing-viewport';
    return;
  }

  import('../vendor/embla-carousel-8.5.1.esm.js')
    .then(({ default: EmblaCarousel }) => {
      const CAROUSEL_DURATION = 20;
      const embla = EmblaCarousel(viewport, {
        loop: true,
        axis: 'x',
        // Center the focused slide in the viewport at every breakpoint;
        // neighbours peek symmetrically on both sides.
        align: 'center',
        duration: CAROUSEL_DURATION,
        dragFree: false,
      });
      let selectedIndex = 0;
      const isMobileViewport = () => window.matchMedia('(max-width: 767px)').matches;
      const setTouchSwipeState = (isSwiping) => {
        if (!isMobileViewport()) {
          module.dataset.touchSwiping = '0';
          return;
        }

        module.dataset.touchSwiping = isSwiping ? '1' : '0';
      };

      setTouchSwipeState(false);

      const updateButtons = () => {
        if (prevButton) {
          prevButton.disabled = !embla.canScrollPrev();
        }

        if (nextButton) {
          nextButton.disabled = !embla.canScrollNext();
        }
      };

      const hideArrows = () => {
        module.dataset.arrowsHidden = '1';
      };

      const showArrows = () => {
        module.dataset.arrowsHidden = '0';
      };

      const updateViewportState = () => {
        module.dataset.viewportSize = window.innerWidth >= 1536 ? '2xl' : 'base';
      };

      // Anchor the arrows to the focused card: button centers sit on the
      // card's left/right edges, vertically centered on the card. Snaps are
      // center-aligned, so the target edges derive from the carousel root's
      // center and the card size — stable even while a slide is mid-flight.
      const carouselRoot = module.querySelector('[data-carousel]');

      const updateArrowPositions = () => {
        if (!carouselRoot) {
          return;
        }

        const card = embla.slideNodes()[embla.selectedScrollSnap()]?.querySelector('[data-case-study-trigger]');
        if (!card) {
          return;
        }

        const rootRect = carouselRoot.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        if (rootRect.width <= 0 || cardRect.width <= 0) {
          return;
        }

        // This only runs while the carousel is at rest (init/settle/resize),
        // so the focused card's live edges are its final resting edges.
        const leftX = cardRect.left - rootRect.left;
        const rightX = cardRect.right - rootRect.left;
        const centerY = (cardRect.top - rootRect.top) + (cardRect.height / 2);
        carouselRoot.style.setProperty('--case-studies-arrow-left-x', `${Math.round(leftX)}px`);
        carouselRoot.style.setProperty('--case-studies-arrow-right-x', `${Math.round(rightX)}px`);
        carouselRoot.style.setProperty('--case-studies-arrow-y', `${Math.round(centerY)}px`);
      };

      // Per-slide background cross-fade: two stacked layers behind the
      // carousel; the idle layer gets the next image, then is-active flips.
      const bgLayers = Array.from(module.querySelectorAll('[data-carousel-bg-layer]'));
      const fallbackBgUrl = module.dataset.caseStudiesFallbackBg || '';
      const warmedBgUrls = new Set();
      let activeBgLayerIndex = -1;
      let currentBgUrl = null;
      let bgSwapToken = 0;

      const getSlideBgUrl = (slideNode) => {
        const trigger = slideNode?.querySelector('[data-case-study-trigger]');
        return trigger?.dataset.caseStudyBgUrl || fallbackBgUrl;
      };

      const warmBgUrl = (url) => {
        if (!url || warmedBgUrls.has(url)) {
          return;
        }

        warmedBgUrls.add(url);
        const img = new Image();
        img.src = url;
      };

      const applySlideBackground = () => {
        if (bgLayers.length < 2) {
          return;
        }

        const slideNodes = embla.slideNodes();
        const index = embla.selectedScrollSnap();
        const url = getSlideBgUrl(slideNodes[index]);
        if (url === currentBgUrl) {
          return;
        }

        currentBgUrl = url;
        const token = ++bgSwapToken;

        // Pre-warm neighbours so upcoming fades never pop in unloaded.
        warmBgUrl(getSlideBgUrl(slideNodes[(index + 1) % slideNodes.length]));
        warmBgUrl(getSlideBgUrl(slideNodes[(index - 1 + slideNodes.length) % slideNodes.length]));

        const swapTo = (targetUrl) => {
          if (token !== bgSwapToken) {
            return;
          }

          const nextIndex = activeBgLayerIndex === 0 ? 1 : 0;
          bgLayers[nextIndex].style.backgroundImage = targetUrl ? `url("${targetUrl}")` : '';
          bgLayers[nextIndex].classList.toggle('is-active', Boolean(targetUrl));
          if (activeBgLayerIndex >= 0) {
            bgLayers[activeBgLayerIndex].classList.remove('is-active');
          }
          activeBgLayerIndex = nextIndex;
        };

        if (!url) {
          swapTo('');
          return;
        }

        // Decode before fading so the incoming layer never paints half-loaded.
        const loader = new Image();
        loader.src = url;
        const startSwap = () => swapTo(url);
        if (typeof loader.decode === 'function') {
          loader.decode().then(startSwap).catch(startSwap);
        } else {
          loader.onload = startSwap;
          loader.onerror = startSwap;
        }
      };

      let scrollRafId = null;
      let arrowRevealTimerId = null;

      // Reveal shortly after the interaction rather than waiting for Embla's
      // 'settle' event — settle trails the visible arrival of the slide by a
      // long inertial tail and makes the arrows feel sluggish.
      const scheduleArrowReveal = (delayMs = 250) => {
        if (arrowRevealTimerId !== null) {
          window.clearTimeout(arrowRevealTimerId);
        }

        arrowRevealTimerId = window.setTimeout(() => {
          arrowRevealTimerId = null;
          showArrows();
        }, delayMs);
      };

      const updateDots = () => {
        if (!dotsRoot) {
          return;
        }

        selectedIndex = embla.selectedScrollSnap();
        Array.from(dotsRoot.querySelectorAll('button')).forEach((dot, index) => {
          const isPast = index < selectedIndex;
          const isActive = index === selectedIndex;
          dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
          dot.tabIndex = isActive ? 0 : -1;
          dot.classList.toggle('is-past', isPast);
          dot.classList.toggle('is-active', isActive);
          dot.classList.toggle('is-future', !isPast && !isActive);
          if (isActive) {
            dot.style.setProperty('--active-thumb-position', '0');
          } else {
            dot.style.removeProperty('--active-thumb-position');
          }
        });
      };

      const updateActiveSwipeProgress = () => {
        if (!dotsRoot) {
          return;
        }

        const snapCount = embla.scrollSnapList().length;
        if (snapCount < 2) {
          return;
        }

        const scrollProgress = embla.scrollProgress();
        const floatingIndex = scrollProgress * (snapCount - 1);
        const delta = Math.max(-1, Math.min(1, floatingIndex - selectedIndex));
        const thumbPosition = Math.max(0, Math.min(1, delta));
        const activeDot = dotsRoot.querySelector('button.is-active');
        if (activeDot) {
          activeDot.style.setProperty('--active-thumb-position', String(thumbPosition));
        }
      };

      if (dotsRoot) {
        dotsRoot.innerHTML = '';
        embla.scrollSnapList().forEach((_, index) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'citadel-carousel-dot is-future';
          dot.setAttribute('role', 'tab');
          dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
          dot.addEventListener('click', () => embla.scrollTo(index));
          dotsRoot.appendChild(dot);
        });
      }

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          hideArrows();
          embla.scrollPrev();
          scheduleArrowReveal();
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          hideArrows();
          embla.scrollNext();
          scheduleArrowReveal();
        });
      }

      viewport.addEventListener('touchstart', () => {
        setTouchSwipeState(true);
      }, { passive: true });

      const clearTouchSwipeState = () => {
        setTouchSwipeState(false);
      };

      viewport.addEventListener('touchend', clearTouchSwipeState, { passive: true });
      viewport.addEventListener('touchcancel', clearTouchSwipeState, { passive: true });

      module.addEventListener('keydown', (event) => {
        if (modalState.isOpen) {
          return;
        }

        if (event.key === 'ArrowLeft') {
          hideArrows();
          embla.scrollPrev();
          scheduleArrowReveal();
        }

        if (event.key === 'ArrowRight') {
          hideArrows();
          embla.scrollNext();
          scheduleArrowReveal();
        }
      });

      embla.on('select', () => {
        selectedIndex = embla.selectedScrollSnap();
        updateButtons();
        updateDots();
        updateActiveSwipeProgress();
        clearTouchSwipeState();
        applySlideBackground();
      });

      embla.on('scrollStart', () => {
        hideArrows();
      });

      embla.on('pointerDown', () => {
        hideArrows();
        setTouchSwipeState(true);
      });

      embla.on('pointerUp', () => {
        clearTouchSwipeState();
        scheduleArrowReveal();
      });

      embla.on('settle', () => {
        clearTouchSwipeState();
        updateArrowPositions();
        showArrows();
      });

      embla.on('reInit', () => {
        selectedIndex = embla.selectedScrollSnap();
        updateButtons();
        updateDots();
        updateActiveSwipeProgress();
        clearTouchSwipeState();
        updateArrowPositions();
        showArrows();
      });

      embla.on('scroll', () => {
        if (scrollRafId !== null) {
          return;
        }

        scrollRafId = window.requestAnimationFrame(() => {
          scrollRafId = null;
          updateActiveSwipeProgress();
        });
      });

      window.addEventListener('resize', () => {
        updateViewportState();
        syncCopyHeights();
        updateArrowPositions();
      });

      // Re-anchor arrows whenever copy heights change card geometry.
      postCopySync = updateArrowPositions;

      selectedIndex = embla.selectedScrollSnap();
      updateViewportState();
      updateButtons();
      updateDots();
      updateActiveSwipeProgress();
      applySlideBackground();
      syncCopyHeights();
      updateArrowPositions();
      showArrows();
      module.dataset.status = 'ready';
      window.dispatchEvent(new Event('citadel:layout-ready'));
    })
    .catch((error) => {
      module.dataset.status = 'embla-load-failed';
      // eslint-disable-next-line no-console
      console.error('Embla failed to load for case studies carousel', error);
    });
}
