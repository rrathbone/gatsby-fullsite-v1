import React, { Component } from 'react'

import Header from '../../components/common/header'

class Help extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="help-page">
          <h1>Help page</h1>
        </div>
      </div>
    )
  }
}

export default Help

exports.data = {
  title: "The Help Page"
}
