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
          <a href="/">HOME</a>
          <a>VISIT</a>
          <a>ABOUT</a>
          <a>CONNECT</a>
          <a>SERMONS</a>
          <a>CONTACT</a>
          <a href="https://thecompasschurch.ccbchurch.com/trx_give.php" className="give">Give</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
