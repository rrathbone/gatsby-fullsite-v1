import React, { Component } from 'react'

import Header from '../../components/common/header'

class Legal extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="legal-page">
          <h1>Legal page</h1>
        </div>
      </div>
    )
  }
}

export default Legal

exports.data = {
  title: "The Legal Page"
}
