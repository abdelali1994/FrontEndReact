import React, { Component } from "react";
import Header from "../Components/Header";
import Testimonial from "../Components/Testimonial";
import PageTitle from "../img/page-title.jpg";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class About extends Component {
  render() {
    return (
    <>
      
        <section
          id="page-title-area"
          className="section-padding overlay"
          style={{ backgroundImage: `url(${PageTitle})` }}
        >
          <div className="container">
            <div className="row">
              {/* Page Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>About US</h2>
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
        {/*== About Page Content Start ==*/}
        <section id="about-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Section Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>About us</h2>
                  <span className="title-line">
                    <i className="fa fa-car" />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              {/* Section Title End */}
            </div>
            <div className="row">
              {/* About Content Start */}
              <div className="col-lg-6">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="about-content">
                      <p>
                        Lorem simply dummy is a texted of the printing costed
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* About Content End */}
              {/* About Video Start */}
              <div className="col-lg-6">
                <div className="about-image">
                  <img src="assets/img/home-2-about.png" alt="JSOFT" />
                </div>
              </div>
              {/* About Video End */}
            </div>
            {/* About Fretutes Start */}
            <div className="about-feature-area">
              <div className="row">
                {/* Single Fretutes Start */}
                <div className="col-lg-4">
                  <div className="about-feature-item active">
                    <i className="fa fa-car" />
                    <h3>ALL BRANDS</h3>
                    <p>
                      Loremed ipsumed is a compnayes odsoyel dolor sit amet,
                      consectetur adipisicing elit. Nesciunted all of.
                    </p>
                  </div>
                </div>
                {/* Single Fretutes End */}
                {/* Single Fretutes Start */}
                <div className="col-lg-4">
                  <div className="about-feature-item">
                    <i className="fa fa-car" />
                    <h3>ALL BRANDS</h3>
                    <p>
                      Loremed ipsumed is a compnayes odsoyel dolor sit amet,
                      consectetur adipisicing elit. Nesciunted all of.
                    </p>
                  </div>
                </div>
                {/* Single Fretutes End */}
                {/* Single Fretutes Start */}
                <div className="col-lg-4">
                  <div className="about-feature-item">
                    <i className="fa fa-car" />
                    <h3>ALL BRANDS</h3>
                    <p>
                      Loremed ipsumed is a compnayes odsoyel dolor sit amet,
                      consectetur adipisicing elit. Nesciunted all of.
                    </p>
                  </div>
                </div>
                {/* Single Fretutes End */}
              </div>
            </div>
            {/* About Fretutes End */}
          </div>
        </section>
        {/*== About Page Content End ==*/}
        {/*== Our Facility Content Start ==*/}
        <section id="our-facility" className="section-padding overlay">
          <div className="container">
            <div className="row">
              {/* Single Facility Start */}
              <div className="col-lg-3 col-md-6">
                <div className="single-our-facility">
                  <h3>LIMO PARTY RENT</h3>
                  <ul>
                    <li>Parallax Everywhere</li>
                    <li>Interactive and Fun</li>
                    <li>Responsive and Refined</li>
                    <li>Color it All</li>
                    <li>Customize and Create</li>
                  </ul>
                </div>
              </div>
              {/* Single Facility Start */}
              {/* Single Facility Start */}
              <div className="col-lg-3 col-md-6">
                <div className="single-our-facility">
                  <h3>BUSINESS LIMO RENT</h3>
                  <ul>
                    <li>Parallax Everywhere</li>
                    <li>Interactive and Fun</li>
                    <li>Responsive and Refined</li>
                    <li>Color it All</li>
                    <li>Customize and Create</li>
                  </ul>
                </div>
              </div>
              {/* Single Facility Start */}
              {/* Single Facility Start */}
              <div className="col-lg-3 col-md-6">
                <div className="single-our-facility">
                  <h3>HOTEL/CASINO/HOTEL</h3>
                  <ul>
                    <li>Parallax Everywhere</li>
                    <li>Interactive and Fun</li>
                    <li>Responsive and Refined</li>
                    <li>Color it All</li>
                    <li>Customize and Create</li>
                  </ul>
                </div>
              </div>
              {/* Single Facility Start */}
              {/* Single Facility Start */}
              <div className="col-lg-3 col-md-6">
                <div className="single-our-facility">
                  <h3>AIRPORT TRANSPORT</h3>
                  <ul>
                    <li>Parallax Everywhere</li>
                    <li>Interactive and Fun</li>
                    <li>Responsive and Refined</li>
                    <li>Color it All</li>
                    <li>Customize and Create</li>
                  </ul>
                </div>
              </div>
              {/* Single Facility Start */}
            </div>
          </div>
        </section>
        {/*== Our Facility Content End ==*/}
      
        {/*== Testimonials Area Start ==*/}
      <Testimonial />
        {/*== Testimonials Area End ==*/}
        {/* <Footer /> */}
      {/* </body> */}
      </>
    );
  }
}
