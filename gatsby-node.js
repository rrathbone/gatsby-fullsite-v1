const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/template-blog-post.js")
    // const cityPage = path.resolve("./src/templates/template-city-pages.js")
    resolve(
      graphql(
        `{
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                slug
              }
            }
          }
        }`
        // `{
        //    allFile(extension: {eq: "json"}) {
          //   edges {
          //     node {
          //       id
          //     }
          //   }
          // }
        // }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
        // _.each(result.data.allFile.edges, edge => {
          upsertPage({
            path: edge.node.slug, // required
            // path: edge.node.id, // required
            component: blogPost,
            // component: cityPage,
            context: {
              slug: edge.node.slug
              // id: edge.node.id
            }
          })
        })
      })
    )
  })
}

// Add custom url pathname for blog posts.
exports.onNodeCreate = ({ node, boundActionCreators, getNode }) => {
  const { updateNode } = boundActionCreators
  if (node.internal.type === `File` && typeof node.slug === "undefined") {
  // if (node.internal.type === `File` && typeof node.id === "undefined") {
    const parsedFilePath = path.parse(node.relativePath)
    const slug = `/${parsedFilePath.dir}/`
    node.slug = slug
    // node.id = slug
    updateNode(node)
  } else if (
    node.internal.type === `MarkdownRemark` &&
    // NEED TO FIND OUT WHAT IS BEING RETURNED FROM PROPS
    // node.internal.type === `MarkdownRemark` &&
    typeof node.slug === "undefined"
    // typeof node.id === "undefined"
  ) {
    const fileNode = getNode(node.parent)
    node.slug = fileNode.slug
    // node.id = fileNode.id
    updateNode(node)
  }
}
