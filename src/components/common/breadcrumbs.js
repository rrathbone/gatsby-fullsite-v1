import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Breadcrumbs extends Component {
  renderCountryLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link>
      </li>
    ]
  }

  renderStateLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={3}>
        <Link to="/locations/state" className="breadcrumb-link">State</Link>
      </li>
    ]
  }

  renderCityLinks() {
    let cityName

    if(location.pathname.includes('seattle')) {
      cityName = 'Seattle'
    } else {
      cityName = 'City'
    }

    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={3}>
        <Link to="/locations/state" className="breadcrumb-link">State</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={4}>
        <Link to="/locations/city" className="breadcrumb-link">{cityName}</Link>
      </li>
    ]
  }

  renderRouteLinks() {
    return [
      <li className="breadcrumb-item" key={1}>
        <Link to="/" className="breadcrumb-link">Home</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={2}>
        <Link to="" className="breadcrumb-link">Country</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={3}>
        <Link to="/locations/state" className="breadcrumb-link">State</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={4}>
        <Link to="/locations/city" className="breadcrumb-link">City</Link><span>{" > "}</span>
      </li>,
      <li className="breadcrumb-item" key={5}>
        <Link to="/locations/routes" className="breadcrumb-link">First location - second location</Link>
      </li>
    ]
  }

  render() {
    let cityPage = false
    let statePage = false

    if(location.pathname.includes('city') || location.pathname.includes('seattle')) {
      cityPage = true
    }

    if(location.pathname.includes('state')) {
      statePage = true
    }

    return (
      <div className="breadcrumbs">
        <ul className="city-breadcrumbs">
          {cityPage ? this.renderCityLinks() : statePage ? this.renderStateLinks() : this.renderRouteLinks()}
        </ul>
      </div>
    )
  }
}


// Breadcrumbs.propTypes = {
//   markets: PropTypes.array
// }

export default Breadcrumbs
