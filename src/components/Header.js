import React from "react"

function Header() {
  return (
    <>
      <header className="header">
        <a href="/" className="header__logo header__logo--desktop">
          <img src="/assets/logos/botanicals-logo.png" alt="botanicals logo" />
        </a>
        <a href="/" className="header__logo header__logo--mobile">
          <img
            className="header__logo--mobile-image"
            src="/assets/logos/botanicals-logo-mobile.png"
            alt="botanicals logo"
          />
        </a>
        <div className="navigation">
          <ul className="navigation__list">
            <a href="/why-plantscape" className="navigation__links">
              <li>Why Plantscape?</li>
            </a>
            <a href="/services" className="navigation__links">
              <li>Services</li>
            </a>
            <a href="/prospective-clients" className="navigation__links">
              <li>Prospective Clients</li>
            </a>
            <a href="/portfolios" className="navigation__links">
              <li>Portfolios</li>
            </a>
            <a href="/locations" className="navigation__links">
              <li>Locations</li>
            </a>
            <a href="/blog" className="navigation__links">
              <li>Blog</li>
            </a>
            <a href="/about" className="navigation__links">
              <li>About</li>
            </a>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
