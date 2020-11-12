import React from "react"
import "../styles/main.scss"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"

export default function Home() {
  return (
    <PageLayout
      heroImage="hero-image-placeholder.jpg"
      mainHeading="Botanicals Design"
      subHeading="Explore all that we have to offer"
      pageHeading="Who we are"
    >
      <Section sectionHeading="We create beautiful plantscapes">
        <p>content for this sectoin</p>
      </Section>
      <Section fullWidth sectionHeading="We create beautiful plantscapes">
        <p>content for this sectoin</p>
      </Section>
    </PageLayout>
  )
}
