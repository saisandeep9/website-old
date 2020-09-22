import React from "react";
import { Carousel } from "react-bootstrap";
import "./coverpage.css";

const CoverPage2 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className=" d-block "
            style={{ width: "100%", height: "90%" }}
            src="images/rstbooking.jpg"
            alt="First slide"
          />

          <Carousel.Caption
            className=""
            style={{
              marginBottom: "15%",
              background: "#20201ec1",
              color: "#7474e5",
            }}
          >
            <h3>RST Booking</h3>
            <p className="text-light" style={{ fontSize: "20px" }}>
              Your Trusted Taxi Partner
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "90%" }}
            src="images/indiantaxis.jpg"
            alt="Second slide"
          />

          <Carousel.Caption
            className=""
            style={{
              marginBottom: "15%",
              background: "#20201ec1",
              color: "#7474e5",
            }}
          >
            <h3 className="">Indian Taxis</h3>
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

          <Carousel.Caption
            style={{
              marginBottom: "15%",
              background: "#20201ec1",
              color: "#7474e5",
            }}
          >
            <h3>My Taxi Cab</h3>
            <p className="text-light">Drive With Us and Earn Higher!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CoverPage2;
