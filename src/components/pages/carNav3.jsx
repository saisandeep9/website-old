import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carNav3.css";
import Slider from "react-slick";
// import { Link } from "react-router-dom";

const CarNav3 = (props) => {
  const { select } = props;

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
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
      <div className="carnav">
        <ul className="">
          <Slider {...settings}>
            <li onClick={() => select("sedan")}>
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
  );
};

export default CarNav3;