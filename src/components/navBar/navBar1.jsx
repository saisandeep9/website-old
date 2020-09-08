import React from "react";
// import { NavLink, Link } from "react-router-dom";

const NavBar1 = () => {
  return (
    <div className="d-none d-md-block ">
      <nav className="navbar  navbar-expand-lg nav-bar1 justify-content-center  ">
        <ul className="  navbar-nav  ">
          <li className="nav-item  ">
            <i className="fa fa-phone " style={{ fontSize: "20px" }}></i>
            &nbsp;&nbsp;
            <a className="text-white" href="tel:5554280940">
              +91&nbsp;8068464799
            </a>
          </li>
          &nbsp; &nbsp;
          <li className="nav-item  ">
            {/* <i className="fa fa-phone " style={{ fontSize: "20px" }}></i> */}{" "}
            <img
              src="images/whatsapp.png"
              alt="whats App"
              style={{ width: "30px", height: "30px" }}
            />{" "}
            &nbsp;&nbsp;
            <a
              className="text-white"
              href="https://api.whatsapp.com/send?phone=918179600071
      &text=hello from Rst booking"
              target="_blank"
            >
              +91&nbsp;6364708090
            </a>
          </li>
          &nbsp; &nbsp; &nbsp;
          <li className="nav-item ">
            <i
              className="fa fa-envelope-open "
              style={{ fontSize: "20px" }}
            ></i>{" "}
            &nbsp; &nbsp;
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
