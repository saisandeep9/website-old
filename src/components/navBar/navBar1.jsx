import React from "react";
// import { NavLink, Link } from "react-router-dom";
import "./navBar.css";

const NavBar1 = () => {
  return (
    <div className="d-none d-md-block  ">
      <nav className="navbar  navbar-expand-md nav-bar1 justify-content-center  ">
        <ul className="  navbar-nav  ">
          {/* <li className="nav-item  ">
            <i className="fa fa-phone " style={{ fontSize: "18px" }}></i>
            &nbsp;&nbsp;
            <a className="text-white" href="tel:+918068464799">
              +91&nbsp;8068464799
            </a>
          </li> */}
          &nbsp;&nbsp;&nbsp;
          <li className="nav-item  ">
            {/* <i className="fa fa-phone " style={{ fontSize: "20px" }}></i> */}{" "}
            {/* <img
              src="images/whatsapp.png"
              alt="whats App"
              style={{ width: "25px", height: "25px" }}
            />{" "} */}
            <i className="fa fa-whatsapp " style={{ fontSize: "18px" }}></i>
            &nbsp;&nbsp;
            <a
              className="text-white"
              href="https://api.whatsapp.com/send?phone=918179600071
      &text=hello from Rst booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91&nbsp;6364708090
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;
          <li className="nav-item ">
            <i
              className="fa fa-envelope-open "
              style={{ fontSize: "17px" }}
            ></i>{" "}
            &nbsp;&nbsp;
            <a className="text-white" href="mailto:info@rstbooking.com">
              info@rstbooking.com
            </a>
          </li>
          <li>
            {/* <a
              href="tel:5558920234"
              onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
            >
              <p class="call-button">Click to Call</p>
            </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar1;
