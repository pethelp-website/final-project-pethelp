import React, {useState}  from 'react'
import { getLocalStorageInfo } from '../../utils/getLocalStorageInfo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


     const adminUser = {
       email: "",
       password: ""
     }
  
     const [user, setUser] = useState({ email: "", password:""});
     const [error, setError] = useState("");
  
     const Login = details => {
       console.log(details);
  
       if(details.email === adminUser.email && details.password === adminUser.password){
       console.log("Logged in");
       setUser({
       
         email: details.email
       });
     } else {
       console.log("Details do not match!"); 
   setError("Details do not match!")
   }
  }

function LoginForm({Login, error}) {
  
    const [details, setDetails] = useState({ email:"", password:"" });

    const submitHandler = e => {
      fetch("http://localhost:3000/user/sign-in/"
      , {
        method: "POST",
        headers: {
            authorization: getLocalStorageInfo(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: details.email,
            password: details.password,
        }),
    })
        .then(response => response.json())
        .then((data) => {
            localStorage.setItem("token", data.jwtToken);
        console.log(data);
        })
        .catch((error) => console.log(error));

        e.preventDefault();
Login(details);
}



return (
<Form  onSubmit={submitHandler}>
    <h3>Log In your account!</h3>
    {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
  <Form.Text className="text-muted">
    
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
</Form.Group>
{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}

<Button variant="primary" type="submit" value="Login" >
  Log In 
</Button>

</Form>
 
 )

}

export default LoginForm;

//this is my real code
 