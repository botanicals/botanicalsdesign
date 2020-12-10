import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Locations > Kaysville",
  }
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Botanicals Kaysville"
      subHeading="Our newest destination for garden art and pottery"
      pageHeading="About us"
      seo={seo}
    ></PageLayout>
  )
}
