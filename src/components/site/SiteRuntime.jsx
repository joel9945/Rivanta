'use client';

import { useEffect } from 'react';

function createScrollRuntime() {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const notify = () => window.dispatchEvent(new Event('rivanta:scroll'));
  let pendingAnchor = null;
  let anchorFrame = 0;
  let destroyed = false;
  const cancelAnchor = () => {
    pendingAnchor = null;
    cancelAnimationFrame(anchorFrame);
    anchorFrame = 0;
  };
  document.documentElement.dataset.scrollEngine = 'native';

  const bridge = {
    users: 0,
    disposeTimer: null,
    smoother: {
      paused: () => {},
      scrollTop: () => window.scrollY,
      scrollTo: (top, smooth = true) => {
        window.scrollTo({
          top,
          behavior: smooth && !motion.matches ? 'smooth' : 'auto',
        });
      },
    },
    getY: () => window.scrollY,
    getTop: (element) => element ? element.getBoundingClientRect().top + window.scrollY : 0,
    to: (top, smooth = true) => {
      cancelAnchor();
      window.scrollTo({
        top,
        behavior: smooth && !motion.matches ? 'smooth' : 'auto',
      });
    },
    toSection: (element, offset, smooth = true) => {
      cancelAnchor();
      if (!element) return;
      const off = typeof offset === 'function' ? offset() : (offset || 0);
      const destination = () => Math.max(0, element.getBoundingClientRect().top + window.scrollY - off);
      pendingAnchor = smooth && !motion.matches ? destination : null;
      window.scrollTo({
        top: destination(),
        behavior: smooth && !motion.matches ? 'smooth' : 'auto',
      });
    },
    pinHero: () => null,
  };
  window.rivantaScroll = bridge;

  let scrollTicking = false;
  const onScroll = () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        notify();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  const inputEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
  inputEvents.forEach((type) => window.addEventListener(type, cancelAnchor, { passive: true }));

  bridge.destroy = () => {
    destroyed = true;
    cancelAnchor();
    window.removeEventListener('scroll', onScroll);
    inputEvents.forEach((type) => window.removeEventListener(type, cancelAnchor));
    delete window.rivantaScroll;
    delete document.documentElement.dataset.scrollEngine;
  };

  return bridge;
}

export default function SiteRuntime() {
  useEffect(() => {
    const wrapper = document.getElementById('smooth-wrapper');
    const content = document.getElementById('smooth-content');
    if (!wrapper || !content) return;

    const runtime = window.rivantaScroll || createScrollRuntime();
    clearTimeout(runtime.disposeTimer);
    runtime.users = (runtime.users || 0) + 1;

    if (typeof window.bootRivantaModules === 'function') {
      window.bootRivantaModules();
    } else if (!document.querySelector('script[data-rivanta-runtime]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = '/wp-content/themes/rivanta/assets/js/main.js?ver=india-map-20261118';
      script.dataset.rivantaRuntime = 'true';
      document.body.appendChild(script);
    }

    return () => {
      runtime.users -= 1;
      runtime.disposeTimer = setTimeout(() => {
        if (runtime.users <= 0 && runtime.destroy) runtime.destroy();
      }, 50);
    };
  }, []);
  return null;
}
