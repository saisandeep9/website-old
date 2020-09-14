import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carSlider.css";

import Slider from "react-slick";
import carServiceData from "../../data/carServices";
// import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#20201e" }}
      onClick={onClick}
    />
  );
}

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,

//         background: "#393185",
//         color: "black",
//       }}
//       onClick={onClick}
//     />
//   );
// }

class CarSlider extends Component {
  state = {
    nav1: null,
    nav2: null,
    data: [],
    // car: "",
  };

  componentDidMount() {
    const data = carServiceData.carServices;

    // const car = [data[0]];
    this.setState({ data });

    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const { select } = this.props;
    let settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 15000,
      speed: 1000,
      focusOnSelect: true,
      // arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      // centerMode: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SampleNextArrow />,

      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div
        style={{
          background: "#ffff",
          paddingBottom: "60px",
        }}
      >
        <div className="header">
          <h1>Our Services</h1>
          <div className="title-line" />

          <div className="slider1">
            <ul className="">
              <Slider
                {...settings}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                dots={true}
              >
                {/* <Slider > */}
                <li className="align-self-center">
                  <img
                    src="images/cars/sedanic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>

                <li>
                  <img
                    src="images/cars/hatchbackic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />

                  {/* <i className="triangle-up"></i> */}
                </li>
                <li>
                  <img
                    src="images/cars/suvic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li>
                  <img
                    src="images/cars/tempo.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li>
                  <img
                    src="images/cars/autoic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li>
                  <img
                    src="images/cars/tataace.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
              </Slider>
            </ul>
          </div>
        </div>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          {...settings}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SampleNextArrow />}
          // slidesToShow={2}
          arrows={true}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider2"
        >
          {console.log("data", this.state.data)}

          {this.state.data.map((d) => (
            <div key={d.carName}>
              <div className="m-4 cards ">
                <img
                  // className="rounded-circle"
                  alt={"users here"}
                  src={d.img}
                  // style={{ height: "290px", width: "290px" }}
                  className=""
                />

                <div className=" row ml-3 ">
                  <p className="text-left h3 ml-3 col-4 ">{d.title}</p>
                  {/* <div className="float-right mr-4"> */}
                  <p className="text-right h4 col-6">
                    <i className="fa fa-user "></i>&nbsp;Max: {d.maxPerson}
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarSlider;
