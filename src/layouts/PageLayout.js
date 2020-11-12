import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroPageBanner from "../components/HeroPageBanner"
import ContentContainer from "../components/ContentContainer"

//import SEO from "../components/SEO"

function PageLayout(props) {
  return (
    <>
      {/* <SEO /> */}
      <Header />
      <HeroPageBanner
        heroImage={props.heroImage}
        mainHeading={props.mainHeading}
        subHeading={props.subHeading}
      />
      <ContentContainer pageHeading={props.pageHeading}>
        {props.children}
      </ContentContainer>
      <Footer />
    </>
  )
}

export default PageLayout
