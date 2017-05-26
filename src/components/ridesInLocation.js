import React from 'react';

const RidesInLocation = () => {
  let cityPage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  return (
    <section className="rides-in-location">
      {cityPage? <div><h2>X Ridesharing Companies in CITY</h2><h5>CAROUSEL & POP UP CARDS GOES HERE</h5></div> :
      <div><h2>X Ridesharing Companies in STATE</h2><h5>CAROUSEL & POP UP CARDS GOES HERE</h5></div>}
    </section>
  )
}

// RidesInLocation.propTypes = {
//   markets: React.PropTypes.array
// }

export default RidesInLocation
