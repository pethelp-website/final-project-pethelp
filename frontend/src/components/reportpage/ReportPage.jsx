import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';


const ReportPage = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    pettype: "",
    petcolor: "",
    petrace: "",
    location: "",
    sheltername: "",
    image: ""
  });


  useEffect(() => {
    console.log(values)
  }, [values]);


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://run.mocky.io/v3/e6c1e99e-557a-49c7-bc7c-dd44c1c66531", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        pettype: values.pettype,
        petcolor: values.petcolor,
        petrace: values.petrace,
        location: values.location,
        sheltername: values.sheltername, 
      })
    })
      .then(response => {
        console.log(response)
      })
      .then(data => {
        navigate("/", { replace: true });
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Form onSubmit={handleSubmit}>

        <h1 className="mt-3">Report a found pet</h1>
        <Form.Group className="mb-2" controlId="formBasicpetname">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, name: e.target.value })}
            values={values.name}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicpettype">
          <Form.Label>Pet type</Form.Label>
          <Form.Select
            onChange={e => setValues({ ...values, pettype: e.target.value })}
            values={values.pettype}
            required
          >
            <option key='blankChoice' hidden value>Select an option</option>
            <option>Cat</option>
            <option>Dog</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicpetcolor">
          <Form.Label>Pet color</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, petcolor: e.target.value })}
            values={values.petcolor}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Pet race</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, petrace: e.target.value })}
            values={values.petrace}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, location: e.target.value })}
            values={values.location}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Shelter name</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, sheltername: e.target.value })}
            values={values.sheltername}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Pet Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ReportPage;