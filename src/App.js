import React, { Component } from "react";

import "./App.css";
// import NavBar1 from "./components/navBar/navBar1";
// import NavBar2 from "./components/navBar/navBar2";
import NavBar2 from "./components/navBar/navBar3";
import SideNavBar from "./components/navBar/sideNaveBar";
import {
  Route,
  Switch,
  // Redirect
} from "react-router-dom";

import Blog from "./components/blog";
//about us./components/blog
import CompanyProfile from "./components/pages/aboutUs/companyprofile";
import OurVisionMission from "./components/pages/aboutUs/ourVisionMission";
import About from "./components/pages/about";
//produsts
import Mytaxicab from "./components/pages/ourServices/mytaxicab";
import IndianTaxis from "./components/pages/ourServices/indianTaxis";
import OurServices from "./components/pages/ourServices";

import Careers from "./components/pages/careers";
import Contacts from "./components/pages/contacts";
import Footer from "./components/pages/footer2";
import Testimonials from "./components/pages/testimonials";
import ContactUs from "./components/pages/contactUs";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <main>
          {/* <NavBar2 /> */}
          <Route component={NavBar2}></Route>
          <Switch>
            <Route path="/" exact component={Blog} />

            <Route path="/ourservices" exact component={OurServices} />
            <Route path="/about" exact component={About} />
            <Route path="/careers" exact component={Careers} />
            <Route path="/companyprofile" exact component={CompanyProfile} />
            <Route path="/ourvision" exact component={OurVisionMission} />
            <Route path="/contact" exact component={Contacts} />
            <Route path="/mytaxicab" exact component={Mytaxicab} />
            <Route path="/indiantaxis" exact component={IndianTaxis} />
            <Route path="/testimonials" exact component={Testimonials} />
            <Route path="/contactus" exact component={ContactUs} />
          </Switch>
          <Footer />
          {/* <SideNavBar /> */}
        </main>
      </div>
    );
  }
}

export default App;
