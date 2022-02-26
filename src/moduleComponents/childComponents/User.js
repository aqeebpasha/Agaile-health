import React from 'react'
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'

const User = () => {
  return (
    <div>
      

<Card className='w-50' style={{marginLeft:"600px",marginTop:"-620px",marginLeft:"350px"}}>
<h3>User Details</h3>
  <ListGroup variant="flush">
    <ListGroup.Item>
        <div>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      first name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="first name"  />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      last name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="last name" />
    </Col>
  </Form.Group>
        </div>

        <div>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      contact
    </Form.Label>
    <Col sm="10">
      <Form.Control type="number" placeholder="contact" />
    </Col>
  </Form.Group>
        </div>
        <Button style={{width:"70px",marginTop:"10px"}}>Edit</Button>
        <Button style={{width:"70px",marginTop:"10px" , position : "relative" , left : "20px"}}>save</Button>
    </ListGroup.Item>




    <ListGroup.Item  className="d-flex flex-column">

    
    <Form.Label column sm="2">
      address-1
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="address-1" className='w-75' />
    </Col>

    <Form.Label column sm="2">
      address-2
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="address-2" className='w-75' />
    </Col>
 

 
    <Button style={{width:"70px",marginTop:"10px"}}>Edit</Button>
    <Button style={{width:"70px",marginTop:"10px" , position : "relative" , left:"85px" , bottom : "48px"}}>save</Button>
 


  
    </ListGroup.Item>
    <ListGroup.Item>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     address-1
    </Form.Label>
    <Col sm="10">
      <Form.Control type=" text" placeholder=" address-1" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     address-2
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="address-2 " />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      contact
    </Form.Label>
    <Col sm="10">
      <Form.Control type="number" placeholder="contact" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Button style={{width:"70px",marginTop:"10px"}}>Edit</Button>
  <Button style={{width:"70px",marginTop:"10px" , position : "relative" , left :"20px"}}>save</Button>
    </ListGroup.Item>
  </ListGroup>
</Card>
    </div>
  )
}

export default User