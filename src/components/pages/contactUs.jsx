import React from "react";
import Form from "../common/form";
import Header from "../common/header";
import Footer from "../pages/footer";
import * as emailjs from "emailjs-com";

const ContactUs = () => {
  const data = {
    title: "Contact Us",
    subText: "Hi, There. How May We Help You?  ",
  };

  const style = {
    borderBottom: " #e8e8e8 1px solid",
    padding: "15px 0 15px 10px",
    position: "relative",
    margin: "0",
  };
  return (
    <div
      style={{
        minHeight: "950px ",
        marginTop: "90px",
        color: "var(--rstlog-color)",
      }}
    >
      <Header data={data} />

      <div
        className="row  justify-content-center   "
        style={{ marginTop: "100px" }}
      >
        <div className=" col-5 m-2 ">
          <h3>Get In Touch</h3>
          <div className="title-line-contact" />

          <p>Got something in mind? </p>

          <Form />
        </div>

        <div className="col-5 ">
          <h3>Contact Details</h3>

          <div className="title-line-contact" />

          <ul style={{ listStyle: "none" }}>
            <li style={style}>
              <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
              &nbsp;&nbsp;
              <a
                style={{ color: "#393185" }}
                target="_blank"
                href="https://www.google.com/maps/dir//RST+Booking+Private+Limited+(RS+Travels+Bangalore),+11%2F7,+1st+Floor,+18th+Main+Rd,+5th+Phase,+J.+P.+Nagar,+Bengaluru,+Karnataka+560078/@12.901007,77.5863239,17z/data=!4m17!1m7!3m6!1s0x3bae15140c5b609b:0xba1ad6dd5991e031!2sRST+Booking+Private+Limited+(RS+Travels+Bangalore)!3b1!8m2!3d12.9010018!4d77.5885126!4m8!1m0!1m5!1m1!1s0x3bae15140c5b609b:0xba1ad6dd5991e031!2m2!1d77.5885126!2d12.9010018!3e3?hl=en"
              >
                11/7, 1st Floor, 18th Main Rd, 5th Phase, J. P. Nagar,
                Bengaluru, Karnataka, 560078
              </a>
            </li>

            <li style={style}>
              <i className="fa fa-phone" aria-hidden="true"></i>{" "}
              &nbsp;&nbsp;&nbsp;
              <a style={{ color: "#393185" }} href="tel:+916364722299">
                +916364722299
              </a>
            </li>
            <li style={style}>
              <i
                className="fa fa-mobile"
                aria-hidden="true"
                style={{ fontSize: "25px" }}
              ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a style={{ color: "#393185" }} href="tel:+918068464799">
                +91&nbsp;8068464799
              </a>
            </li>
            <li style={style}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a style={{ color: "#393185" }} href="mailto:info@rstbooking.com">
                info@rstbooking.com
              </a>
            </li>
          </ul>
          {/* <div className="media mt-2">
              <img
                src="/images/cc2.jpg"
                alt=""
                className="align-self-center"
                style={{ height: "", width: "70px" }}
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
         
          */}

          <div style={{ marginTop: "50px" }}>
            <h3>Location</h3>
            <div className="title-line-contact" />
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107738.57830893247!2d77.55706675685148!3d12.851232445283456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15140c5b609b%3A0xba1ad6dd5991e031!2sRST%20Booking%20Private%20Limited%20(RS%20Travels%20Bangalore)!5e0!3m2!1sen!2sin!4v1599824056337!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "300px",
                frameborder: "0",
                border: "none",
                allowfullscreen: "",
                ariaHidden: "false",
                tabindex: "0",
                marginTop: "20px",
              }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row m-3 justify-content-center">
        <div className="col-md-4 m-2"></div>
      </div>
    </div>
  );
};

export default ContactUs;
