import React from "react"

import { Image } from "cloudinary-react"
import Slider from "react-slick"

// import the css files for react-slick carousel
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"

export default () => {
  const seo = {
    title: "Botanicals Design | Portfolios > Interior",
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  }

  return (
    <PageLayout
      heroImage="interior-portfolio"
      ext="jpg"
      mainHeading="Interior Portfolio"
      subHeading="Breathe life into your interior surroundings"
      pageHeading="Living interiors"
      seo={seo}
    >
      <Section sectionHeading="Our Interior Portfolio">
        <Row>
          <Column width={100}>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                <div className="carousel-image-container">
                  <Image
                    className="carousel-image"
                    cloudName="botanicals"
                    publicId="samples/animals/kitten-playing.gif"
                  ></Image>
                </div>
                <div className="carousel-image-container">
                  <Image
                    className="carousel-image"
                    cloudName="botanicals"
                    publicId="samples/imagecon-group.jpg"
                  ></Image>
                </div>
                <div className="carousel-image-container">
                  <Image
                    className="carousel-image"
                    cloudName="botanicals"
                    publicId="samples/cloudinary-group.jpg"
                  ></Image>
                </div>

                <div className="carousel-image-container">
                  <Image
                    className="carousel-image"
                    cloudName="botanicals"
                    publicId="samples/sheep.jpg"
                  ></Image>
                </div>
              </Slider>
            </div>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Commercial">
        <Row>
          <Column width={100}></Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring Findlay Subaru
            </h3>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring IHC Genomics
            </h3>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Residential">
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--red">
              Featuring St George Parade of Homes 2020
            </h3>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
