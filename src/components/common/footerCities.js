import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby-link'

const FooterCities = ({ market }) => {
  return (
    <div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
        </ul>

      </div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
        </ul>
      </div>

    </div>
  )
}

FooterCities.propTypes = {
  market: PropTypes.object
}

export default FooterCities
