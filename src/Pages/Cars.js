import React, { Component } from "react";
import Filter from "../Components/Filter";
import Carss from "../Components/Carss";
import PageTitle from "../img/page-title.jpg";
import service1 from "../img/we-do/service1-img.png";
import service2 from "../img/we-do/service2-img.png";
import service3 from "../img/we-do/service3-img.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
export default class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      filteredCars: [],
      // sort:'',
      marqueA:'',
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };
  }

  componentDidMount() {

    axios
      .get("http://localhost:8000/api/cars")
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          cars: response.data.data,
          filteredCars: response.data.data,
          activePage: response.data.current_page,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handlePageChange=(pageNumber)=> {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });

    axios
      .get(`http://localhost:8000/api/cars?page=${pageNumber}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          cars: response.data.data,
          filteredCars: response.data.data,
          activePage: response.data.current_page,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listCars();
  };
  handleChangeMarque = (e) => {
    this.setState({ marqueA: e.target.value });
  //  console.log("marqueA",this.state.marqueA)
    this.listCars();
  };

  listCars() {
    this.setState((state) => {
      if (state.sort !== "") {
        state.cars.sort((a, b) =>
          state.sort === "lowest"
            ? a.coutParJour > b.coutParJour
              ? 1
              : -1
            : a.coutParJour < b.coutParJour
            ? 1
            : -1
        );
      } else {
        state.cars.sort((a, b) => (a.id < b.id ? 1 : -1));
      }


      if (state.marqueA !=="") {
        // let ali=state.marqueA;
        // console.log("state.marqueA",state.marqueA)
        return {filteredCars:state.cars.filter(a=>a.marque === state.marqueA)}
        
      }
      
      return {filteredCars:state.cars};
     
    });
    console.log("filteredCars",this.state.filteredCars);
  }

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
                  <h2>Our Cars</h2>
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
        {/*== Car List Area Start ==*/}
        <section id="car-list-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Car List Content Start */}
              <div className="col-lg-8">
          <Carss cars={this.state.filteredCars}  />
                {/* Page Pagination Start */}
                {/* <div className="page-pagi">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div> */}
                <div className="d-flex justify-content-center mt-3">
                  <Pagination
                   count={10} color="secondary"
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={this.handlePageChange.bind(this)}
                  />
                </div>
                {/* Page Pagination End */}
              </div>
              {/* Car List Content End */}
              {/* Sidebar Area Start */}
              <div className="col-lg-4">
                <div className="sidebar-content-wrap m-t-50">
                  {/* Single Sidebar Start */}
                  <div className="single-sidebar">
                    <h3>For More Informations</h3>
                    <div className="sidebar-body">
                      <p>
                        <i className="fa fa-mobile" /> +8801816 277 243
                      </p>
                      <p>
                        <i className="fa fa-clock-o" /> Mon - Sat 8.00 - 18.00
                      </p>
                    </div>
                  </div>
                  <Filter
                    marqueA={this.state.marqueA}
                    sort={this.state.sort}
                    handleChangeMarque={this.handleChangeMarque}
                    handleChangeSort={this.handleChangeSort}
                    count={this.state.filteredCars.length}
                  />
                  {/* Single Sidebar End */}
                  {/* Single Sidebar Start */}
                  <div className="single-sidebar">
                    <h3>Rental Tips</h3>
                    <div className="sidebar-body">
                      <ul className="recent-tips">
                        <li className="single-recent-tips">
                          <div className="recent-tip-thum">
                            <a href="#">
                              <img src={service1} alt="JSOFT" />
                            </a>
                          </div>
                          <div className="recent-tip-body">
                            <h4>
                              <a href="#">
                                How to Enjoy Losses Angeles Car Rentals
                              </a>
                            </h4>
                            <span className="date">February 5, 2018</span>
                          </div>
                        </li>
                        <li className="single-recent-tips">
                          <div className="recent-tip-thum">
                            <a href="#">
                              <img src={service2} alt="JSOFT" />
                            </a>
                          </div>
                          <div className="recent-tip-body">
                            <h4>
                              <a href="#">
                                How to Enjoy Losses Angeles Car Rentals
                              </a>
                            </h4>
                            <span className="date">February 5, 2018</span>
                          </div>
                        </li>
                        <li className="single-recent-tips">
                          <div className="recent-tip-thum">
                            <a href="#">
                              <img src={service3} alt="JSOFT" />
                            </a>
                          </div>
                          <div className="recent-tip-body">
                            <h4>
                              <a href="#">
                                How to Enjoy Losses Angeles Car Rentals
                              </a>
                            </h4>
                            <span className="date">February 5, 2018</span>
                          </div>
                        </li>
                        <li className="single-recent-tips">
                          <div className="recent-tip-thum">
                            <a href="#">
                              <img src={service1} alt="JSOFT" />
                            </a>
                          </div>
                          <div className="recent-tip-body">
                            <h4>
                              <a href="#">
                                How to Enjoy Losses Angeles Car Rentals
                              </a>
                            </h4>
                            <span className="date">February 5, 2018</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Single Sidebar End */}
                  {/* Single Sidebar Start */}
                  <div className="single-sidebar">
                    <h3>Connect with Us</h3>
                    <div className="sidebar-body">
                      <div className="social-icons text-center">
                        <a href="#" target="_blank">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-behance" />
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-dribbble" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Single Sidebar End */}
                </div>
              </div>
              {/* Sidebar Area End */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
