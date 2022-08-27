import { React, useState, useEffect } from 'react';
import { ListGroup, Card, Col, Row, Container } from 'react-bootstrap';
import image from "../../../images/1661074037273.jpg";
import "./CardComponent.scss";

const CardComponent = () => {
  const [reportData, setreportData] = useState([]);

  //Gets all forms from database
  useEffect(() => {
    fetch(
      "http://localhost:4000/pet_report", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setreportData(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!reportData) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1 className="mt-5 mb-2 heading-secondary">Search lost pets</h1>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Row>
          {reportData.map((value, index) => {
            return (
              <Col lg={{
                span: 3
              }}>
                <Card style={{ width: '25rem' }} className="card">
                  <Card.Img variant="top" src={image} />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item key={index}><strong>Shelter name:</strong> {value.sheltername}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Pet color:</strong> {value.color}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Pet type:</strong> {value.type}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Race:</strong> {value.race}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            )
          })}
        </Row >
      </Container>
    </div >
  )
};

export default CardComponent;