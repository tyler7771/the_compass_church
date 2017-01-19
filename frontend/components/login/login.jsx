import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import SessionForm from '../sessionForm/session_form_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {type: "button"};
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }


  handleLogin(e) {
    e.preventDefault();
    return (
      <SessionForm formType = "Log in" action={this.props.login}/>
    );
  }

  handleButton(e, type) {
    e.preventDefault();
    if (type === "guest") {
      this.props.login({user: {username: "guest", password: "password"}});
    } else if (type === "signup") {
      if (!this.props.currentUser) {
        this.setState({type: "signup"});
      } else {
        hashHistory.push("/");
      }
    } else {
      if (!this.props.currentUser) {
        this.setState({type: "login"});
      } else {
        hashHistory.push("/");
      }
    }
  }

  render () {
    return (
      <div>
        <div className="background">
        </div>
        <div className="opacity"></div>
        <div className="welcome-content">
          <img className="logo" src="http://res.cloudinary.com/dfmvfna21/image/upload/c_scale,h_108/v1478714046/unbrewdOfficial-white_nwmhph.png" />
          <div className="welcome">
            <SessionForm formType = "Log in" action={this.props.login}/>
          </div>
          </div>
      </div>
    );
  }
}

export default Welcome;
