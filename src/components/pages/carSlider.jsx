import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carSlider.css";

import Slider from "react-slick";
import carServiceData from "../../data/carServices";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        fontSize: "60px",
        height: "80px",
        width: "80px",
        color: "var(--rstlog-color)",
        right: "-100px",
      }}
      onClick={onClick}
    >
      <i className="fa fa-angle-right"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        // background: "#393185",
        // color: "black",
        display: "block",

        fontSize: "60px",
        height: "80px",
        width: "80px",
        left: "-100px",
        color: "var(--rstlog-color)",
      }}
      onClick={onClick}
    >
      {" "}
      <i class="fa fa-angle-left"></i>
    </div>
  );
}

class CarSlider extends Component {
  state = {
    nav1: null,
    nav2: null,
    data: [],
    // car: "",
  };

  componentDidMount() {
    const data = carServiceData.carServices;
    this.setState({ data });
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
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
          background: "white",
          paddingBottom: "56px",
          marginBottom: "-16px",
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
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          // slidesToShow={2}
          arrows={true}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider2"
        >
          {this.state.data.map((d) => (
            <div key={d.carName}>
              <div className="m-4 cards ">
                <img
                  // className="rounded-circle"
                  alt={"users here"}
                  src={d.img}
                />

                {/* <div id="textbox">
                  <p class="alignleft">Text on the left.</p>
                  <p class="alignright">Text on the right.</p>
                </div> */}
                <div className="mt-4 ml-3 mr-3">
                  <p className="title ml-3  mt-1 md-h1 float-left ">
                    {d.title}
                  </p>

                  <p className="max mr-3 mt-1 text-dark float-right align-middle ">
                    <i className="fa fa-user "></i>&nbsp;&nbsp;&nbsp;Max:{" "}
                    {d.maxPerson}
                  </p>
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
