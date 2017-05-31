import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import BreadCrumbs from '../../components/common/breadcrumbs'
import CompareRides from '../../components/compareRides'
import GettingAround from '../../components/gettingAround'
import Geolocation from '../../components/maps/geolocation'
import Header from '../../components/common/header'
import LocationBanner from '../../components/locationBanner'
import MapSection from '../../components/maps/mapSection'
import RecentRides from '../../components/recentRides'
import RidesInLocation from '../../components/ridesInLocation'
import TopLocations from '../../components/topLocations'
import TopPoints from '../../components/topPoints'

import placeholder from './placeholder.jpg'
import car2go from '../../../assets/images/car2go_logo.png'
import curb from '../../../assets/images/curb_logo.png'
import flywheel from '../../../assets/images/flywheel_logo.jpeg'
import lyft from '../../../assets/images/lyft_logo.png'
import reachnow from '../../../assets/images/reachnow_logo.png'
import syc from '../../../assets/images/yellowcab_logo.jpeg'
import zipcar from '../../../assets/images/zipcar_logo.jpg'
import zoro from '../../../assets/images/zoro_logo.png'

class Seattle extends Component {
  // componentDidMount() {
  //   axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=points+of+interest+in+Seattle&key=AIzaSyDMt8KINNEfBBOt_A1XXJzyZ36ioi6xuAo')
  //   .then((res) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  render() {
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
              car2go={car2go}
              curb={curb}
              flywheel={flywheel}
              lyft={lyft}
              reachnow={reachnow}
              syc={syc}
              zipcar={zipcar}
              zoro={zoro}
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

        <div className="row">
          <div className="search-fields">
            <Geolocation />
            <button className="location-btn">Compare Rides</button>
          </div>
        </div>

      </div>
    )
  }
}

// Seattle.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Seattle
