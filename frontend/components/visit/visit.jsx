import React from 'react';
import CampusMap from '../map/map';
import { hashHistory, withRouter, Link } from 'react-router';

class Visit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {locationDetails: "none"};
  }

  handleButton (e, button) {
    e.preventDefault();
    if (button === "selma") {
      this.setState({locationDetails: "selma"});
    } else if (button === "winchester") {
      this.setState({locationDetails: "winchester"});
    } else if (button === "yorktown") {
      this.setState({locationDetails: "yorktown"});
    }
  }

  locationInfo () {
    if (this.state.locationDetails === "none") {
      return (
        <div className="no-details"></div>
      );
    } else if (this.state.locationDetails === "selma") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"selma"}
          />
          <div className="campus-info-details">
            selma
          </div>
        </div>
      );
    } else if (this.state.locationDetails === "winchester") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"winchester"}
          />
        </div>
      );
    } else if (this.state.locationDetails === "yorktown") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"yorktown"}
          />
        </div>
      );
    }
  }

  render () {
    return (
      <div className="visit">
        <h2>VISIT</h2>
        <div className="locations">
          <h2>OUR LOCATIONS</h2>
          <div className="campus-links">
            <Link to="/selma" className="campus-link">
              <div className="selma-link">
                <div className="campus-title">SELMA</div>
                <button onClick={ (e) => this.handleButton(e, "selma") }>CAMPUS DETAILS</button>
              </div>
            </Link>
            <Link to="/winchester" className="campus-link">
              <div className="winchester-link">
                <div className="campus-title">WINCHESTER</div>
                <button onClick={ (e) => this.handleButton(e, "winchester") }>CAMPUS DETAILS</button>
              </div>
            </Link>
            <Link to="/yorktown" className="campus-link">
              <div className="yorktown-link">
                <div className="campus-title">YORKTOWN</div>
                <button onClick={ (e) => this.handleButton(e, "yorktown") }>CAMPUS DETAILS</button>
              </div>
            </Link>
          </div>
          {this.locationInfo()}
        </div>
      </div>
    );
  }
}

export default Visit;
