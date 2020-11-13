import React from "react"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"

export default () => {
  return (
    <PageLayout
      mainHeading="Page not found"
      subHeading=""
      pageHeading="Sorry..."
      heroImage="home"
      ext="jpg"
    >
      <Section sectionHeading="We couldn't find the page you are looking for">
        <p>
          We are sorry, the page you are looking for could not be located. This
          may be due to a broken link, expired bookmark, or mistyped URL. Please
          try again using our menu above. We hope you find what you are looking
          for!
        </p>
      </Section>
    </PageLayout>
  )
}
