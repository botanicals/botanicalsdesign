import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

export default () => {
  return (
    <PageLayout
      heroImage="home"
      ext="jpg"
      mainHeading="Portfolios"
      subHeading="Explore our portfolios to see the quality of our work"
      pageHeading="The Botanicals portfolio"
    ></PageLayout>
  )
}
