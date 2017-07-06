import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import CampusLinks from '../visit/campuslinks';

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
        < CampusLinks />
        <iframe src="https://player.vimeo.com/video/222980949?autoplay=1&color=E20F28&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    );
  }
}

export default Home;
