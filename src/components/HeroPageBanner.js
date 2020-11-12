import React from "react"

function HeroPageBanner(props) {
  return (
    <>
      <div className="hero-image-container">
        <div>
          <img
            className="hero-image-container__image"
            src={
              props.heroImage
                ? `/heroes/${props.heroImage}`
                : "/heroes/hero-image-placeholder.jpg"
            }
            alt="botanicals design page hero"
          />
          <div className="hero-image-container__page-banner">
            <div className="page-banner__container">
              <h1 className="page-banner__main-heading">{props.mainHeading}</h1>
              <h2 className="page-banner__sub-heading">{props.subHeading}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroPageBanner
