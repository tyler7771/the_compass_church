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
            <div className="campus-info-details-text">
              <h3>Selma</h3>
              <p><span className="fa fa-clock-o"></span> Sundays at 9:00 & 10:45am</p>
              <p><span className="fa fa-phone-square"></span> (765) 282-1648</p>
              <p><span className="fa fa-envelope"></span> selma@thecompass.church</p>
              <div className="address">
                <span><p><span className="fa fa-map-marker"></span> 400 N CR 600 E</p><p>&ensp; SELMA, IN 47383</p></span>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//The+Compass+Church+-+Selma,+400+N+Co+Rd+600+E,+Selma,+IN+47383/@40.195659,-85.275648,17z/data=!4m15!1m6!3m5!1s0x88153ff7cab93139:0x810f52ff63f7ba3a!2sThe+Compass+Church+-+Selma!8m2!3d40.195659!4d-85.273454!4m7!1m0!1m5!1m1!1s0x88153ff7cab93139:0x810f52ff63f7ba3a!2m2!1d-85.273454!2d40.195659" target="_blank" className="directions"><span className="fa fa-road"></span> Directions</a>
          </div>
        </div>
      );
    } else if (this.state.locationDetails === "winchester") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"winchester"}
          />
          <div className="campus-info-details">
            <div className="campus-info-details-text-winchester">
              <h3>Winchester</h3>
              <p><span className="fa fa-clock-o"></span> Sundays at 9:30am</p>
              <p><span className="fa fa-phone-square"></span> (765) 584-4151</p>
              <p><span className="fa fa-envelope"></span> winchester@thecompass.church</p>
              <div className="address">
                <span><p><span className="fa fa-map-marker"></span> Sunday Location:</p><p>&ensp; TOWNE SQUARE COMMUNITY CENTRE</p><p>&ensp; 123 W FRANKLIN ST</p><p>&ensp; WINCHESTER, IN 47394</p></span>
                <span><p><span className="fa fa-map-marker"></span> Office Location:</p><p>&ensp; 313 S MERIDIAN ST</p><p>&ensp; WINCHESTER, IN 47394</p></span>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//123+W+Franklin+St,+Winchester,+IN+47394/@40.171474,-84.9843989,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88155e4d3105997b:0x9e4d4f01fafb981a!2m2!1d-84.9822049!2d40.171474" target="_blank" className="directions"><span className="fa fa-road"></span> Directions</a>
          </div>
        </div>
      );
    } else if (this.state.locationDetails === "yorktown") {
      return (
        <div className="campus-info">
          <CampusMap className="campus-map"
            center={"yorktown"}
          />
          <div className="campus-info-details">
            <div className="campus-info-details-text">
              <h3>Yorktown</h3>
              <p><span className="fa fa-clock-o"></span> Sundays at 10:45am</p>
              <p><span className="fa fa-phone-square"></span> (765) 405-1119</p>
              <p><span className="fa fa-envelope"></span> yorktown@thecompass.church</p>
              <div className="address">
                <span><p><span className="fa fa-map-marker"></span> 8116 W JACKSON ST</p><p>&ensp; MUNCIE, IN 47304</p></span>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir//The+Compass+Church+-+Yorktown,+8116+W+Jackson+St,+Muncie,+IN+47304/@40.2108617,-85.5166683,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8815227cd4542c5b:0xfaddb1cb57dcc2de!2m2!1d-85.481563!2d40.210867" target="_blank" className="directions"><span className="fa fa-road"></span> Directions</a>
          </div>
        </div>
      );
    }
  }

  render () {
    return (
      <div className="visit">
        <div className="visit-header">
          <h2>VISIT</h2>
        </div>
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
        <div className="what-to-expect">
          <h2>WHAT TO EXPECT</h2>
          <div className="what-to-expect-content">
            <div className="what-to-expect-image"></div>
            <div className="what-to-expect-text">
              <p>We believe that God has the power to change lives – and we have seen Him do just that. Marriages are being restored, addictions overcome, and people are taking steps toward reaching their full potential in Christ. Our desire is that here at The Compass Church, you’ll experience these things for yourself.</p>
              <br/>
              <p>What can you expect at The Compass Church:</p>
              <br/>
              <ul>
                <li>&ensp;• A warm welcom from friendly faces</li>
                <li>&ensp;• Environments for every age</li>
                <li>&ensp;• Engaging worship and a Relevant message</li>
              </ul>
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Visit;
