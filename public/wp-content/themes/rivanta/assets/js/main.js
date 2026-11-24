// Bump this when you want to force all clients to load fresh JS.
// Changing this value saves the file with a new mtime, which causes
// rivanta_asset_version() in PHP to append a new ?ver= query string.
const THEME_JS_VERSION = '0.3.1';

import { initScrollRestoration } from './modules/scroll-restoration.js';
import { initHeroCanvasSequence } from './modules/hero-native-scroll.js';
import { initPartnersMarquee } from './modules/partners-marquee.js';
import { initCaseStudiesCarousel } from './modules/case-studies-carousel.js';
import { initScrollspyNav } from './modules/scrollspy-nav.js';
import { initFooterParallaxGradient } from './modules/footer-parallax-gradient.js';
import { initRandomizedHomepageLists } from './modules/randomized-homepage-lists.js';
import { initAboutGallery } from './modules/about-gallery.js';
import { initMapLayout } from './modules/map-layout.js';

const modules = [
  // Must run first: strips reload hashes and takes over restoration before
  // hero/scrollspy read location.hash or scroll state during their init.
  initScrollRestoration,
  initHeroCanvasSequence,
  initMapLayout,
  initPartnersMarquee,
  initAboutGallery,
  initCaseStudiesCarousel,
  initRandomizedHomepageLists,
  initScrollspyNav,
];

const initWhenNearViewport = (selector, init, rootMargin = '800px 0px') => {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  const run = () => {
    Promise.resolve(init()).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Rivanta deferred module failed to initialize', error);
    });
  };

  if (typeof IntersectionObserver === 'undefined') {
    run();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) {
      return;
    }

    observer.disconnect();
    run();
  }, { rootMargin });

  observer.observe(target);
};

const getInteractiveMapModulePath = () => {
  const experiment = new URLSearchParams(window.location.search).get('experiment');
  if (experiment === '1') {
    return './modules/interactive-map-experiment-1.js';
  }

  if (experiment === '2') {
    return './modules/interactive-map-experiment-2.js';
  }

  if (experiment === '3') {
    return './modules/interactive-map-experiment-3.js';
  }

  return './modules/interactive-map.js';
};

let mapInitialization = null;
const initInteractiveMapModule = () => {
  if (!mapInitialization) {
    mapInitialization = import(getInteractiveMapModulePath()).then((module) => module.initInteractiveMap?.());
  }
  return mapInitialization;
};

const boot = () => {
  modules.forEach((init) => {
    try {
      init();
    } catch (error) {
      // Keep the page resilient if a module fails during early build-out.
      // eslint-disable-next-line no-console
      console.error('Rivanta module failed to initialize', error);
    }
  });

  initWhenNearViewport('[data-module="interactive-map"]', initInteractiveMapModule);
  // Warm the canvas during idle time instead of compiling its scene on the
  // first scroll into the map. The observer and idle path share one promise.
  const warmMap = () => initInteractiveMapModule().catch((error) => console.error('Rivanta map initialization failed', error));
  if (typeof requestIdleCallback === 'function') requestIdleCallback(warmMap, { timeout: 1200 });
  else setTimeout(warmMap, 200);
  initWhenNearViewport('[data-module="footer-parallax-gradient"]', initFooterParallaxGradient);
};

window.bootRivantaModules = boot;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
