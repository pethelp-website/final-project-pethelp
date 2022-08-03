import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap/';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginService from '../../services/login'
import validateInfo from "../../services/password-validation";
import { useEffect } from "react";


const FormSignup = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({ //uptade the state
    username: "",
    email: "",
    password: "",
    adress: "",
    city: "",
    postcode: "",
    phonenumber:"",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);



  useEffect(() => {
    if (!isSubmitted) {
      return;
    }

    if (Object.keys(errors).length > 0) {
      return;
    }

    const formData = {
      username: values.username,
      email: values.email,
      password: values.password,
      adress: values.adress,
      city: values.city,
      postcode: values.postcode,
      phonenumber: values.phonenumber
    };

    loginService.sign_up(formData)
      .then(data => {
        localStorage.setItem("token", JSON.stringify(data));
        navigate("/", { replace: true });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [errors, isSubmitted, values, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    })
    console.log(values);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validatedErrors = validateInfo(values);
    setErrors(validatedErrors);
    setSubmitted(true)
  }

  return (
    //bootstrap form
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <div className="title">
              <h1>Create an account</h1>
            </div>
            <Form.Group as={Col} md="3" controlId="formBasicUsername">
              <Form.Label >Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange} />
              {errors.username && <p>{errors.username}</p>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange} />
              {errors.email && <p>{errors.email}</p>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formBasicCAdress">
              <Form.Label>Adress</Form.Label>
              <Form.Control
                type="text"
                name="adress"
                values={values.adress}
                onChange={handleChange} />
              {errors.adress && <p>{errors.adress}</p>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                values={values.city}
                onChange={handleChange} />
              {errors.city && <p>{errors.city}</p>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formBasicPostCode">
              <Form.Label>Postcode</Form.Label>
              <Form.Control
                type="text"
                name="postcode"
                values={values.postcode}
                onChange={handleChange} />
              {errors.postcode && <p>{errors.postcode}</p>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formBasicPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phonenumber"
                values={values.phonenumber}
                onChange={handleChange} />
              {errors.phonenumber && <p>{errors.phonenumber}</p>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange} />
              {errors.password && <p>{errors.password}</p>}
            </Form.Group>

            <Button variant="primary" type="submit">
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>





  )
};


export default FormSignup;




