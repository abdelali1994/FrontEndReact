import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Carss extends Component {
    render() {
        return (
            <div>
              
                      <div className="car-list-content">
                  {/* Single Car Start */}

                  {this.props.cars.length !== 0 &&
                    this.props.cars.map((car) => (
                      <div className="single-car-wrap" key={car.id}>
                        <div className="row">
                          {/* Single Car Thumbnail */}
                          <div className="col-lg-5 ">
                            {/* <div className="car-list-thumb car-thumb-1" /> */}
                            {/* <div className="car-list-thumb " style={{backgroundImage:`url(http://localhost:8000/storage/${car.image})`}} /> */}
                            <div className="car-list-thumb ">
                              <img
                                src={`http://localhost:8000/storage/${car.image}`}
                                style={{
                                  maxHeight: "100%",
                                  width: "690px",
                                  height: "300px",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                }}
                                alt="JSOFT"
                              />
                            </div>
                          </div>
                          {/* Single Car Thumbnail */}
                          {/* Single Car Info */}
                          <div className="col-lg-7">
                            <div className="display-table">
                              <div className="display-table-cell">
                                <div className="car-list-info">
                                  <h2>
                                    <a href="#">{car.marque}</a>
                                  </h2>
                                  {/* <img src={`url(http://localhost:8000/storage/${car.image}`} alt=""/> */}
                                  <h5>{car.coutParJour}$ Rent /per a day</h5>
                                  <p>{car.description}</p>
                                  <ul className="car-info-list">
                                    <li>{car.modele}</li>
                                    <li>{car.type}</li>
                                    <li>{car.couleur}</li>
                            
                                    {car.bluetooth ? <li>bluetooth</li> : ""}
                                  </ul>
                                  <p className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star unmark" />
                                  </p>

                                  {car.dispo ?   <Link to={`/details/${car.id}`} className="rent-btn">
                                    Details
                                  </Link> : <Link  className="rent-btn">
                                  Indisponible
                                  </Link>  }
                                  {/* <Link
                                    to={`/details/${car.id}`}
                                    className="rent-btn"
                                  >
                                    Details
                                  </Link> */}
                                  {/* <Link to="/1" className="rent-btn">Details</Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Car info */}
                        </div>
                      </div>
                    ))}
                  {/* Single Car End */}
                </div>
            </div>
        )
    }
}

