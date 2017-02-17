import React from 'react';
import MediaQuery from 'react-responsive';
import {  Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false,
                  class: 'mobile-menu',
                  aboutActive: false,
                  aboutClass: 'about-closed',
                  connectActive: false,
                  connectClass: 'connect-closed',
                  nextStepActive: false,
                  nextStepClass: 'next-step-closed',
                  daycareActive: false,
                  daycareClass: 'daycare-closed'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    if(type === "open"){
      this.setState({active: true, class: 'active'});
    } else if (type === "close") {
      this.setState({active: false,
                    class: 'mobile-menu',
                    aboutActive: false,
                    aboutClass: 'about-closed',
                    connectActive: false,
                    connectClass: 'connect-closed',
                    nextStepActive: false,
                    nextStepClass: 'next-step-closed',
                    daycareActive: false,
                    daycareClass: 'daycare-closed'});
    } else if (type === "about" && this.state.aboutActive === false) {
      this.setState({aboutActive: true,
                    aboutClass: 'about-opened',
                    connectActive: false,
                    connectClass: 'connect-closed',
                    nextStepActive: false,
                    nextStepClass: 'next-step-closed',
                    daycareActive: false,
                    daycareClass: 'daycare-closed'});
    } else if (type === "about" && this.state.aboutActive === true) {
      this.setState({aboutActive: false, aboutClass: 'about-closed'});
    } else if (type === "connect" && this.state.connectActive === false) {
      this.setState({connectActive: true,
                    connectClass: 'connect-opened',
                    aboutActive: false,
                    aboutClass: 'about-closed',
                    nextStepActive: false,
                    nextStepClass: 'next-step-closed',
                    daycareActive: false,
                    daycareClass: 'daycare-closed'});
    } else if (type === "connect" && this.state.connectActive === true) {
      this.setState({connectActive: false, connectClass: 'about-closed'});
    } else if (type === "nextStep" && this.state.nextStepActive === false) {
      this.setState({nextStepActive: true,
                    nextStepClass: 'next-step-opened',
                    aboutActive: false,
                    aboutClass: 'about-closed',
                    connectActive: false,
                    connectClass: 'connect-closed',
                    daycareActive: false,
                    daycareClass: 'daycare-closed'});
    } else if (type === "nextStep" && this.state.nextStepActive === true) {
      this.setState({nextStepActive: false, nextStepClass: 'next-step-closed'});
    } else if (type === "daycare" && this.state.daycareActive === false) {
      this.setState({daycareActive: true,
                    daycareClass: 'daycare-opened',
                    nextStepActive: false,
                    nextStepClass: 'next-step-closed',
                    aboutActive: false,
                    aboutClass: 'about-closed',
                    connectActive: false,
                    connectClass: 'connect-closed',});
    } else if (type === "daycare" && this.state.daycareActive === true) {
      this.setState({daycareActive: false, daycareClass: 'daycare-closed'});
    }
  }

  mediaHeader (type) {
    if (type === "desktop") {
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
                <Link to="/about">ABOUT</Link>
                  <ul className="about-dropdown">
                    <Link to="/staff"><li>STAFF</li></Link>
                    <Link to="/mission"><li>MISSION</li></Link>
                  </ul>
              </div>
              <div className="header-connect">
                <Link to="/connect">CONNECT</Link>
                  <ul className="connect-dropdown">
                    <Link to="/children"><li>CHILDREN</li></Link>
                    <Link to="/youth"><li>YOUTH</li></Link>
                    <Link to="/camps"><li>CAMPS</li></Link>
                    <Link to="/young-adults"><li>YOUNG ADULTS</li></Link>
                    <Link to="/life-groups"><li>LIFE GROUPS</li></Link>
                    <Link to="/missions"><li>MISSIONS</li></Link>
                    <Link to="/care"><li>CARE</li></Link>
                  </ul>
              </div>
              <div className="header-next-step">
                <Link to="/next-steps">NEXT STEPS</Link>
                  <ul className="next-step-dropdown">
                    <Link to="/volunteer"><li>VOLUNTEER</li></Link>
                    <Link to="/baptism"><li>BAPTISM</li></Link>
                    <Link to="/membership"><li>MEMBERSHIP</li></Link>
                    <Link to="/salt"><li>LEADERSHIP TRAINING (SALT)</li></Link>
                  </ul>
              </div>
              <div className="header-daycare">
                <Link to="/childcare">CHILD CARE</Link>
                  <ul className="daycare-dropdown">
                    <Link to="/little-learners"><li>LITTLE LEARNERS</li></Link>
                    <Link to="/little-scholars"><li>LITTLE SCHOLARS</li></Link>
                  </ul>
              </div>
              <a>SERMONS</a>
              <a>CONTACT</a>
              <a href="https://thecompasschurch.ccbchurch.com/trx_give.php" className="give">GIVE</a>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className="mobile-header-content">
            <span className="fa fa-bars" onClick={() => this.handleClick("open")}></span>
            <Link to="/">
              <img className="mobile-header-image" src="https://res.cloudinary.com/dmow8kfvt/image/upload/v1483481411/CC-UM-Vertical_nsoikb.png" />
            </Link>
            <div className="blank"></div>
          </div>

          <div className={this.state.class}>
            <div className="mobile-links">
              <Link to="/" onClick={() => this.handleClick("close")}>HOME</Link>
              <Link to="/visit" onClick={() => this.handleClick("close")}>VISIT</Link>
              <span onClick={() => this.handleClick("about")}><div className="mobile-about">
                <span>ABOUT</span>
                <div className={this.state.aboutClass}>
                  <Link to="/staff" onClick={() => this.handleClick("close")}>STAFF</Link>
                  <Link to="/mission" onClick={() => this.handleClick("close")}>MISSION</Link>
                </div>
              </div></span>
            <span onClick={() => this.handleClick("connect")}><div className="mobile-connect">
                <span>CONNECT</span>
                <div className={this.state.connectClass}>
                  <Link to="/children" onClick={() => this.handleClick("close")}>CHILDREN</Link>
                  <Link to="/youth" onClick={() => this.handleClick("close")}>YOUTH</Link>
                  <Link to="/camps" onClick={() => this.handleClick("close")}>CAMPS</Link>
                  <Link to="/young-adults" onClick={() => this.handleClick("close")}>YOUNG ADULTS</Link>
                  <Link to="/life-groups" onClick={() => this.handleClick("close")}>LIFE GROUPS</Link>
                  <Link to="/missions" onClick={() => this.handleClick("close")}>MISSIONS</Link>
                  <Link to="/care" onClick={() => this.handleClick("close")}>CARE</Link>
                </div>
              </div></span>
              <span onClick={() => this.handleClick("nextStep")}><div className="mobile-next-step">
                <span>NEXT STEPS</span>
                <div className={this.state.nextStepClass}>
                  <Link to="/volunteer" onClick={() => this.handleClick("close")}>VOLUNTEER</Link>
                  <Link to="/baptism" onClick={() => this.handleClick("close")}>BAPTISM</Link>
                  <Link to="/membership" onClick={() => this.handleClick("close")}>MEMBERSHIP</Link>
                  <Link to="/salt" onClick={() => this.handleClick("close")}>LEADERSHIP TRAINING (SALT)</Link>
                </div>
              </div></span>
              <span onClick={() => this.handleClick("daycare")}><div className="mobile-daycare">
                <span>CHILD CARE</span>
                <div className={this.state.daycareClass}>
                  <Link to="/little-learners" onClick ={ () => this.handleClick("close")}>LITTLE LEARNERS</Link>
                  <Link to="/little-scholars" onClick ={ () => this.handleClick("close")}>LITTLE SCHOLARS</Link>
                </div>
              </div></span>
              <Link to ="/sermons">SERMONS</Link>
              <Link to ="/contact">CONTACT</Link>
              <a href="https://thecompasschurch.ccbchurch.com/trx_give.php">GIVE</a>
            </div>
            <div className="mobile-link-close" onClick={() => this.handleClick("close")}></div>
          </div>
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
