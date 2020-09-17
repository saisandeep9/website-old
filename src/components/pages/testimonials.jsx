import React from "react";
import { Carousel } from "react-bootstrap";

import "./testimonials.css";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  console.log(
    "testimonials",
    testimonials.testimonials.map((t) => t.text)
  );

  const testimonials_data = testimonials.testimonials;

  return (
    <div className="testimonials" style={{ minHeight: "540px " }}>
      <Carousel>
        {testimonials_data.map((t) => (
          <Carousel.Item>
            <div className="item">
              <div className=" text-center container-items   ">
                <h3 className="mt-2 mb-3 text-light text-center">
                  Testimonials
                </h3>
                <div className="title-line"></div>

                <p className="text-light text-center text">
                  <i className="qt-open">“</i>
                  This is text from the testimonials this is text from the
                  testimonialsthis is text from the testimonials This is text
                  from the testimonialsthis is text from the testimonials{" "}
                  <span className="qt-close ">”</span>
                </p>

                <div
                  className=" media  col-2 "
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "80px",
                  }}
                >
                  <img
                    className=" align-self-center  "
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                    }}
                    src="user1.png"
                    alt="First slide"
                  />
                  <div className="media-body  "></div>
                  <p
                    className=" mt-2 ml-3 "
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#7474e5",
                    }}
                  >
                    Sandeep
                    <br />
                    <small className="text-light">user </small>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
