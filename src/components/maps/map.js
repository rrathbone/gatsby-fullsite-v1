import React, { PropTypes } from 'react'

const INITIAL_LOCATION = {
  address: 'London, United Kingdom',
  position: {
    latitude: 47.608013,
    longitude: -122.335167
  }
}

class Map extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      isGeocodingError: false,
      foundAddress: ''
    }

    this.geocodeAddress = this.geocodeAddress.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.setSearchInputElementReference = this.setSearchInputElementReference.bind(this)
    this.setMapElementReference = this.setMapElementReference.bind(this)
  }

  geocodeAddress(address) {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if(status === window.google.maps.GeocoderStatus.OK) {

        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        })

        // console.log(this.state.foundAddress);

        this.map.setCenter(results[0].geometry.location)
        this.marker.setPosition(results[0].geometry.location)

        return
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      })
    }.bind(this))
  }

  handleFormSubmit(submitEvent) {
    submitEvent.preventDefault()

    let address = this.searchInputElement.value

    this.geocodeAddress(address)
  }

  componentDidMount() {
    const mapElement = this.mapElement

    // this.map = new window.google.maps.Map(mapElement, {
    //   zoom: 10,
    //   center: {
    //     lat: INITIAL_LOCATION.position.latitude,
    //     lng: INITIAL_LOCATION.position.longitude
    //   }
    // })

    // this.marker = new window.google.maps.Marker({
    //   map: this.map,
    //   position: {
    //     lat: INITIAL_LOCATION.position.latitude,
    //     lng: INITIAL_LOCATION.position.longitude
    //   }
    // })

    // this.geocoder = new window.google.maps.Geocoder()
  }

  setSearchInputElementReference(inputReference) {
    this.searchInputElement = inputReference
  }

  setMapElementReference(mapElementReference) {
    this.mapElement = mapElementReference
  }

  render() {
    return (
      <div className="container test-map">

        <div className="row">
          <div className="col-sm-12">

            <form className="form-inline" onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-xs-8 col-sm-10">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="address">Address</label>
                    <input type="text" className="search-input-search" id="address" placeholder="Pickup" ref={this.setSearchInputElementReference} required />
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

            {this.state.isGeocodingError ? <p className="bg-danger">Address not found.</p> : null}

            <div className="map" ref={this.setMapElementReference}></div>

          </div>
        </div>
      </div>
    )
  }
}


export default Map;
