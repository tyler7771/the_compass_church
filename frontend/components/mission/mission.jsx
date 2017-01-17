import React from 'react';
import CampusMap from '../map/map';
import { hashHistory, withRouter, Link } from 'react-router';

class Mission extends React.Component {
  constructor(props) {
    super(props);

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
      <div className="mission">
        <div className="mission-header">
          <h2>OUR MISSION</h2>
        </div>
        <div className="mission-and-vision">
          <h2>OUR MISSION</h2>
          <span className="mission-subheading">WHAT WE DESIRE TO DO</span>
          <p className="mission-text">To make disciples of Jesus Christ for the transformation of the world.</p>
          <h2>OUR VISION</h2>
          <span className="mission-subheading">HOW WE INTEND TO DO IT</span>
          <p className="mission-text">We want to reach, teach, and release disciples and leaders for Jesus Christ. <br /> Our Growth Grid, pictured below, is how we accomplish this vision.</p>
        </div>
        <div className="vision-info">
          <img src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1484685271/Compass-Church-Mission-Vision_dadglw.jpg"/>
          <div className="vision-text">
            <span>Reaching</span>
            <p>We believe in… reaching our non-churched neighbors in relational and missional ways, inviting them to church and introducing them to Christ. We expect new people to embrace Christ as Savior and Lord of their life and become authentic believers in Jesus Christ.</p>
            <span>Teaching</span>
            <p>We believe in…teaching our members in relational and missional ways, teaching them to live like Christ. We expect our members to embrace Christ as Savior and Lord of their life and become authentic followers of Jesus Christ.</p>
            <span>Releasing</span>
            <p>We believe in… releasing those trained to lead to bring about transformation in individuals, families, communities, and throughout the world. We expect trained leaders to be dedicated disciplers for Jesus Christ by helping others along our Growth Grid.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
