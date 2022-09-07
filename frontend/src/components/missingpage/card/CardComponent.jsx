import { React, useState, useEffect } from 'react';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';
import './CardComponent.scss';

const SearchBar = () => {
  const [reportData, setreportData] = useState([]);
  const [search, setSearch] = useState("");

  const URL = `${process.env.REACT_APP_BACKEND_ROOT_URL}/pet_report`;
    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setreportData(data);
    };

    const searcher = (e) => {
        setSearch(e.target.value);
    };

    let results = [];
    if (!search) {
        results = reportData;
    } else {
        results = reportData.filter(
            (data) =>
                data.type.toLowerCase().includes(search.toLocaleLowerCase()) ||
                data.color.toLowerCase().includes(search.toLocaleLowerCase()) ||
                data.race.toLowerCase().includes(search.toLocaleLowerCase()) ||
                data.sheltername
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase()),
        );
    }

    useEffect(() => {
        showData();
    }, []);

    return (
        <div>
            <input
                value={search}
                onChange={searcher}
                type="text"
                placeholder="Search"
                className="searchbar"
            ></input>
            <Container className="container">
                <Row>
                    {results.length === 0 && <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <h3 className="mt-5">No data found.</h3>
                    </Col>}
                    {reportData && results.map((value, index) => {
                        return (
                            <Col key={index} md={3} xs={12}>
                                <Card style={{ width: '25rem' }} className="mb-3" id="card">
                                    <Card.Img variant="top"className="image"
                                     src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${value.image}`}
                                    />
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item><strong>Location:</strong> {value.sheltername}</ListGroup.Item>
                                        <ListGroup.Item><strong>Pet color:</strong> {value.color}</ListGroup.Item>
                                        <ListGroup.Item><strong>Pet type:</strong> {value.type}</ListGroup.Item>
                                        <ListGroup.Item><strong>Phone Number:</strong> {value.race}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                       )
                    })}
                </Row >

            </Container>
        </div>
    );
};

export default SearchBar;
