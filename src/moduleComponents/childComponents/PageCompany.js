import React from 'react'
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'

const PageCompany = () => {
  return (
    <div>

<Card className='w-50' style={{marginLeft:"600px",marginTop:"-620px",marginLeft:"350px"}}>
<div>   <h3 style={{padding:"10px"}}>Company details</h3></div>
  <ListGroup variant="flush">

    <ListGroup.Item>
        <div>
          
      
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    COMPANY NAME
    </Form.Label>
    <Col sm="10">
      <Form.Control type="COMPANY NAME" placeholder="COMPANY NAME" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      CONTACT NUMBER
    </Form.Label>
    <Col sm="10">
      <Form.Control type="CONTACT NUMBER" placeholder="CONTACT NUMBER" />
    </Col>
  </Form.Group>
        </div>

        <div>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      EMAIL
    </Form.Label>
    <Col sm="10">
      <Form.Control type="EMAIL" placeholder="EMAIL" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      PHNO
    </Form.Label>
    <Col sm="10">
      <Form.Control type="PHNO" placeholder="PHNO" />
    </Col>
  </Form.Group>
        </div>
        <Button>Edit</Button>
        <Button style={{width:"70px",marginTop:"10px" , position : "relative" , left:"15px", bottom :"5px"}}>save</Button>
        


    </ListGroup.Item>




    <ListGroup.Item  className="d-flex flex-column">

    
    <Form.Label column sm="2">
      Address-1
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Address-1" className='w-75' />
    </Col>

    <Form.Label column sm="2">
      Address-2
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Address-2" className='w-75' />
    </Col>
 

 
  
 


    <Button style={{width:"70px",marginTop:"10px"}}>Edit</Button>
    <Button style={{width:"70px",marginTop:"10px" , position : "relative" , left :"90px", bottom:"48px"}}>save</Button>
    </ListGroup.Item>
    <ListGroup.Item>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Address-1
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Address-1" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Address-2
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Address-2" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
   State
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="State" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      City
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="City" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Zip
    </Form.Label>
    <Col sm="10">
      <Form.Control type="file" placeholder="Zip" />
    </Col>
  </Form.Group>
  <Button style={{width:"70px",marginTop:"10px"}}>Edit</Button>
  <Button style={{width:"70px",marginTop:"10px" , position : "relative" , left : "20px"}}>save</Button>
    </ListGroup.Item>
  </ListGroup>
</Card>
    </div>
  )
}

export default PageCompany