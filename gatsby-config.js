require("dotenv").config()

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
  ],
}
