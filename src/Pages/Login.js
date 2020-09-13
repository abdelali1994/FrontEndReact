import React, { Component } from "react";
import { login } from "../Components/UserFunctions";
import {Link,withRouter} from 'react-router-dom'
import PageTitle from "../img/page-title.jpg";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("user", user);
    login(user).then((res) => {
      console.log("hello from login", res);
      // if (res) {
      this.props.history.push("/profile");
      // }
    });
  }
  render() {
    return (
      <div>
       
        <section id="page-title-area" className="section-padding overlay" style={{ backgroundImage: `url(${PageTitle})` }}>
          <div className="container">
            <div className="row">
              {/* Page Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>Login</h2>
                  <span className="title-line">
                    <i className="fa fa-car" />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Page Title End */}
            </div>
          </div>
        </section>
        {/*== Page Title Area End ==*/}
        {/*== Login Page Content Start ==*/}
        <section id="lgoin-page-wrap" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-8 m-auto">
                <div className="login-page-content">
                  <div className="login-form">
                    <h3>Welcome Back!</h3>
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="username">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email "
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="password">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="log-btn">
                        <button type="submit">
                          <i className="fa fa-sign-in" /> Log In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="login-other">
                    <span className="or">or</span>
                    <a href="#" className="login-with-btn facebook">
                      <i className="fa fa-facebook" /> Login With Facebook
                    </a>
                    <a href="#" className="login-with-btn google">
                      <i className="fa fa-google" /> Login With Google
                    </a>
                  </div>
                  <div className="create-ac">
                    <p>
                      Don't have an account? 
                      <Link to="/register">Sign Up</Link>
                    </p>
                  </div>
                  <div className="login-menu">
                   
                    <Link to="/about">About</Link>
                    <span>|</span>
                    <a href="contact.html">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
