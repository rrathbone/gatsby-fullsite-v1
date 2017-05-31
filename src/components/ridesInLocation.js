import React, { Component } from 'react'
import Carousel from './carousel/carousel'

class RidesInLocation extends Component {
  render() {
    let cityPage = false
    let seattlePage = false

    if(location.pathname.includes('city')) {
      cityPage = true
    }

    if(location.pathname.includes('seattle')) {
      seattlePage = true
    }

    return (
      <section className="rides-in-location">
        {cityPage?
          <div><h2 id="rides-in-location">X Ridesharing Companies in CITY</h2>
            <Carousel
              car2go={this.props.car2go}
              curb={this.props.curb}
              flywheel={this.props.flywheel}
              lyft={this.props.lyft}
              reachnow={this.props.reachnow}
              syc={this.props.syc}
              zipcar={this.props.zipcar}
              zoro={this.props.zoro}
            />
          </div> :
        seattlePage ?
          <div><h2 id="rides-in-location">X Ridesharing Companies in Seattle</h2>
            <Carousel
              car2go={this.props.car2go}
              curb={this.props.curb}
              flywheel={this.props.flywheel}
              lyft={this.props.lyft}
              reachnow={this.props.reachnow}
              syc={this.props.syc}
              zipcar={this.props.zipcar}
              zoro={this.props.zoro}
            />
          </div>
        :
        <div><h2>X Ridesharing Companies in STATE</h2><h5>CAROUSEL & POP UP CARDS GOES HERE</h5></div>}
      </section>
    )
  }
}

// RidesInLocation.propTypes = {
//   markets: React.PropTypes.array
// }

export default RidesInLocation
