import React from 'react'
import PropTypes from 'prop-types'

const GettingAround = () => {
  let cityPage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  return (
    <section className="getting-around-location">
      {cityPage ?
        <div><h2>Getting Around CITY</h2><p>Seattle is a major city in Washington. It is in King County on Puget Sound in the Pacific Northwest..</p></div> :
        <div><h2>Getting Around STATE</h2><p>Bacon ipsum dolor amet frankfurter sirloin flank andouille spare.</p></div>}
    </section>
  )
}

// GettingAround.propTypes = {
//   markets: PropTypes.array
// }

export default GettingAround
