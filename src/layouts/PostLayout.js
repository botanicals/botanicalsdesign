import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import TopNotificationBanner from "../components/TopNotificationBanner"
import HeroPageBanner from "../components/HeroPageBanner"
import ContentContainer from "../components/ContentContainer"

import SEO from "../components/SEO"
import Section from "../components/Section"

const PostLayout = ({ data }) => {
  const post = data.markdownRemark

  const seo = {
    title: `Botanicals Design | Blog - ${post.frontmatter.title}`,
  }

  return (
    <>
      <SEO config={seo} />
      <TopNotificationBanner
        message={
          <p>
            Botanicals has recently opened a new retail location in Kaysville,
            Utah! <a href="#">Visit the new page to learn more.</a>
          </p>
        }
      />
      <Header />
      <HeroPageBanner
        heroImage="blog"
        mainHeading="Botanicals Blog"
        subHeading={`'${post.frontmatter.title}' by ${post.frontmatter.author}`}
        ext="jpg"
      />
      <Section sectionHeading="">
        <p>
          <Link to="/">Botanicals Design</Link> &rsaquo;{" "}
          <Link to="/blog">Blog</Link> &rsaquo; {post.frontmatter.title}
        </p>
      </Section>
      <ContentContainer pageHeading={post.frontmatter.title}>
        <Section sectionHeading="">
          <p className="post__metadata">{`Written by ${post.frontmatter.author} on ${post.frontmatter.date}`}</p>
          <div
            className="post__container"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Section>
      </ContentContainer>
      <Footer />
    </>
  )
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`
