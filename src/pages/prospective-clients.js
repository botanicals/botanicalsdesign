import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Prospective Clients",
  }

  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Prospective Clients"
      subHeading="We love helping our clients achieve their goals"
      pageHeading="Information for our future clients"
      seo={seo}
    ></PageLayout>
  )
}
