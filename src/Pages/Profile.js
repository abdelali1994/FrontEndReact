import React, { Component } from "react";
import { Redirect } from "react-router";
import { getProfile, UpdateAvatar } from "../Components/UserFunctions";

import PageTitle from "../img/page-title.jpg";
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user_id: "",
      cin: "",
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      addresse: "",
      avatar: "",
      password: "",
      c_password: "",
      // carMarque: "",
      // boiteVitesses: "",
      // location_id: "",
      locations: [],
      update: false,
      rendering: "",
      // rendering:this.props.rendering
    };
  }

  componentDidMount() {
    // console.log(this.props)
    const rendering = this.props.rendering;
    // console.log(rendering)
    this.setState({ rendering: this.props.rendering });
    getProfile().then((res) => {
      console.log("profile", res.success);
      this.setState({
        user_id: res.success.user_id,
        first_name: res.success.first_name,
        last_name: res.success.last_name,
        email: res.success.email,
        addresse: res.success.addresse,
        cin: res.success.cin,
        avatar: res.success.avatar,
        phoneNumber: res.success.phone,
        locations: res.success.locations,
        // location_id: res.success.locations[0].id,
        // carMarque: res.success.locations[0].car.marque,
        // boiteVitesses: res.success.locations[0].car.boiteVitesses,
        // carMarque: res.success.locations[0].car.marque,
      });
      console.log("locations2", this.state.locations);
    });
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/api/users/${this.state.user_id}/update`, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        cin: this.state.cin,
        phone: this.state.phoneNumber,
        addresse: this.state.addresse,
        password: this.state.password,
        c_password: this.state.c_password,
      })
      .then((res) => {
        console.log("good", res);
        this.setState({
          update: true,
        });
        this.interval = setInterval(() => {
          this.props.history.push("/cars");
        }, 3000);
        // setInterval(<Redirect to="/"/>, 5000);
      })
      .catch((err) => console.log(err));
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  deleteLocation = (id) => {
    const NewLocation = this.state.locations.filter((location) => {
      return location.id !== id;
    });
    this.setState({
      locations: NewLocation,
    });

    axios
      .delete(`http://localhost:8000/api/locations/${id}/delete`)
      .then((res) => {
        console.log("good", res);
      })
      .catch((err) => console.log(err));
  };
  handleFirstNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      first_name: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      last_name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };
  handleAddresseChange = (event) => {
    console.log(event.target.value);
    this.setState({
      addresse: event.target.value,
    });
  };
  handleCinChange = (event) => {
    console.log(event.target.value);
    this.setState({
      cin: event.target.value,
    });
  };
  handlePhoneChange = (event) => {
    console.log(event.target.value);
    this.setState({
      phoneNumber: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmPasswordChange = (event) => {
    console.log(event.target.value);
    this.setState({
      c_password: event.target.value,
    });
  };

  handlChangeAvatar = (e) => {
    console.log(e.target.files[0]);

    //  console.log(this.state.rendering)
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    // formData.append("name", "reda");

    UpdateAvatar(formData).then((res) => {
      localStorage.setItem("avatar", res.data.user.avatar);
      // setTimeout(() => {

      this.state.rendering();
      // }, 3000);
    });
    // console.log(e.target.files[0])
  };

  render() {
    const { rendering } = this.props;
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
                  <h2>Profile</h2>
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

        {/* chakra ui start */}
        <div className="container">
          <div className="row m-5">
            <div className="col-lg-12 ">
              {this.state.update ? (
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
                    Your account has been updated!
                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                    After less than 3 seconds, it will automatically switch to
                    the Car page.
                  </AlertDescription>
                </Alert>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* chakra ui end */}

        <div className="container">
          <div className="row m-5">
            <div className="col-lg-8 order-lg-2">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    data-target="#profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    data-target="#messages"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Rentals
                  </a>
                </li>
                <li className="nav-item">
                  <a data-target="#edit" data-toggle="tab" className="nav-link">
                    Edit Profile
                  </a>
                </li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active get-touch " id="profile">
                  <h5 className="mb-3">User Profile</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>
                        {" "}
                        <i className="fa fa-check-circle-o" /> First name :
                      </h6>
                      <p className="my-3">{this.state.first_name}</p>
                      <h6>
                        {" "}
                        <i className="fa fa-check-circle-o" /> Last name :
                      </h6>
                      <p className="my-3">{this.state.last_name}</p>
                      <h6>
                        {" "}
                        <i className="fa fa-check-circle-o" /> Email :
                      </h6>
                      <p className="my-3">{this.state.email}</p>

                      <h6>
                        {" "}
                        <i className="fa fa-check-circle-o" /> Your addresse :
                      </h6>
                      <p className="my-3">{this.state.addresse}</p>
                      <h6>
                        {" "}
                        <i className="fa fa-check-circle-o" /> Your Phone number
                        :
                      </h6>
                      <p className="my-3">{this.state.phoneNumber}</p>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
                <div className="tab-pane" id="messages">
                  <div className="container-lg">
                    <div className="table-responsive">
                      <div className="table-wrapper">
                        <div className="table-title">
                          <div className="row">
                            <div className="col-sm-8">
                              <h2>
                                Your <b>Rentals</b>
                              </h2>
                            </div>
                          </div>
                        </div>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Marque</th>
                              <th>boiteVitesses</th>
                              <th>montant</th>
                              <th>date Début</th>
                              <th>date Fin</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.locations.length !== 0 &&
                              this.state.locations.map((location) => (
                                <tr key={location.id}>
                                  <td>{location.car.marque}</td>
                                  <td>{location.car.boiteVitesses}</td>
                                  <td>{location.montant}$</td>
                                  <td>{location.dateDebut}</td>
                                  <td>{location.dateFin}</td>
                                  <td>
                                    {/* <button
                                      type="button"
                                      className="btn btn-warning mb-2 "
                                      style={{ width: "70px " }}
                                    >
                                      See
                                    </button> */}
                                    <button
                                      type="button"
                                      className="btn btn-danger "
                                      style={{ width: "70px " }}
                                      onClick={() =>
                                        this.deleteLocation(location.id)
                                      }
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="edit">
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        First name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          onChange={this.handleFirstNameChange}
                          required
                          placeholder="First name"
                          defaultValue={this.state.first_name}
                          name="first_name"
                          id="first_name"
                          // value={this.state.first_name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Last name
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          onChange={this.handleLastNameChange}
                          required
                          defaultValue={this.state.last_name}
                          name="last_name"
                          id="last_name"
                          // value={this.state.last_name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Email
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="email"
                          onChange={this.handleEmailChange}
                          required
                          defaultValue={this.state.email}
                          name="email"
                          id="email"
                          // value={this.state.email}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Cin
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          onChange={this.handleCinChange}
                          required
                          defaultValue={this.state.cin}
                          name="cin"
                          id="cin"
                          //  value={this.state.cin}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Phone Number
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="tel"
                          onChange={this.handlePhoneChange}
                          required
                          defaultValue={this.state.phoneNumber}
                          name="phoneNumber"
                          id="phoneNumber"
                          //  value={this.state.phoneNumber}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Address
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          onChange={this.handleAddresseChange}
                          required
                          defaultValue={this.state.addresse}
                          name="addresse"
                          id="addresse"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    {/* => */}
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        {" "}
                        password
                      </label>
                  
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          onChange={this.handlePasswordChange}
                          required
                          name="password"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        {" "}
                        Confirm password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          onChange={this.handleConfirmPasswordChange}
                          required
                          name="password"
                          id="password"
                          placeholder="Confirm password"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          type="reset"
                          className="btn btn-secondary mr-3"
                          defaultValue="Cancel"
                        />
                        <input
                          type="submit"
                          className="btn btn-primary"
                          defaultValue="Save Changes"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1 text-center">
              <img
                src={`http://localhost:8000/storage/${this.state.avatar}`}
                // src={`http://localhost:8000/storage/${localStorage.avatar}`}
                style={{
                  maxHeight: "100%",
                  width: "150px",
                  height: "150px",
                }}
                className="mx-auto img-fluid img-circle d-block  rounded-circle"
                alt="avatar"
              />
              {/* Start---Upload */}
              <form class="md-form col-2" style={{ margin: "30px " }}>
                <div className="file-field">
                  <a className="center">
                    <input onChange={this.handlChangeAvatar} type="file" />
                  </a>
                </div>
              </form>
              {/* End---Upload */}
            </div>
          </div>
        </div>

        {/* <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-4 mx-auto">
            <h1 className="text-center">Profile</h1>
          </div>
          <table className="table col-md-4 mx-auto">
            <tbody>
            
              <tr>
              
                <td>
                  <div className="car-list-thumb ">
                              <img
                                src={`http://localhost:8000/storage/${this.state.avatar}`}
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
                            </td>
              </tr>

              <tr>
                <td>location_id</td>
                <td>{this.state.location_id} </td>
              </tr>
              <tr>
                <td>first Name</td>
                <td>{this.state.first_name} </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email} </td>
              
              </tr>
  
              <tr>
                <td>Phone</td>
                <td>{this.state.phoneNumber} </td>
               
              </tr>
              <tr>
                <td>car</td>
                <td>{this.state.carMarque} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      </>
    );
  }
}
