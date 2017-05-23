import React, { Component } from 'react'

import BreadCrumbs from '../../components/common/breadcrumbs'
import CompareRides from '../../components/compareRides'
import GettingAround from '../../components/gettingAround'
// import Geolocation from '../map/geolocation'
import Header from '../../components/common/header'
import LocationBanner from '../../components/locationBanner'
import RidesInLocation from '../../components/ridesInLocation'
import TopLocations from '../../components/topLocations'
import TopPoints from '../../components/topPoints'

class StatePage extends Component {
  render() {
    return (
      <div className="state-page">
        <Header />

        <section id="state-page">
          <LocationBanner />

          <div className="row location-sections">
            <BreadCrumbs />
            <GettingAround />

            <div className="row rides-in-location">
              <RidesInLocation />
            </div>
          </div>

          <CompareRides />

          <div className="row location-sections">

            <div className="row top-locations">
              <TopLocations />
            </div>

            <div className="row top-points">
              <TopPoints />
            </div>
          </div>

        </section>
      </div>
    )
  }
}

export default StatePage
