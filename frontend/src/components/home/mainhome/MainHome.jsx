import React from 'react';
import { Button, Card, Row, Container, Col } from 'react-bootstrap';
import adoptPhoto from "../../../images/adoptImage.jpg";
import reportPhoto from "../../../images/reportImg.jpg";
import "./MainHome.scss";


const MainHome = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1 className="mt-5">Find your lost pet</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h2 className="mt-1">Browse lost pets from our network {"\n"} or inform us about a found one.</h2>
      </div>
      <Container>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={reportPhoto} />
              <Card.Body >
                <Card.Title>Report a lost pet</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Click here</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={adoptPhoto} />
              <Card.Body>
                <Card.Title>Find your lost pet</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className='main-button'>Click here</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>


  )
}


export default MainHome;
