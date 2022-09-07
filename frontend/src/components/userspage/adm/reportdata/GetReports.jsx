import { React, useState, useEffect } from 'react';
import { ListGroup, Card, Col, Button, Row, Container } from 'react-bootstrap';
import "./GetReports.scss";
import deleteReport from "../../../../services/deleteReport";
import image from "../../../../images/1661074037273.jpg";



const GetReports = () => {

  const [reportData, setreportData] = useState([]);

  //Gets all forms from database
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_ROOT_URL}/pet_report`, {
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
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Row className="row">
          {reportData.map((value, index) => {
            return (
              <Col key={index} lg={{
                span: 3
              }}>
                <Card style={{ width: '25rem' }} className="card-comp">
                  <Card.Img
                    variant="top"
                    className="image"
                    src={
                      value.image
                        ? `${process.env.REACT_APP_BACKEND_ROOT_URL}/${value.image}`
                        : image
                    }
                  />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Pet type:</strong> {value.type}</ListGroup.Item>
                    <ListGroup.Item><strong>Pet color:</strong> {value.color}</ListGroup.Item>
                    <ListGroup.Item><strong>Location:</strong> {value.sheltername}</ListGroup.Item>
                    <ListGroup.Item><strong>Phone Number:</strong> {value.race}</ListGroup.Item>
                  </ListGroup>
                  <Button className="report-button" onClick={() => deleteReport(value.id)}>Delete</Button>
                </Card>
              </Col>
            )
          })}
        </Row >
      </Container>
    </div >
  )
}

export default GetReports;
