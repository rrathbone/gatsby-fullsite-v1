import React, { Component } from "react"
import PropTypes from 'prop-types'
import { InfoWindow, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
 const PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => (
   <GoogleMap
     defaultZoom={12}
     center={props.center}
   >
     {props.markers.map((marker, index) => (
       <Marker
         key={index}
         position={marker.position}
         onClick={() => props.onMarkerClick(marker)}
       >
         {/*
           Show info window only if the 'showInfo' key of the marker is true.
           That is, when the Marker pin has been clicked and 'onCloseClick' has been
           Successfully fired.
         */}
         {marker.showInfo && (
           <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
             <div>{marker.infoContent}</div>
           </InfoWindow>
         )}
       </Marker>
     ))}
   </GoogleMap>
 ))

 /*
  *
  *  Add <script src="https://maps.googleapis.com/maps/api/js"></script>
  *  to your HTML to provide google.maps reference
  *
  *  @author: @chiwoojo
  */
class NewMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      mapLoaded: false,
      rides: [],
      center: {
        lat: 47.608013,
        lng: -122.335167,
      },

      // array of objects of markers
      markers: [
        {
          position: new google.maps.LatLng(47.608013, -122.335167),
          showInfo: false,
        },
        {
          position: new google.maps.LatLng(47.626565, -122.342902),
          showInfo: false
        },
      ],
    }

    this.handleMarkerClick = this.handleMarkerClick.bind(this)
    this.handleMarkerClose = this.handleMarkerClose.bind(this)
  }



   // Toggle to 'true' to show InfoWindow and re-renders component
   handleMarkerClick(targetMarker) {
    //  console.log(props.markers)
     this.setState({
       markers: this.state.markers.map(marker => {
         if (marker === targetMarker) {
           return {
             ...marker,
             showInfo: true,
           }
         }
         return marker
       }),
     })
   }

   handleMarkerClose(targetMarker) {
     this.setState({
       markers: this.state.markers.map(marker => {
         if (marker === targetMarker) {
           return {
             ...marker,
             showInfo: false,
           }
         }
         return marker
       }),
     })
   }

   render() {
     return (
       <PopUpInfoWindowExampleGoogleMap
         containerElement={
           <div style={{ height: `500px` }} />
         }
         mapElement={
           <div style={{ height: `500px` }} />
         }
         center={this.state.center}
         markers={this.state.markers}
         onMarkerClick={this.handleMarkerClick}
         onMarkerClose={this.handleMarkerClose}
       />
     )
   }
 }

 export default NewMap
