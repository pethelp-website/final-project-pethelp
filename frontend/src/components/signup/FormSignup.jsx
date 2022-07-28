import React from 'react';
import useForm from './useForm';


const FormSignup = () => {
  const {handleChange, values, handleSubmit} = useForm(); //destruct the values from useForm, to use in the input

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


