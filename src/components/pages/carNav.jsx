import React from "react";
import "./carNav.css";
// import { Link } from "react-router-dom";

const CarNav = (props) => {
  const { select } = props;

  return (
    <div>
      <div className="carnav0">
        <ul className="">
          <li onClick={() => select("sedan")}>
            <img
              src="images/cars/sedanic.png"
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            {/* sedan */}
            {/* <i className="triangle-up"></i> */}
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
          {/* <li>
            <a href="#">Tata Ace</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default CarNav;
