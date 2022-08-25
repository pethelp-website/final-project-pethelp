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
      <h1 className="mt-5 heading-secondary" id="title">My reports</h1>
      <Container>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <Col md={3}>
                <Card style={{ width: '25rem' }} className="mt-5 mb-2">
                  <Card.Img variant="top" src={image} />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Shelter Name: </ListGroup.Item>
                    <ListGroup.Item >Pet Color: </ListGroup.Item>
                    <ListGroup.Item>Pet Type: </ListGroup.Item>
                    <ListGroup.Item >Race: </ListGroup.Item>
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



