import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import loginService from "../../services/loginService";


const ReportPage = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    userName: "",
    type: "",
    petColor: "",
    petRace: "",
    shelterName: "",
    photo: ""
  });

  const [errors, setErrors] = useState();


  useEffect(() => {
    console.log(values)
  }, [values]);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loginService.isLoggedIn()) {
      setErrors("Login required to submit this form");
      return;
    }


    fetch("http://localhost:3000/pet/report", {
      method: "POST",
      body: JSON.stringify({
        userName: values.userName,
        type: values.type,
        petColor: values.petColor,
        petRace: values.petRace,
        shelterName: values.shelterName,
      })
    })
      .then(response => {
        console.log(response)
      })
      .then(data => {
        navigate("/report-message", { replace: true });
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
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, userName: e.target.value })}
            values={values.userName}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicpettype">
          <Form.Label>Pet type</Form.Label>
          <Form.Select
            onChange={e => setValues({ ...values, type: e.target.value })}
            values={values.type}
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
            onChange={e => setValues({ ...values, petColor: e.target.value })}
            values={values.color}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Pet race</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, petRace: e.target.value })}
            values={values.race}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Shelter name</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, shelterName: e.target.value })}
            values={values.shelterName}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Pet Image</Form.Label>

          <Form.Control type="file" />
        </Form.Group>
        {errors && <div>{errors}</div>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ReportPage;