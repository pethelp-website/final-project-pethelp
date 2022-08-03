import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./HomeHeader.scss";
import { Link } from "react-router-dom";


function HomeHeader() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>PetHelp</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>
            <Nav.Link as={Link} to={"/sign-up"}>Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div >
  );
}

export default HomeHeader;