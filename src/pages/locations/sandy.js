import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

import SubscribeForm from "../../components/SubscribeForm"

export default () => {
  const seo = {
    title: "Botanicals Design | Locations > Sandy",
  }
  return (
    <PageLayout
      heroImage="sandy"
      ext="jpg"
      mainHeading="Botanicals Sandy"
      subHeading="Our northern destination for garden art and pottery"
      pageHeading="About us"
      seo={seo}
    >
      <Section sectionHeading="We sell pottery and decor">
        <Row>
          <Column width={50}>
            <p>
              Here at Botanicals Sandy we have a large selection of pottery,
              planters, metal art, yard decor, and more. We are always ready to
              help you find what you need. Come visit us for advice in the
              design your own indoor or outdoor plantscapes, and to find the
              right decor for your space.
            </p>

            <h3 className="heading heading__h3 heading__h3--green">
              Questions? Reach out to us.
            </h3>
            <Button href="/contact/sandy">801.567.1255</Button>
            <Button href="/contact/sandy">Email us</Button>
          </Column>

          <Column width={50}>
            <Picture
              column={50}
              page="sandy"
              breakpoint="default"
              imageName="botanicals-sandy"
              ext="jpg"
              alt="our retail location in sandy, utah"
              caption=""
            />
          </Column>
        </Row>

        <Row>
          <Column width={50}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193912.99854849948!2d-112.0239480164218!3d40.58817010876541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752886894cedb91%3A0xab821b9c26ee88df!2sBotanicals!5e0!3m2!1sen!2sus!4v1578089919277!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen=""
              height="100%"
              width="100%"
              title="sandy-map"
            ></iframe>
          </Column>
          <Column width={50}>
            <h3 className="heading heading__h3 heading__h3--green">
              Visit us Today
            </h3>

            <p>8610 S State Street</p>

            <p>Sandy, Utah 84070</p>

            <h3 className="heading heading__h3 heading__h3--green">
              Summer Hours
            </h3>

            <h5 className="heading heading__h5 heading__h5--red">
              <strong>March 8th &#8211; October 31st</strong>
            </h5>

            <p>Monday-Saturday 9:30AM &#8211; 6:00PM</p>

            <h3 className="heading heading__h3 heading__h3--green">
              Winter Hours
            </h3>

            <h5 className="heading heading__h5 heading__h5--red">
              <strong>November 1st &#8211; March 7th</strong>
            </h5>

            <p>Monday-Saturday 9:30AM &#8211; 5:00PM</p>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="">
        <Row>
          <Column width={50}>
            <h2 className="heading heading__h2">More than just pots&#8230;</h2>
            <p>
              We offer more than just pottery and decor at our retail locations.
              We are constantly evolving and growing at our stores. We are
              starting to implement more events, such as plantings, bonsai club
              meetings, and more. Sign up for our retail locations newsletters
              to stay updated on what we have going on.
            </p>
            <h3 className="heading heading__h3 heading__h3--green heading__quote">
              Sign up for our email list and{" "}
              <OutboundLink
                href="https://www.facebook.com/BotanicalsSandy/"
                target="_blank"
                rel="noreferrer noopener"
              >
                follow us on Facebook
              </OutboundLink>{" "}
              to stay updated on our events, shipments, and more.
            </h3>{" "}
          </Column>
          <Column width={50}>
            <SubscribeForm />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
