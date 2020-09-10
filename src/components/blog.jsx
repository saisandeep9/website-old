import React, { Component } from "react";

import CoverPage from "./pages/coverPage";
import MainPage from "./pages/mainPage";
import Footer from "./pages/footer";
import CarService from "./pages/carService";
import carServiceData from "../data/carServices";
// import To from "./tawkto";

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
    return (
      <main style={{ marginTop: "100px" }}>
        <CoverPage />

        <MainPage />
        {/* <To /> */}
        <CarService />
        <Footer />
      </main>
    );
  }
}

export default Blog;
