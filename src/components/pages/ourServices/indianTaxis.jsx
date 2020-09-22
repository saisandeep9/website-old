import React from "react";
import Header from "../../common/header";

const IndianTaxis = () => {
  const data = {
    title: "Indian Taxis",
    subText:
      "We provide convenient mobility solutions to commuters at the best and lowest fares. ",
  };

  return (
    <div style={{ minHeight: "700px ", marginTop: "80px" }}>
      <Header data={data} />

      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "100px" }}
      >
        <h3>Indian Taxis</h3>
        <div className="title-line-contact " />
        <p>
          This intuitive and user friendly taxi app is focused on providing
          quick, hassle free and reliable mobility solutions to commuters. We
          provide cab services all over India 24*7 and 365 days of the year.
          Instant booking for outstation rides are also provided.{" "}
        </p>

        <h2>Some Issues Faced By Commuters With Other Cab Operators </h2>
        <div className="title-line-contact " />
        <ul>
          <li>
            The fare charged for each trip depends upon the time, ie during
            peak/nonpeak hours. Normally very high rates are charged from the
            customers during peak hours and rainy days.
          </li>
          <li>
            The customers without smartphones or the app not installed in their
            mobile phones cannot travel.{" "}
          </li>
          <li>
            Drivers aren't supposed to book the trip on behalf of the customers.
          </li>
          <li>High commissions are charged from the customers.</li>
          <li>Penalty is charged for cancellation of the booking. </li>
        </ul>
        <h3>How We Are Different </h3>
        <div className="title-line-contact " />
        <ul>
          <li>
            The fare charged from the customer is in accordance with the rates
            prescribed by the govt and does not vary during, peak hours.
          </li>
          <li>
            The customers without smartphones or the app not installed in their
            mobile phones can also hire a taxi online with us.
          </li>
          <li>Drivers can book the trips on behalf of the customers.</li>
          <li>No commissions are charged from the customers. </li>
          <li>No penalty is charged for cancellation of the booking. </li>
        </ul>
        <h3>Unique Features Of Indian Taxis </h3>
        <div className="title-line-contact " />
        <ul>
          <li>Easy and fast booking with VIP services available. </li>
          <li>
            SOS alert notification option for both customers and drivers in case
            of emergencies.{" "}
          </li>
          <li>
            Option to negotiate with the drivers for long trips as per the
            vehicle owner confirmation.{" "}
          </li>
          <li>Receive discounts directly from the drivers. </li>
          <li>Separate application for both drivers and commuters.</li>
          <li>Faster and easier registration process</li>
          <li>No surge prices or additional charges.</li>
          <li>
            Option to book trips as per requirements- Local, Rental or
            Outstation.{" "}
          </li>
          <li>Pocket friendly rates,ie fixed by the Govt.</li>
          <li>Safe and comfortable rides. </li>
          <li>Options to choose from different types of vehicles. </li>
          <li>
            Option to check the driver's location via GPS and fare for a
            particular trip.{" "}
          </li>
          <li>24*7 customer care support services. </li>
          <li>
            Advance booking option available for rental and outstation rides.{" "}
          </li>
          <li>Invoice of past rides available.</li>
          <li>
            Driver information and vehicle details sent to the customer before
            driver's arrival.{" "}
          </li>
          <li>Details of drivers available with the management. </li>
          <li>Reduced waiting time.</li>
          <li>Well disciplined and highly professional cab drivers. </li>
          <li>Provision of offers and discounts.</li>
        </ul>
      </div>

      {/* <header className="bg-primary text-white  " style={{ height: "177px" }}>
        <div class="container text-center pt-5 ">
          <h1>Indian taxis</h1>
          <p>A landing page template freshly redesigned for Bootstrap 4</p>
        </div>
        <div class="container1">
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
    </div>
  );
};

export default IndianTaxis;
