import React from "react"
import "../styles/main.scss"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"

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
          <Column width={50}>hello</Column>
          <Column width={50}>hello</Column>
        </Row>
        <Row>
          <Column width={25}>hello</Column>
          <Column width={75}>hello</Column>
        </Row>
        <Row>
          <Column width={25}>hello</Column>
          <Column width={25}>hello</Column>
          <Column width={50}>hello</Column>
        </Row>
        <Row>
          <Column width={25}>hello</Column>
          <Column width={25}>hello</Column>
          <Column width={25}>hello</Column>
          <Column width={25}>hello</Column>
        </Row>
        <Row>
          <Column width={33}>hello</Column>
          <Column width={66}>hello</Column>
        </Row>
        <Row>
          <Column width={33}>hello</Column>
          <Column width={33}>hello</Column>
          <Column width={33}>hello</Column>
        </Row>
        <Row>
          <Column width={100}>hello</Column>
        </Row>
      </Section>
      <Section fullWidth sectionHeading="We create beautiful plantscapes">
        <p>content for this sectoin</p>
      </Section>
    </PageLayout>
  )
}
