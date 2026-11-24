import { BrandLogo } from './BrandLogo';

export function SiteHeader({ isSubpage = false }) {
  const links = {
    home: '/',
    about: isSubpage ? '/#about' : '#about',
    products: isSubpage ? '/#case-studies' : '#case-studies',
    ecosystem: isSubpage ? '/#map' : '#map',
    people: isSubpage ? '/#principals' : '#principals',
    contact: isSubpage ? '/#find-partner' : '#find-partner',
  };

  return (
    <header
      className={`rivanta-site-header${isSubpage ? ' is-content-mode' : ''}`}
      {...(!isSubpage ? { 'data-module': 'scrollspy-nav' } : {})}
      style={
        isSubpage
          ? {
              backgroundColor: 'rgba(10, 10, 10, 0.94)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }
          : undefined
      }
      suppressHydrationWarning
    >
      <div
        className="rivanta-site-header-inner flex items-center justify-between gap-4 md:px-1 lg:px-6 lg:pt-2"
        suppressHydrationWarning
      >
        <a
          aria-label="Rivanta Green Innovative Ventures Private Limited Home"
          className="rivanta-site-header-brand"
          href={links.home}
          suppressHydrationWarning
        >
          <BrandLogo placement="header" />
          <span className="screen-reader-text">Rivanta</span>
        </a>
        <div className="logo-cover" suppressHydrationWarning></div>
        <div className="rivanta-site-nav-wrap" data-mobile-nav-wrap="" suppressHydrationWarning>
          <nav
            aria-label="Primary"
            className="rivanta-site-nav relative"
            style={
              isSubpage
                ? {
                    background: 'rgba(22, 22, 22, 0.92)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)',
                  }
                : undefined
            }
            suppressHydrationWarning
          >
            <ul className="rivanta-site-nav-list flex items-center gap-4" data-nav-list="" suppressHydrationWarning>
              <li className="rivanta-site-nav-item" suppressHydrationWarning>
                <a className="rivanta-site-nav-link" suppressHydrationWarning href={links.about}>
                  About
                </a>
              </li>
              <li className="rivanta-site-nav-item" suppressHydrationWarning>
                <a className="rivanta-site-nav-link" suppressHydrationWarning href={links.products}>
                  Products
                </a>
              </li>
              <li className="rivanta-site-nav-item" suppressHydrationWarning>
                <a className="rivanta-site-nav-link" suppressHydrationWarning href={links.ecosystem}>
                  Ecosystem
                </a>
              </li>
              <li className="rivanta-site-nav-item" suppressHydrationWarning>
                <a className="rivanta-site-nav-link" suppressHydrationWarning href={links.people}>
                  People
                </a>
              </li>
            </ul>
            <span
              aria-hidden="true"
              className="rivanta-site-nav-indicator"
              data-nav-indicator=""
              suppressHydrationWarning
            ></span>
          </nav>
          <button
            aria-label="Previous section"
            className="rivanta-mobile-nav-arrow rivanta-mobile-nav-arrow--prev"
            data-mobile-nav-prev=""
            hidden={true}
            suppressHydrationWarning
          >
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            aria-label="Next section"
            className="rivanta-mobile-nav-arrow rivanta-mobile-nav-arrow--next"
            data-mobile-nav-next=""
            hidden={true}
            suppressHydrationWarning
          >
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <a
          className="rivanta-site-header-cta"
          href={links.contact}
          style={
            isSubpage
              ? {
                  background: 'var(--rivanta-orange, #f7953e)',
                  color: '#000000',
                }
              : undefined
          }
          suppressHydrationWarning
        >
          Contact Rivanta
        </a>
      </div>
    </header>
  );
}
