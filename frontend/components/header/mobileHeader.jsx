import React from 'react';
import MediaQuery from 'react-responsive';
import {  Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false,
                  class: 'mobile-menu',
                  hamburgerClass: null,
                  action: 'open',
                  aboutActive: false,
                  aboutClass: 'about-closed',
                  connectActive: false,
                  connectClass: 'connect-closed'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    if(type === "open"){
      this.setState({active: true,
                    class: 'active',
                    hamburgerClass: 'open',
                    action: 'close'});
    } else if (type === "close") {
      this.setState({active: false,
                    class: 'mobile-menu',
                    hamburgerClass: null,
                    action: 'open',
                    aboutActive: false,
                    aboutClass: 'about-closed',
                    connectActive: false,
                    connectClass: 'connect-closed'});
    } else if (type === "about" && this.state.aboutActive === false) {
      this.setState({aboutActive: true,
                    aboutClass: 'about-opened',
                    connectActive: false,
                    connectClass: 'connect-closed'});
    } else if (type === "about" && this.state.aboutActive === true) {
      this.setState({aboutActive: false, aboutClass: 'about-closed'});
    } else if (type === "connect" && this.state.connectActive === false) {
      this.setState({connectActive: true,
                    connectClass: 'connect-opened',
                    aboutActive: false,
                    aboutClass: 'about-closed'});
    } else if (type === "connect" && this.state.connectActive === true) {
      this.setState({connectActive: false, connectClass: 'about-closed'});
    }
  }

  render () {
    return (
      <header>
        <div className="mobile-header-content">
          <div id="nav-icon1" className={this.state.hamburgerClass} onClick={() => this.handleClick(this.state.action)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/">
            <img className="mobile-header-image" src="https://res.cloudinary.com/dmow8kfvt/image/upload/v1483481411/CC-UM-Vertical_nsoikb.png" />
          </Link>
          <div className="blank"></div>
        </div>

        <div className={this.state.class}>
          <div className="mobile-links" style={{height: $(document).height()}}>
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
                <Link to="/sermons" onClick={() => this.handleClick("close")}>SERMONS</Link>
                <Link to="/events" onClick={() => this.handleClick("close")}>EVENTS</Link>
                <Link to="/children" onClick={() => this.handleClick("close")}>CHILDREN</Link>
                <Link to="/youth" onClick={() => this.handleClick("close")}>YOUTH</Link>
                <Link to="/missions" onClick={() => this.handleClick("close")}>MISSIONS</Link>
              </div>
            </div></span>
            <Link to="/childcare" onClick={() => this.handleClick("close")}>CHILD CARE</Link>
            <a href="https://thecompasschurch.ccbchurch.com/trx_give.php">GIVE</a>
          </div>
          <div className="mobile-link-close"
            onClick={() => this.handleClick("close")}
            style={{height: innerHeight}}>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
