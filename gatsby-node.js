// exports.createPages = async ({ graphql, actions }) => {  
//     const { createPage } = actions
//     const result = await graphql(
//       `
//         {
//           articles: allStrapiArticle {
//             edges {
//               node {
//                 strapiId
//               }
//             }
//           }
//         }
//       `
//     )
  
//     if (result.errors) {
//       throw result.errors
//     }
  
//     // Create blog articles pages.
//     const articles = result.data.articles.edges
//     articles.forEach((article, index) => {
//       createPage({
//         path: `/article/${article.node.strapiId}`,
//         component: require.resolve("./src/templates/article.js"),
//         context: {
//           id: article.node.strapiId,
//         },
//       })
//     })
//   }