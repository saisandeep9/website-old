import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import { Navbar, Nav, Icon, Dropdown } from "rsuite";
import NavBar1 from "./navBar1";
import "./navBar.css";

import {
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";

// import {
//   // Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

class NavBar2 extends Component {
  // state = {};

  preventRefresh = (e) => {
    console.log("nav bar");
    e.preventDefault();
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    console.log(this.state.isOpen);
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    // console.log("props", this.props.location.pathname);
    // console.log("props", window.location);
    // console.log("props", this.props.history);
    // var p = this.props.location.pathname;

    // const p1 = "/companyprofile";
    // const p2 = "/ourvision";
    // console.log("pp", p, p1);
    // const p3 = this.props.location.pathname;

    // loction.pathname
    console.log(this.state.isOpen);
    return (
      <div className=" fixed-top">
        <NavBar1 />
        <Navbar expand="lg" className="nav-bar2 pt-0 pb-0 p-0 ">
          <Navbar.Brand className=" ml-md-3 ">
            <img
              src="images/rstlog.png"
              alt="rstlog"
              className="navbar-brand pt-0 pb-0"
              style={{ width: "60x", height: "60px" }}
            />
            <label
              htmlFor=" RSTBooking"
              className="navbar-brand  nav-brand-font "
              //     style={{ fontSize: "30px", fontWeight: 600 }}
            >
              RST Booking <br />
              <div className="d-md-none">
                <small className="text-dark font-weight-bold ">
                  <i className="fa fa-phone " style={{ fontSize: "20px" }}></i>{" "}
                  &nbsp;&nbsp;
                  <Link to={"tel:5554280940"} id="RouterNavLink">
                    +91&nbsp;8068464799
                  </Link>
                  <br />
                  <img
                    src="images/whatsapp.png"
                    alt="whats App"
                    style={{ width: "30px", height: "20px" }}
                  />
                  &nbsp;
                  <Link
                    to={`"https://api.whatsapp.com/send?phone=916364708090
      &text=hello from Rst booking"`}
                    target="_blank"
                  >
                    +91&nbsp;6364708090
                  </Link>
                </small>
              </div>
            </label>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-md-4">
              <Nav.Link
                as={NavLink}
                exact
                // activeClassName="active"
                to={"/"}
                className="nav-items "
              >
                {/* <NavLink
                  exact
                  activeClassName="active"
                  to={"/"}
                  className="nav-items "
                > */}{" "}
                <i className="fa  ">Home </i>
              </Nav.Link>

              <NavDropdown
                onMouseEnter={this.handleOpen}
                onMouseLeave={this.handleClose}
                open={this.state.isOpen}
                // noCaret
                Open={this.state.dropdownOpen1}
                toggle={this.toggle1}
                renderMenuOnMount={true}
                className=" nav-items"
                title={
                  <i activeclassname="active" className="fa nav-items">
                    About Us
                  </i>
                }
                id="basic-nav"
              >
                {/* <Dropdown.Item>
                <Nav.Link href="#link">Our</Nav.Link>{" "}
              </Dropdown.Item> */}
                <Dropdown.Item>
                  <NavLink
                    exact
                    activeClassName="active"
                    to={"/companyprofile"}
                    className="nav-items"
                  >
                    <i className="fa  "> Company profile </i>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    exact
                    activeClassName="active"
                    to={"/ourvision"}
                    className="nav-items"
                  >
                    <i className="fa  ">Our Vision & Mission</i>
                  </NavLink>
                </Dropdown.Item>
              </NavDropdown>

              <NavDropdown
                className=" nav-items"
                title={<i className="fa nav-items ">Our Product</i>}
                id="basic-nav-dropdown"
              >
                <Dropdown.Item>
                  <NavLink
                    exact
                    activeClassName="active"
                    to={"/mytaxicab"}
                    className="nav-items"
                  >
                    <i className="fa "> My Taxi Cab</i>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    exact
                    activeClassName="active"
                    to={"/indiantaxis"}
                    className="nav-items"
                  >
                    <i className="fa  "> Indian Taxis</i>
                  </NavLink>
                </Dropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={NavLink}
                exact
                activeClassName="active"
                to={"/testimonials"}
                className="nav-items"
              >
                {/* <NavLink> */}
                <i className="fa  "> Testimonials</i>
                {/* </NavLink> */}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                exact
                activeClassName="active"
                to={"/contactus"}
                className="nav-items"
              >
                {/* <NavLink> */}
                <i className="fa  ">&nbsp; Contact Us</i>
                {/* </NavLink> */}
              </Nav.Link>

              {/* <Dropdown
                className="d-inline-block"
                onMouseOver={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      // <div>
      //   <nav className="navbar navbar-expand-lg nav-bar2 pt-0 pb-0 ">
      //     {/* <img
      //       src="images/rstlog.png"
      //       alt="rstlog.png"
      //       className="navbar-brand pt-0 pb-0"
      //       style={{ width: "60x", height: "70px" }}
      //     />
      //     <label
      //       htmlFor="label"
      //       className="navbar-brand text-ligh nav-brand-font "
      //       //     style={{ fontSize: "30px", fontWeight: 600 }}
      //     >
      //       RST Booking private limited <br />
      //       <div className="d-md-none">
      //         <small className="text-dark ">
      //           <i className="fa fa-phone " style={{ fontSize: "20px" }}></i>
      //           &nbsp;+91&nbsp;23329438334
      //           <br />
      //           <i
      //             className="fa fa-envelope-open "
      //             style={{ fontSize: "20px" }}
      //           ></i>
      //           &nbsp; info@indiantaxis.com
      //         </small>
      //       </div>
      //     </label> */}
      //     {/* <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarsupcantent"
      //       aria-controls="navbarsupcantent"
      //     ></button> */}

      //     <button
      //       class="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarSupportedContent"
      //       aria-controls="navbarSupportedContent"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="" id="navbarSupportedContent">
      //       {/* <div className="collapse navbar-collapse justify-content-end"> */}
      //       <ul className="navbar-nav  ">
      //         <li className="nav-item nav-items">
      //           <NavLink to={""} className="nav-link">
      //             <i className="fa "> Home</i>
      //           </NavLink>
      //         </li>
      //         <li className="nav-item nav-items">
      //           <NavLink to={""} className="nav-link">
      //             <i className="fa "> Home</i>
      //           </NavLink>
      //         </li>
      //         <li className="nav-item nav-items">
      //           <NavLink to={""} className="nav-link">
      //             <i className="fa "> Home</i>
      //           </NavLink>
      //         </li>
      //         <li className="nav-item nav-items">
      //           <NavLink to={""} className="nav-link">
      //             <i className="fa "> Home</i>
      //           </NavLink>
      //         </li>
      //       </ul>
      //     </div>
      //     {/* </div> */}
      //   </nav>
      // </div>
    );
  }
}

export default NavBar2;
