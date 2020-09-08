import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Navtest extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "130px" }}>
        {/* <div className="nav navBar navbar-expand-md"> */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav">
              <li className="">
                <NavLink to={"/"} className="fa nav-link ">
                  hom1
                </NavLink>
              </li>
              <li>home2</li>

              {/* <Navbar.Toggle>d </Navbar.Toggle> */}
              <li class="nav-item dropdown">
                hao
                <ul className="nav collapse" data-toggle="collapse">
                  <li>1</li>
                  <li>2</li>
                </ul>
              </li>
            </ul>

            {/* <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        {/* </div> */}
      </div>
    );
  }
}

export default Navtest;
