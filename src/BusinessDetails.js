// components/BusinessDetails.js
import React from 'react';
import { Card,Row,Col,Container, Button } from 'react-bootstrap';

const BusinessDetails = ({ data }) => {
  return (
    <>
      <Container>
      <Row>
        <Col> 
        <Card.Title>Registered On: 01-02-2021</Card.Title>         
            </Col>
            <Col> 
        <Card.Title>Status: Active</Card.Title>
           
            </Col>
            <Col> 
        <Card.Title>Last Updated:01-02-2022</Card.Title>
           
            </Col>
      </Row>
      </Container>
    <Card className="business-details-container justify-content-center">
      <Card.Body>
        {data ? (
          <>
            {/* <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.address}</Card.Text> */}
            <Container>
            <Container>
        <h2>Business details</h2>
    </Container>
      <Row>
        <Col> 
        <Card.Title>GSTIN</Card.Title>
            <Card.Text>07AAPOQUEDB6</Card.Text>
            </Col>
            <Col> 
        <Card.Title>Legal Name</Card.Title>
            <Card.Text>{data.name}</Card.Text>
            </Col>
            <Col> 
        <Card.Title>GSTIN Status</Card.Title>
            <Card.Text>{data.status}</Card.Text>
            </Col>
      </Row>

      <Row className='row'>
      <Col> 
        <Card.Title>Contribution of Bussiness</Card.Title>
            <Card.Text>Private Limited</Card.Text>
            </Col>
            <Col> 
        <Card.Title>Taxpayer Type</Card.Title>
            <Card.Text>{data.type}</Card.Text>
            </Col>
            <Col> 
        <Card.Title>Date of registration</Card.Title>
            <Card.Text>{data.date}</Card.Text>
            </Col>
      </Row>

      <Row className='row'>
      <Col> 
        <Card.Title>State Details</Card.Title>
            <Card.Text>Ward 100</Card.Text>
            </Col>
            <Col> 
        <Card.Title>Center Details</Card.Title>
            <Card.Text>Na</Card.Text>
            </Col>
            <Col> 
        
            </Col>
      </Row>
      <Button variant="primary" className='justify-content-center'>Copy</Button>
    </Container>

            {/* Add more fields as needed */}
          </>
        ) : (
          <Card.Text>No business details available.</Card.Text>
        )}
      </Card.Body>
    </Card>

   
  
   

   
    </>
    
  );
};

export default BusinessDetails;
