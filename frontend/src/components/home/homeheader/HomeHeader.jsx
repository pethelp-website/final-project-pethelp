import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./HomeHeader.scss";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import loginService from "../../../services/loginService"
import { useNavigate } from "react-router-dom";

function HomeHeader() {
  let navigate = useNavigate();

  const endLoginSession = () => {
    loginService.logout()
      .then(data => {
        navigate("/login", { replace: true });
        console.log(data);
      })
    };

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
            <Nav.Link onClick={() => endLoginSession()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default HomeHeader;