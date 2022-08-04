//Isha´s code

import { React, useState, useEffect } from 'react';
import { getLocalStorageInfo } from "../../services/getLocalStorageInfo";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Container, Row } from 'react-bootstrap';


function FormLogin() {

    let navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        console.log(values)
    }, [values])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.email.length === 0) {
            setEmailError("Email required");
        }

        if (values.password.length === 0) {
            setPasswordError("Password required");
            return;
        }

        setValues({ email: "", password: "" });

        fetch("localhost:3000/user/sign-in", {
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
        <Container>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                <h3>Log In your account!</h3>
                <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e => setValues({ ...values, email: e.target.value })}
                        values={values.email} />
                    {emailError && <div className="error"> {emailError} </div>}
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={e => setValues({ ...values, password: e.target.value })}
                        value={values.password} />
                    {passwordError && <div className="error"> {passwordError} </div>}
                </Form.Group>
                <Button variant="primary" type="submit" value="Login" >
                    Log In
                </Button>
            </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default FormLogin;