import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby-link'

// import FooterCities from './footerCities'
import FooterLinks from './footerLinks'

class Footer extends Component {
  render() {
    // const { markets } = this.props
    //
    // let labels
    // let labelLength = false
    //
    // for(let key in markets) {
    //   if(markets.hasOwnProperty(key)) {
    //     const val = markets[key]
    //     labels = val
    //     labelLength = true
    //   }
    // }

    return (
      <div className="footer">
        <footer>
          <FooterLinks />

          <div className="divider"></div>

          <div className="row" id="city-footer">
            <h5>Top Cities</h5>
            <p>Top cities go here</p>
          </div>
        </footer>
      </div>
    )
  }
}

Footer.propTypes = {
  markets: PropTypes.array
}

export default Footer
