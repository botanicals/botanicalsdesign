import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../layouts/PageLayout"
import Section from "../components/Section"
import Row from "../components/Row"
import Column from "../components/Column"
import Button from "../components/Button"
import Picture from "../components/Picture"

import Post from "../components/Post"

const seo = {
  title: "Botanicals Design | Blog",
}

export default ({ data }) => {
  console.log(data)
  return (
    <PageLayout
      heroImage="blog"
      ext="jpg"
      mainHeading="Welcome to our blog"
      subHeading="Learn about what we have to offer"
      pageHeading="Blog Feed"
      seo={seo}
    >
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          readMore={node.fields.slug}
        />
      ))}
    </PageLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
