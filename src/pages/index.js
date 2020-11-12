import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Picture from "../components/Picture"
import Button from "../components/Button"

export default function Home() {
  return (
    <PageLayout
      heroImage="hero-image-placeholder.jpg"
      mainHeading="Botanicals Design"
      subHeading="Explore all that we have to offer"
      pageHeading="Who we are"
    >
      <Section sectionHeading="We create beautiful plantscapes">
        <Row>
          <Column width={50}>
            <p>
              Botanicals is a family-owned business operating out of St George,
              Utah. We offer custom plantscape{" "}
              <a href="/services/design/">designs and installations</a>, as well
              as{" "}
              <a href="/services/maintenance/">plant maintenance accounts </a>
              to care for your plants.{" "}
              <a href="/request-consultation/">
                Request a free consultation today
              </a>{" "}
              to start designing your commercial or residential spaces.
            </p>

            <p>
              At this time, our services are in Southern Utah only, but we are
              also working to the trade only in Northern Utah for design
              professionals.
            </p>

            <p>
              We love everything plantscapes. We grew up at Sandia Farms, a
              greenhouse owned by our father in St George, Utah. There we
              developed a love for plants and helping other receive the positive
              effects of having their space plantscaped.
            </p>

            <p>
              In the last few years, we have also expanded our business to own
              three retail locations where we sell ceramic pottery, metal art,
              yard decor, and more. We have one{" "}
              <a href="/locations/saint-george/">location in St George, Utah</a>
              ,{" "}
              <a href="/locations/sandy/">
                another further north in Sandy, Utah
              </a>
              , and{" "}
              <a href="/locations/kaysville/">
                another even further north in Kaysville, Utah
              </a>
              .
            </p>
            <Button href="/request-consultation">
              Request a free consultation today
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint="default"
              imageName="botanicals-owners-nicole-braden-hancock"
              ext="jpg"
              alt="Botanicals owners and siblings Braden and Niki Hancock."
              caption=" Botanicals owners and siblings Braden and Niki Hancock."
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="We love our clients">
        <Row>
          <Column width={50}>
            <p>
              Being a family business, we strive for one-on-one, personable
              contact with our clients. We will work with you to customize
              plantscapes and decor to fit all of your needs.{" "}
            </p>

            <p>
              <a href="/request-consultation/">Request a free consultation</a>,
              and we will work with you through the entire process of getting
              your plantscapes planned, designed, and installed, relieving you
              from the worry of hitting your deadline. At this time, our
              services are in Southern Utah only, but we are also working to the
              trade only in Northern Utah for design professionals.
            </p>

            <p>
              We design for both commercial and residential spaces, indoor and
              outdoor. We often work closely with Architects, Interior
              Designers, and Landscapers.{" "}
              <a href="/prospective-clients/">
                Learn more about how we work with our clientele&#8230;
              </a>
            </p>
          </Column>
          <Column width={50}></Column>
        </Row>
      </Section>
      <Section fullWidth sectionHeading="We create beautiful plantscapes">
        <p>content for this sectoin</p>
      </Section>
    </PageLayout>
  )
}
