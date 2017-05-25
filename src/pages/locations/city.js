import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BreadCrumbs from '../../components/common/breadcrumbs'
import CompareRides from '../../components/compareRides'
import GettingAround from '../../components/gettingAround'
import Header from '../../components/common/header'
import LocationBanner from '../../components/locationBanner'
import MapSection from '../../components/maps/mapSection'
import RecentRides from '../../components/recentRides'
import RidesInLocation from '../../components/ridesInLocation'
import TopLocations from '../../components/topLocations'
import TopPoints from '../../components/topPoints'

import placeholder from './placeholder.jpg'

class City extends Component {
  render () {

    return (
      <div className="city-page">
        <Header />
        <LocationBanner
        />

        <div className="row getting-around location-sections">
          <BreadCrumbs />
          <GettingAround
          />
        </div>

        <MapSection />

        <div className="location-sections">
          <div className="row space rides-in-location">
            <RidesInLocation
            />
          </div>

          <div className="row space">
            <TopLocations
              placeholder={placeholder}
            />
          </div>

          <div className="row space">
            <TopPoints
              placeholder={placeholder}
            />
          </div>
        </div>

        <div className="row space compare-rides">
          <CompareRides />
        </div>

        <div className="row space location-sections">
          <RecentRides
          />
        </div>

      </div>
    )
  }
}

// City.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default City
