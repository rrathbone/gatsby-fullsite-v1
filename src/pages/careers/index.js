import React, { Component } from 'react'

import Header from '../../components/common/header'

class Careers extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="careers-page">
          <h1>Careers page</h1>
        </div>
      </div>
    )
  }
}

export default Careers

exports.data = {
  title: "The Careers Page"
}
