import React, { Component } from "react";
import NavBar1 from "./navBar1";
// import { Nav, Navbar } from "react-bootstrap";
import "./navBar.css";
import { NavLink, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";

class NavBar2 extends Component {
  state = {};
  render() {
    return (
      <div className=" fixed-top">
        <NavBar1 />
        <Navbar expand="md" className="navbar nav-bar2 ">
          <div className="navbar-brand">
            <img
              src="images/rstlog.png"
              alt="rstlog"
              className=""
              style={{ width: "50x", height: "50px" }}
            />
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <ul className="navbar-nav ">
              <li className=" ">
                <NavLink exact to={"/"} className=" nav-items nav-link">
                  Home
                </NavLink>
              </li>
              <li className=" ">
                <NavLink exact to={"/about"} className="nav-items  nav-link">
                  About
                </NavLink>
              </li>
              <li className=" ">
                <NavLink exact to={"/careers"} className="nav-items  nav-link">
                  Careers
                </NavLink>
              </li>

              <li
                className="nav-link nav-items nav-menu-item "
                style={{ cursor: "pointer" }}
              >
                {/* <NavLink
                  exact
                  to={"/ourservices"}
                  className=" nav-link nav-items nav-menu-item "
                > */}
                Our Services
                <Submenu />
                {/* </NavLink> */}
              </li>
              <li className=" ">
                <NavLink
                  exact
                  to={"/contactus"}
                  className=" nav-link nav-items  "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar2;

class Submenu extends React.Component {
  render() {
    return (
      <ul className=" nav__submenu">
        <li className=" nav-items ">
          <NavLink
            exact
            to={"/indiantaxis"}
            className="nav__submenu-item nav-link "
          >
            Indian Taxis
          </NavLink>
        </li>
        <li className=" nav-items">
          <NavLink
            exact
            to={"/mytaxicab"}
            className="nav__submenu-item nav-link "
          >
            My Taxi Cab
          </NavLink>
        </li>
      </ul>
    );
  }
}
