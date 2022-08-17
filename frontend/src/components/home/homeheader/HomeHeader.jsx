import React from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';
import loginService from "../../../services/loginService";
import "./HomeHeader.scss";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

import './HomeHeader.scss';

import { useNavigate } from "react-router-dom";



function HomeHeader() {
  let navigate = useNavigate();

  //remove auth token
  const endLoginSession = () => {
    loginService.logout()
      .then(data => {
        navigate("/login", { replace: true });
        console.log(data);
      })
  };


  //function from services checks if user is logged in
  const isLoggedIn = loginService.isLoggedIn();

  return (
    <div>
      <Navbar variant="dark" className="navbar sticky-top" expand="lg">

        <Container>
          <Navbar.Brand as={Link} to={"/"} className='navbar__title'>
            <img
              id="logo"
              alt=""
              src={logo}
              className="d-inline-block align-top navbar__logo"
            />{' '}
            Pet Help
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav id="nav-links" >
              <Nav.Link as={Link} to={"/login"} classname='navbar__logIn' >Login</Nav.Link>
              <Nav.Link as={Link} to={"/sign-up"} className='navbar__signUp'>Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

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
            {!isLoggedIn && <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>}
            {!isLoggedIn && <Nav.Link as={Link} to={"/sign-up"}>Signup</Nav.Link>}
            {isLoggedIn && <Nav.Link onClick={() => endLoginSession()}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div >
  );
}

export default HomeHeader;