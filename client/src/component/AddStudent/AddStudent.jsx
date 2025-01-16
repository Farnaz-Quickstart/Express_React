import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'

export default function AddStudent() {
  const [formData, setFormData] = useState ({
    FirstName: '',
    LastName: '',
    DateOfBirth: ''
  })

 const handleSubmit = async (event) => {
  event.preventDefault()
  console.log ("SUBMIT")
  try {
    const response = await axios.post (`http://localhost:3002/students/`, formData);
    console.log (response)
    if (response.status == 200) 
      console.log ("ADDEDD SUCCESSFULLY")
    else 
    console.log ("ERROR")
  }
  catch (error) {
    console.log (error)
  }
 }

 const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  console.log (name)
  console.log (value)
  setFormData ({...formData, [name]:value})
 }

  return (
    <>
      <h1>This is Adding Component</h1>
      <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="FirstName"
            placeholder="First name"
            defaultValue="First Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="LastName"
            placeholder="Last name"
            defaultValue="Last Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            required
            type="text"
            name="DateOfBirth"
            placeholder="Date of Birth"
            defaultValue="2008-01-01"
            onChange={handleChange}
          />
        </Form.Group>
        
      </Row>
     
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  )
}
