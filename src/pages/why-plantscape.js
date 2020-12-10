import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Why Plantscape",
  }

  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Why Plantscape?"
      subHeading="Plantscapes are the evolution of living design"
      pageHeading="A Botanicals Plantscape"
      seo={seo}
    ></PageLayout>
  )
}
