import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
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
  })
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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validatedErrors = validateInfo(values);
    setErrors(validatedErrors);
    setSubmitted(true)
  }

  return (
    //bootstrap form
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <h1>
          <Badge bg="secondary">Create an account</Badge>
        </h1>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="username"
          value={values.username}
          onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </Form.Group>

      <Button variant="primary" type="submit">
        SIGN UP
      </Button>
    </Form>


  )
};


export default FormSignup;


