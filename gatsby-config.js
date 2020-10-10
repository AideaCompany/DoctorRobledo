module.exports = {
  siteMetadata: {
    title: `Doctor Gabriel Robledo Kaiser`,
    description: `Soy el Dr. Gabriel Robledo Kaiser nací el 27 de septiembre de 1950 en Bogotá. 
    Cuento con más de 40 años de experiencia siendo un reconocido especialista en Cardiología y Cardio-Oncología.`,
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
        name: `Doctor Gabriel Robledo Kaiser | Cardiología`,
        short_name: `Dr Robledo`,
        start_url: `/`,
        background_color: `#014060`,
        theme_color: `#01405f`,
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
        ],
        singleTypes:[
          "pagina-inicio",
          "pagina-quien-soy",
          "pagina-servicios"
        ],
        queryLimit: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
