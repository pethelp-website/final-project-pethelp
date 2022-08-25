import { React, useState, useEffect } from 'react';
import { ListGroup, Card, Col, Row, Container } from 'react-bootstrap';
import image from "../../images/profile.jpg";
import "./MissingPage.scss";

const MissingPage = () => {
  const [reportData, setreportData] = useState(null);

  //Gets all forms from database
  useEffect(() => {
    fetch(
      "http://localhost:4000//pet_report", { 
        method: "GET",
      } 
    )
      .then((res) => res.json())
      .then((data) => {
        setreportData(data);
      });
  }, []);

  if (!reportData) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1 className="mt-5 heading-secondary" id="title">Search lost pets</h1>
      <Container>
        {reportData.values.map((value, index) => {
          return (
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <Col md={3}>
                <Card style={{ width: '25rem' }} className="mt-5 mb-2">
                  <Card.Img variant="top" src={image} />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item key={index}>Contact Name: {value.userName}</ListGroup.Item>
                    <ListGroup.Item key={index}>Shelter Name: {value.shelterName}</ListGroup.Item>
                    <ListGroup.Item key={index}>Pet Color: {value.color}</ListGroup.Item>
                    <ListGroup.Item key={index}>Pet Type: {value.type}</ListGroup.Item>
                    <ListGroup.Item key={index}>Race: {value.race}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row >
          )
        })}
      </Container>
    </div>
  )
};

export default MissingPage;
