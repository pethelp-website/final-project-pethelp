// import React, {useState}  from 'react'
// import { getLocalStorageInfo } from '../../utils/getLocalStorageInfo';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


// function LoginForm({Login, error}) {
  
//     const [details, setDetails] = useState({ email:"", password:"" });

//     const submitHandler = e => {
//       fetch("http://localhost:3000/user/sign-in/"
//       , {
//         method: "POST",
//         headers: {
//             authorization: getLocalStorageInfo(),
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email: details.email,
//             password: details.password,
//         }),
//     })
//         .then(response => response.json())
//         .then((data) => {
//             localStorage.setItem("token", data.jwtToken);
//         console.log(data);
//         })
//         .catch((error) => console.log(error));

//         e.preventDefault();
// Login(details);
// }
// return (
// <Form  onSubmit={submitHandler}>
//     <h3>Log In your account!</h3>
//     {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
// <Form.Group className="mb-3" controlId="formBasicEmail">
//   <Form.Label>Email address</Form.Label>
//   <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
//   <Form.Text className="text-muted">
    
//   </Form.Text>
// </Form.Group>

// <Form.Group className="mb-3" controlId="formBasicPassword">
//   <Form.Label>Password</Form.Label>
//   <Form.Control type="password" placeholder="Password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
// </Form.Group>
// {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//   <Form.Check type="checkbox" label="Check me out" />
// </Form.Group> */}

// <Button variant="primary" type="submit" value="Login" >
//   Log In 
// </Button>

// </Form>
//  )
// }

// export default LoginForm;

//this is my real code
import React, { useState } from 'react'
import { getLocalStorageInfo } from '../../utils/getLocalStorageInfo';
import { Button, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
function LoginForm() {
  const User = {
        email: "admin@a.com",
         password: "123"
       }
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("")
    // e => setDetails({...details, email: e.target.value})
    // const handleUserNameEvent = (event) => 
    //     // setEmailError("");
    //     setValues({ ...values, email: event.target.value })
    //     console.log(values)
    
    // const handlePasswordEvent = (event) => {
    //     setPasswordError("");
    //     setValues({ ...values, password: event.target.value }) 
    //     console.log(values)
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.email.length === 0) {
           setEmailError("Email required");
           
        }
        if (values.password.length === 0) {
            setPasswordError("Password required");
        }
        
        if( values.email !== User.email && values.password !== User.password){
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
            {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
            <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setValues({...values, email: e.target.value})}
                    value={values.email}
                />
                {emailError && <div className="error"> {emailError} </div>}
            </Form.Group>
            <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={e => setValues({...values, password: e.target.value})}value={values.password} />
                {passwordError && <div className="error"> {passwordError} </div>}
            </Form.Group>
            <Button variant="primary" type="submit" value="Login" >
                Log In
            </Button>
        </Form>
    )
}
export default LoginForm;
