import { useEffect, useState } from 'react';
import './Header.scss';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#purpose' },
  { label: 'Our pillars', href: '#pillars' },
  { label: 'Our impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <a className="header-logo" href="#home" aria-label="Waste Voltaic Foundation home" onClick={closeMenu}>
          {/* <svg className="header-logo__mark" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M19.6 35.3C8.2 33.6 3.8 25.7 6.5 12.2c8.6 1 13.3 6.4 13.1 16.2 1.2-12.2 6.7-19.3 16.1-21.1 1.5 14.6-4.1 24.5-16.1 28Z" />
            <path d="M12.1 18.1 20 35.3l9.9-20.9" />
          </svg>
          <span>
            WASTE VOLTAIC
            <strong>FOUNDATION</strong>
          </span> */}
          <img className="header-logo__mark" src="https://www.wastevoltaic.org/assets/logo-DIDmVOhh.png" alt="Waste Voltaic Foundation logo" />


        </a>

        <button
          className={`mobile-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <button
            className="mobile-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        )}

        <nav
          id="primary-navigation"
          className={`header-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="header-donate header-donate--mobile" href="#donate" onClick={closeMenu}>
            Donate now
          </a>
        </nav>

        <a className="header-donate header-donate--desktop" href="#donate">
          Donate now <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
