import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  let settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 15000,
    speed: 1000,
    focusOnSelect: true,
    height: "100px",
    color: "red",
    slidesToShow: 1,
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
    <div id="" style={{ minHeight: "600px" }}>
      <Slider {...settings}>
        <div
          style={{
            height: "150px",

            margin: "auto",
            background: "#393185",
          }}
        >
          Testimonials1
        </div>
        <h1>Testimonials2</h1>
        <h1>Testimonials3</h1>
      </Slider>
    </div>
  );
};

export default Testimonials;
