import React from "react"

import PageLayout from "../../layouts/PageLayout"
import RetailContactForm from "../../components/RetailContactForm"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Picture from "../../components/Picture"

export default () => {
  return (
    <PageLayout
      heroImage="kaysville"
      ext="jpg"
      mainHeading="Botanicals Kaysville Contact"
      subHeading="Please fill out the form below with any questions you may have"
      pageHeading="Kaysville Retail Contact Form"
    >
      <Section sectionHeading="">
        <Row>
          <Column width={50}>
            <Picture
              column={50}
              page="contact"
              breakpoint="default"
              imageName="kaysville-contact"
              ext="jpg"
              alt="beautiful plant in container"
              caption=""
            />
          </Column>
          <Column width={50}>
            <RetailContactForm location="kaysville" />
          </Column>
        </Row>
      </Section>
    </PageLayout>
  )
}
