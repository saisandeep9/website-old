import React, { Component } from "react";
import CarSlider from "./carSlider";
import carServiceData from "../../data/carServices";

class CarServices extends Component {
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
      <div>
        {this.state.car.length === 1 && (
          <section
            id="car"
            style={{
              minHeight: "600px",
              width: "100%",
              backgroundColor: "#DFE3EE",
              //   backgroundImage: "url('ceo.jpg')",
              //   marginTop: "-16px",
              paddingTop: "10px",
            }}
          >
            {/* <CarNav select={this.select} /> */}
            <CarSlider select={this.select} />

            <div className=" justify-content-center row  ">
              <div className="col-md-5    text-center">
                <img
                  src={this.state.car[0].img}
                  alt="car"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="col-md-4  ml-md-4 p-5 ">
                <h1>{this.state.car[0].title}</h1>
                <ul className=" text-left">
                  {/* <li>{car.car.carName}</li> */}
                  <li>this is sedan page</li>
                  <li>this is sedan page</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default CarServices;
