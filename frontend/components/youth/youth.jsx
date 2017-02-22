import React from 'react';
import CampusMap from '../map/map';
import { hashHistory, withRouter, Link } from 'react-router';

class Youth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {youthGroup: "none"};
  }

  handleButton (e, button) {
    e.preventDefault();
    if (button === "selma") {
      this.setState({youthGroup: "selma"});
    } else if (button === "winchester") {
      this.setState({youthGroup: "winchester"});
    } else if (button === "yorktown") {
      this.setState({youthGroup: "yorktown"});
    }
  }

  youthSchedule() {
    if (this.state.youthGroup === "none") {
      return (
        <div className="no-details"></div>
      );
    } else if (this.state.youthGroup === "selma") {
      return (
        <a href="http://res.cloudinary.com/dmow8kfvt/image/upload/v1487754374/Selma_Youth_Schedule.pdf" target="_blank" className="download-button">DOWNLOAD SCHEDULE</a>
      );
    } else if (this.state.youthGroup === "winchester") {
      return (
        <a href="http://res.cloudinary.com/dmow8kfvt/image/upload/v1487754374/Selma_Youth_Schedule.pdf" target="_blank" className="download-button">DOWNLOAD SCHEDULE</a>
      );
    } else if (this.state.youthGroup === "yorktown") {
      return (
        <a href="http://res.cloudinary.com/dmow8kfvt/image/upload/v1487755204/Yorktown_Schedule_zzqvsb.pdf" target="_blank" className="download-button">DOWNLOAD SCHEDULE</a>
      );
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
          {this.youthSchedule()}
        </div>
      </div>
    );
  }
}

export default Youth;
