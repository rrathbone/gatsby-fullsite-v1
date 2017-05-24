import React, { Component } from 'react'
import Link from "gatsby-link"

import logo from '../assets/images/migo_white.png'

class Header extends Component {
  render() {

    return (
      <div className="nav">
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand"><img src={logo} alt="Migo logo" className="migo-logo"></img></Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/partners/" className="nav-link">Partners</Link>
            </li>
            <li className="nav-item">
              <Link to="/ride/" className="nav-link">Ride</Link>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}


export default Header
