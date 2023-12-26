import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const ContactUs = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  const submitHandler = (event) => {

    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    }

    console.log(data);
    props.onSubmit(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = ""
  }

  return (
    <Form className='container mt-5 w-75 bg-dark text-white p-5' onSubmit={submitHandler} style={{ borderRadius: '10px' }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" ref={nameRef} required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" ref={emailRef} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="number">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Phone number" ref={phoneRef} re />
      </Form.Group>

      <Button variant="success" type="submit" className='mt-3'>
        Submit
      </Button>
    </Form>

  )
}

export default ContactUs;