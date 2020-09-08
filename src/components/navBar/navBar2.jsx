import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { Navbar, Nav, Icon, Dropdown } from "rsuite";
import NavBar1 from "./navBar1";
import {
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";

const NavBar2 = (props) => {
  // super(props);
  // this.state = { isOpen: false };
  const preventRefresh = (e) => {
    console.log("nav bar");
    e.preventDefault();
  };

  return (
    <div className=" fixed-top">
      <NavBar1 />
      <Navbar expand="lg" className="nav-bar2 pt-0 pb-0 p-0 ">
        <Navbar.Brand href="#home" className=" ml-md-3 ">
          <img
            src="images/rstlog.png"
            alt="rstlog.png"
            className="navbar-brand pt-0 pb-0"
            style={{ width: "60x", height: "70px" }}
          />
          <label
            htmlFor="label"
            className="navbar-brand text-ligh nav-brand-font "
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
                />{" "}
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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-md-4">
            <Nav.Link>
              <NavLink exact activeClassName="active" to={"/"}>
                {" "}
                <i className="fa nav-items ">Home </i>
              </NavLink>
            </Nav.Link>

            <NavDropdown title=" About Us" id="basic-nav-dropdown">
              {/* <Dropdown.Item>
                <Nav.Link href="#link">Our</Nav.Link>{" "}
              </Dropdown.Item> */}
              <Dropdown.Item>
                <NavLink exact activeClassName="active" to={"/companyprofile"}>
                  <i className="fa nav-items "> Company profile </i>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item href="/ourvision">
                Our Vision & Mission
              </Dropdown.Item>
            </NavDropdown>

            <NavDropdown title=" Our Product" id="basic-nav-dropdown">
              <Dropdown.Item href="/mytaxicab">My Taxi Cab</Dropdown.Item>
              <Dropdown.Item href="/indiantaxis">Indian Taxis</Dropdown.Item>
            </NavDropdown>

            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>

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
};
export default NavBar2;
