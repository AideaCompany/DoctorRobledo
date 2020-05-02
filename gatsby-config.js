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
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // your WordPress source
    //     baseUrl: `http://www.beta.aidea.com.co/`,
    //     protocol: `http`,
    //     // is it hosted on wordpress.com, or self-hosted?
    //     hostingWPCOM: false,
    //     // does your site use the Advanced Custom Fields Plugin?
    //     useACF: true,
    //      includedRoutes: [
    //       "**/categories",
    //       "**/posts",
    //       "**/pages",
    //       "**/media",
    //       "**/tags",
    //       "**/taxonomies",
    //       "**/users",
    //     ],
    //   }
    // },
    // {
    //   resolve: "gatsby-source-tribe-events",
    //   options: {
    //     // baseUrl should include the protocol (https or http)
    //     baseUrl: "http://www.beta.aidea.com.co/",

    //     // maxEvents is optional, default: 10, max: 50
    //     maxEvents: 50
    //   }
    // }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
