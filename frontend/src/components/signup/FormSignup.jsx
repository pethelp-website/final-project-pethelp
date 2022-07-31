import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import useForm from './useForm';
import signupValidation from "./signupValidation";


const FormSignup = ({ submitForm }) => { //using the submit function in hte form here, to refresh page when submit form
  const { handleChange, values, handleSubmit, errors }
    = useForm(
      submitForm,
      signupValidation
    ); //destruct the values from useForm, to use in the input //the validate info goes in the userform fucntion.

  return (
    /*<div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="name">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              value={values.username} //values and function in useform
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <button className="submit">SIGN UP</button>
            <span className="form-input-login">
              Already have an account? Login here
            </span>
          </div>
        </form>
      </div>
    </div>*/

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


