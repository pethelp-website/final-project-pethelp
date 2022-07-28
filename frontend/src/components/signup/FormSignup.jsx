import React from 'react';
import useForm from './useForm';
import signupValidation from "./signupValidation";


const FormSignup = ({ submitForm }) => { //using the submit function in hte form here, to refresh page when submit form
  const { handleChange, values, handleSubmit, errors }
    = useForm(
      submitForm,
      signupValidation
    ); //destruct the values from useForm, to use in the input //the validate info goes in the userform fucntion.

  return (
    <div className="container">
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
              Already have an account? Login <a href="#">here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
};


export default FormSignup;


