import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-responsive-grid'

import '../../css/main.css'

// import Header from '../components/common/header'
import Footer from '../components/common/footer'

class Template extends Component {
  render() {
    const { children } = this.props

    return (
      <Container>

        {children()}
        <Footer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  route: PropTypes.object
}

export default Template
