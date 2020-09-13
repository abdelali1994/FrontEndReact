import React, { Component } from "react";

import axios from "axios";
import $ from 'jquery';
// import { getUserId } from "../Components/UserFunctions";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { getProfile } from "../Components/UserFunctions";
import { AlertDialogg } from "../Components/AlertDialog";
import { Datepinker } from "../Components/Datepiker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PageTitle from "../img/page-title.jpg";
import service1 from "../img/we-do/service1-img.png";
import service2 from "../img/we-do/service2-img.png";
import service3 from "../img/we-do/service3-img.png";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default class CarDetails extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      // endDate: new Date().setDate(new Date().getDate() + 1),
      endDate: new Date(new Date().getTime() + 86400000),
      // loggedInStatus: "NOT_LOGGED_IN",
      user_id: "",
      singleCar: "",
      somme: "",
      DateDebut: "",
      DateFin: "",
      car_id: "",
      coutParJour: "",
      command: false,
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Reda", this.state.endDate);

    getProfile()
      .then((res) => {
        // console.log('locations1',res.success.locations);
        this.setState({
          user_id: res.success.user_id,
        });
        // console.log('locations',this.state.locations);
      })
      .catch((err) => {
        this.props.history.push("/login");
      });

    axios
      .get("http://localhost:8000/api/cars/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          singleCar: response.data,
          somme: response.data.coutParJour,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChangeDateStart = (date) => {
    console.log("DateDebut", date);
    this.setState({
      startDate: date,
      // startDate: new Date(date).setDate(new Date(date).getDate() + 1),
      // somme:(this.state.startDate-this.state.endDate)*this.state.singleCar.coutParJour,
      somme: this.dateDiffInDays(this.state.endDate, date),
    });
    console.log("startDate", this.state.startDate);
  };
  handleChangeDateEnd = (date) => {
    console.log("Datefin", date);
    this.setState({
      endDate: date,
      // endDate: new Date(date).setDate(new Date(date).getDate() + 1),

      somme: this.dateDiffInDays(date, this.state.startDate),
    });
    console.log("somme", this.state.somme);
  };

  dateDiffInDays = (date1, date2) => {
    // round to the nearest whole number
    return (
      Math.round((date1 - date2) / (1000 * 60 * 60 * 24)) *
      this.state.singleCar.coutParJour
    );
  };

  handleFormSubmit = (event) => {
    // console.log("endDate:",this.state.endDate.toLocaleDateString())

    // console.log("startDate:",this.state.startDate)
    event.preventDefault();
    console.log("car_id", this.props.match.params.id);
    console.log("user_id", this.state.user_id);

    axios
      .post("http://localhost:8000/api/locations", {
        user_id: this.state.user_id,
        dateDebut: this.state.startDate,
        dateFin: this.state.endDate,
        car_id: this.props.match.params.id,
        // dateDebut:this.state.DateDebut,
        // dateFin:this.state.DateFin,
      })
      .then((res) => {
        console.log("good From Location", res);
        this.setState({
          command: true,
        });
      
  //   $('#closemodal').click(function() {
  //     $('#staticBackdrop').modal('hide');
  // });


setInterval(function(){ 
console.log("hellooooooooo from jquery")
$("#closemodal1").click();
}, 3000);


        this.interval = setInterval(() => {
          this.props.history.push("/cars");
        }, 3000);
        // setTimeout(() => {
        //     this.props.history.push('/cars')
        //   console.log("test")
        // }, 3000);
      })
      .catch((err) => console.log(err.response));
  };

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // handleDateDebutChange=(event)=>{
  //   console.log('DateDebut',event.target.value)
  //   this.setState({
  //     DateDebut:event.target.value
  //   })
  // }
  // handleDateFinChange=(event)=>{
  //   console.log('DateFin',event.target.value)
  //   this.setState({
  //     DateFin:event.target.value
  //   })
  // }

  render() {
    // let data;
    // let x = "";
    // let y = "";

    // if(this.state.loading){
    //     data=<div className="loader-content">
    //       <img src="assets/img/preloader.gif" alt="JSOFT" />
    //     </div>
    // }else{

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

        {/* chakra ui start */}
        <div className="container">
          <div className="row m-5">
            {/* <div className="col-lg-12 ">
    {this.state.command ? <Alert
  status="success"
  variant="subtle"
  flexDirection="column"
  justifyContent="center"
  textAlign="center"
  height="200px"
>
  <AlertIcon size="40px" mr={0} />
  <AlertTitle mt={4} mb={1} fontSize="lg">
   Your account has been updated!
  </AlertTitle>
  <AlertDescription maxWidth="sm">
   After less than 3 seconds, it will automatically switch to the Car page.
  </AlertDescription>
</Alert>: ""}
    </div> */}
          </div>
        </div>

        {/* chakra ui end */}
        {/*== Car List Area Start ==*/}
        <section id="car-list-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Car List Content Start */}
              <div className="col-lg-8">
                <div className="car-details-content">
                  <h2>
                    {this.state.singleCar.marque}{" "}
                    <span className="price">
                      Rent: <b>${this.state.singleCar.coutParJour}</b>
                    </span>
                  </h2>
                  <div className="car-preview-crousel">
                    <div className="single-car-preview">
                      <img
                        src={`http://localhost:8000/storage/${this.state.singleCar.image}`}
                        alt="JSOFT"
                      />
                    </div>
                    {/* <div className="single-car-preview">
                                <img src="assets/img/car/car-1.jpg" alt="JSOFT" />
                              </div>
                              <div className="single-car-preview">
                                <img src="assets/img/car/car-6.jpg" alt="JSOFT" />
                              </div> */}
                  </div>
                  <div className="car-details-info">
                    <h4>Additional Info</h4>
                    <p>{this.state.singleCar.description}</p>
                    <div className="technical-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="tech-info-table">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <th>Class</th>
                                  <td>Compact</td>
                                </tr>
                                <tr>
                                  <th>Fuel</th>
                                  <td>{this.state.singleCar.type}</td>
                                </tr>
                                <tr>
                                  <th>Doors</th>
                                  <td>{this.state.singleCar.doors}</td>
                                </tr>
                                <tr>
                                  <th>GearBox</th>
                                  <td>{this.state.singleCar.boiteVitesses}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tech-info-list">
                            <ul>
                              {this.state.singleCar.bluetooth ? (
                                <li>bluetooth</li>
                              ) : (
                                ""
                              )}
                              {this.state.singleCar.gps ? <li>GBS</li> : ""}
                              {this.state.singleCar.airbags ? (
                                <li>Airbags</li>
                              ) : (
                                ""
                              )}
                              {this.state.singleCar.bluetooth ? (
                                <li>bluetooth</li>
                              ) : (
                                ""
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-area">
                      <h3>
                        Be the first to review “{this.state.singleCar.marque}”
                      </h3>
                      <div className="review-star">
                        <p className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star unmark" />
                          <i className="fa fa-star unmark" />
                        </p>
                      </div>
                      <div className="review-form">
                        <div className="ourcar-info-book ">
                          <a
                            href="#"
                            className="bookbtn"
                            data-toggle="modal"
                            data-target="#staticBackdrop"
                          >
                            Book Now
                          </a>
                        </div>
                        <AlertDialogg />
                      </div>
                    </div>
                  </div>
                </div>
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

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Louer cette voiture
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Form start */}

                {/* <div className="form-group"> */}
                <div className="car-list-content mb-3">
                  <div className="single-car-wrap">
                    <div className="row">
                      {/* Single Car Thumbnail */}
                      <div className="col-lg-12 ">
                      
                          {this.state.command ? (
                            <Alert
                              status="success"
                              variant="subtle"
                              flexDirection="column"
                              justifyContent="center"
                              textAlign="center"
                              height="200px"
                            >
                              <AlertIcon size="40px" mr={0} />
                              <AlertTitle mt={4} mb={1} fontSize="lg">
                                Your booking has been registered successfully
                              </AlertTitle>
                              <AlertDescription maxWidth="sm">
                                After less than 3 seconds, it will automatically
                                switch to the Car page.
                              </AlertDescription>
                            </Alert>
                          ) : (
                            ""
                          )}
                       
                        <div className="car-list-thumb ">
                          <img
                            src={`http://localhost:8000/storage/${this.state.singleCar.image}`}
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
                      <div className="col-lg-11 ml-4 ">
                        <div className="display-table">
                          <div className="display-table-cell">
                            <div className="car-list-info">
                              <h2>
                                <a href="#">{this.state.singleCar.marque}</a>
                              </h2>

                              <h5>
                                {this.state.singleCar.coutParJour}$ Rent /per a
                                day
                              </h5>

                              <ul className="car-info-list">
                                <li>{this.state.singleCar.modele}</li>
                                <li>{this.state.singleCar.type}</li>
                                <li>{this.state.singleCar.couleur}</li>

                                {this.state.singleCar.bluetooth ? (
                                  <li>bluetooth</li>
                                ) : (
                                  ""
                                )}
                                {this.state.singleCar.gps ? <li>GPS</li> : ""}
                              </ul>
                              <p className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star unmark" />
                              </p>
                              {/* <Link
                                    to={`/details/${this.state.singleCar.id}`}
                                    className="rent-btn"
                                  >
                                    Details
                                  </Link>
                                  */}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Car info */}
                    </div>
                  </div>
                </div>
                {/* </div> */}
                <form onSubmit={this.handleFormSubmit}>
                {/* <KeyboardDatePicker
        clearable
        value={this.state.startDate}
        placeholder="10/10/2018"
        onChange={this.handleChangeDateStart}
        minDate={new Date()}
        format="MM/dd/yyyy"
      /> */}
                  <div className="form-group">
                    <label htmlFor="dateDebut" className="mr-3">
                      Date Début :{" "}
                    </label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChangeDateStart}
                      minDate={new Date()}
                      selectsStart
                      // startDate={this.state.startDate}
                      // endDate={endDate}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateFin" className="mr-3">
                      Date Fin :{" "}
                    </label>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleChangeDateEnd}
                      selectsEnd
                      // startDate={startDate}
                      // endDate={endDate}
                      // minDate={this.state.startDate}
                      minDate={new Date(this.state.startDate).setDate(
                        new Date(this.state.startDate).getDate() + 1
                      )}
                    />
                  </div>
                  {/* <Datepinker /> */}
                  {/* <div className="form-group">

                      <label htmlFor="dateDebut">Date Début</label>
                      <input
                        type="date"
                        className="form-control"
                        id=""
                        name="dateDebut"
                        placeholder="date Début...."
                        // defaultValue={} 
                        aria-describedby="helpId"
                        onChange={this.handleDateDebutChange}
                        
                      />
                      </div> */}

                  {/* <div className="form-group">
                 
                      <label htmlFor="dateFin">Date Fin</label>
                      <input
                        type="date"
                        className="form-control"
                        id=""
                        name="dateFin"
                        placeholder="date Fin...."
                        aria-describedby="helpId"
                        onChange={this.handleDateFinChange}
                      />
                    </div> */}
                  <h2>La Somme est :{this.state.somme}$ </h2>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      id="closemodal1"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" id="closemodal" className="btn btn-warning">
                      Send
                    </button>
                  </div>
                </form>
                {/* Form end */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
