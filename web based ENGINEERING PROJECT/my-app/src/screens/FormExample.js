import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropbox from "../screens/Dropbox"
import { Navigate } from "react-router-dom";



function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };




  const [goToPrice, setGoToPrice] = React.useState(false);
  if (goToPrice) {
    return <Navigate to="/Price" />;

  }




  return (
    <Form className='boxes' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
       
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>

          <Dropbox></Dropbox>
          
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>T.C</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="TC"
            defaultValue="12345678910"
          />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
          
            <Form.Control
              type="text"
              placeholder="Name"
              aria-describedby="inputGroupPrepend"
              required
            />

            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>



      <Row className="mb-3">
        
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Number</Form.Label>
          <Form.Control type="text" placeholder="Number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>



      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>



      <Button  
       onClick={() => {
          setGoToPrice(true);
        }}
     type="submit"  >
        {" "}
       Submit form</Button>

      
    </Form>
  );
}

export default FormExample;