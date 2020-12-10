import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Services",
  }

  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Services"
      subHeading="We look forward to working with you"
      pageHeading="We design, install, and maintain plantscapes"
      seo={seo}
    ></PageLayout>
  )
}
