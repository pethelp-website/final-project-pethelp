//Isha´s code

import { React, useState} from 'react';
import { getLocalStorageInfo } from "../../services/getLocalStorageInfo";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form } from 'react-bootstrap';


const FormLogin = () => {
  let navigate = useNavigate();

  const User = {
    email: "",
    password: ""
  }
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
 
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.email.length === 0) {
      setEmailError("Email required");
    } else {
      navigate("/", { replace: true });
    }
    
    if (values.password.length === 0) {
      setPasswordError("Password required");
    } else {
      navigate("/", { replace: true });
    }
    
    if (values.email !== User.email && values.password !== User.password) {
      console.log("Details do not match!");
      setError("Details do not match")
    } 
    
    setValues({ email: "", password: "" });
   


    fetch("http://localhost:3000/user/sign-in", {
      method: "POST",
      headers: {
        authorization: getLocalStorageInfo(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then(response => response.json())
      .then((data) => {
        localStorage.setItem("token", data.jwtToken);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <h3>Log In your account!</h3>
      {(error !== "") ? (<div className="error">{error}</div>) : ""}
      <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={e => setValues({ ...values, email: e.target.value })}
          value={values.email}
        />
        {emailError && <div className="error"> {emailError} </div>}
      </Form.Group>
      <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          onChange={e => setValues({ ...values, password: e.target.value })} value={values.password} />
        {passwordError && <div className="error"> {passwordError} </div>}
      </Form.Group>
      <Button variant="primary" type="submit" value="Login" >
        Log In
      </Button>
    </Form>
  )
}

export default FormLogin;

