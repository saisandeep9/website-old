import React from "react";
import Header from "../../common/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mytaxicab.css";
import Slider from "react-slick";

const Mytaxicab = () => {
  const data = {
    title: "My Taxi Cab",
    subText: "Doing What We Do Best! ",
  };

  let settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    focusOnSelect: true,
    // arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ minHeight: "2200px ", marginTop: "80px" }}>
      <Header data={data} />
      <div className="container mytaxicab" style={{ marginTop: "70px" }}>
        <h3>My Taxi Cab</h3>
        <div className="title-line-contact " />
        <p>
          This app is designed and developed by the company for the exclusive
          use of drivers. We provide a user friendly platform for drivers to
          make their trips easier. Our specialised technology helps drivers
          simplify their work and enhance their earnings. We also assist them to
          become empowered entrepreneurs and earn higher without any
          commissions.
        </p>
        <h3> Unique Features Of The Application </h3>
        <div className="title-line-contact " />

        <ul>
          <li>Subscription plan for drivers and commuters. </li>

          <li>Self booking-any time, any location</li>
          <li>Advance booking for outstation rides</li>
          <li>No commissions and unwanted charges</li>
          <li>All transactions with E-Bill Records.</li>
          <li>24/7 friendly customer care support </li>
          <li>Training to kick start own business. </li>
          <li>Refer and Earn</li>
          <li>Customer Leads</li>
          <li>Coupon</li>
          <li>Account Wallet </li>
          <li>GST registration </li>
          <li>Plan of trips</li>
          <li>Games</li>
        </ul>

        <h3>Some Issues Faced by Drivers With Other Organisations</h3>
        <div className="title-line-contact " />

        <ul>
          <li>
            Drivers remain unaware of the destination until the commuter gets in
            the cab and enters the OTP.
          </li>
          <li>
            Drivers are not aware of the distance and time of the ride until
            they accept the commuter.{" "}
          </li>{" "}
          <li>
            Drivers are not informed of the actual fare to be received for each
            trip.
          </li>{" "}
          <li>
            Drivers are unaware of the amount of fare paid by the commuter
            incase of online payments.{" "}
          </li>{" "}
          <li>
            If the driver rejects the trip after the booking, he is subjected to
            pay the penalty.
          </li>{" "}
          <li>
            Huge commission is charged (some time up to 30%) by the aggregators.
          </li>
          <li>
            Drivers are expected to work for long hours to reach their minimum
            daily targets.
          </li>
        </ul>

        <h3>How We Are Different </h3>
        <div className="title-line-contact " />

        <ul>
          <li>
            The drivers shall view the destination, travel time and the fare for
            each trip in the application. He can schedule accordingly and accept
            the ride or not.{" "}
          </li>
          <li>
            Drivers are not charged with the penalty for rejecting a ride.{" "}
          </li>
          <li>
            The company does not pressurise the drivers to achieve their daily
            targets.{" "}
          </li>
          <li>
            Drivers are not charged with commissions for each trip. The fare
            displayed in the application is the final amount for both the
            drivers and commuters. The entire amount is directly received by the
            driver.{" "}
          </li>
          <li>
            The driver is expected to pay only a bare minimum amount of monthly
            subscription fee.
          </li>
          <li>
            Drivers are provided with the option to view and download the
            summary of trips made by them.{" "}
          </li>
          <li>
            Drivers shall enjoy complete transparency in billing and receipts
            for each trip.{" "}
          </li>
        </ul>
        <h3>Why Choose Us</h3>
        <div className="title-line-contact " />
        <h5>Zero Commissions</h5>
        <p>
          There is no third party involved. The fare is directly credited to
          your account.{" "}
        </p>
        <h5>Government Approved Per Km Charges</h5>
        <p>
          Rates are fixed as per the Government approved rates and applied
          according to the respective categories of vehicles.
        </p>
        <h5>Flexible Timings</h5>
        <p>
          You have the complete freedom to work at your own schedule and
          convenience.{" "}
        </p>
        <h5>Spot Booking</h5>
        <p>
          Pick your customers from anywhere and at any time. There is absolutely
          no requirement for advance booking by customers.{" "}
        </p>
        <h5>Flexible Invoice</h5>
        <p>
          You have an option of adding extra charges such as parking,and toll
          tax in the fare and also have the option of giving discounts in the
          final fare.
        </p>
        <h5>Instant Account</h5>
        <p>
          You can create your account from anywhere and at any time , and also
          start using the service at your own convenience.{" "}
        </p>
      </div>
      <div className="mytaxicabslider  ">
        <ul className="text-center">
          <Slider {...settings}>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">Safe Raid</h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">More Earnings </h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">No Commission</h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">Gov Rates</h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">Flexible Billing </h5>
            </li>
            <li>
              <img
                src="v1.jpg"
                alt=""
                style={{ height: "80px", width: "80px" }}
              />
              <h5 className="mt-3">No Commission</h5>
            </li>
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Mytaxicab;
