//Isha´s code

import { React, useState, useEffect} from 'react';
import { getLocalStorageInfo } from "../../services/getLocalStorageInfo";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form } from 'react-bootstrap';



function FormLogin() {
  let navigate= useNavigate();

  const [values, setValues] = useState({
      email: "",
      password: "",

  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

//recebe dados 
  const handleUserNameEvent = (event) => {
      setEmailError("");
      setValues({ ...values, email: event.target.value })
      console.log(values)
  }

  const handlePasswordEvent = (event) => {
      setPasswordError("");
      setValues({ ...values, password: event.target.value })
      console.log(values)
  }

  // Para acessar o estado de maneira sincrona deve-se usar o useEffect
  useEffect(() => {
      console.log(values)
  }, [values])

  const handleSubmit = (event) => {

      event.preventDefault();
     

      if (values.password.length === 0) {
         setPasswordError("Email required");
         return;
      }

      if (values.email.length === 0) {
          setEmailError("Password required");
          return;
      }

      setValues({ email: "", password: "" });


       fetch("https://run.mocky.io/v3/b1734bbd-64b6-42e0-9350-69f76fdaff42", {
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
               navigate("/", { replace: true });
               console.log(data);
           })
           .catch((error) => console.log(error));
  };

  return (
      <Form onSubmit={handleSubmit}>
          <h3>Log In your account!</h3>
          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleUserNameEvent}
                  value={values.email}
              />
              {emailError && <div className="error"> {emailError} </div>}
          </Form.Group>

          <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordEvent}
                  value={values.password} />
              {passwordError && <div className="error"> {passwordError} </div>}
          </Form.Group>

          <Button variant="primary" type="submit" value="Login" >
              Log In
          </Button>
      </Form>
  )
}

export default FormLogin;