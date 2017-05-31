import React, { Component } from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"

class CityPageRoute extends Component {
  render() {
    const post = this.props.data.markdownRemark
    // const city = this.props.data
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    // const cityName = get(this.props, "data.site.siteMetadata.title")
    // console.log(this.props)

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
      </div>
    )
  }
}

export default CityPageRoute

// export const pageQuery = graphql`
//   query BlogPostByPath($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(slug: { eq: $slug }) {
//       id
//       html
//       frontmatter {
//         name
//       }
//     }
//   }
// `
