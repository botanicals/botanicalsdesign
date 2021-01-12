import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"

import SubscribeForm from "../components/SubscribeForm"
import Locations from "../components/Locations"

export default () => {
  const seo = {
    title: "Botanicals Design | Locations",
  }
  return (
    <PageLayout
      heroImage="locations"
      ext="jpg"
      mainHeading="Our retail locations"
      subHeading="Serving the wasatch front and southern utah"
      pageHeading="Bring life to your space"
      seo={seo}
    >
      <Section sectionHeading="Bring life to your space">
        <Locations />
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
              Sign up for our Newsletter to stay updated on our events,
              shipments, and more.
            </h3>
          </Column>
          <Column width={50}>
            <SubscribeForm />
          </Column>
        </Row>
      </Section>
      {/* <Section sectionHeading="Upcoming events">
        <Row>
          <Column width={100}>
            <h3 className="heading heading__h3 heading__h3--green">
              Upcoming Events
            </h3>
            <p>
              Unfortunately, during this time of uncertainty, all Botanicals
              events are postponed/canceled.
            </p>
            <Button href="#">
              View all events
            </Button>
          </Column>
        </Row>
      </Section> */}
    </PageLayout>
  )
}
