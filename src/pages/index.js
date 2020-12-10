import React from "react"

import "../styles/main.scss"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Picture from "../components/Picture"
import Button from "../components/Button"
import Locations from "../components/Locations"
import SubscribeForm from "../components/SubscribeForm"

export default () => {
  const seo = {
    title: "Botanicals Design | Home",
  }

  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Botanicals Design"
      subHeading="Explore all that we have to offer"
      pageHeading="Who we are"
      seo={seo}
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
              developed a love for plants and helping others receive the
              positive effects of having their space plantscaped.
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
      <Section sectionHeading="A Botanicals plantscape">
        <Row>
          <Column width={100}>
            <p>
              We pride ourselves on our work creating plantscapes that breathe
              quality and peace back into life. Whether you are looking to liven
              up your home, workspace, or yard, we have the perfect
              life-injecting solutions you are needing. Please{" "}
              <a href="/portfolios/">visit our portfolio</a> to see examples of
              our most recent work.
            </p>
          </Column>
        </Row>
        <Row>
          <Column width={33}>
            <Picture
              column={33}
              page="index"
              imageName="living-wall-plantscape-design-waiting-area-3"
              ext="jpg"
              alt="Findlay Subaru 'Wall of Life'"
              caption=" Findlay Subaru 'Wall of Life'"
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="index"
              imageName="botanicals-plantscape-design-parade-of-homes-107"
              ext="jpg"
              alt="St George Parade of Homes 2020"
              caption="St George Parade of Homes 2020"
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="index"
              imageName="aglaonema-in-ceramic-sphere-sitting-area"
              ext="jpg"
              alt="IHC Genomics waiting area"
              caption="IHC Genomics waiting area"
            />
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <Button href="/portfolio">Visit our portfolio</Button>
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
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint={1200}
              imageName="custom-container-plantscape-design-genomics"
              ext="jpg"
              alt="A custom S-shaped planter we designed for IHC Genomics"
              caption=" A custom S-shaped planter we designed for IHC Genomics"
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="Even more than plantscape design">
        <Row>
          <Column width={50}>
            <p>
              After installing your custom designed plantscape, we don&#8217;t
              leave you to care for it all by yourself. We offer our{" "}
              <a href="/services/maintenance/">plant maintenance services</a> to
              all of our clients.{" "}
            </p>

            <h3 class="heading heading__h3 heading__h3--green">
              Our expertly trained service technicians will ensure that your
              plantscapes stay alive, healthy, and beautiful.{" "}
            </h3>

            <Button href="/services/maintenance">
              Learn more about our maintenance service
            </Button>
          </Column>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint={1200}
              imageName="botanicals-maintenance-service-technician-beth-1"
              ext="jpg"
              alt="Botanicals maintenance service ensures your plantscapes stay beautiful"
              caption="Botanicals maintenance service ensures your plantscapes stay beautiful"
            />
          </Column>
        </Row>
      </Section>
      <Section sectionHeading="Why we love creating plantscapes">
        <Row>
          <Column width={50}>
            <Picture
              column={50}
              page="index"
              breakpoint={1200}
              imageName="botanicals-plantscape-design-parade-of-homes-105"
              ext="jpg"
              alt="2020 St George Parade of Homes Botanicals interior"
              caption="2020 St George Parade of Homes Botanicals interior"
            />
          </Column>
          <Column width={50}>
            <p>
              People stay longer in places that make them feel at peace. It is
              proven that plantscapes decrease stress, promote health, increase
              productivity. Plants purify the air around them and create an
              atmosphere of serenity. This is
              <a href="/why-plantscape/">
                {" "}
                why we want our plantscapes everywhere
              </a>
              . We are a family of plant-lovers and we always look forward to
              helping others discover what plantscapes can do for them.
            </p>

            <h3 class="heading heading__h3 heading__h3--green">
              Want to learn more about Plantscapes? We have a blog!
            </h3>

            <Button href="/blog">Visit our blog</Button>
          </Column>
        </Row>
      </Section>
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
            <h3 className="heading heading__h3 heading__h3--green">
              Sign up for our Newsletter to stay updated on our events,
              shipments, and more.
            </h3>{" "}
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
