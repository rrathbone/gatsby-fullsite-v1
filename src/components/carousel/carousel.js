import React, { Component } from 'react'
import Slider from './slider'

class Carousel extends Component {
  render(){
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }

    const car2go = this.props.car2go
    const curb = this.props.curb
    const flywheel = this.props.flywheel
    const lyft = this.props.lyft
    const syc = this.props.syc
    const reachnow = this.props.reachnow
    const zipcar = this.props.zipcar
    const zoro = this.props.zoro

    return (
      <div>
        <Slider {...settings}>
          <div><img src={car2go} alt="Car2Go Logo" /></div>
          <div><img src={curb} alt="Curb Logo" /></div>
          <div><img src={flywheel} id="flywheel" alt="Flywheel Logo" /></div>
          <div><img src={lyft} alt="Lyft Logo" /></div>
          <div><img src={reachnow} alt="Reach Now Logo" /></div>
          <div><img src={syc} alt="SYC Logo" /></div>
          <div><img src={zipcar} alt="Zipcar Logo" /></div>
          <div><img src={zoro} alt="Zoro Logo" /></div>
          <div><img src={car2go} alt="Car2Go Logo" /></div>
          <div><img src={curb} alt="Curb Logo" /></div>
          <div><img src={flywheel} id="flywheel" alt="Flywheel Logo" /></div>
          <div><img src={lyft} alt="Lyft Logo" /></div>
          <div><img src={reachnow} alt="Reach Now Logo" /></div>
          <div><img src={syc} alt="SYC Logo" /></div>
          <div><img src={zipcar} alt="Zipcar Logo" /></div>
          <div><img src={zoro} alt="Zoro Logo" /></div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
