import React, { Component } from 'react'
import Link from "gatsby-link"

class Header extends Component {
  render() {
    // const logo = '../../public/images/migo_white.png'

    return (
      <div className="nav">
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand"><img src="" alt="Migo logo" className="migo-logo"></img></Link>
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
