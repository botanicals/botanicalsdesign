import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Events",
  }
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Botanicals events"
      subHeading="Check back regularly to hear about the events we host"
      pageHeading="Events Feed"
      seo={seo}
    ></PageLayout>
  )
}
