import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo header__logo--desktop">
          <img src="/assets/logos/botanicals-logo.png" alt="botanicals logo" />
        </Link>
        <Link to="/" className="header__logo header__logo--mobile">
          <img
            className="header__logo--mobile-image"
            src="/assets/logos/botanicals-logo-mobile.png"
            alt="botanicals logo"
          />
        </Link>
        <div className="navigation">
          <ul className="navigation__list">
            <li>
              <Link to="/why-plantscape" className="navigation__links">
                Why Plantscape?
              </Link>
            </li>
            <li>
              <Link to="/services" className="navigation__links">
                Services
              </Link>
            </li>
            <li>
              <Link to="/prospective-clients" className="navigation__links">
                Prospective Clients
              </Link>
            </li>
            <li>
              <Link to="/portfolios" className="navigation__links">
                Portfolios
              </Link>
            </li>
            <li>
              <Link to="/locations" className="navigation__links">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/blog" className="navigation__links">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="navigation__links">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
