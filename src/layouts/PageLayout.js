import React from "react"
import { Link } from "gastby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import TopNotificationBanner from "../components/TopNotificationBanner"
import HeroPageBanner from "../components/HeroPageBanner"
import ContentContainer from "../components/ContentContainer"

//import SEO from "../components/SEO"

function PageLayout(props) {
  return (
    <>
      {/* <SEO /> */}
      <TopNotificationBanner
        message={
          <p>
            Botanicals has recently opened a new retail location in Kaysville,
            Utah!{" "}
            <Link to="/locations/kaysville">
              Visit the new page to learn more.
            </Link>
          </p>
        }
      />
      <Header />
      <HeroPageBanner
        heroImage={props.heroImage}
        mainHeading={props.mainHeading}
        subHeading={props.subHeading}
        ext={props.ext}
      />
      <ContentContainer pageHeading={props.pageHeading}>
        {props.children}
      </ContentContainer>
      <Footer />
    </>
  )
}

export default PageLayout
