import React from 'react';
import MediaQuery from 'react-responsive';
import {  Link } from 'react-router';

class Header extends React.Component {

  mediaHeader (type) {
    if (type === "desktop") {
      return (
        <header>
          <div className="header-content">
            <Link to="/">
              <img className="header-image" src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1483481411/CC-UM-Vertical_nsoikb.png" />
            </Link>
            <div className="links">
              <Link to="/">HOME</Link>
              <Link to="/visit">VISIT</Link>
              <div className="header-about">
                <Link to="/about">ABOUT</Link>
                  <ul className="about-dropdown">
                    <a href="/#/staff"><li>STAFF</li></a>
                    <a href="/#/mission"><li>MISSION</li></a>
                  </ul>
              </div>
              <div className="header-connect">
                <Link to="/connect">CONNECT</Link>
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
              <div className="header-next-step">
                <Link to="/next-steps">NEXT STEPS</Link>
                  <ul className="next-step-dropdown">
                    <a href="/volunteer"><li>VOLUNTEER</li></a>
                    <a href="/baptism"><li>BAPTISM</li></a>
                    <a href="/membership"><li>MEMBERSHIP</li></a>
                    <a href="/salt"><li>LEADERSHIP TRAINING (SALT)</li></a>
                  </ul>
              </div>
              <div className="header-daycare">
                <Link to="/childcare">CHILD CARE</Link>
                  <ul className="daycare-dropdown">
                    <a href="/little-learners"><li>LITTLE LEARNERS</li></a>
                    <a href="/little-scholars"><li>LITTLE SCHOLARS</li></a>
                  </ul>
              </div>
              <a>SERMONS</a>
              <a>CONTACT</a>
              <a href="https://thecompasschurch.ccbchurch.com/trx_give.php" className="give">Give</a>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className="mobile-header-content">
            <span className="fa fa-bars"></span>
            <Link to="/">
              <img className="header-image" src="http://res.cloudinary.com/dmow8kfvt/image/upload/v1483481411/CC-UM-Vertical_nsoikb.png" />
            </Link>
            <div className="blank"></div>
          </div>

          <ul className="mobile-menu">
            <li><span>HOME</span></li>
          <li><Link to="/visit">VISIT</Link></li>
          <li><div className="mobile-about">
              <span>ABOUT</span>
                <ul className="about-mobile">
                  <a href="/#/staff"><li>STAFF</li></a>
                  <a href="/#/mission"><li>MISSION</li></a>
                </ul>
            </div></li>
            <li><div className="mobile-connect">
              <span>CONNECT</span>
                <ul className="connect-mobile">
                  <a href="/children"><li>CHILDREN</li></a>
                  <a href="/youth"><li>YOUTH</li></a>
                  <a href="/camps"><li>CAMPS</li></a>
                  <a href="/young-adults"><li>YOUNG ADULTS</li></a>
                  <a href="/life-groups"><li>LIFE GROUPS</li></a>
                  <a href="/missions"><li>MISSIONS</li></a>
                  <a href="/care"><li>CARE</li></a>
                </ul>
            </div></li>
            <li><div className="mobile-next-step">
              <span>NEXT STEPS</span>
                <ul className="next-step-mobile">
                  <a href="/volunteer"><li>VOLUNTEER</li></a>
                  <a href="/baptism"><li>BAPTISM</li></a>
                  <a href="/membership"><li>MEMBERSHIP</li></a>
                  <a href="/salt"><li>LEADERSHIP TRAINING (SALT)</li></a>
                </ul>
            </div></li>
            <li><div className="mobile-daycare">
              <span>CHILD CARE</span>
                <ul className="daycare-mobile">
                  <a href="/little-learners"><li>LITTLE LEARNERS</li></a>
                  <a href="/little-scholars"><li>LITTLE SCHOLARS</li></a>
                </ul>
            </div></li>
          <li><a>SERMONS</a></li>
            <li><a>CONTACT</a></li>
            <li><a href="https://thecompasschurch.ccbchurch.com/trx_give.php">GIVE</a></li>
          </ul>
        </header>
      );
    }
  }

  render () {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          {this.mediaHeader("desktop")}
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          {this.mediaHeader("mobile")}
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
