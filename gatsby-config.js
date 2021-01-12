/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Botanicals Design",
    description:
      "BOTANICALS offers custom plantscape design and installations, plant maintenance services, and three retail locations selling pottery, containers, and yard decor.",
    keywords:
      "botanicals, botanicals design, pottery, ceramic, lawn and garden decor, metal art, yard decor, plant maintenance services, plantscape design",
    image: "/heros/home-small-1x.jpg",
    url: "https://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
