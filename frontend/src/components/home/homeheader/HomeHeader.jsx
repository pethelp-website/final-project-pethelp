import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import "./HomeHeader.scss";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";


function HomeHeader() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              <img
                alt=""
                src={logo}
                className="d-inline-block align-top"
              />{' '}
              PetHelp
            </Navbar.Brand>
            <Nav id="nav-links" className="ml-auto">
              <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>
              <Nav.Link as={Link} to={"/sign-up"}>Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div >
  );
}

export default HomeHeader;