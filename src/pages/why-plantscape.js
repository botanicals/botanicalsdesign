import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

import Locations from "../components/Locations"

export default () => {
  const seo = {
    title: "Botanicals Design | Why Plantscape?",
  }

  /* [TO DO] fix all the image captions and alts (and fix the image under the 'quality of life' heading) */
  /* [TO DO] fix the problem with the locations component */

  return (
    <PageLayout
      heroImage="why-plantscape"
      ext="jpg"
      mainHeading="Why Plantscape?"
      subHeading="Plantscapes are the evolution of living design"
      pageHeading="A Botanicals Plantscape"
      seo={seo}
    >
      <Section sectionHeading="Plantscapes add Vitality and Balance to our Lives">
        <Row>
          <Column width={50}>
            <p>
              &#8216;Biophilia&#8217; means a love of life; a desire to be
              around nature, plants, and flowers. There is something special
              that happens when we are around plants: We get happier, we get
              calmer, we feel at peace. This effect plants have on us has been
              scientifically coined &#8220;The Biophilia Effect.&#8221; At
              Botanicals, we love to discuss the positive effects plantscapes
              have in our lives, and we love creating plantscapes for our
              clients that maximize that positivity.
            </p>
            <h3 class="heading heading__h3 heading__h3--green">
              Want to Learn More? Visit our Blog.
            </h3>
            <Button href="/blog">Visit our blog</Button>
          </Column>

          <Column width={50}>
            <Picture
              column={50}
              page="why-plantscape"
              breakpoint="default"
              imageName="pottery-plantscape-succulent-green-closeup"
              ext="jpg"
              alt="close up of succulents at entrada in st george"
              caption="Entrada in St George Succulent Closeup"
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Allow us to Increase Your Quality of Life">
        {/* [TO DO] fix the image sizes to match the 33% width */}
        <Row>
          <Column width={33}>
            <Picture
              column={50}
              page="why-plantscape"
              imageName="plant-basket-botanicals-teresa"
              ext="jpg"
              alt="Findlay Subaru 'Wall of Life'"
              caption=""
            />
          </Column>

          <Column width={66}>
            <p>
              Botanicals was founded on the promise of making the world a more
              beautiful and healthful place. Human existence is based upon the
              intimate interactions we have with plant life. From the physical
              benefits of the air and food we consume to the psychological and
              physiological effects of enjoyment, reprieve, and peace, plants
              add vitality and balance to our lives.
            </p>
            <h3 class="heading heading__h3 heading__h3--green">
              Human existence is based upon intimate interactions with plant
              life.
            </h3>
            <p>
              We love participating in the creation of indoor and outdoor
              container gardening. You can come to us for expert advise on
              do-it-yourself projects or rely upon our team for everything from{" "}
              <a href="https://botanicalsdesign.com/design/">design services</a>
              ,{" "}
              <a href="https://botanicalsdesign.com/design/">
                customized plantings
              </a>
              , <a href="https://botanicalsdesign.com/design/">installation</a>,
              and{" "}
              <a href="https://botanicalsdesign.com/maintenance/">
                ongoing maintenance
              </a>
              . Our aim is to bring our clients beauty and respite through the
              natural elements we incorporate in all our plantscapes.
            </p>
            <Button href="/request-consultation">
              Request a Free Consultation
            </Button>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="See our Portfolios">
        <Row>
          <Column width={100}>
            <h3 class="heading heading__h3 heading__h3--green">Indoor</h3>
            <p>
              Indoors we work with a broad palate of tropical plants to bring
              these powerful oxygenators inside to enhance homes and workspaces.
              Our plantings bring style and vitality into the rooms they grace.
              We pair them with exquisite container options and the best
              planting mediums to bring our clients living art that not only
              looks fantastic but serves to filter, humidify, and purify the
              air.
            </p>

            <Button href="/portfolios/interior-portfolio">
              View Interior Portfolio
            </Button>
          </Column>
        </Row>
        <Row>
          <Column width={33}>
            <Picture
              column={33}
              page="portfolios"
              imageName="hallway-plantscape-design-2"
              ext="jpg"
              alt="Findlay Subaru 'Wall of Life'"
              caption=""
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="portfolios"
              imageName="entryway-fiddle-leaf-fig-in-container"
              ext="jpg"
              alt="St George Parade of Homes 2020"
              caption=""
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="portfolios"
              imageName="wall-planters-pothos-containers-plantscape"
              ext="jpg"
              alt="IHC Genomics waiting area"
              caption=""
            />
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <h3 class="heading heading__h3 heading__h3--green">Outdoor</h3>
            <p>
              Outdoors we use container gardening to create focal points to new
              or existing landscapes and patios. We use combinations of annual
              and perennial plantings to add punctuation and gorgeous
              architectural elements that stand the test of time. In addition to
              our outdoor containers and plantings we offer garden décor item.
              We have free-standing water fountains and can convert almost any
              of our high-fired pottery pieces into a water feature. We also
              offer customized fire features, and décor items that help pull
              everything together and reveal your own flair.
            </p>
            <Button href="/portfolios/exterior-portfolio">
              View Exterior Portfolio
            </Button>
          </Column>
        </Row>
        <Row>
          <Column width={33}>
            <Picture
              column={33}
              page="portfolios"
              imageName="pottery-plantscape-by-path"
              ext="jpg"
              alt="Findlay Subaru 'Wall of Life'"
              caption=""
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="portfolios"
              imageName="pottery-plantscape-design-on-stairs"
              ext="jpg"
              alt="St George Parade of Homes 2020"
              caption=""
            />
          </Column>
          <Column width={33}>
            <Picture
              column={33}
              page="portfolios"
              imageName="ceramic-pottery-plantscape-bbq-patio"
              ext="jpg"
              alt="IHC Genomics waiting area"
              caption=""
            />
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Bring Life to Your Space">
        <p>
          At Botanicals’ retail locations you can find a range of pottery,
          planters, garden accessories and plant-themed décor for your home and
          outdoor spaces. We have a lot to discover in our St. George and Sandy
          locations. Come visit us for expert advise in the design your own
          indoor or outdoor plantscapes or browse our selection of
          botanical-themed gifts and décor.
        </p>
        <Locations />
      </Section>
    </PageLayout>
  )
}
