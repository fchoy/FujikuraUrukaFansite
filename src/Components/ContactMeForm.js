import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './ContactMeForm.css'

const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Thank you for supporting Uruka!");
};

const ContactMeForm = ({contactRef}) => {
  return (
    <Container ref={contactRef} fluid="true" className="vh-100 d-flex flex-column justify-content-center align-items-center contact-me-container">
        <Container fluid="false" className="col-xxl-6 col-md-8 col-10 form-container">
            <h1 className="text-light h-auto mt-5 text-center">Contact</h1>
            <Form className="col-lg-8 col-10 m-auto d-flex flex-column justify-content-center mt-5 mb-5" onSubmit={handleSubmit}>

                <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail" style={{fontFamily : "'Open Sans', sans-serif"}}>
                    <Form.Label className="text-light">Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter Your Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" style={{fontFamily : "'Open Sans', sans-serif"}}>
                    <Form.Label className="text-light">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" required/>
                    <Form.Text className="text-light">We'll never share your information with anyone else.</Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label className="text-light">Message</Form.Label>
                    <Form.Control as='textarea' rows="5" placeholder="Enter A Message For Uruka!" required/>
                </Form.Group>

                <Button variant="primary" type="submit" className="">Submit</Button>
            </Form>
        </Container>
    </Container>
  )
}

export default ContactMeForm