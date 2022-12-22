import React, { Component } from 'react';
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/tempLogin.jpg";

export default class Auth extends Component {
    constructor(props) {
      super(props);
  
      this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
      this.handleUnsuccessfullAuth = this.handleUnsuccessfullAuth.bind(this);
    }
  
    handleSuccessfullAuth() {
      this.props.handleSuccessfullLogin();
      this.props.history.push("/");
    }
  
    handleUnsuccessfullAuth() {
      this.props.handleUnsuccessfullLogin();
    }
  
    render() {
      return (
        <div className="auth-page-wrapper">
          <div
            className="left-column"
            style={{
              backgroundImage: `url(${loginImg})`
            }}
          />
  
          <div className="right-column">
              <Login
              handleSuccessfullAuth={this.handleSuccessfullAuth}
              handleUnsuccessfullAuth={this.handleUnsuccessfullAuth}
            />
          </div>
        </div>
      );
    }
  }