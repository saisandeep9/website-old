import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GoogleMaps from "../common/googleMaps";

function Copyright() {
  return (
    <Typography variant="body" color="textSecondary " align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer className="text-center bg-dark" style={{ marginTop: "0px" }}>
      <div className="row" style={{ height: "310px" }}>
        <div className="col-md-4">
          <GoogleMaps />
        </div>

        <div className="col-md-4 col-12 bg-dark  text-secondary ">
          <label className="mt-2 text-light  h5 ">Contact us</label>

          <div className="text-left ml-4 ">
            <label className="text-light ">Indian Taxis</label>
            <ul className="list-unstyled ">
              <li>
                <i className="fa fa-envelope-open contact">
                  &nbsp;&nbsp;
                  <a
                    className="text-secondary"
                    style={{ textDecoration: "none" }}
                    href="mailto:info@indiantaxis.com"
                  >
                    info@indiantaxis.com
                  </a>
                </i>
              </li>
              <li>
                <i className="fa fa-phone contact">
                  <a
                    className="text-secondary"
                    style={{ textDecoration: "none" }}
                    href="tel:+916364722299"
                  >
                    &nbsp; +91&nbsp;6364722299
                  </a>
                </i>
              </li>
            </ul>{" "}
            <hr />
            <lable className="text-light ">My Taxicab</lable>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-envelope-open contact">
                  {" "}
                  &nbsp;&nbsp;
                  <a
                    className="text-secondary"
                    style={{ textDecoration: "none" }}
                    href="mailto:info@mytaxicab.in"
                  >
                    info@mytaxicab.in
                  </a>
                </i>
              </li>
              <li>
                <i className="fa fa-phone contact">
                  <a
                    className="text-secondary"
                    style={{ textDecoration: "none" }}
                    href="tel:+918068464799"
                  >
                    &nbsp;&nbsp; +91&nbsp;8068464799
                  </a>
                </i>
              </li>
            </ul>{" "}
            <hr />
            <i className="fa fa-map-marker contact ">
              {" "}
              &nbsp;&nbsp; Bommanhalli,Bangalore 56006
            </i>
            <br />
            <Copyright />
          </div>
        </div>

        <div className="col-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
