import React from "react";
import { Carousel } from "react-bootstrap";
import "./coverpage.css";

const CoverPage2 = () => {
  return (
    <div className="coverPage">
      <Carousel>
        <Carousel.Item>
          <img
            className=" d-block "
            style={{ width: "100%", height: "90%" }}
            src="images/rstbooking.jpg"
            alt="First slide"
          />

          <Carousel.Caption className="caption">
            <h2>RST Booking</h2>
            <p className="text-light">Your Trusted Taxi Partner</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "90%" }}
            src="images/indiantaxis.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h2 className="">Indian Taxis</h2>
            <p className="text-light">
              Quick, Hassle Free and Reliable Cab Services!{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "90%" }}
            src="images/mytaxicab.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h2>My Taxi Cab</h2>
            <p className="text-light">Drive With Us and Earn Higher!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CoverPage2;
