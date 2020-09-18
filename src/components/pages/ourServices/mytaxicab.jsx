import React from "react";
import Header from "../../common/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mytaxicab.css";
import Slider from "react-slick";

const Mytaxicab = () => {
  const data = {
    title: "My Taxi Cab",
    subText:
      "A My taxi cab landing page template freshly redesigned for Bootstrap",
  };

  let settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    focusOnSelect: true,
    // arrows: true,
    slidesToShow: 5,
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
    <div style={{ minHeight: "700px ", marginTop: "80px" }}>
      <Header data={data} />

      <div className="mytaxicab  ">
        <ul className="text-center">
          <Slider {...settings}>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">Safe Raid</h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">More Earnings </h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">No Commission</h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">Gov Rates</h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">Flexible Billing </h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">No Commission</h5>
            </li>
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Mytaxicab;
