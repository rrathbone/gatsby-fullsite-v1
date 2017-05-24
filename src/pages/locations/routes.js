import React, { Component } from 'react'

import AveragePrice from '../../components/averagePrice'
import BreadCrumbs from '../../components/common/breadcrumbs'
import CompareRides from '../../components/compareRides'
import Header from '../../components/common/header'
import LocationBanner from '../../components/locationBanner'
import PopularDestinations from '../../components/popularDestinations'
import RouteOverview from '../../components/routeOverview'
import TopPoints from '../../components/topPoints'

import placeholder from './placeholder.jpg'

class RoutePage extends Component {
  render() {
    return (
      <div className="route-page">
        <Header />

        <section id="route-page">
          <LocationBanner />

          <div className="row location-sections">
            <BreadCrumbs />
            <RouteOverview />
            <div>Overview about this route</div>
            <AveragePrice />
            <div>Average Prices by ridesharing companies</div>
            <div className="row top-points">
              <TopPoints
                placeholder={placeholder}
              />
            </div>
            <div className="row top-points">
              <TopPoints
                placeholder={placeholder}
              />
            </div>
          </div>

          <CompareRides />

          <div className="row location-sections">
            <PopularDestinations />
          </div>

        </section>

      </div>
    )
  }
}

export default RoutePage
