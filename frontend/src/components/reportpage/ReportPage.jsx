import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from 'react-bootstrap';
import loginService from "../../services/loginService";



const ReportPage = () => {
  let navigate = useNavigate();

  //image usestate
  const [image, setImage] = useState({});

  const [values, setValues] = useState({
    user: "",
    petType: "",
    petColor: "",
    petRace: "",
    shelter: "",
    image: "",
  });



  //Fetch to send the image
  const fileOnchange = (event) => {
    setImage(event.target.files[0]);
  }

  const sendImage = (event) => {
    let formData = new FormData();

    formData.append("image", image);

    fetch("http://localhost:4000/upload", { 
        method: 'POST',
        body: formData
    })
    .then((res) => res.text())
    .then((resBody) => {
        console.log(resBody);
    })
    .catch((error) => {
        console.log(error);
    })
}

  useEffect(() => {
    console.log(values)
  }, [values]);

  const isLoggedIn = loginService.isLoggedIn();

  const handleSubmit = async (event) => {
    event.preventDefault();



    fetch("http://localhost:4000/pet_report", {
      method: "POST",
      body: JSON.stringify({
        user: values.user_id,
        petType: values.type,
        petColor: values.color,
        petRace: values.race,
        shelter: values.shelter_id,
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
      {isLoggedIn && <Form onSubmit={handleSubmit}>
        <h1 className="mt-5 heading-secondary">Report a found pet</h1>
        <Form.Group className="mb-2" controlId="formBasicpetname">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, user: e.target.value })}
            values={values.user}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicpettype">
          <Form.Label>Pet type</Form.Label>
          <Form.Select
            onChange={e => setValues({ ...values, petType: e.target.value })}
            values={values.petType}
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
            values={values.petColor}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Pet race</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, petRace: e.target.value })}
            values={values.petRace}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicrace">
          <Form.Label>Shelter name</Form.Label>
          <Form.Control type="text"
            onChange={e => setValues({ ...values, shelter: e.target.value })}
            values={values.shelter}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Pet Image</Form.Label>

          <Form.Control
            type="file"
            name="image"
            accept="jpg"
            onChange={fileOnchange}
            enctype="multipart/form-data"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendImage}>
          Submit
        </Button>
      </Form>}
    </Container>
  );
}

export default ReportPage;