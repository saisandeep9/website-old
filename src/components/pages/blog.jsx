import React, { Component } from "react";

// import { Route, Switch, Redirect } from "react-router-dom";

// import NavBar1 from "../navBar1";
// import NavBar2 from "../navBar2";
// import SidNavBar from "../sideNaveBar";
import CoverPage from "../pages/coverPage";
// import CoverPage2 from "../pages/covepage2";
import MainPage from "../pages/mainPage";
import Footer from "../pages/footer";
// import CarNav from "./carNav";
import CarService from "./carService";
import carServiceData from "../../data/carServices";

class Blog extends Component {
  state = {
    data: [],
    car: "",
  };

  componentDidMount = () => {
    const data = carServiceData.carServices;

    const car = [data[0]];
    this.setState({ data, car });
  };

  select = (s) => {
    const actualdata = this.state.data;
    let filteredData = actualdata.filter((data) => data.carName === s);

    this.setState({ car: filteredData });
  };

  render() {
    console.log("car from blog", this.state.car);
    // console.log("car from blog", this.state.car[0]);
    return (
      <main style={{ marginTop: "100px" }}>
        {/* <SidNavBar /> */}
        {/* <SideNavbar /> */}
        <CoverPage />
        {/* <CoverPage2 /> */}
        <MainPage />
        {/* <CarNav select={this.select} /> */}
        {/* {this.state.car.length === 1 && <CarService car={this.state.car[0]} />} */}
        <CarService />

        {/* <Switch>
          <Route path="/" exact component={CoverPage2} />
          <Route path="/" exact component={MainPage} />
          <Route path="/" exact component={CarService} />
        </Switch> */}

        <Footer />
      </main>
    );
  }
}

export default Blog;
