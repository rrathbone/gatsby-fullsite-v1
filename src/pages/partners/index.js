import React, { Component, PropTypes } from 'react'

// import Footer from '../../components/common/footer.js'

class Partners extends Component {
  render() {
    const { markets } = this.props

    return (
      <div className="partners-page">
        <h1>Partners page</h1>
      </div>
    )
  }
}
//
// Partners.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Partners

exports.data = {
  title: "The Partners Page"
}
