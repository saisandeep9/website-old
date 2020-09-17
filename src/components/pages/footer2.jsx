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
    <footer className="footer overflow-hidden " style={styel}>
      <div className=" justify-content-center row pt-md-3 m-md-0 m-1 ">
        <div className="col-md-2 col-12 text-left m-md-3 ">
          <h3 className="   limoking-widget-title">About</h3>
          <div className="title-line-footer"></div>

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

        <div className="col-md-2 col-12 text-left m-md-3">
          <h3 className="   limoking-widget-title">contact</h3>
          <div className="title-line-footer"></div>
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
          <label htmlFor="" className="mb-4">
            <i
              className="limoking-icon fa fa-mobile"
              style={{
                verticalAlign: "middle",
                color: "#fff",
                fontSize: "25px",
              }}
            ></i>
            &nbsp; (+91) 343954395
          </label>
          <br />
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

        <div className="col-md-2 col-12 text-left m-md-3 ">
          <h3 className="   limoking-widget-title">our services</h3>
          <div className="title-line-footer"></div>

          <div className="float-right" style={{ marginRight: "30px" }}>
            <Icon
              className="icon"
              style={{
                height: "40px",
                width: "40px",
              }}
              icon={googlePlay}
            />
          </div>
          <p style={{ color: "white" }}>Indian Taxis</p>

          <p className="ml-1">For Users </p>

          {/* <img
              src="images/playstore.png"
              alt=""
              style={{ height: "40px", width: "60px" }}
            /> */}

          <hr />
          <div className="float-right" style={{ marginRight: "30px" }}>
            <Icon
              className="icon"
              style={{
                height: "40px",
                width: "40px",
              }}
              icon={googlePlay}
            />
          </div>
          <p style={{ color: "white" }}>My Taxi Cab</p>

          <p className="ml-1">For Drivers </p>

          {/* <i class="fa fa-google "> </i> */}
          {/* <i class="fa fa-google-play h3"></i> */}
        </div>
        <div className="col-md-2  col-12 text-left m-md-3">
          <h3 className=" text-light limoking-widget-title">connect with us</h3>
          <div className="title-line-footer"></div>

          <h1 className="text-secondary">
            <i className="fa fa-facebook-square m-3 socialMedia"></i>{" "}
            <i className="fa fa-instagram m-3 socialMedia"></i>
            <i className="fa fa-twitter m-3 socialMedia"></i>
            <br />
            <i className="fa fa-linkedin m-3 socialMedia"></i>
            <i className="fa fa-youtube m-3 socialMedia"></i>
            <i className="fa fa-telegram m-3 socialMedia"></i>
          </h1>
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
