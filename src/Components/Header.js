import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
 class Header extends Component {


  logOut(e){
    e.preventDefault()
    console.log("wa33333333333333333333333333")
    localStorage.removeItem('usertoken')

    this.props.history.push('/')
}
    render() {

      const loginRegLink = (
        <>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/register">Register</Link></li>
        </>
    )
    const userLink = (
      <>
      <li><Link to="/profile">profile</Link></li>
      <li><Link to="/"  onClick={this.logOut.bind(this)}>logout</Link></li>
      </>
        )
        return (
      
       
<>
   {/* <div className="preloader">
          <div className="preloader-spinner">
            <div className="loader-content">
              <img src="assets/img/preloader.gif" alt="JSOFT" />
            </div>
          </div>
        </div>  */}
      <header id="header-area" className="fixed-top">
        {/*== Header Top Start ==*/}
        <div id="header-top" className="d-none d-xl-block">
          <div className="container">
            <div className="row">
              {/*== Single HeaderTop Start ==*/}
              <div className="col-lg-3 text-left">
                <i className="fa fa-map-marker" /> Tit mellil, Casablanca
              </div>
              {/*== Single HeaderTop End ==*/}
              {/*== Single HeaderTop Start ==*/}
              <div className="col-lg-3 text-center">
                <i className="fa fa-mobile" /> +212 600512835
              </div>
              {/*== Single HeaderTop End ==*/}
              {/*== Single HeaderTop Start ==*/}
              <div className="col-lg-3 text-center">
                <i className="fa fa-clock-o" /> Mon-Fri 09.00 - 17.00
              </div>
              {/*== Single HeaderTop End ==*/}
              {/*== Social Icons Start ==*/}
              <div className="col-lg-3 text-right">
                <div className="header-social-icons">
                  <a href="#"><i className="fa fa-behance" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                </div>
              </div>
              {/*== Social Icons End ==*/}
            </div>
          </div>
        </div>
        {/*== Header Top End ==*/}
        {/*== Header Bottom Start ==*/}
        <div id="header-bottom">
          <div className="container">
            <div className="row">
              {/*== Logo Start ==*/}
              <div className="col-lg-4">
                <Link to="index.html" className="logo">
                  <img src="assets/img/logo.png" alt="JSOFT" />
                </Link>
              </div>
              {/*== Logo End ==*/}
              {/*== Main Menu Start ==*/}
              <div className="col-lg-8 d-none d-xl-block">
                <nav className="mainmenu alignright">
         
                  <ul>
             
                  
                    <li ><Link className="active" to="/">Home</Link>
                    {/* <li className="active"><a href="/">Home</a> */}
                     
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li><Link to="/cars">Cars</Link>
                
                    
                    </li>
                    {/* <li ><Link to="index.html">Pages</Link>
                      <ul>
                        <li><Link to="package.html">Pricing</Link></li>
                        <li><Link to="driver.html">Driver</Link></li>
                        <li><Link to="faq.html">FAQ</Link></li>
                        <li><Link to="gallery.html">Gallery</Link></li>
                        <li><Link to="help-desk.html">Help Desk</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li ><Link to="404.html">404</Link></li>
                      </ul>
                    </li> */}
                    {/* <li><a href="#">Blog</a>
                      <ul>
                        <li><a href="article.html">Blog Page</a></li>
                        <li><a href="article-details.html">Blog Details</a></li>
                      </ul>
                    </li> */}
                    {/* <li><a href="contact.html">Contact</a></li> */}
                    {localStorage.usertoken ? userLink : loginRegLink}
                  </ul>
                 
          
                </nav>
              </div>
              {/*== Main Menu End ==*/}
            </div>
          </div>
        </div>
        {/*== Header Bottom End ==*/}
      </header>
 </>
         
        )
    }
}
export default withRouter(Header)