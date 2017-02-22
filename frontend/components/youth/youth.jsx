import React from 'react';
import CampusMap from '../map/map';
import { hashHistory, withRouter, Link } from 'react-router';

class Youth extends React.Component {
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

  render () {
    return (
      <div className="visit">
        <div className="visit-header">
          <h2>YOUTH</h2>
        </div>
        <div className="locations">
          <h2>CHECK OUT WHAT OUR YOUTH ARE DOING</h2>
          <div className="campus-links">
            <a className="campus-link">
              <div className="selma-youth">
                <div className="campus-title">SELMA</div>
                <button onClick={ (e) => this.handleButton(e, "selma") }>YOUTH SCHEDULE</button>
              </div>
            </a>
            <a className="campus-link">
              <div className="winchester-youth">
                <div className="campus-title">WINCHESTER</div>
                <button onClick={ (e) => this.handleButton(e, "winchester") }>YOUTH SCHEDULE</button>
              </div>
            </a>
            <a className="campus-link">
              <div className="yorktown-youth">
                <div className="campus-title">YORKTOWN</div>
                <button onClick={ (e) => this.handleButton(e, "yorktown") }>YOUTH SCHEDULE</button>
              </div>
            </a>
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
                <li>&ensp;• A warm welcome from friendly faces</li>
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

export default Youth;
