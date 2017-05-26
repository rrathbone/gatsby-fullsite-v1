import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby-link'

const FooterCities = ({ market }) => {
  return (
    <div>
      <div className="col-md-2">
        <ul>
          <li className="footer-city-links">Seattle</li>
          <li className="footer-city-links">San Diego</li>
          <li className="footer-city-links">Austin</li>
          <li className="footer-city-links">Boston</li>
          <li className="footer-city-links">Boulder</li>
          <li className="footer-city-links">Denver</li>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <li className="footer-city-links">Seattle</li>
          <li className="footer-city-links">San Diego</li>
          <li className="footer-city-links">Austin</li>
          <li className="footer-city-links">Boston</li>
          <li className="footer-city-links">Boulder</li>
          <li className="footer-city-links">Denver</li>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <li className="footer-city-links">Seattle</li>
          <li className="footer-city-links">San Diego</li>
          <li className="footer-city-links">Austin</li>
          <li className="footer-city-links">Boston</li>
          <li className="footer-city-links">Boulder</li>
          <li className="footer-city-links">Denver</li>
        </ul>
      </div>

    </div>
  )
}

FooterCities.propTypes = {
  market: PropTypes.object
}

export default FooterCities

// <ul>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
// </ul>
//
// </div>
// <div className="col-md-2">
// <ul>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
// </ul>
// </div>
// <div className="col-md-2">
// <ul>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
//   <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
// </ul>
