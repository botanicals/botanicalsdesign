import React from "react"

function Header() {
  return (
    <>
      <header class="header">
        <a href="/" class="header__logo header__logo--desktop">
          <img src="/assets/logos/botanicals-logo.png" />
        </a>
        <a href="/" class="header__logo header__logo--mobile">
          <img
            class="header__logo--mobile-image"
            src="/assets/logos/botanicals-logo-mobile.png"
          />
        </a>
        <div class="navigation">
          <ul class="navigation__list">
            <a href="/why-plantscape" class="navigation__links">
              <li>Why Plantscape?</li>
            </a>
            <a href="/services" class="navigation__links">
              <li>Services</li>
            </a>
            <a href="/prospective-clients" class="navigation__links">
              <li>Prospective Clients</li>
            </a>
            <a href="/portfolios" class="navigation__links">
              <li>Portfolios</li>
            </a>
            <a href="/locations" class="navigation__links">
              <li>Locations</li>
            </a>
            <a href="/blog" class="navigation__links">
              <li>Blog</li>
            </a>
            <a href="/about" class="navigation__links">
              <li>About</li>
            </a>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
