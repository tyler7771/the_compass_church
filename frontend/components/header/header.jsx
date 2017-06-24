import React from 'react';
import MediaQuery from 'react-responsive';
import {  Link } from 'react-router';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          < DesktopHeader />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          < MobileHeader />
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
