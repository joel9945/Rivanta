export function initAboutGallery() {
  const module = document.querySelector('[data-module="about-gallery"]');
  if (!module) {
    return;
  }

  const viewport = module.querySelector('[data-about-gallery-viewport]');
  const slides = module.querySelectorAll('[data-about-gallery-slide]');
  const prevButton = module.querySelector('[data-carousel-prev]');
  const nextButton = module.querySelector('[data-carousel-next]');

  if (!viewport || slides.length === 0) {
    module.dataset.status = 'empty';
    return;
  }

  const section = module.closest('.citadel-about');
  const compactLayout = window.matchMedia('(max-width: 767px)');
  const copyFields = [
    ['[data-about-copy-title]', 'aboutTitle'],
    ['[data-about-copy-primary]', 'aboutPrimary'],
    ['[data-about-copy-secondary]', 'aboutSecondary'],
    ['[data-about-copy-focus]', 'aboutFocus'],
  ].map(([selector, key]) => [section?.querySelector(selector), key]);
  const syncCopy = (index) => {
    const slide = slides[index];
    if (!slide) return;
    copyFields.forEach(([node, key]) => {
      const text = (compactLayout.matches && slide.dataset[`${key}Mobile`]) || slide.dataset[key];
      if (node && text && node.textContent !== text) node.textContent = text;
    });
    module.dataset.activeSlide = String(index);
  };
  syncCopy(0);
  compactLayout.addEventListener('change', () => syncCopy(Number(module.dataset.activeSlide || 0)));

  // A single photo needs no carousel behavior (arrows are not rendered).
  if (slides.length < 2) {
    module.dataset.status = 'static';
    return;
  }

  import('../vendor/embla-carousel-8.5.1.esm.js')
    .then(({ default: EmblaCarousel }) => {
      const embla = EmblaCarousel(viewport, {
        loop: true,
        axis: 'x',
        align: 'start',
        duration: 20,
        dragFree: false,
      });

      const syncSelectedCopy = () => syncCopy(embla.selectedScrollSnap());
      embla.on('select', syncSelectedCopy);
      embla.on('reInit', syncSelectedCopy);
      syncSelectedCopy();

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          embla.scrollPrev();
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          embla.scrollNext();
        });
      }

      module.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          embla.scrollPrev();
        }

        if (event.key === 'ArrowRight') {
          embla.scrollNext();
        }
      });

      module.dataset.status = 'ready';
    })
    .catch((error) => {
      module.dataset.status = 'embla-load-failed';
      // eslint-disable-next-line no-console
      console.error('Embla failed to load for about gallery', error);
    });
}
