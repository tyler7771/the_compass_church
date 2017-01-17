import React from 'react';
import { withRouter, Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img className="header-image" src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1483481411/CC-UM-Vertical_nsoikb.png" />
        </Link>
        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/selma">SELMA HOME</Link>
          <Link to="/selma/visit">VISIT</Link>
          <div className="header-about">
            <a>ABOUT</a>
              <ul className="about-dropdown">
                <a href="/selma/staff"><li>STAFF</li></a>
                <a href="/#/mission"><li>MISSION</li></a>
              </ul>
          </div>
          <div className="header-connect">
            <a>CONNECT</a>
              <ul className="connect-dropdown">
                <a href="/children"><li>CHILDREN</li></a>
                <a href="/youth"><li>YOUTH</li></a>
                <a href="/camps"><li>CAMPS</li></a>
                <a href="/young-adults"><li>YOUNG ADULTS</li></a>
                <a href="/life-groups"><li>LIFE GROUPS</li></a>
                <a href="/missions"><li>MISSIONS</li></a>
                <a href="/care"><li>CARE</li></a>
              </ul>
          </div>
          <a>SERMONS</a>
          <a>CONTACT</a>
          <a href="https://thecompasschurch.ccbchurch.com/trx_give.php" className="give">Give</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
