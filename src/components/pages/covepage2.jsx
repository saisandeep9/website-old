import React from "react";
import { Carousel } from "react-bootstrap";
import "./coverpage.css";

const CoverPage2 = () => {
  const items = [
    {
      img: "images/rstbooking.jpg",
      lable: "RST Booking",
      subLable: "Your Trusted Taxi Partner",
    },
    {
      img: "images/indiantaxis.jpg",
      lable: "Indian Taxis",
      subLable: "Quick, Hassle Free and Reliable Cab Services!",
    },
    {
      img: "images/mytaxicab.jpg",
      lable: "My Taxi Cab",
      subLable: "Drive With Us and Earn Higher!",
    },
  ];

  return (
    <div className="coverPage">
      <Carousel>
        {items.map((i) => (
          <Carousel.Item key={i.lable}>
            <img
              className=" d-block "
              style={{ width: "100%", height: "90%" }}
              src={i.img}
              alt={i.lable}
            />

            <Carousel.Caption className="caption">
              <label htmlFor="name">{i.lable}</label>
              <p className="text-light">{i.subLable}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item>
          <img
            className=" d-block "
            style={{ width: "100%", height: "90%" }}
            src="images/rstbooking.jpg"
            alt="First slide"
          />

          <Carousel.Caption className="caption">
            <lable>RST Booking</lable>
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
            <lable className="">Indian Taxis</lable>
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
            <lable>My Taxi Cab</lable>
            <p className="text-light">Drive With Us and Earn Higher!</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default CoverPage2;
