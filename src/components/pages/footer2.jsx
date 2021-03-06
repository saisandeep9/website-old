import React from "react";
import "./footer.css";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { Icon, InlineIcon } from "@iconify/react";
import googlePlay from "@iconify/icons-fa-brands/google-play";

function Copyright() {
  return (
    <div className="text-secondary">
      {"Copyright ©  RST"} {new Date().getFullYear()}.&nbsp;All Right Reserved.
    </div>
  );
}

const Footer = () => {
  var styel = {
    color: "white",
    background: "#252525",
    // minHeight: "410px",
  };

  return (
    <footer className="footer overflow-hidden   " style={styel}>
      <div
        className=" justify-content-center row  m-md-0  "
        style={{ paddingLeft: "4%", paddingRight: "4%", paddingBottom: "5%" }}
      >
        <div className="col-md-3 col-12 text-left pt-4  ">
          <h3 className="   limoking-widget-title">About</h3>
          <div className="title-line-footer "></div>

          <p className="mt-2">
            <span
              className="text-light"
              style={{ fontSize: "15px", fontWeight: "600" }}
            >
              RST Booking Private Ltd
            </span>
            &nbsp;aims to provide smart mobility solutions with the latest
            technology. We assist drivers to become empowered entrepreneurs and
            also offer commuters with quick, hassle-free and reliable local taxi
            service at affordable rates.
          </p>
          {/* <img
            src="images/rstlog.png"
            style={{ width: "50px", height: "50px", marginTop: "10px" }}
            alt=""
          /> */}
        </div>
        <div className="col-md-3 col-12 text-md-center pt-4">
          <h3 className=" text-light limoking-widget-title  ">
            connect with us
          </h3>
          <div
            className="d-none d-sm-block"
            style={{
              width: "20px",
              height: "2px",
              margin: "15px auto 25px 90px",
              background: "#ffff",
            }}
          ></div>
          <div className="title-line-footer d-block d-sm-none "></div>

          <h3>
            <div className="row  justify-content-md-center">
              <div className="col-2">
                <a target="_blank" href="http://localhost:3000/">
                  <i className="fa fa-facebook-square socialMedia"></i>
                </a>
              </div>
              <div className="col-2">
                <a target="_blank" href="http://localhost:3000/">
                  <i className="fa fa-instagram  socialMedia"></i>
                </a>
              </div>
              <div className="col-2">
                <a target="_blank" href="http://localhost:3000/">
                  <i className="fa fa-twitter  socialMedia"></i>
                </a>
              </div>
            </div>
            <div className="row mt-4 justify-content-md-center">
              <div className="col-2">
                <a target="_blank" href="http://localhost:3000/">
                  <i className="fa fa-linkedin socialMedia"></i>
                </a>
              </div>
              <div className="col-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC2de2IQ047UQPLJ7czFuvsg"
                >
                  <i className="fa fa-youtube socialMedia"></i>
                </a>
              </div>
              <div className="col-2">
                <a target="_blank" href="http://localhost:3000/">
                  <i className="fa fa-telegram  socialMedia"></i>
                </a>
              </div>
            </div>
          </h3>
        </div>

        <div
          className="col-md-3 col-12 text-md-center pt-4"
          style={{ paddingRight: "130px" }}
        >
          <h3 className="   limoking-widget-title">our services</h3>
          <div
            className=" d-none d-sm-block"
            style={{
              width: "20px",
              height: "2px",
              margin: "15px auto 25px 50px",
              background: "#ffff",
            }}
          ></div>
          <div className="title-line-footer d-block d-sm-none "></div>

          <p style={{ color: "white" }}>Indian Taxis</p>

          <p className="ml-3">For Users </p>

          <p style={{ color: "white" }}>My Taxi Cab</p>

          <p className="ml-3">For Drivers </p>
        </div>
        <div className="col-md-3 col-12 text-left pt-4 ">
          <h3 className="   limoking-widget-title">contact</h3>
          <div className="title-line-footer "></div>
          <label htmlFor="" className="mb-3">
            <i
              className=" text-light fa fa-map-marker"
              style={{
                verticalAlign: "middle",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              {" "}
            </i>
            &nbsp;&nbsp;11/7, 1st Floor, 18th Main Rd, 5th Phase, J. P. Nagar,
            Bengaluru, Karnataka 560078
          </label>
          <label htmlFor="" className="mb-3">
            <i
              className="fa fa-phone"
              style={{
                verticalAlign: "middle",
                color: "#fff",
                fontSize: "20px",
              }}
            ></i>
            &nbsp; +91&nbsp;8068464799
          </label>
          <br />
          {/* <label htmlFor="" className="mb-4">
            <i
              className="limoking-icon fa fa-mobile"
              style={{
                verticalAlign: "middle",
                color: "#fff",
                fontSize: "25px",
              }}
            ></i>
            &nbsp; (+91) 343954395
          </label> */}

          <label htmlFor="" className="mb-4">
            <i
              className="limoking-icon fa fa-envelope-o"
              style={{
                // verticalAlign: "middle",
                color: "#fff",
                fontSize: "16px",
              }}
            ></i>
            &nbsp; info@rstbooking.com
          </label>
        </div>
      </div>

      <div
        className="text-center"
        style={{
          fontSize: "15px",
          background: "#0e0e0e",
          padding: "15px 0",
        }}
      >
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;
