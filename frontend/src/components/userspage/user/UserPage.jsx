import { React, useState, useEffect } from 'react';
import { ListGroup, Card, Col, Button, Row, Container } from 'react-bootstrap';
import "./UserPage.scss";
import image from "../../../images/profile.jpg";


const UserPage = () => {
  const [reportData, setreportData] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:4000/pet_report/:pet_reportId", { //Get all forms by id
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
      .then((res) => res.json())
      .then((data) => { setreportData(data) })
      .catch((error) => console.log(error))

  }, []);

  if (!reportData) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1 className="mt-5 heading-secondary title" >My reports</h1>
      <Container>
            <Row className="row">
              <Col md={3}>
                <Card  className="mt-5 mb-2 card" >
                  <Card.Img variant="top" src={image} />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Shelter name:</strong></ListGroup.Item>
                    <ListGroup.Item ><strong>Pet color:</strong></ListGroup.Item>
                    <ListGroup.Item><strong>Pet type:</strong></ListGroup.Item>
                    <ListGroup.Item ><strong>Pet race:</strong></ListGroup.Item>
                  </ListGroup>
                  <Button className="card-button">Delete</Button>
                </Card>
              </Col>
            </Row >
      </Container>
    </div>
  )
};

export default UserPage;



