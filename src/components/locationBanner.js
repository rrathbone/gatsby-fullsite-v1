import React from 'react'
import PropTypes from 'prop-types'

import Geolocation from './maps/geolocation'

const LocationBanner = () => {
  let cityPage = false
  let statePage = false
  let seattlePage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  if(location.pathname.includes('seattle')) {
    seattlePage = true
  }

  if(location.pathname.includes('state')) {
    statePage = true
  }

  return (
    <section className="location-banner">
      <div className="row">
        {cityPage ? <h1 id="location-header">CITY Car Services</h1>
        : seattlePage ? <h1 id="location-header">Seattle Car Services</h1>
        : statePage ? <h1 id="location-header">State Car Services</h1>
        :
        <h1 id="location-header">Location to Location</h1>}
        <Geolocation />
        <button className="location-btn">Compare Rides</button>
      </div>
    </section>
  )
}

// LocationBanner.propTypes = {
//   markets: PropTypes.array
// }

export default LocationBanner
