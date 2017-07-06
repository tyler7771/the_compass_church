import React from 'react';
import CampusMap from '../map/map';
import { hashHistory, withRouter, Link } from 'react-router';
import CampusLinks from './campuslinks';

class Visit extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="visit">
        <div className="visit-header">
          <h2>VISIT</h2>
        </div>
        < CampusLinks />
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

export default Visit;
