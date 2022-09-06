import { React, useState, useEffect } from 'react';
import { getLocalStorageInfo } from "../../services/getLocalStorageInfo";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from 'react-bootstrap';
import '../../style/style.scss';

function FormLogin() {

    let navigate = useNavigate();


    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
   

    useEffect(() => {
        console.log(values, emailError, passwordError)
    }, [values, emailError, passwordError]);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.email.length === 0) {
            setEmailError("Email required");
        }

        if (values.password.length === 0) {
            setPasswordError("Password required");
            return;
        }


        fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/user/sign-in`, {
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
            .then(response => {
                setPasswordError(null);
                if (response.status === 200) {
                    return response.json();
                }
                setPasswordError("Username or password is incorrect");
                throw Error('error');
            })
            .then((data) => {
                localStorage.setItem("token", JSON.stringify(data));
                localStorage.setItem("user", JSON.stringify(data.user)); //store user object in localStorage. This object has info about email, password, authenticated and if is admin.
                navigate("/", { replace: true });
                console.log(data);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <Form onSubmit={handleSubmit} className="form-login">

                    <h2 className="heading-secondary">Login your account</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="my-2">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={e => setValues({ ...values, email: e.target.value })}
                            values={values.email}
                            autoFocus
                            className='input'
                        />
                        {emailError && <div className="error important-text"> {emailError} </div>}
                    </Form.Group>
                    <Form.Group className="my-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={e => setValues({ ...values, password: e.target.value })}
                            value={values.password}
                            className='input'
                        />
                        {passwordError && <div className="error important-text"> {passwordError} </div>}
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Login" className="my-4 button btn" >
                        LOGIN
                    </Button>
                </Form>
            </div>
        </Container>

    )
}

export default FormLogin;