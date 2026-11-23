/*
  Reload scroll restoration.

  Problem: much of the page's height is JS-driven (hero runway spacer, case
  studies copy heights), so the browser's native restoration fires against a
  document that is ~2000px shorter than its final layout and clamps the
  position. Separately, nav clicks leave a #hash in the URL and scrollspy-nav
  scrolls to that section top on init, overriding the user's position.

  Fix, scoped to plain reloads ONLY (navigation type 'reload'):
  1. Strip the hash before other modules initialize — scrollspy then skips its
     load-time hash jump and returns to pure scroll-driven active states, and
     the hero's plain-reload bootstrap branch applies as designed.
  2. Take manual control of restoration and re-apply the continuously saved
     scroll position once the document has grown enough to hold it.

  Non-reload navigations (fresh visits, deep links, back/forward) are left
  completely untouched: native anchoring, the hero's own within-runway restore,
  and the anchor/queue systems behave exactly as before.
*/

const getStorageKey = () => `citadel-scroll-position:${window.location.pathname}${window.location.search}`;

const isReloadNavigation = () => {
  try {
    const navEntry = performance.getEntriesByType?.('navigation')?.[0];
    if (navEntry) {
      return navEntry.type === 'reload';
    }

    return Boolean(
      performance.navigation && performance.navigation.type === performance.navigation.TYPE_RELOAD
    );
  } catch {
    return false;
  }
};

export function initScrollRestoration() {
  if (!('scrollRestoration' in window.history)) {
    return;
  }

  const storageKey = getStorageKey();

  // Continuously record the scroll position for the next reload.
  let saveRafId = null;
  const saveScrollPosition = () => {
    try {
      sessionStorage.setItem(storageKey, String(Math.round(window.citadelScroll?.getY() ?? window.scrollY ?? 0)));
    } catch {
      // Storage may be unavailable (private mode quotas); restoration is optional.
    }
  };

  window.addEventListener('scroll', () => {
    if (saveRafId !== null) {
      return;
    }

    saveRafId = window.requestAnimationFrame(() => {
      saveRafId = null;
      saveScrollPosition();
    });
  }, { passive: true });
  window.addEventListener('pagehide', saveScrollPosition);

  if (!isReloadNavigation()) {
    return;
  }

  let savedY = 0;
  try {
    savedY = Number.parseInt(sessionStorage.getItem(storageKey) || '', 10);
  } catch {
    savedY = 0;
  }

  if (!Number.isFinite(savedY) || savedY <= 0) {
    return;
  }

  window.history.scrollRestoration = 'manual';

  // Drop the hash so scrollspy-nav does not jump to a section top on init and
  // active-nav state returns to scroll-driven probing after the restore.
  if (window.location.hash) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }

  // Suspend browser scroll anchoring during the restoration window so late
  // image loads cannot drag the restored position around.
  document.documentElement.style.overflowAnchor = 'none';

  let settleObserver = null;
  let stabilizeTimerId = 0;

  const stopStabilizing = () => {
    if (settleObserver) {
      settleObserver.disconnect();
      settleObserver = null;
    }

    if (stabilizeTimerId) {
      window.clearTimeout(stabilizeTimerId);
      stabilizeTimerId = 0;
    }

    document.documentElement.style.overflowAnchor = '';
  };

  // If the user starts interacting before the layout settles, let them win.
  let userTookOver = false;
  const markUserTakeover = () => {
    userTookOver = true;
    stopStabilizing();
  };
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((type) => {
    window.addEventListener(type, markUserTakeover, { passive: true, once: true, capture: true });
  });

  const assertScrollPosition = () => {
    if (userTookOver) {
      return;
    }

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (window.citadelScroll) window.citadelScroll.to(Math.min(savedY, maxScroll), false);
    else window.scrollTo({ top: Math.min(savedY, maxScroll), behavior: 'instant' });
  };

  // Every document height change (late images, font swaps, JS-sized sections)
  // re-asserts the position until the stabilization window closes.
  const startStabilizing = () => {
    if (userTookOver || typeof ResizeObserver === 'undefined') {
      stopStabilizing();
      return;
    }

    settleObserver = new ResizeObserver(() => {
      assertScrollPosition();
    });
    settleObserver.observe(document.getElementById('smooth-content') || document.body);
    stabilizeTimerId = window.setTimeout(stopStabilizing, 4500);
  };

  // Restore once the JS-driven layout (hero runway, section heights) has grown
  // enough to hold the target position; fall back to a clamped best effort.
  const deadline = performance.now() + 3000;
  const attemptRestore = () => {
    if (userTookOver) {
      stopStabilizing();
      return;
    }

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (maxScroll >= savedY || performance.now() > deadline) {
      assertScrollPosition();
      startStabilizing();
      return;
    }

    window.requestAnimationFrame(attemptRestore);
  };

  window.requestAnimationFrame(attemptRestore);
}
