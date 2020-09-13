import React, { Component } from "react";
import Testimonial from "../Components/Testimonial";
import PageTitle from "../img/page-title.jpg";
export default class Services extends Component {
  render() {
    return (
    <>
       {/* <body class="loader-active">  */}
        {/* <!--== Preloader Area Start ==--> */}
        {/* <div className="preloader">
          <div className="preloader-spinner">
            <div className="loader-content">
              <img src="assets/img/preloader.gif" alt="JSOFT" />
            </div>
          </div>
        </div> */}
        {/* <!--== Preloader Area End ==--> */}
        {/* <Header /> */}

        {/*== Page Title Area Start ==*/}
        <section id="page-title-area" className="section-padding overlay" style={{ backgroundImage: `url(${PageTitle})` }}>
          <div className="container">
            <div className="row">
              {/* Page Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>Our Services</h2>
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
        {/*== Service Page Content Start ==*/}
        <section id="service-page-wrapper" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Single Services Start */}
                <div className="single-service-item">
                  <div className="service-item-thumb ser-thumb-bg-1" />
                  <div className="service-item-content">
                    <h3>RENTAL CAR</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicingedsedsis elited. Necessitatibus aliquid,
                      architecto ullam esdefugiat quasi! Doloribus eaque quam
                      soluta quae porro reprehenderit edsconsequuntur hic
                      ducimus consequatur, dicta officia excepturi quos, quis
                      voluptatum optio deserunt sit. Totam ab dolorum at, labore
                      quisquamn earum, magni reiciendis officiis dolores nemo
                      nostrum perspiciatis!
                    </p>
                  </div>
                </div>
                {/* Single Services End */}
                {/* Single Services Start */}
                <div className="single-service-item">
                  <div className="service-item-thumb ser-thumb-bg-2 d-lg-none d-md-block" />
                  <div className="service-item-content">
                    <h3>LIFE INSURANCE</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicingedsedsis elited. Necessitatibus aliquid,
                      architecto ullam esdefugiat quasi! Doloribus eaque quam
                      soluta quae porro reprehenderit edsconsequuntur hic
                      ducimus consequatur, dicta officia excepturi quos, quis
                      voluptatum optio deserunt sit. Totam ab dolorum at, labore
                      quisquamn earum, magni reiciendis officiis dolores nemo
                      nostrum perspiciatis!
                    </p>
                  </div>
                  <div className="service-item-thumb ser-thumb-bg-2 d-none d-lg-block d-md-none" />
                </div>
                {/* Single Services End */}
                {/* Single Services Start */}
                <div className="single-service-item">
                  <div className="service-item-thumb ser-thumb-bg-3" />
                  <div className="service-item-content">
                    <h3>TAXI SERVICE</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicingedsedsis elited. Necessitatibus aliquid,
                      architecto ullam esdefugiat quasi! Doloribus eaque quam
                      soluta quae porro reprehenderit edsconsequuntur hic
                      ducimus consequatur, dicta officia excepturi quos, quis
                      voluptatum optio deserunt sit. Totam ab dolorum at, labore
                      quisquamn earum, magni reiciendis officiis dolores nemo
                      nostrum perspiciatis!
                    </p>
                  </div>
                </div>
                {/* Single Services End */}
                {/* Single Services Start */}
                <div className="single-service-item">
                  <div className="service-item-thumb ser-thumb-bg-4 d-lg-none d-md-block" />
                  <div className="service-item-content">
                    <h3>CALL DRIVER</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicingedsedsis elited. Necessitatibus aliquid,
                      architecto ullam esdefugiat quasi! Doloribus eaque quam
                      soluta quae porro reprehenderit edsconsequuntur hic
                      ducimus consequatur, dicta officia excepturi quos, quis
                      voluptatum optio deserunt sit. Totam ab dolorum at, labore
                      quisquamn earum, magni reiciendis officiis dolores nemo
                      nostrum perspiciatis!
                    </p>
                  </div>
                  <div className="service-item-thumb ser-thumb-bg-2 d-none d-lg-block d-md-none" />
                </div>
                {/* Single Services End */}
              </div>
            </div>
          </div>
        </section>
        {/*== Service Page Content End ==*/}
        {/*== Partner Area start ==*/}
        {/*== Partner Area End ==*/}
        {/*== Testimonials Area Start ==*/}
        <Testimonial />
        {/*== Testimonials Area End ==*/}
        {/* <Footer /> */}
      {/* </body> */}
       </> 
    );
  }
}
