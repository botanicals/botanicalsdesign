import React from "react"

import PageLayout from "../../layouts/PageLayout"
import Section from "../../components/Section"
import Row from "../../components/Row"
import Column from "../../components/Column"
import Button from "../../components/Button"
import Picture from "../../components/Picture"

export default () => {
  const seo = {
    title: "Botanicals Design | Services > Maintenance",
  }
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Our Design Process"
      subHeading="Change your space, change your life"
      pageHeading="From concept to reality"
      seo={seo}
    ></PageLayout>
  )
}
