import React, { Component } from 'react'
import {register} from '../Components/UserFunctions'
import PageTitle from "../img/page-title.jpg";
export default class Register extends Component {

    constructor(){
        super()
        this.state={

            first_name:' ',
            last_name:' ',
            email:' ',
            addresse:' ',
            cin:' ',
            phone:' ',
            password:' ',
            c_password:' ',
            errors:{}
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log('onchange from Register',e.target.value)
    }
    onSubmit(e){
        e.preventDefault()
        const newUser ={
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            cin:this.state.cin,
            phone:this.state.phone,
            addresse:this.state.addresse,
            password:this.state.password,
            c_password:this.state.c_password
           
        }
        
        console.log("newUser",newUser);
        register(newUser).then(res => {
            if (res) {
                this.props.history.push('/login')
            }
        })
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
                  <h2>Register</h2>
                  <span className="title-line"><i className="fa fa-car" /></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
              <div className="col-lg-5 col-md-8 m-auto">
                <div className="login-page-content">
                  <div className="login-form">
                    <h3>Sign Up</h3>
                    {/* <form action="index.html"> */}
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="name">
                        <div className="row">
                          <div className="col-md-6">
                            <input 
                            type="text" 
                            name="first_name"
                            placeholder="First Name"
                            onChange={this.onChange}
                             />
                          </div>
                          <div className="col-md-6">
                            <input 
                            type="text" 
                            name="last_name"
                            placeholder="Last Name"
                             onChange={this.onChange} 
                             />
                          </div>
                          <div className="col-md-6">
                            <input 
                            type="text" 
                            name="cin"   
                            placeholder="Cin"
                             onChange={this.onChange}
                              />
                          </div>
                          <div className="col-md-6">
                            <input 
                            type="text" 
                            name="phone"   
                            placeholder="Number phone "
                             onChange={this.onChange} 
                             />
                          </div>
                        </div>
                      </div>
                      <div className="username">
                        <input
                        type="email"
                        name="email" 
                        placeholder="Email" 
                        onChange={this.onChange}
                        />
                      </div>
                      <div className="username">
                        <input type="text" 
                        name="addresse"
                        placeholder="addresse" 
                        onChange={this.onChange}
                        />
                      </div>
                      <div className="password">
                        <input
                         type="password" 
                        name="password"
                        placeholder="Password"
                        onChange={this.onChange}
                         />
                      </div>
                      <div className="password">
                        <input 
                        type="password"
                        name="c_password"
                        placeholder="C_Password"
                        onChange={this.onChange}
                         />
                      </div>
                      <div className="log-btn">
                        <button type="submit">
                            <i className="fa fa-check-square" /> Sign Up</button>
                      </div>
                    </form>
                  </div>
                  <div className="login-other">
                    <span className="or">or</span>
                    <a href="#" className="login-with-btn facebook"><i className="fa fa-facebook" /> Signup With Facebook</a>
                    <a href="#" className="login-with-btn google"><i className="fa fa-google" /> Signup With Google</a>
                  </div>
                  <div className="create-ac">
                    <p>Have an account? <a href="login.html">Sign In</a></p>
                  </div>
                  <div className="login-menu">
                    <a href="about.html">About</a>
                    <span>|</span>
                    <a href="contact.html">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}
