import React from "react";
import Form from "../common/form";
import Header from "../common/header";
import Footer from "../pages/footer";

const ContactUs = () => {
  const data = {
    title: "Contact Us",
    subText:
      "A Contact Us landing page template freshly redesigned for Bootstrap",
  };
  return (
    <div style={{ minHeight: "800px ", marginTop: "80px" }}>
      <Header data={data} />
      {/* <header className="bg-primary text-white  " style={{ height: "177px" }}>
        <div class="container text-center pt-5 ">
          <h1>Contact Us</h1>
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
      <div className="row mt-5  justify-content-center ">
        <div className="col-md-5 m-1 ">
          <div className="media mt-2">
            <img
              src="/images/cc2.jpg"
              alt=""
              className="align-self-center"
              style={{ height: "50px", width: "70px" }}
            />
            <div className="media-body">
              <h6 className="mt-0">CUSTOMER SUPPORT</h6>
              <p>
                {" "}
                For support with your bookings and other queries <br />
                <a className="" href="tel:+918068464799">
                  +91&nbsp;8068464799
                </a>
              </p>
            </div>
          </div>

          <div className="media mt-2">
            <img
              src="/images/whatsapp.png"
              alt=""
              className="align-self-center"
              style={{ height: "70px", width: "70px" }}
            />
            <div className="media-body">
              <h6 className="mt-0">Chart with us</h6>
              <p>
                {" "}
                For support with your bookings and other queries <br />
                <a
                  className=""
                  href="https://api.whatsapp.com/send?phone=916364708090
      &text=hello from Rst booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91&nbsp;6364708090
                </a>
              </p>
            </div>
          </div>
          <div className="media mt-2">
            <img
              src="/images/email.png"
              alt=""
              className="align-self-center"
              style={{ height: "70px", width: "70px" }}
            />
            <div className="media-body">
              <h6 className="mt-0">E-mail</h6>
              <p>
                {" "}
                For support with your bookings and other queries <br />
                <a href="mailto:info@rstbooking.com">info@rstbooking.com</a>
              </p>
            </div>
          </div>
        </div>

        <div
          className=" col-md-4 m-1 "
          style={{ marginTop: "60px", background: "#20201e" }}
        >
          <Form />
        </div>
      </div>
      {/* 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107738.57830893247!2d77.55706675685148!3d12.851232445283456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15140c5b609b%3A0xba1ad6dd5991e031!2sRST%20Booking%20Private%20Limited%20(RS%20Travels%20Bangalore)!5e0!3m2!1sen!2sin!4v1599824056337!5m2!1sen!2sin"
        style={{
          width: "100%",
          height: "950",
          frameborder: "0",
          style: "border:0",
          allowfullscreen: "",
          ariaHidden: "false",
          tabindex: "0",
        }}
      ></iframe> */}
    </div>
  );
};

export default ContactUs;
