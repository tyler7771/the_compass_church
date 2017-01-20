import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import SessionForm from './session_form_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {type: "button"};
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
    return (<SessionForm formType = "Log in" action={this.props.login}/>);
  }
}

export default Welcome;
