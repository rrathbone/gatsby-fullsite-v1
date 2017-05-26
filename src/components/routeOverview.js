import React from 'react'

const RouteOverview = () => {
  return (
    <section className="route-overview">
      <h2>Overview about this route</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div className="row">
        <div className="col-md-3">
          <p>Average time</p>
        </div>
        <div className="col-md-3">
          <p>Average distance</p>
        </div>
        <div className="col-md-6">
          <p>Average ETA graph</p>
        </div>
      </div>
    </section>
  )
}

export default RouteOverview
