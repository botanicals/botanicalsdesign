require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Botanicals Design",
    description:
      "BOTANICALS offers custom plantscape design and installations, plant maintenance services, and three retail locations selling pottery, containers, and yard decor.",
    imagePath: "/heroes/home-small-1x.jpg",
    baseUrl: "https://botanicalsdesign.com",
    siteUrl: "https://botanicalsdesign.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        maxResults: 100,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
  ],
}
