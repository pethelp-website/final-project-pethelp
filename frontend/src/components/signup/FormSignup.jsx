import { React, useState } from 'react'


const FormSignup = () => {
  //gets values
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false); //to set values 

  const handleUserNameEvent = (event) => {
    setValues({ ...values, username: event.target.value })
  };

  const handleEmaildEvent = (event) => {
    setValues({ ...values, email: event.target.value })
  };

  const handlePasswordEvent = (event) => {
    setValues({ ...values, password: event.target.value })
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setValues({ email: "", username: "", password: "", })
  };
  console.log(values);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="name">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              onChange={handleUserNameEvent}
            />
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              onChange={handleEmaildEvent}
            />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              onChange={handlePasswordEvent}
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


