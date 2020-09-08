import React, { Component } from "react";

import "./App.css";
import NavBar1 from "./components/navBar1";
import NavBar2 from "./components/navBar2";
import SideNavBar from "./components/sideNaveBar";
import {
  Route,
  Switch,
  // Redirect
} from "react-router-dom";
// import CoverPage from "./components/pages/coverPage";
// import CoverPage2 from "./components/pages/covepage2";
// import MainPage from "./components/pages/mainPage";
import Footer from "./components/pages/footer";
// import SideNavbar from "./components/sidt";
import Blog from "./components/pages/blog";
import CompanyProfile from "./components/pages/Companyprofile";
import Contacts from "./components/pages/contacts";
// import Testnav from "./components/testnav";
import MobileApp from "./components/pages/mobileApp";
import OurVisionMission from "./components/pages/ourVisionMission";
import Testimonials from "./components/pages/testimonials";
import ContactUs from "./components/pages/contactUs";
import Navtest from "./components/navtest";
import SimpleSlider from "./components/pages/carnav2";

//produsts
import Mytaxicab from "./components/pages/ourProducts/mytaxicab";
import IndianTaxis from "./components/pages/ourProducts/indianTaxis";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <SideNavbar /> */}

        <main>
          {/* <NavBar1 /> */}
          <NavBar2 />

          {/* <Navtest /> */}
          <Switch>
            {/* <Blog /> */}

            <Route path="/" exact component={Blog} />
            <Route path="/companyprofile" exact component={CompanyProfile} />
            <Route path="/ourvision" exact component={OurVisionMission} />
            <Route path="/contact" exact component={Contacts} />
            <Route path="/mytaxicab" exact component={Mytaxicab} />
            <Route path="/indiantaxis" exact component={IndianTaxis} />
            <Route path="/testimonials" exact component={Testimonials} />
            <Route path="/contactus" exact component={ContactUs} />
            {/* <Route path="/mobileApp" exact component={MobileApp} /> */}
          </Switch>

          {/* <Footer /> */}
          <SideNavBar />
        </main>

        {/* <main>
          {" "}
          {/* 
          <NavBar1 />
          <NavBar2 />
          {/* <CoverPage /> 
          <CoverPage2 />
          <MainPage />
          {/* <Testnav /> 
          <h1>this is app </h1>
       
        </main> */}
      </div>
    );
  }
}

export default App;
