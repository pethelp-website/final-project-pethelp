import React from 'react';
import { Button, Card, Row, Container, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import adoptPhoto from "../../../images/adoptImage.jpg";
import reportPhoto from "../../../images/reportImg.jpg";
import "./MainHome.scss";
import '../../../style/style.scss';


const MainHome = () => {
  //split the h1 title 
  
  return (
    <div >
      <div className="text-content">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1 className="mt-5">Find your lost pet</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h2 className="mt-1" id="subtitle">Browse lost pets from our network or inform us about a found one.</h2>
      </div>
      </div>
      <Container>
        <Row className="row" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="col-1-of-2 first-col">
            any content/column of 2- can be adjusted to more columns
          </div>
          <div className="col-1-of-2">
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={reportPhoto} />
              <Card.Body >
                <Card.Title>Report a found pet</Card.Title>
                <Card.Text>
                If you have found a stray pet, you can submit your report to our database, 
                and help them reunite with their family.
                </Card.Text>
                <Button variant="primary" className='button' as={Link} to={"/report-page"}>Click here</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={adoptPhoto} />
              <Card.Body>
                <Card.Title>Find your lost pet</Card.Title>
                <Card.Text>
                Lost a pet and are looking to be reunited with them? See our list of lost animals 
                found, and where they are at now.
                </Card.Text>
                <Button variant="primary" className='main-button button' as={Link} to={"/missing-page"}>Click here</Button>
              </Card.Body>
            </Card>
          </Col>
          </div>
        </Row>
      </Container>
    </div>


  )
}


export default MainHome;
