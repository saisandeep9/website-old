import React from "react";
import "./footer.css";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
    minHeight: "345px",
  };
  return (
    <footer className="footer  " style={styel}>
      <div className="contai ">
        <div
          className=" justify-content-center row   "
          style={{ height: "295px" }}
        >
          <div className="col-md-3 text-left m-2 ">
            <h3 className="   limoking-widget-title">About</h3>
            <div className="title-line-footer"></div>

            <p className="mt-2">
              some text about the RST booking some text about the RST booking{" "}
              some text about the RST booking some text about the RST booking
            </p>
            <img
              src="images/rstlog.png"
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
          </div>
          <div className="col-md-2  text-left m-2">
            <h3 className="   limoking-widget-title">contact</h3>
            <div className="title-line-footer"></div>
            <label htmlFor="">
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
            <label htmlFor="">
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
            <label htmlFor="">
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
            <label htmlFor="">
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
          <div className="col-md-2 text-left m-2">
            <h3 className="   limoking-widget-title">our services</h3>
            <div className="title-line-footer"></div>
            <div className="media">
              <div className="media-body">
                <label htmlFor="" style={{ color: "white" }}>
                  Indian Taxis
                </label>

                <p>For Users</p>
              </div>
              <img
                src="images/playstore.png"
                alt=""
                style={{ height: "40px", width: "60px" }}
              />
            </div>

            <hr />
            <label htmlFor="">My Taxi Cab</label>
            <br />
            {/* <i class="fa fa-google-play "> </i> */}
            <img
              src="images/playstore.png"
              alt=""
              style={{ height: "40px", width: "60px" }}
            />
          </div>
          <div className="col-md-2 m-2">
            <h3 className=" text-light text-left limoking-widget-title">
              connect with us
            </h3>
            <div className="title-line-footer"></div>

            <h2 className="text-secondary text-left">
              <i className="fa fa-facebook-square m-2 socialMedia"></i>{" "}
              <i className="fa fa-instagram m-2 socialMedia"></i>
              <i className="fa fa-twitter m-2 socialMedia"></i>
              <br />
              <i className="fa fa-linkedin m-2 socialMedia"></i>
              <i className="fa fa-youtube m-2 socialMedia"></i>
              <i className="fa fa-telegram m-2 socialMedia"></i>
            </h2>
          </div>
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
