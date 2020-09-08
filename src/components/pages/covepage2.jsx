import React from "react";
import { Carousel } from "react-bootstrap";
import "./coverpage.css";

const CoverPage2 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className=" d-block  "
            style={{ width: "100%", height: "500px", marginLeft: "0px" }}
            src="images/cp1.jpg"
            alt="First slide"
          />

          <Carousel.Caption
            className="bg-dark"
            style={{ marginBottom: "150px" }}
          >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "500px" }}
            src="images/cp2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{ width: "100%", height: "500px", marginLeft: "0px" }}
            src="images/cp3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
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
