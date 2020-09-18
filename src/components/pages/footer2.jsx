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
            some text about the RST some text about the RST some text about the
            RST booking some text about the RST booking
          </p>
          <img
            src="images/rstlog.png"
            style={{ width: "50px", height: "50px", marginTop: "10px" }}
            alt=""
          />
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
          <div className="title-line-footer d-none d-sm-block d-md-none"></div>

          <h3 className>
            <div className="row  justify-content-md-center">
              <div className="col-2">
                <i className="fa fa-facebook-square socialMedia"></i>
              </div>
              <div className="col-2">
                <i className="fa fa-instagram  socialMedia"></i>
              </div>
              <div className="col-2">
                <i className="fa fa-twitter  socialMedia"></i>
              </div>
            </div>
            <div className="row mt-4 justify-content-md-center">
              <div className="col-2">
                <i className="fa fa-linkedin socialMedia"></i>
              </div>
              <div className="col-2">
                <i className="fa fa-youtube socialMedia"></i>
              </div>
              <div className="col-2">
                <i className="fa fa-telegram  socialMedia"></i>
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
          <div className="title-line-footer d-none d-sm-block d-md-none "></div>

          <p style={{ color: "white" }}>Indian Taxis</p>

          <p className="ml-3">For Users </p>

          <p style={{ color: "white" }}>My Taxi Cab</p>

          <p className="ml-3">For Drivers </p>
        </div>
        <div className="col-md-3 col-12 text-left pt-4 ">
          <h3 className="   limoking-widget-title">contact</h3>
          <div className="title-line-footer d-none d-sm-block"></div>
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
            &nbsp;&nbsp;11th A cross, Kodichikkanahalli Main Rd, Bommanahalli,
            Bengaluru, Karnataka 560068
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
            &nbsp; +91&nbsp;29232393
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
            &nbsp; indiantaxis@gmail.com
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
