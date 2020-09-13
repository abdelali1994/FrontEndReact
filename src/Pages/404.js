import React, { Component } from 'react'

export default class Notfound extends Component {
    render() {
        return (
          <>
            <section id="page-404-wrap" className="section-padding overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="page-404-content">
                    <div className="number">
                      <div className="four">4</div>
                      <div className="zero">
                        <img src="assets/img/404.png" alt="JSOFT" />
                      </div>
                      <div className="four">4</div>
                    </div>
                    <h4>PAGE NOT FOUND !</h4>
                    <p>SORRY, WE COULDN'T FIND THE PAGE <br /> YOU'RE LOOKING.</p>
                    <a href="/" className="btn-404-home"><i className="fa fa-home" />Go to Home</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          </>
        )
    }
}
