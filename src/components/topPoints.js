import React from 'react'
import PropTypes from 'prop-types'

const TopPoints = ({ placeholder }) => {
  let cityPage = false
  let statePage = false
  let seattlePage = false

  if(location.pathname.includes('city')) {
    cityPage = true
  }

  if(location.pathname.includes('seattle')) {
    seattlePage = true
  }

  if(location.pathname.includes('state')) {
    statePage = true
  }

  return (
    <section className="top-points-of-interest">
      {cityPage ?
        <div>
          <h2>Top Points of Interest in CITY</h2>
          <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
        </div>

        : seattlePage ?
          <div>
            <h2>Top Points of Interest in Seattle</h2>
            <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
            <div className="row places-cards">
              <div className="col-md-6 top-places left">
                <div className="col-md-4">
                  <img src={placeholder} className="places-img" alt=""/>
                </div>

                <div className="col-md-8">
                  <h3>Point of Interest</h3>
                  <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                  <a href="#">View rides to point of interest</a>
                </div>

              </div>
              <div className="col-md-6 top-places">
                <div className="col-md-4">
                  <img src={placeholder} className="places-img" alt=""/>
                </div>

                <div className="col-md-8">
                  <h3>Point of Interest</h3>
                  <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                  <a href="#">View rides to point of interest</a>
                </div>
              </div>
            </div>
            <div className="row places-cards">
              <div className="col-md-6 top-places left">
                <div className="col-md-4">
                  <img src={placeholder} className="places-img" alt=""/>
                </div>

                <div className="col-md-8">
                  <h3>Point of Interest</h3>
                  <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                  <a href="#">View rides to point of interest</a>
                </div>

              </div>
              <div className="col-md-6 top-places">
                <div className="col-md-4">
                  <img src={placeholder} className="places-img" alt=""/>
                </div>

                <div className="col-md-8">
                  <h3>Point of Interest</h3>
                  <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                  <a href="#">View rides to point of interest</a>
                </div>
              </div>
            </div>
          </div>

        : statePage ?
        <div>
          <h2>Top Points of Interest in STATE</h2>
          <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
        </div>
        :
        <div>
          <h2 id="poi-routes">Top Points of interest in LOCATION</h2>
          <p>Pancetta meatloaf jowl cow, sausage ham biltong filet mignon hamburger pork belly leberkas shank tail frankfurter. Corned beef meatball hamburger swine bacon turducken fatback pork chop salami strip steak short loin venison pork loin frankfurter pork belly.</p>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
          <div className="row places-cards">
            <div className="col-md-6 top-places left">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>

            </div>
            <div className="col-md-6 top-places">
              <div className="col-md-4">
                <img src={placeholder} className="places-img" alt=""/>
              </div>

              <div className="col-md-8">
                <h3>Point of Interest</h3>
                <p>Ham turducken pork, rump andouille frankfurter pork belly. Biltong jowl shoulder venison hamburger. Biltong alcatra kielbasa hamburger short ribs strip steak beef ribs, bacon drumstick.</p>
                <a href="#">View rides to point of interest</a>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

TopPoints.propTypes = {
  placehodler: PropTypes.string
}

export default TopPoints
