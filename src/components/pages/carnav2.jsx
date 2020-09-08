import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./c2.css";
import Slider from "react-slick";

function SimpleSlider(props) {
  //   const [suggestions, setSuggestions] = useState([]);
  const { select } = props;
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setSuggestions(data);
  //       });
  //   }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
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
    <div className="container ">
      {/* <h6 className="text-muted">Friend Suggestions</h6> */}
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
        {/* {suggestions.map((current) => (
            <div className="out " key={current.id}> */}
        {/* <div className="card "> */}

        {/* <img
                className="rounded-circle"
                alt={"users here"}
                src={`https://source.unsplash.com/random/${current.id}`}
                height={56}
                width={56}
              /> */}
        {/* <div className="card-body">
                  <h5 className="card-title">{current.username}</h5> */}
        {/* <small className="card-text text-sm-center text-muted">
                    In your contacts
                  </small>
                  <br /> */}
        {/* <button className="btn btn-sm follow btn-primary">
                    Follow
                  </button> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>
          ))} */}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
