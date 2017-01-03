import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <div className="splash-image">
          <h1>WELCOME</h1>
        </div>
      </div>
    );
  }
}

export default Welcome;
