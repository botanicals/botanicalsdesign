import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Portfolios > Interior",
  }
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Interior Portfolio"
      subHeading="Breathe life into your interior surroundings"
      pageHeading="Living interiors"
      seo={seo}
    ></PageLayout>
  )
}
