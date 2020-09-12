import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carSlider.css";
import TitleBlock from "../common/titleBlock";
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
      // centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,

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
      <div>
        <div className="header">
          <h1>Our Services</h1>
          <TitleBlock />

          <div className="slider1">
            <ul className="">
              <Slider
                {...settings}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
              >
                {/* <Slider > */}
                <li
                  className="align-self-center"
                  onClick={() => select("sedan")}
                >
                  <img
                    src="images/cars/sedanic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>

                <li onClick={() => select("hatchback")}>
                  <img
                    src="images/cars/hatchbackic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />

                  {/* <i className="triangle-up"></i> */}
                </li>
                <li onClick={() => select("suv")}>
                  <img
                    src="images/cars/suvic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li onClick={() => select("tempo")}>
                  <img
                    src="images/cars/tempo.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li onClick={() => select("auto")}>
                  <img
                    src="images/cars/autoic.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li onClick={() => select("tataace")}>
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
          // slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider2"
        >
          {console.log("data", this.state.data)}

          {this.state.data.map((d) => (
            <div key={d.carName}>
              <div className="m-4 cards">
                <img
                  // className="rounded-circle"
                  alt={"users here"}
                  src={d.img}
                  height={290}
                  width={260}
                  className=""
                />

                <div className=" text-center">
                  <h5 className="">{d.title}</h5>
                  <h3>
                    <i className="fa fa-user"></i>{" "}
                  </h3>
                  &nbsp;
                  <small className=" text-sm-center text-muted">
                    In your contacts
                  </small>
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
