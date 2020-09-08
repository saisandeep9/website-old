import React, { Component } from "react";

import "./App.css";
// import NavBar1 from "./components/navBar/navBar1";
import NavBar2 from "./components/navBar/navBar2";
import SideNavBar from "./components/navBar/sideNaveBar";
import {
  Route,
  Switch,
  // Redirect
} from "react-router-dom";

import Blog from "./components/pages/blog";
//about us
import CompanyProfile from "./components/pages/aboutUs/companyprofile";
import OurVisionMission from "./components/pages/aboutUs/ourVisionMission";

//produsts
import Mytaxicab from "./components/pages/ourProducts/mytaxicab";
import IndianTaxis from "./components/pages/ourProducts/indianTaxis";

import Contacts from "./components/pages/contacts";

import Testimonials from "./components/pages/testimonials";
import ContactUs from "./components/pages/contactUs";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <main>
          <NavBar2 />

          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/companyprofile" exact component={CompanyProfile} />
            <Route path="/ourvision" exact component={OurVisionMission} />
            <Route path="/contact" exact component={Contacts} />
            <Route path="/mytaxicab" exact component={Mytaxicab} />
            <Route path="/indiantaxis" exact component={IndianTaxis} />
            <Route path="/testimonials" exact component={Testimonials} />
            <Route path="/contactus" exact component={ContactUs} />
          </Switch>

          <SideNavBar />
        </main>
      </div>
    );
  }
}

export default App;
