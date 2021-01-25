import React from "react"
import { graphql } from "gatsby"

import Slider from "react-slick"

// import the css files for react-slick carousel
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"

export default ({ data }) => {
  const seo = {
    title: "Botanicals Design | Portfolios > Exterior",
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <PageLayout
      heroImage="exterior-portfolio"
      ext="jpg"
      mainHeading="Exterior Portfolio"
      subHeading="Breathe life into your exterior surroundings"
      pageHeading="Living exteriors"
      seo={seo}
    >
      <Section sectionHeading="Commercial">
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring Crimson Corner Cafe
            </h3>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.exteriorCommercialCrimsonCornerCafe.edges.map(
                  (image, index) => (
                    <div
                      key={`${index}-ectr`}
                      className="carousel-image-container"
                    >
                      <img
                        className="carousel-image"
                        src={image.node.secure_url}
                        alt="exterior portfolio"
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Residential">
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring Entrada
            </h3>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.exteriorResidentialEntrada.edges.map((image, index) => (
                  <div
                    key={`${index}-ere`}
                    className="carousel-image-container"
                  >
                    <img
                      className="carousel-image"
                      src={image.node.secure_url}
                      alt="exterior portfolio"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    exteriorCommercialCrimsonCornerCafe: allCloudinaryMedia(
      filter: {
        public_id: { glob: "exterior/commercial/crimson-corner-cafe/*" }
      }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }

    exteriorResidentialEntrada: allCloudinaryMedia(
      filter: { public_id: { glob: "exterior/residential/entrada/*" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`

{
  /* 
      import { Image } from "cloudinary-react"

      <Image
        className="carousel-image"
        cloudName="botanicals"
        publicId="samples/animals/kitten-playing.gif"
      />
  */
}
