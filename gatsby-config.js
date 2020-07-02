module.exports = {
  siteMetadata: {
    title: `Doctor Gabriel Robledo Kaiser`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Aidea S.A.S.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Doctor Gabriel Robledo Kaiser`,
        short_name: `Dr Robledo`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: "src/images/icon.png"
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://gestion.drgabrielrobledo.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "blogs",
          "categorias",
        ],
        queryLimit: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
