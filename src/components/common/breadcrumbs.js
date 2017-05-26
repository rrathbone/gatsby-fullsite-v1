import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Breadcrumbs extends Component {
  render() {
    return (
      <section className="breadcrumbs">
        <ul className="city-breadcrumbs">
          <li className="breadcrumb-item" key={1}>
            <Link to="/" className="breadcrumb-link">Home</Link><span>{" > "}</span>
          </li>
          <li className="breadcrumb-item" key={2}>
            <Link to="" className="breadcrumb-link"> Country</Link><span>{" > "}</span>
          </li>
          <li className="breadcrumb-item" key={3}>
            <Link to="/locations/state/" className="breadcrumb-link"> State</Link><span>{" > "}</span>
          </li>
          <li className="breadcrumb-item" key={4}>
            <Link to="/locations/city" className="breadcrumb-link"> City</Link>
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
