import React from 'react';
import { Button, Card, Row, Container, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import adoptPhoto from "../../../images/adoptImage.jpg";
import reportPhoto from "../../../images/reportImg.jpg";
import "./MainHome.scss";
import '../../../style/style.scss';


const MainHome = () => {

  return (


      
         

      <Container className="container">
        <Row style={{ display: 'flex', justifyContent: 'center' }}>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={reportPhoto} />
              <Card.Body >
                <Card.Title>Report a found pet</Card.Title>
                <Card.Text>
                  If you have found a stray pet, you can submit your report to our database,
                  and help them reunite with their family.
                </Card.Text>
                <Button variant="primary" className='button' as={Link} to={"/report-page"}>Click here</Button>
              </Card.Body>
            </Card>
          </Col>
          

          <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-5 mb-4">
              <Card.Img variant="top" src={adoptPhoto} />
              <Card.Body>
                <Card.Title>Find your lost pet</Card.Title>
                <Card.Text>
                  Lost a pet and are looking to be reunited with them? See our list of lost animals
                  found, and where they are at now.
                </Card.Text>
                <Button variant="primary" className='main-button button' as={Link} to={"/missing-page"}>Click here</Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          </Container>
      



  )
}


export default MainHome;
