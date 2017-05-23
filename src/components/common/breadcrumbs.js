import React, { Component, PropTypes } from 'react'
import Link from 'gatsby-link'

class Breadcrumbs extends Component {
  render() {
    return (
      <section className="breadcrumbs">
        <ul className="city-breadcrumbs">
          <li className="breadcrumb-item" key={1}>
            <Link to="/" className="breadcrumb-link">Home</Link>{" > "}
          </li>
          <li className="breadcrumb-item" key={2}>
            <Link to="" className="breadcrumb-link"> Country</Link>{" > "}
          </li>
          <li className="breadcrumb-item" key={3}>
            <Link to="" className="breadcrumb-link"> State</Link>{" > "}
          </li>
          <li className="breadcrumb-item" key={4}>
            <Link to="/" className="breadcrumb-link"> City</Link>
          </li>
        </ul>
      </section>
    )
  }
}

Breadcrumbs.propTypes = {
  markets: PropTypes.array
}

export default Breadcrumbs
