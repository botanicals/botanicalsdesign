import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"
import RetailContactForm from "../../components/RetailContactForm"

export default () => {
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Botanicals St George Contact"
      subHeading="Please fill out the form below with any questions you may have"
      pageHeading=""
    >
      <Section sectionHeading="">
        <Row>
          <Column width={50}>
            <Picture
              column={50}
              page="contact"
              breakpoint="default"
              imageName="st-george-contact"
              ext="jpg"
              alt="beautiful plant in container"
              caption=""
            />
          </Column>
          <Column width={50}>
            <RetailContactForm location="st-george" />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
