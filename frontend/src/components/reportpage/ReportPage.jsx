import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import loginService from "../../services/loginService";
import { getLocalStorageInfo } from "../../services/getLocalStorageInfo";


const ReportPage = () => {
  let navigate = useNavigate()

  //image usestate
  const [image, setImage] = useState({});

  const [values, setValues] = useState({
    userName: "",
    shelterName: "",
    type: "",
    color: "",
    race: "",
    image: "",
  });

  //Fetch to send the image
  const fileOnchange = (event) => {
    setImage(event.target.files[0]);
  };

  const sendImage = () => {
    let formData = new FormData();

    formData.append("image", image);

    fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/upload`, {
      method: "POST",
      body: formData,
  
    })
      .then((res) => res.text())
      .then((resBody) => {
        console.log(resBody);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  const isLoggedIn = loginService.isLoggedIn();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("image", image);

    formData.append("userName", values.userName);
    formData.append("shelterName", values.shelterName);
    formData.append("race", values.race);
    formData.append("color", values.color);
    formData.append("type", values.type);
  


    console.log(formData);

    fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/pet_report`, {
      method: "POST",
      headers: new Headers({
        'Authorization': 'Bearer ' + getLocalStorageInfo(),
      }),
      body: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .then((data) => {
        navigate("/report-message", { replace: true });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      {isLoggedIn && (
        <Form onSubmit={handleSubmit}>
          <h1 className="heading-secondary">Report a found pet</h1>
          <Form.Group className="my-2" controlId="formBasicpetname">
            <Form.Label className="my-2">Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) =>
                setValues({ ...values, userName: e.target.value })
              }
              values={values.userName}
              autoFocus
              className="input"
              required
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicpettype">
            <Form.Label className="my-2">Pet type</Form.Label>
            <Form.Select
              onChange={(e) => setValues({ ...values, type: e.target.value })}
              values={values.type}
              className="input"
              required
            >
              <option key="blankChoice" hidden value>
                Select an option
              </option>
              <option>Cat</option>
              <option>Dog</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicpetcolor">
            <Form.Label>Pet color</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setValues({ ...values, color: e.target.value })}
              values={values.color}
              className="input"
              required
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicrace">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setValues({ ...values, race: e.target.value })}
              values={values.race}
              className="input"
              required
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicrace">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) =>
                setValues({ ...values, shelterName: e.target.value })
              }
              values={values.shelterName}
              className="input"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Pet Image</Form.Label>

            <Form.Control
              type="file"
              name="image"
              accept="jpg"
              onChange={fileOnchange}
              encType="multipart/form-data"
              className="input"
              required
            />
          </Form.Group>
          <Button
            className="my-4 btn"
            variant="primary"
            type="submit"
            onClick={sendImage}
          >
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default ReportPage;
