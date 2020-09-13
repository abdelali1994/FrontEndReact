import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackgroundSlider from "react-background-slider";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img1 from "../img/slider-img-1.jpg";
import img2 from "../img/slider-img-2.jpg";
import img3 from "../img/slider-img-3.jpg";
import img4 from "../img/slider-img-4.jpg";
import service1 from "../img/we-do/service1-img.png";
import service2 from "../img/we-do/service2-img.png";
import service3 from "../img/we-do/service3-img.png";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import {Animated} from "react-animated-css";
export default class Home extends Component {
  render() {
    return (
      <>
     
         <section id="home-slider-area">
        {/* <Animated animationIn="slideInDown" animationOut="slideOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
 
       </Animated> */}
       
   {/* <OwlCarousel 
   items
   loop="true"
   autoplay="true"
   autoplayHoverPause
   autoplayTimeout= "3000"
   nav
   dots
   animateOut= 'true'
   animateIn='true'
   
   > */}
          <div className="home-slider-item slider-bg-1 overlay" style={{ backgroundImage:`url(${img4})` }}  >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slideshowcontent">
                    <h1>BOOK A CAR TODAY!</h1>
                    <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br /> FOR OUR RETURNING CUSTOMERS</p>
                    <Link to="/cars" className="booknow" >Our cars</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="home-slider-item slider-bg-2 overlay" style={{ backgroundImage:`url(${img2})` }} >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slideshowcontent">
                    <h1>SAVE YOUR MONEY</h1>
                    <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br /> FOR OUR RETURNING CUSTOMERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="home-slider-item slider-bg-3 overlay" style={{ backgroundImage:`url(${img3})` }} >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slideshowcontent">
                    <h1>ENJOY YOUR JOURNEY</h1>
                    <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br /> FOR OUR RETURNING CUSTOMERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

   {/* </OwlCarousel> */}

   
        </section>
        {/*== Slider Area End ==*/}
        {/*== Book A Car Area Start ==*/}
        {/* <div id="book-a-car">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="booka-car-content">
                  <form action="index3.html">
                    <div className="pick-location bookinput-item">
                      <select className="custom-select">
                        <option selected>Pick Location</option>
                        <option value={1}>Dhaka</option>
                        <option value={2}>Comilla</option>
                        <option value={3}>Barishal</option>
                        <option value={3}>Rangpur</option>
                      </select>
                    </div>
                    <div className="pick-date bookinput-item">
                      <input id="startDate" placeholder="Pick Date" />
                    </div>
                    <div className="retern-date bookinput-item">
                      <input id="endDate" placeholder="Return Date" />
                    </div>
                    <div className="car-choose bookinput-item">
                      <select className="custom-select">
                        <option selected>Choose Car</option>
                        <option value={1}>BMW</option>
                        <option value={2}>Audi</option>
                        <option value={3}>Lexus</option>
                      </select>
                    </div>
                    <div className="bookcar-btn bookinput-item">
                      <button type="submit">Book Car</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*== Book A Car Area End ==*/}
        {/*== What We Do Area Start ==*/}
        <section id="what-do-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Section Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>WHAT WE DO</h2>
                  <span className="title-line"><i className="fa fa-car" /></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              {/* Section Title End */}
            </div>
            <div className="row">
              {/* Single We Do Start */}
              <div className="col-lg-4 col-md-4">
                <div className="single-we-do we-do-bg-1" style={{ backgroundImage:`url(${service1})` }}  >
                  <div className="we-do-content">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <h3>CAR INSPECTION</h3>
                        <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single We Do End */}
              {/* Single We Do Start */}
              <div className="col-lg-4 col-md-4">
                <div className="single-we-do we-do-bg-2" style={{ backgroundImage:`url(${service2})` }}  >
                  <div className="we-do-content">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <h3>CAR INSPECTION</h3>
                        <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single We Do End */}
              {/* Single We Do Start */}
              <div className="col-lg-4 col-md-4">
                <div className="single-we-do we-do-bg-3" style={{ backgroundImage:`url(${service3})` }}  >
                  <div className="we-do-content">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <h3>CAR INSPECTION</h3>
                        <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single We Do End */}
            </div>
          </div>
        </section>
        {/*== What We Do Area End ==*/}
        {/*== Partner Area Start ==*/}
        {/* <div id="partner-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="partner-content-wrap"> */}
                  {/* Single Partner Start */}
                  {/* <OwlCarousel
                       loop= 'true'
                       margin= '15'
                       autoplay= 'true'
                       autoplayTimeout= '1500'
                       nav= 'false'
                       dots= 'false'
                       rtl= 'true'
                       responsive= {
                           0= {
                               items= 1
                           },
                           600= {
                               items= 3
                           },
                           1000= {
                               items= 5
                           }
                       }
                  
                  
                  
                  > */}

                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* Single Partner End */}
                  {/* Single Partner Start */}
                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-2.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* Single Partner End */}
                  {/* Single Partner Start */}
                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-3.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* Single Partner End */}
                  {/* Single Partner Start */}
                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* Single Partner End */}
                  {/* Single Partner Start */}
                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-5.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* Single Partner End */}
                  {/* Single Partner Start */}
                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* Single Partner End */}
                  {/* Single Partner Start */}
                  {/* <div className="single-partner">
                    <div className="display-table">
                      <div className="display-table-cell">
                        <img src="assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                      </div>
                    </div>
                  </div> */}
                  {/* </OwlCarousel> */}
                  {/* Single Partner End */}
                {/* </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*== Partner Area End ==*/}
        {/*== Services Area Start ==*/}
        <section id="service-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Section Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>Our Services</h2>
                  <span className="title-line"><i className="fa fa-car" /></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              {/* Section Title End */}
            </div>
            <div className="row">
              {/* Single Service Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-service">
                  <div className="media">
                    <div className="service-icon">
                      <span />
                      <img src="assets/img/services/service-icon-1.png" alt="JSOFT" />
                    </div>
                    <div className="media-body">
                      <h4>RENTAL CAR</h4>
                      <p>You can be a celebrity for a full night and half days with a nice one of our amazing Limousines, Hummers.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Service Start */}
              {/* Single Service Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-service">
                  <div className="media">
                    <div className="service-icon">
                      <span />
                      <img src="assets/img/services/service-icon-2.png" alt="JSOFT" />
                    </div>
                    <div className="media-body">
                      <h4>CAR REPAIR</h4>
                      <p>You can be a celebrity for a full night and half days with a nice one of our amazing Limousines, Hummers.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Service Start */}
              {/* Single Service Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-service">
                  <div className="media">
                    <div className="service-icon">
                      <span />
                      <img src="assets/img/services/service-icon-3.png" alt="JSOFT" />
                    </div>
                    <div className="media-body">
                      <h4>TAXI SERVICE</h4>
                      <p>You can be a celebrity for a full night and half days with a nice one of our amazing Limousines, Hummers.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Service Start */}
              {/* Single Service Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-service">
                  <div className="media">
                    <div className="service-icon">
                      <span />
                      <img src="assets/img/services/service-icon-4.png" alt="JSOFT" />
                    </div>
                    <div className="media-body">
                      <h4>life insurance</h4>
                      <p>You can be a celebrity for a full night and half days with a nice one of our amazing Limousines, Hummers.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Service Start */}
              {/* Single Service Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-service">
                  <div className="media">
                    <div className="service-icon">
                      <span />
                      <img src="assets/img/services/service-icon-5.png" alt="JSOFT" />
                    </div>
                    <div className="media-body">
                      <h4>car wash</h4>
                      <p>You can be a celebrity for a full night and half days with a nice one of our amazing Limousines, Hummers.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Service Start */}
              {/* Single Service Start */}
              <div className="col-lg-4 col-md-6">
                <div className="single-service">
                  <div className="media">
                    <div className="service-icon">
                      <span />
                      <img src="assets/img/services/service-icon-6.png" alt="JSOFT" />
                    </div>
                    <div className="media-body">
                      <h4>call driver</h4>
                      <p>You can be a celebrity for a full night and half days with a nice one of our amazing Limousines, Hummers.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Service Start */}
            </div>
          </div>
        </section>
        {/*== Services Area End ==*/}
        {/*== Fun Fact Area Start ==*/}
        <section id="funfact-area" className="overlay section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 col-md-12 m-auto">
                <div className="funfact-content-wrap">
                  <div className="row">
                    {/* Single FunFact Start */}
                    <div className="col-lg-4 col-md-6">
                      <div className="single-funfact">
                        <div className="funfact-icon">
                          <i className="fa fa-smile-o" />
                        </div>
                        <div className="funfact-content">
                          <p><span className="counter">550</span>+</p>
                          <h4>HAPPY CLIENTS</h4>
                        </div>
                      </div>
                    </div>
                    {/* Single FunFact End */}
                    {/* Single FunFact Start */}
                    <div className="col-lg-4 col-md-6">
                      <div className="single-funfact">
                        <div className="funfact-icon">
                          <i className="fa fa-car" />
                        </div>
                        <div className="funfact-content">
                          <p><span className="counter">250</span>+</p>
                          <h4>CARS IN STOCK</h4>
                        </div>
                      </div>
                    </div>
                    {/* Single FunFact End */}
                    {/* Single FunFact Start */}
                    <div className="col-lg-4 col-md-6">
                      <div className="single-funfact">
                        <div className="funfact-icon">
                          <i className="fa fa-bank" />
                        </div>
                        <div className="funfact-content">
                          <p><span className="counter">50</span>+</p>
                          <h4>office in cities</h4>
                        </div>
                      </div>
                    </div>
                    {/* Single FunFact End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== Fun Fact Area End ==*/}
        {/*== Our Cars Area Start ==*/}
     
        {/*== Our Cars Area End ==*/}
        {/*== Pricing Area Start ==*/}
      
        {/*== Pricing Area End ==*/}
        {/*== Why Coose Us Start ==*/}
        <section id="why-choose-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Section Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>Why Coose Us</h2>
                  <span className="title-line"><i className="fa fa-car" /></span>
                  <p>Lorem ipsum dolor sit amet elit.</p>
                </div>
              </div>
              {/* Section Title End */}
            </div>
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="row">
                  {/* Why Choose Tab Menu */}
                  <div className="col-lg-4">
                    <ul className="nav nav-tabs" id="choosetabmenu" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="car-ins" data-toggle="tab" href="#car-insp" role="tab" aria-selected="true">CAR INSPECTION</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="car-repair" data-toggle="tab" href="#car-repairw" role="tab" aria-selected="false">CAR REPAIR WORKS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="car-glass" data-toggle="tab" href="#car-glassing" role="tab" aria-selected="false">CAR GLASSING</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="delivery-tab" data-toggle="tab" href="#delivery" role="tab" aria-selected="false">DELIVERY</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="vehiclemodels-tab" data-toggle="tab" href="#vehiclemodels" role="tab" aria-selected="false">Vehicle Models</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="ourrental-tab" data-toggle="tab" href="#ourrental" role="tab" aria-selected="false">Our Rental</a>
                      </li>
                    </ul>
                  </div>
                  {/* Why Choose Tab Menu */}
                  {/* Why Choose Tab Content */}
                  <div className="col-lg-8">
                    <div className="tab-content" id="choosetabcontent">
                      <div className="tab-pane fade show active" id="car-insp" role="tabpanel" aria-labelledby="car-ins">
                        <div className="wchoose-content">
                          <h4>CAR INSPECTION</h4>
                          <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataesal vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-anchor" />
                                </div>
                                <span>Quia, odio, ipsam deleniti delectus assumenda cum.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-delicious" />
                                </div>
                                <span>Deleniti eius fuga perferendis, dolorum atquesequi soluta.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-bus" />
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-briefcase" />
                                </div>
                                <span>Beataesal vitae dicta sunt explicabo. Nemo enim ipsam </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="car-repairw" role="tabpanel" aria-labelledby="car-repair">
                        <div className="wchoose-content">
                          <h4>CAR REPAIR WORKS</h4>
                          <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataesal vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-anchor" />
                                </div>
                                <span>Quia, odio, ipsam deleniti delectus assumenda cum.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-delicious" />
                                </div>
                                <span>Deleniti eius fuga perferendis, dolorum atquesequi soluta.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-bus" />
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-briefcase" />
                                </div>
                                <span>Beataesal vitae dicta sunt explicabo. Nemo enim ipsam </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="car-glassing" role="tabpanel" aria-labelledby="car-glass">
                        <div className="wchoose-content">
                          <h4>CAR GLASSING</h4>
                          <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataesal vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-anchor" />
                                </div>
                                <span>Quia, odio, ipsam deleniti delectus assumenda cum.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-delicious" />
                                </div>
                                <span>Deleniti eius fuga perferendis, dolorum atquesequi soluta.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-bus" />
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-briefcase" />
                                </div>
                                <span>Beataesal vitae dicta sunt explicabo. Nemo enim ipsam </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="delivery" role="tabpanel" aria-labelledby="delivery-tab">
                        <div className="wchoose-content">
                          <h4>DELIVERY</h4>
                          <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataesal vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-anchor" />
                                </div>
                                <span>Quia, odio, ipsam deleniti delectus assumenda cum.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-delicious" />
                                </div>
                                <span>Deleniti eius fuga perferendis, dolorum atquesequi soluta.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-bus" />
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-briefcase" />
                                </div>
                                <span>Beataesal vitae dicta sunt explicabo. Nemo enim ipsam </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="vehiclemodels" role="tabpanel" aria-labelledby="vehiclemodels-tab">
                        <div className="wchoose-content">
                          <h4>Vehicle Models</h4>
                          <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataesal vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-anchor" />
                                </div>
                                <span>Quia, odio, ipsam deleniti delectus assumenda cum.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-delicious" />
                                </div>
                                <span>Deleniti eius fuga perferendis, dolorum atquesequi soluta.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-bus" />
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-briefcase" />
                                </div>
                                <span>Beataesal vitae dicta sunt explicabo. Nemo enim ipsam </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="ourrental" role="tabpanel" aria-labelledby="ourrental-tab">
                        <div className="wchoose-content">
                          <h4>Our Rental</h4>
                          <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataesal vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-anchor" />
                                </div>
                                <span>Quia, odio, ipsam deleniti delectus assumenda cum.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-delicious" />
                                </div>
                                <span>Deleniti eius fuga perferendis, dolorum atquesequi soluta.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-bus" />
                                </div>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="single-choose-item">
                                <div className="choose-icon">
                                  <i className="fa fa-briefcase" />
                                </div>
                                <span>Beataesal vitae dicta sunt explicabo. Nemo enim ipsam </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Why Choose Tab Content */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== Why Coose Us End ==*/}
        {/*== Mobile App Area Start ==*/}
        {/* <div id="mobileapp-video-bg" />
        <section id="mobile-app-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="mobile-app-content">
                  <h2>SAVE 30% WITH THE APP</h2>
                  <p>Easy &amp; Fast - Book a car in 60 seconds</p>
                  <div className="app-btns">
                    <a href="#"><i className="fa fa-android" /> Android Store</a>
                    <a href="#"><i className="fa fa-apple" /> Apple Store</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*== Mobile App Area End ==*/}
        {/*== Articles Area Start ==*/}
        
        {/*== Articles Area End ==*/}
   
     {/* <Footer /> */}
      {/* </body> */}
      </> 
    );
  }
}
