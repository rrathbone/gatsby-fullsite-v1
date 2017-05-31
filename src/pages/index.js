import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import include from "underscore.string/include"

class BlogIndex extends Component {
// class CityIndex extends Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    // const cities = get(this, "props.data.allFile.edges")
    posts.forEach(post => {
    // cities.forEach(city => {
      if (post.node.path !== "/404/") {
      // if (city.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path
        // const name = get(city, "node.base") HOW IS PATH GENERATED?
        // <li key={city.node.path}>
        // <Link to={city.node.id}>
        // {city.node.frontmatter.name}
        pageLinks.push(
          <li key={post.node.path}>
            <Link to={post.node.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object
}
// CityIndex.propTypes = {
//   route: PropTypes.object
// }

export default BlogIndex
// export default CityIndex

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        slug
        frontmatter {
          title
        }
      }
    }
  }
}
`
// export const pageQuery = graphql`
// query IndexQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
//   allMarkdownRemark {
//     edges {
//       node {
      //   id
    //  	 relativePath
      //   base
      // }
//     }
//   }
// }
// `
