import React from "react";
import { Carousel } from "react-bootstrap";

import "./testimonials.css";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  const testimonials_data = testimonials.testimonials;

  return (
    <div className="testimonials" style={{ minHeight: "540px " }}>
      <Carousel>
        {testimonials_data.map((t) => (
          <Carousel.Item key={t.name}>
            <div className="item">
              <div className=" text-center container-items   ">
                <h3 className="mt-2 mb-3 text-light text-center">
                  Testimonials
                </h3>
                <div className="title-line"></div>

                <p className="text-light text-center text">
                  <i className="qt-open">“</i>
                  {t.text}
                  <i className="qt-close ">”</i>
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
                    {t.name}
                    <br />
                    <small className="text-light">{t.userType} </small>
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
