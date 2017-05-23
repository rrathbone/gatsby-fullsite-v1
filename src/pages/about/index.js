import React, { Component } from 'react'

import Header from '../../components/common/header'

class About extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="about-page">
          <h1>About page</h1>
        </div>
      </div>
    )
  }
}

export default About

exports.data = {
  title: "The About Page"
}
