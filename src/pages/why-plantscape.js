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
      mainHeading="Why Plantscape?"
      subHeading="Plantscapes are the evolution of living design"
      pageHeading="A Botanicals Plantscape"
    >
      <Section sectionHeading="Plantscapes add vitality and balance to our lives">
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
