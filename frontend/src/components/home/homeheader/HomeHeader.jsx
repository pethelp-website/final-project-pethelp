import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./HomeHeader.scss";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function HomeHeader() {
  //Logout function to end the login session in backend.
  let navigate = useNavigate();

  const logout = () => {
    fetch("https://run.mocky.io/v3/e6c1e99e-557a-49c7-bc7c-dd44c1c66531", {
      method: "POST",
    })
      .then(response => {
        console.log(response);
      }).then(data => {
        localStorage.removeItem('token');
        navigate("/login", { replace: true });
        console.log(data);
      }) 
      .catch((error) => {
        console.log(error)
    });
  }

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
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default HomeHeader;