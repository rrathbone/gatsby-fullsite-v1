import React, { Component } from 'react'
import superagent from 'superagent'
import { geolocated } from 'react-geolocated'

import Map from './map'
// import NewMap from './newMap'

class MapSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      mapLoaded: false,
      rides: []
		}
  }

  componentDidMount() {
    setTimeout(function() {
      let lat = this.props.coords.latitude
      let lng = this.props.coords.longitude

      this.setState({
        lat: lat,
        lng: lng,
        mapLoaded: true
      });
    }.bind(this), 5000);

		const migoUrl = 'http://dev.getmigo.com/api/drivers?lat=47.608013&lng=-122.335167'

		superagent
		.get(migoUrl)
		.query(null)
		.set('Accept', 'text/json')
		.end((err, res) => {
			const locations = res.body.nearby_drivers

      let ridesRes = [];
      let rideMarkers = [];

      for(let i = 0; i < locations.length; i++) {
        let rides = locations[i].types[0].rides;
        ridesRes.push(rides)

        rideMarkers.push(ridesRes[0])
      }


			this.setState({
				rides: rideMarkers
			})
		})
	}

  render() {
    return (
      <div className="map-section">
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
          mapLoaded={this.state.mapLoaded}
          rides={this.state.rides}
        />

      </div>
    )
  }
}

// <NewMap
//
// />

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(MapSection)
