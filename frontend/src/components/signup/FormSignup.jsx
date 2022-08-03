import React from 'react';
import '../../style/sass/style.scss';
import { Container, Col, Row, Form, Button} from 'react-bootstrap/';
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
    <div>
      <header className="header">
    <div className="img__containter-box">
      
    </div>
    <div class="header__logo-box">
        <img src="" alt="logo" class="header__logo"/>
        
    </div>
    <div class="header__text-box">

        <h1 class="heading-primary">
            <span class="heading-primary--main">Project Description</span>
            <span class="heading-primary--sub">An introduction to INTEgrate</span>
        </h1>

        <a href="#" class="btn btn--white">Project Timeline</a>
    </div>
  </header>
   
    <Container>
      
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group  className="mb-3" controlId="formBasicUsername">
              <div className="title">
                <h1>Create an account</h1>
              </div>

              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={values.username}
                onChange={handleChange} />
              {errors.username && <p>{errors.username}</p>}
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange} />
              {errors.email && <p>{errors.email}</p>}
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicPassword">
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
        </Col>
      </Row>
    </Container>
    </div>




  )
  
};


export default FormSignup;




