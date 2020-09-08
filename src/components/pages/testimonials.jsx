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
    <div style={{ minHeight: "800px ", marginTop: "80px" }}>
      {/* <header className="bg-primary text-white  " style={{ height: "177px" }}>
        <div class="container text-center pt-5 ">
          <h1>Testimonials</h1>
          <p>A landing page template freshly redesigned for Bootstrap 4</p>
        </div>
        <div class="container1" style={{ marginTop: "-8px" }}>
          <svg
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
            style={{ zIndex: "-2" }}
          >
            <path
              d="M0, 100 C150, 200 350, 
                0 500, 100 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "#1c18ee57" }}
            ></path>

            <path
              d="M0, 80 C300, 0 400,  
                300 500, 50 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "#1c18ee57" }}
            ></path>
            <path
              d="M0, 100 C150, 300 350, 
                0 500, 100 L500, 00 L0, 0 Z"
              style={{ stroke: "none", fill: "#183fee80" }}
            ></path>
          </svg>
        </div>
      </header> */}
      <Header data={data} />
      <Carousel className="" style={{ marginTop: "60px" }}>
        <Carousel.Item>
          {/* <img
                    className="d-block"
                    style={{
                      width: "80%",
                      height: "550px",
                      marginLeft: "70px",
                    }}
                    src="cp1.jpg"
                    alt="First slide"
                  /> */}

          <div
            className="card box w-75"
            style={{
              height: "350px",
              // width: "70%",
              // marginLeft: "90px",
              margin: "auto",
              marginTop: "5px",
              marginBottom: "5px",
              paddingBottom: "20px",
            }}
          >
            <h3 className="mt-1 text-center">Testimonials 1</h3>

            {/* <i class="fa fa-quote-left  "> </i> */}

            <p
              className=" text-muted mt-2   "
              style={{
                fontSize: "17px",
                width: "80%",
                margin: "0 auto 0 auto",
              }}
            >
              {" "}
              This is text from the testimonials this is text from the
              testimonialsthis is text from the testimonials This is text from
              the testimonials this is text from the testimonialsthis is text
              from the testimonials{" "}
            </p>
            <br />
            <img
              className="m-  "
              style={{
                width: "300px",
                height: "150px",
                margin: "0 auto 10px auto",
              }}
              src="images/1.jpg"
              alt="First slide"
            />
          </div>

          {/* <Carousel.Caption className="mb-3"></Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="card box w-75"
            style={{
              height: "350px",
              // width: "80%",
              // marginLeft: "90px",
              margin: "auto",
              marginTop: "5px",
              marginBottom: "5px",
              paddingBottom: "20px",
            }}
          >
            <h3 className="mt-1 text-center">Testimonials 2</h3>
            <p
              className=" text-muted mt-2  "
              style={{
                fontSize: "20px",
                width: "70%",
                margin: "auto",
              }}
            >
              {" "}
              This is text from the testimonials this is text from the
              testimonialsthis is text from the testimonials This is text from
              the testimonials this is text from the testimonialsthis is text
              from the testimonials{" "}
            </p>

            <img
              style={{
                width: "200px",
                height: "100px",
                margin: "auto",
              }}
              src="cp2.jpg"
              alt="First slide"
            />
          </div>

          {/* <img
                    className="d-block "
                    style={{
                      width: "80%",
                      height: "550px",
                      marginLeft: "70px",
                    }}
                    src="cp2.jpg"
                    alt="Second slide"
                  /> */}

          {/* <Carousel.Caption>
                    <h3 className="">Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="card box"
            style={{
              height: "450px",
              width: "80%",
              // marginLeft: "90px",
              margin: "auto",
              marginTop: "5px",
              marginBottom: "5px",
              paddingBottom: "20px",
            }}
          >
            <h3 className="mt-1 text-center">Testimonials 3 </h3>

            <p
              className=" text-muted mt-3"
              style={{
                fontSize: "20px",
                width: "70%",
                margin: "auto",
              }}
            >
              {" "}
              This is text from the testimonials this is text from the
              testimonialsthis is text from the testimonials This is text from
              the testimonials this is text from the testimonialsthis is text
              from the testimonials{" "}
            </p>

            <img
              style={{
                width: "200px",
                height: "100px",
                margin: "auto",
              }}
              src="cp3.jpg"
              alt="First slide"
            />
          </div>

          {/* <img
                    className="d-block "
                    style={{
                      width: "80%",
                      height: "550px",
                      marginLeft: "70px",
                    }}
                    src="cp3.jpg"
                    alt="Third slide"
                  /> */}

          {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption> */}
        </Carousel.Item>

        {/* <span class="sr-only">Previous</span> */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
