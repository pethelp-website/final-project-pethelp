import React from 'react';
import { Button, Card, Row, Container, Col } from 'react-bootstrap';
import adoptPhoto from "../../../images/adoptImage.jpg";
import reportPhoto from "../../../images/reportImg.jpg";
import findPhoto from "../../../images/lostImg.jpg";


const MainHome = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }} className="mb-4">
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
          <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img variant="top" src={reportPhoto} />
            <Card.Body>
              <Card.Title>Find your lost pet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Click here</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img variant="top" src={adoptPhoto} />
            <Card.Body>
              <Card.Title>Adopt a pet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Click here</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>

  )
}


export default MainHome;
