import React from 'react';
import { Button, Card, Row, Container, Col, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import reportPhoto from "../../../images/reportImg.jpg";
import findPet from "../../../images/FindPet.jpg";
import "./MainHome.scss";
import loginService from "../../../services/loginService";


const MainHome = () => {
  const isLoggedIn = loginService.isLoggedIn();

  return (
    <div>
      <Container className="container" >
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col md={4}>
            {isLoggedIn && <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={reportPhoto} />
              <Card.Body >
                <Card.Title>Report a found pet</Card.Title>
                <Card.Text>
                  If you have found a stray pet, you can submit your report to our database,
                  and help them reunite with their family.
                </Card.Text>
                <Button variant="primary" as={Link} to={"/report-page"}>Click here</Button>
              </Card.Body>
            </Card>}
          </Col>
        </Row>
      </Container>

      <Carousel className="carousel" variant="dark">
        <Carousel.Item className="item" md={4}>
          <Carousel.Caption className="carousel-caption">
            <h2 className="h2-text" id="subtitle">Browse lost pets from our network or inform us about a found one.</h2>
            <p>Lost a pet and are looking to be reunited with them? See our list of lost animals
              found, and where they are at now</p>
            <Button variant="primary" className='main-button' as={Link} to={"/missing-page"}>Click here</Button>
          </Carousel.Caption>
          <img
            md={4}
            className="d-block w-100 "
            src={reportPhoto}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100"
            src={findPet}
            alt="Second slide"

          />
          <Carousel.Caption className="carousel-caption">
            <h2 className="h2-text">Report a found pet</h2>
            <p>If you have found a stray pet, you can submit your report to our database,
              and help them reunite with their family.</p>
            <Button variant="primary" as={Link} to={"/report-page"}>Click here</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default MainHome;
