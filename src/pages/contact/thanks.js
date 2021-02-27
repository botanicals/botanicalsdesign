import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"

export default () => {
  const seo = {
    title: "Botanicals Design | Thank you for your submission",
  }
  return (
    <PageLayout
      mainHeading="Thank you Dev Dev"
      subHeading=""
      pageHeading=""
      heroImage="home"
      ext="jpg"
      seo={seo}
    >
      <Section sectionHeading="Your form submission was successful">
        <Row>
          <Column width={100}>
            <p>
              We thank you for reaching out! We will get back to you shortly.
            </p>
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
