import React from "react";
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
    minHeight: "300px",
  };
  return (
    <footer className="text-center" style={styel}>
      <div className="row" style={{ height: "260px" }}>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h4 className="mt-3 text-light">Social Media</h4>
          <hr />
          <h2 className="text-secondary">
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

      <div
        style={{
          fontSize: "15px",
          background: "#0e0e0e",
          padding: "22px 0",
        }}
      >
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;