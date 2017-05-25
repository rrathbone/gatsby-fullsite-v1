import React, { Component } from 'react'

import Header from '../../components/common/header'

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="contact-page">
          <h1>Contact page</h1>
        </div>
      </div>
    )
  }
}

export default Contact

exports.data = {
  title: "The Contact Page"
}
