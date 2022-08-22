import React from 'react';
import { ListGroup, Card, Col, Button, Row, Container } from 'react-bootstrap';
import image from "../../images/profile.jpg";
import "./CardComponent.scss";


const CardComponent = () => {
    return (
        <div>
            <Container className="justify-content-center d-flex">
                <Row>
                    <Col  className="col-4">
                        <Card style={{ width: '25rem' }} className="mt-5">
                            <Card.Img variant="top" src={image} />
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Contact Name:</ListGroup.Item>
                                <ListGroup.Item>Pet Color:</ListGroup.Item>
                                <ListGroup.Item>Pet Type: </ListGroup.Item>
                                <ListGroup.Item>Race:</ListGroup.Item>
                            </ListGroup>
                            <Button className="card-button">Delete</Button>
                        </Card>
                    </Col>
                </Row >
            </Container>
        </div>
    );
}

export default CardComponent;


