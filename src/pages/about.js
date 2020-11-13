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
      mainHeading="About Botanicals"
      subHeading="We are founded on four generations of plantscape and gardening experience"
      pageHeading="Learn about us"
    ></PageLayout>
  )
}
