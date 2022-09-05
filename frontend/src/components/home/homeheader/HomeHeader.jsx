import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import loginService from "../../../services/loginService";
import "./HomeHeader.scss";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function HomeHeader() {
  let navigate = useNavigate();


  //logout function
  const endLoginSession = () => {
    loginService.logout({
      password: user.password,
      email: user.email
    })
      .then(data => {
        navigate("/login", { replace: true });
        console.log(data);
      })
  };


  //function from services checks if user is logged in
  const isLoggedIn = loginService.isLoggedIn();

  
  //import function from services that checks if the user is admin
  const user = loginService.getUser();

  return (
    <div>
      <Navbar variant="dark" className="navbar sticky-top" expand="lg">
        <Navbar.Brand as={Link} to={"/"} className="navbar__brand">
          <img
            id="logo"
            alt=""
            src={logo}
            className="d-inline-block align-top navbar__logo"
          />{' '}
          pet help
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav id="nav-links" >
            {isLoggedIn && <Nav.Link as={Link} to={"/report-page"}>Found a pet</Nav.Link>}
            <Nav.Link as={Link} to={"/missing-page"}>Lost a pet</Nav.Link>
            {!isLoggedIn && <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>}
            <Nav.Link as={Link} to={"/user-page"}>My account</Nav.Link> {/*user.IsAdmin access this data in user object*/}
            <Nav.Link as={Link} to={"/adm-page"}>Admin</Nav.Link>
            {!isLoggedIn && <Nav.Link className='link' as={Link} to={"/sign-up"}>Signup</Nav.Link>}
            {isLoggedIn && <Nav.Link onClick={() => endLoginSession()}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default HomeHeader;