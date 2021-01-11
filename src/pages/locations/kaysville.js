import React from "react"
import { Link } from "gatsby"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

import SubscribeForm from "../../components/SubscribeForm"

export default () => {
  const seo = {
    title: "Botanicals Design | Locations > Kaysville",
  }
  return (
    <PageLayout
      heroImage="kaysville"
      ext="jpg"
      mainHeading="Botanicals Kaysville"
      subHeading="Our newest destination for garden art and pottery"
      pageHeading="About us"
      seo={seo}
    >
      <Section sectionHeading="We sell pottery and yard decor in partnership with Tri City Nursery">
        <Row>
          <Column width={50}>
            <p>
              Botanicals is proud to announce our newest retail location in
              Kaysville, Utah. Our Kaysville location stands out from the
              other&#8217;s in that we are partnering with Tri City Nursery to
              sell a selection of our pottery, planters, and yard décor on their
              retail lot.
            </p>

            <p>
              Come visit our newest location to see for yourself and find that
              perfect piece for your outdoor or indoor design.
            </p>

            <h3 class="heading heading__h3 heading__h3--green">
              Questions? Reach out to us.
            </h3>
            <Button href="/contact/kaysville">Email us</Button>
          </Column>

          <Column width={50}>
            <Picture
              column={50}
              page="kaysville"
              breakpoint="default"
              imageName="botanicals-kaysville"
              ext="jpg"
              alt="our retail location in kaysville, utah"
              caption=""
            />
          </Column>
        </Row>

        <Row>
          <Column width={50}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7609484394766!2d-111.95278308428071!3d41.03048562600614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530201e0667405%3A0xe7e80dcec7ce65e3!2sTri%20City%20Nursery!5e0!3m2!1sen!2sus!4v1600906958970!5m2!1sen!2sus"
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Column>
          <Column width={50}>
            <h3 class="heading heading__h3 heading__h3--green">
              Visit us Today
            </h3>

            <h4 class="heading heading__h4 heading__h4--red">
              We have our pottery and décor on the lot of Tri City Nursery
            </h4>

            <p>395 S Deseret Drive</p>

            <p>Kaysville, Utah 84037</p>

            <h3 class="heading heading__h3 heading__h3--green">Hours</h3>

            <h4 class="heading heading__h4 heading__h4--red">
              Hours are subject to change at this time
            </h4>

            <p>
              We ask for your patience as we set up our new Kaysville location
              and make adjustments to our hours. Our current hours are:
            </p>

            <p>Monday &#8211; Friday 9:00AM &#8211; 5:00PM</p>
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
            <h3 className="heading heading__h3 heading__h3--green">
              Sign up for our email list and{" "}
              <a
                href="https://www.facebook.com/BotanicalsKaysville/"
                target="_blank"
                rel="noreferrer noopener"
              >
                follow us on Facebook
              </a>{" "}
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
