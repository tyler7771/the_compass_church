import React from 'react';
import {  Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <header>
        <div className="header-content">
          <Link to="/">
            <img className="header-image" src="https://res.cloudinary.com/dmow8kfvt/image/upload/v1483481411/CC-UM-Vertical_nsoikb.png" />
          </Link>
          <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/visit">VISIT</Link>
            <div className="header-about">
              <a>ABOUT</a>
                <ul className="about-dropdown">
                  <Link to="/staff"><li>STAFF</li></Link>
                  <Link to="/mission"><li>MISSION</li></Link>
                </ul>
            </div>
            <div className="header-connect">
              <a>CONNECT</a>
                <ul className="connect-dropdown">
                  <Link to='/sermons'><li>SERMONS</li></Link>
                  <Link to='/events'><li>EVENTS</li></Link>
                  <Link to="/children"><li>CHILDREN</li></Link>
                  <Link to="/youth"><li>YOUTH</li></Link>
                  <Link to="/missions"><li>MISSIONS</li></Link>
                </ul>
            </div>
            <Link to="/childcare">CHILD CARE</Link>
            <a>CONTACT</a>
            <a href="https://thecompasschurch.ccbchurch.com/trx_give.php" className="give">GIVE</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
