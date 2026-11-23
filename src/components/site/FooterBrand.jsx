export function FooterBrand({ isSubpage = false }) {
  const exploreLinks = [
    { label: 'Home', href: isSubpage ? '/' : '#hero' },
    { label: 'About Rivanta', href: isSubpage ? '/#about' : '#about' },
    { label: 'Products & plant strengths', href: isSubpage ? '/#case-studies' : '#case-studies' },
    { label: 'Our ecosystem', href: isSubpage ? '/#map' : '#map' },
    { label: 'People & communities', href: isSubpage ? '/#principals' : '#principals' },
    { label: 'Contact our team', href: isSubpage ? '/#find-partner' : '#find-partner' },
  ];

  return (
    <section aria-label="Rivanta footer" className="citadel-footer-brand rivanta-footer-brand bg-dark text-citadel-light-grey overflow-visible" id="footer-brand" suppressHydrationWarning>
      <div className="citadel-container container" suppressHydrationWarning>
        <div className="citadel-footer-brand-headline rivanta-footer-headline">
          <div className="rivanta-footer-artwork-frame">
            <img alt="RIVANTA — Warm Industrial Stories" className="rivanta-footer-artwork" decoding="async" height="821" loading="lazy" src="/RIVANTA_%20Warm%20Industrial%20Stories.png" width="1916"/>
          </div>
        </div>
        <div className="rivanta-footer-content">
          <div className="rivanta-footer-intro">
            <div className="rivanta-footer-company">
              <h2>Rivanta Green Innovative<br/>Venture Private Limited</h2>
              <p>Building industrial value from biomass, with resource efficiency at the heart of our plant operations.</p>
            </div>
            <div className="rivanta-footer-direct">
              <a className="rivanta-footer-email" href="mailto:info@rivantagreen.com">info@rivantagreen.com</a>
              <a className="rivanta-footer-phone" href="tel:+919893025375">+91 98930 25375</a>
            </div>
          </div>
          <div className="rivanta-footer-columns">
            <nav className="rivanta-footer-column" aria-labelledby="footer-explore-title">
              <h3 id="footer-explore-title">Explore Rivanta</h3>
              <ul>
                {exploreLinks.map((item) => (
                  <li key={item.label}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
            <nav className="rivanta-footer-column" aria-labelledby="footer-resources-title">
              <h3 id="footer-resources-title">Discover more</h3>
              <ul>
                <li><a href="/bio-silica/">Silicon / Bio-Silica</a></li>
                <li><a href="/saf/">Sustainable Aviation Fuel</a></li>
                <li><a href="/cbg/">Compressed Biogas</a></li>
                <li><a href="/feedstock/">Biomass sourcing</a></li>
                <li><a href="/projects/">Industrial ecosystem</a></li>
                <li><a href="/sustainability/">Plant sustainability</a></li>
                <li><a href="/vision/">Vision &amp; purpose</a></li>
                <li><a href="/contact/">Direct contact</a></li>
              </ul>
            </nav>
            <div className="rivanta-footer-column rivanta-footer-office">
              <h3>Corporate Office</h3>
              <address>B-29, 3rd Floor, Kasturba Nagar,<br/>Next to Lake City Hospital, Chetak Bridge,<br/>Bhopal, Madhya Pradesh,<br/>462023 - India.</address>
              <a className="rivanta-footer-map-link" href="https://www.google.com/maps/search/?api=1&amp;query=B-29%2C+3rd+Floor%2C+Kasturba+Nagar%2C+Next+to+Lake+City+Hospital%2C+Chetak+Bridge%2C+Bhopal%2C+Madhya+Pradesh+462023%2C+India" target="_blank" rel="noopener noreferrer">View on map</a>
            </div>
            <div className="rivanta-footer-column rivanta-footer-office">
              <h3>Registered Office</h3>
              <address>E4/271 Arera Colony, Huzur,<br/>Bhopal, Madhya Pradesh,<br/>462016 - India.</address>
              <a className="rivanta-footer-map-link" href="https://www.google.com/maps/search/?api=1&amp;query=E4%2F271+Arera+Colony%2C+Huzur%2C+Bhopal%2C+Madhya+Pradesh+462016%2C+India" target="_blank" rel="noopener noreferrer">View on map</a>
              <div className="rivanta-footer-support"><p>Partner support</p><a href="mailto:support@rivantagreen.com">support@rivantagreen.com</a></div>
            </div>
          </div>
          <div className="rivanta-footer-bottom">
            <p>© 2026 Rivanta Green Innovative Venture Private Limited.</p>
            <div className="rivanta-footer-bottom-links">
              <a className="rivanta-footer-linkedin" href="https://www.linkedin.com/company/rivantagreen" target="_blank" rel="noopener noreferrer"><img src="/wp-content/themes/citadel-construction-group/assets/social/linkedin.svg" width="16" height="16" alt="" aria-hidden="true"/>LinkedIn</a>
              <a className="rivanta-footer-back-top" href={isSubpage ? "#" : "#hero"}>Back to top</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
