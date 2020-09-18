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
            style={{ width: "100%", height: "600px" }}
            src="images/cp1.jpg"
            alt="First slide"
          />

          <Carousel.Caption
            className=""
            style={{ marginBottom: "150px", background: "#20201e86" }}
          >
            <h3>RST Booking</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "600px" }}
            src="images/indiantaxis.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="">Indian Taxis</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "600px", marginLeft: "0px" }}
            src="images/mytaxicab.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>My Taxi Cab</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CoverPage2;
