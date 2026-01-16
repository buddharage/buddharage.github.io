module.exports = {
  siteMetadata: {
    title: `Thai Le | Web Developer`,
    description: `Web Developer based in Brooklyn, NY`,
    author: `Thai Le`,
    siteUrl: `https://thaivietle.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thai Le - Web Developer`,
        short_name: `Thai Le`,
        start_url: `/`,
        background_color: `#fdfcfb`,
        theme_color: `#1a1a1a`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
  ],
}
