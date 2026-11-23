export function initRandomizedHomepageLists() {
  const lists = document.querySelectorAll('[data-randomize-list]');
  if (lists.length === 0) {
    return;
  }

  const applyFooterPartnerDesktopRows = (list) => {
    if (!list.classList.contains('citadel-footer-brand-partners')) {
      return;
    }

    const count = list.children.length;
    if (count < 1) {
      list.style.removeProperty('--footer-partner-desktop-rows');
      return;
    }

    list.style.setProperty('--footer-partner-desktop-rows', String(Math.ceil(count / 2)));
  };

  const shuffleItems = (items) => {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return items;
  };

  lists.forEach((list) => {
    const items = Array.from(list.children);
    if (items.length < 2) {
      applyFooterPartnerDesktopRows(list);
      return;
    }

    // Product verticals have an editorial order; retain the existing layout
    // initialization without shuffling those explicitly ordered lists.
    if (!list.hasAttribute('data-preserve-order')) list.replaceChildren(...shuffleItems(items));
    applyFooterPartnerDesktopRows(list);
  });
}
