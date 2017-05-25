import React, { Component } from 'react'

import Header from '../../components/common/header'
// import '../../../css/main.css'

class Partners extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="partners-page">
          <h1>Partners page</h1>
        </div>
      </div>
    )
  }
}

export default Partners

exports.data = {
  title: "The Partners Page"
}
