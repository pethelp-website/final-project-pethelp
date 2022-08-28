import { React, useState, useEffect } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import "./SearchBar.scss";



const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        fetch(
          "http://localhost:4000/pet_report/type/:pet_reportType", {
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
            setReportData(data);
            console.log(data)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
              
    return (
        <div>
            <h1 className="heading-secondary">Search lost pets</h1>
            <Container>
                <Col lg={{
                    span: 6
                }} className="searchbar">
                    <Row>
                        <Form className="d-flex mt-5 mb-2">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                results={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Button className="button btn">Search</Button>
                        </Form>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default SearchBar
