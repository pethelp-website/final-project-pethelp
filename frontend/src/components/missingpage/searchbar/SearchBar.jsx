import { React, useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import "./SearchBar.scss";



const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.search(searchInput);
    }

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div>       
           <Container style={{ display: 'flex', justifyContent: 'end' }}>
                    <Col md={6} className="searchbar">
                        <Form className="d-flex mt-5 mb-2" onSubmit={handleSubmit}>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                results={searchInput}
                                onChange={handleSearchInput}
                            />
                            <Button className="button btn">Search</Button>
                        </Form>
                    </Col>
            </Container>
        </div>
    )
}

export default SearchBar
