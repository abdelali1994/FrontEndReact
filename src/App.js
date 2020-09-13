import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Notfound from "./Pages/404";
import Cars from "./Pages/Cars";
import CarDetails from "./Pages/CarDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";

function App(props) {
  const [renderApp, setRenderApp] = useState(false)
  const rendering=()=>{
    console.log("ana f app")
    setRenderApp(!renderApp)
    // console.log(render)
  }
  useEffect(() => {
  
  }, [renderApp])
  return (
    <>
       <ThemeProvider>
          <CSSReset />
      <Router>
        <Header />

        <Switch>
        <Route exact path="/profile" render={(props) => (
                  <Profile
                    {...props}
                    rendering={rendering}
                    // loggedInStatus={loggedInStatus}
                    // handleLogout={handleLogout}
                  />
                )}
              />
          <Route  exact path="/" component={Home} />
          <Route  exact path="/about" component={About} />
          <Route  exact path="/services" component={Services} />
          <Route  exact path="/cars" component={Cars} />
          <Route  exact path="/register" component={Register} />
          <Route  exact path="/login" component={Login} />
          {/* <Route  exact path="/profile"  component={Profile} /> */}
          <Route  exact path="/details/:id" component={CarDetails} />
          <Route  component={Notfound} />

        </Switch>

        <Footer />
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
