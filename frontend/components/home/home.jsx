import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <div className="splash-image" style={{height: innerHeight}}>
          <h1>WELCOME</h1>
        </div>
        <div className="locations">
          <h2>OUR LOCATIONS</h2>
          <div className="campus-links">
            <Link to="/selma" className="campus-link">
              <div className="selma-link">
                <div className="campus-title">SELMA</div>
                <div className="campus-details">CLICK FOR CAMPUS DETAILS</div>
              </div>
            </Link>
            <Link to="/winchester" className="campus-link">
              <div className="winchester-link">
                <div className="campus-title">WINCHESTER</div>
                <div className="campus-details">CLICK FOR CAMPUS DETAILS</div>
              </div>
            </Link>
            <Link to="/yorktown" className="campus-link">
              <div className="yorktown-link">
                <div className="campus-title">YORKTOWN</div>
                <div className="campus-details">CLICK FOR CAMPUS DETAILS</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
