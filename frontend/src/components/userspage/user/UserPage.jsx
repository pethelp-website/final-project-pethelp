import { React} from 'react';
import { ListGroup, Card, Col, Button, Row, Container } from 'react-bootstrap';
import "./UserPage.scss";
import image from "../../../images/profile.jpg";


const UserPage = () => {
  return (
    <div>
       <h1 className="mt-5 mb-2 heading-secondary">My reports</h1>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Row>
          <Col lg={{
            span: 3
          }}>
            <Card style={{ width: '25rem' }} className="card card-comp">
              <Card.Img variant="top" src={image} className="image"/>
              <ListGroup className="list-group-flush">
                <ListGroup.Item ><strong>Shelter name:</strong> </ListGroup.Item>
                <ListGroup.Item ><strong>Pet color:</strong> </ListGroup.Item>
                <ListGroup.Item ><strong>Pet type:</strong> </ListGroup.Item>
                <ListGroup.Item ><strong>Race:</strong> </ListGroup.Item>
              </ListGroup>
              <Button className="card-button">Delete</Button>
            </Card>
          </Col>
        </Row >
      </Container>
    </div >
  )
};

export default UserPage;



