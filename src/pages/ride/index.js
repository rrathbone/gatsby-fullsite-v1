import React, { Component } from 'react'

import Header from '../../components/common/header'
// import '../../../css/main.css'

class Ride extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="ride-page">
          <h1>Ride page</h1>
        </div>
      </div>
    )
  }
}

export default Ride

exports.data = {
  title: "The Ride Page"
}
