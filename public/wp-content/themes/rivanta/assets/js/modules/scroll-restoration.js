/*
  Top-of-page reload scroll management.
  Ensures that on reload / fresh entry, the site cleanly starts at the top (y = 0),
  showcasing the opening hero sequence professionally and preventing awkward mid-page jumps.
*/

export function initScrollRestoration() {
  if (typeof window === 'undefined') {
    return;
  }

  // Disable browser automatic scroll restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Clear any previously saved scroll keys
  try {
    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith('rivanta-scroll-position:')) {
        sessionStorage.removeItem(key);
      }
    }
  } catch (_) {}

  // If there is no deep anchor hash, ensure we are at the top
  const scrollToTop = () => {
    if (!window.location.hash) {
      if (window.rivantaScroll?.to) {
        window.rivantaScroll.to(0, false);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }
  };

  // Run immediately and on next frame to catch any late layout shifts
  scrollToTop();
  window.requestAnimationFrame(scrollToTop);
  window.addEventListener('load', scrollToTop, { once: true });

  // On beforeunload, reset scroll to 0 so the browser navigation cache remembers top
  window.addEventListener('beforeunload', () => {
    if (!window.location.hash) {
      try {
        window.scrollTo(0, 0);
      } catch (_) {}
    }
  });
}
