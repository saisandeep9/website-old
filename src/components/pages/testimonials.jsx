import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../common/header";
import "./testimonials.css";

const Testimonials = () => {
  const data = {
    title: "Testimonials",
    subText:
      "A Testimonials landing page template freshly redesigned for Bootstrap",
  };
  return (
    <div className="testimonials" style={{ minHeight: "440px " }}>
      <Carousel
        className="   "
        style={{
          height: "440px",

          margin: "auto",
        }}
      >
        <Carousel.Item>
          <div
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              paddingBottom: "20px",
              paddingTop: "40px",
            }}
          >
            <h3 className="mt-1 mb-2 text-light text-center">Testimonials 1</h3>
            <div className="title-line"></div>
            <div className="text-light">
              {" "}
              <p
                className=" text-center     "
                style={{
                  fontSize: "17px",
                  width: "60%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <span className="qt-open">“</span>
                This is text from the testimonials this is text from the
                testimonialsthis is text from the testimonials This is text from
                the testimonialsthis is text from the testimonials{" "}
                <span className="qt-close ">”</span>
              </p>
            </div>
            <div
              className="text-center "
              style={
                {
                  // margin: "0 auto 0px auto",
                }
              }
            >
              <img
                className="  "
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  marginTop: "50px",
                }}
                src="user1.png"
                alt="First slide"
              />
              <p className="text-light mt-2 ">
                {" "}
                name of the the person
                <br />
                <small className="text-light">user </small>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              paddingBottom: "20px",
              paddingTop: "40px",
            }}
          >
            <h3 className="mt-1 mb-2 text-light text-center">Testimonials 1</h3>
            <div className="title-line"></div>
            <div className="text-light">
              {" "}
              <p
                className=" text-center     "
                style={{
                  fontSize: "17px",
                  width: "60%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <span className="qt-open">“</span>
                This is text from the testimonials this is text from the
                testimonialsthis is text from the testimonials This is text from
                the testimonialsthis is text from the testimonials{" "}
                <span className="qt-close ">”</span>
              </p>
            </div>
            <div
              className="text-center "
              style={
                {
                  // margin: "0 auto 0px auto",
                }
              }
            >
              <img
                className="  "
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  marginTop: "50px",
                }}
                src="/user2.png"
                alt="First slide"
              />
              <p className="text-light mt-2 ">
                {" "}
                name of the the person
                <br />
                <small className="text-light">user </small>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
