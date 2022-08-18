import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import lostImg from "../../../images/lostImg.jpg";
import findPet from "../../../images/REPORT.jpg";
import "./MainHome.scss";
import loginService from "../../../services/loginService";


const MainHome = () => {
  const isLoggedIn = loginService.isLoggedIn();

  return (
    <div>
      <Carousel className="carousel" variant="dark">
      <Carousel.Item className="item" md={4}>
          <Carousel.Caption className="carousel-caption">
            <h2 className="h2-text" id="subtitle">Browse lost pets or report about a found one.</h2>
            <p>Lost a pet and are looking to be reunited with them? See our list of lost animals
              found, and where they are at now</p>
            <Button variant="primary" className='main-button' as={Link} to={"/missing-page"}>Click here</Button>
          </Carousel.Caption>
          <img
            md={4}
            className="d-block w-100 "
            src={lostImg}
            alt="First slide"
          />
        </Carousel.Item>
       
        {isLoggedIn &&<Carousel.Item className="item">
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
        </Carousel.Item> }
      </Carousel>
    </div>
  )
};

export default MainHome;
