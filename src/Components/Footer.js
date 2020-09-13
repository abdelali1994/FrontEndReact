import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
            <>
            {/*== Footer Area Start ==*/}
            <section id="footer-area">
              {/* Footer Widget Start */}
              <div className="footer-widget-area">
                <div className="container">
                  <div className="row">
                    {/* Single Footer Widget Start */}
                    <div className="col-lg-4 col-md-6">
                      <div className="single-footer-widget">
                        <h2>About Us</h2>
                        <div className="widget-body">
                          <img src="assets/img/logo.png" alt="JSOFT" />
                          <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit. Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p>
                          <div className="newsletter-area">
                            <form action="index.html">
                              <input type="email" placeholder="Subscribe Our Newsletter" />
                              <button type="submit" className="newsletter-btn"><i className="fa fa-send" /></button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Footer Widget End */}
                    {/* Single Footer Widget Start */}
                    <div className="col-lg-4 col-md-6">
                      <div className="single-footer-widget">
                        <h2>Recent Posts</h2>
                        <div className="widget-body">
                          <ul className="recent-post">
                            <li>
                              <a href="#">
                                Hello Morocco! 
                                <i className="fa fa-long-arrow-right" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Lorem ipsum dolor sit amet
                                <i className="fa fa-long-arrow-right" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Hello Morocco! 
                                <i className="fa fa-long-arrow-right" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                consectetur adipisicing elit?
                                <i className="fa fa-long-arrow-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Single Footer Widget End */}
                    {/* Single Footer Widget Start */}
                    <div className="col-lg-4 col-md-6">
                      <div className="single-footer-widget">
                        <h2>get touch</h2>
                        <div className="widget-body">
                          <p>Lorem ipsum doloer sited amet, consectetur adipisicing elit. nibh auguea, scelerisque sed</p>
                          <ul className="get-touch">
                            <li><i className="fa fa-map-marker" /> Tit mellil, Casablanca</li>
                            <li><i className="fa fa-mobile" /> +212 600512835</li>
                            <li><i className="fa fa-envelope" /> Cardor@gmail.com</li>
                          </ul>
                          <a href="https://goo.gl/maps/b5mt45MCaPB2" className="map-show" target="_blank">Show Location</a>
                        </div>
                      </div>
                    </div>
                    {/* Single Footer Widget End */}
                  </div>
                </div>
              </div>
              {/* Footer Widget End */}
              {/* Footer Bottom Start */}
              <div className="footer-bottom-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved |  <i className="fa fa-heart-o" aria-hidden="true" />  <Link to="/" >Cardor</Link>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Bottom End */}
            </section>
            {/*== Footer Area End ==*/}
            {/*== Scroll Top Area Start ==*/}
            <div className="scroll-top">
              <img src="assets/img/scroll-top.png" alt="JSOFT" />
            </div>
            {/*== Scroll Top Area End ==*/}
          </>
        )
    }
}
