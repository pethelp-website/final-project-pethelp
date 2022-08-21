import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Text = () => {
    const [image, setImage] = useState({});

    const fileOnchange = (event) => {
        setImage(event.target.files[0]);
    }

    const sendImage = (event) => {
        let formData = new FormData();

        formData.append("image", image);

        fetch("http://localhost:4000/upload", { 
            method: 'POST',
            body: formData
        })
        .then((res) => res.text())
        .then((resBody) => {
            console.log(resBody);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Pet Image</Form.Label>

                    <Form.Control
                        type="file"
                        name="image"
                        accept="jpg"
                        onChange={fileOnchange}
                        enctype="multipart/form-data"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={sendImage}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Text
