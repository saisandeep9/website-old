import React, { Component } from "react";

// import CoverPage from "./pages/coverPage";
import CoverPage from "./pages/covepage2";
import MainPage from "./pages/mainPage";
// import Footer from "./pages/footer";
// import Footer from "./pages/footer2";
import CarService from "./pages/carService";
import carServiceData from "../data/carServices";
import CarSlider from "../components/pages/carSlider";
import Testimonials from "../components/pages/testimonials";
// import Testimonials from "../components/pages/testimonials1";
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
      <main style={{ minHeight: "300px", marginTop: "95px" }}>
        <CoverPage />

        <MainPage />
        <CarSlider />
        <Testimonials />

        {/* <CarService /> */}
        {/* 
        <Footer /> */}
      </main>
    );
  }
}

export default Blog;
