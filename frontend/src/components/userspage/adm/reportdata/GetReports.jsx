import {React, useState, useEffect} from 'react';
import { ListGroup, Card, Col, Button, Row, Container } from 'react-bootstrap';
import image from "../../../../images/1661074037273.jpg";
import "./GetReports.scss";



const GetReports = () => {

   const [Data, setData] = useState([]);

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
        setData(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!Data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1 className="mt-5 heading-secondary title" id="title">All reports</h1>
      <Container className="row">
        {Data.map((value, index) => {
          return (
            <Row>
              <Col md={3}>
                <Card className="mt-5 mb-2" id="card">
                  <Card.Img variant="top" src={image} />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item key={index}><strong>Contact name:</strong> {value.username}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Shelter name:</strong> {value.sheltername}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Pet color:</strong> {value.color}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Pet type:</strong> {value.type}</ListGroup.Item>
                    <ListGroup.Item key={index}><strong>Race:</strong> {value.race}</ListGroup.Item>
                  </ListGroup>
                  <Button className="card-button">Delete</Button>
                </Card>
              </Col>
            </Row >
          )
        })}
      </Container>
    </div>
  )
}

export default GetReports;
