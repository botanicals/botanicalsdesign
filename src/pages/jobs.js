import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"

export default () => {
  const seo = {
    title: "Botanicals Design | Jobs",
  }
  return (
    <PageLayout
      heroImage="exterior-portfolio"
      ext="jpg"
      mainHeading="Work with us"
      subHeading="Join the Botanicals family"
      pageHeading="Current Job Openings"
      seo={seo}
    >
      <Section sectionHeading="Kaysville, UT">
        <Row>
          <Column width={100}>
            <p>
              We do not currently have any jobs listed. If you have any
              questions or would like to inquire about jobs{" "}
              <Link to="/contact/kaysville">
                please contact Kaysville here.
              </Link>
            </p>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="Sandy, UT">
        <Row>
          <Column width={100}>
            <p>
              We do not currently have any jobs listed. If you have any
              questions or would like to inquire about jobs{" "}
              <Link to="/contact/sandy">please contact Sandy here.</Link>
            </p>
          </Column>
        </Row>
      </Section>

      <Section sectionHeading="St George, UT">
        <Row>
          <Column width={100}>
            <p>
              <strong>Part-Time Service Technician</strong> -{" "}
              <em>$9.50 - $12.50 / hour</em>
            </p>
            <p>
              Visit client's workplaces and homes to care for plants. Rigorous
              training provided so prior plant knowledge is not a requirement.
              Must be a self-starter, reliable, able to soar through a
              background check, have a clean driving record, and show up with a
              phenomenal attitude for developing strong customer relationships.
              Our company is fast growing (pun intended) with room for
              advancement and full-time work.
            </p>
            <p>
              IMPORTANT: Application must include personal character references,
              and a resume or letter of intent to: You may submit{" "}
              <OutboundLink
                href="https://www.facebook.com/BotanicalsStGeorge/"
                target="_blank"
                rel="noreferrer noopener"
              >
                through Facebook
              </OutboundLink>{" "}
              or email to botanicalsdesign@me.com. OR drop one off at our retail
              store located at 592 N. Bluff St. in St. George.
            </p>
            <p>
              Learn more about our company at: botanicalsdesign.com (highly
              recommended for your interview)
            </p>
          </Column>
        </Row>
        <Row>
          <Column width={100}>
            <p>
              If you have any questions or would like to inquire about jobs{" "}
              <Link to="/contact/saint-george">
                please contact St George here.
              </Link>
            </p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
