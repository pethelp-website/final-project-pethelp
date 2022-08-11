import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import "./HomeHeader.scss";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";


function HomeHeader() {

  return (
    <div>
      <Navbar variant="dark" className="navbar sticky-top" expand="lg">
          <Navbar.Brand as={Link} to={"/"}>
            <img
              id="logo"
              alt=""
              src={logo}
              className="d-inline-block align-top"
            />{' '}
            PetHelp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav id="nav-links">
              <Nav.Link as={Link} to={"/report-page"}>Found a pet</Nav.Link>
              <Nav.Link as={Link} to={"/missing-page"}>Lost a pet</Nav.Link>
              <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>
              <Nav.Link as={Link} to={"/sign-up"}>Signup</Nav.Link>
              <Button >Logout</Button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>



    </div >
  );
}

export default HomeHeader;