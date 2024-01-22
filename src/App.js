// App.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchBox from './SearchBox';
import BusinessDetails from './BusinessDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card,Row,Col, Button,Image } from 'react-bootstrap';
import gstimg from './gst-svg.svg'


const App = () => {
  const [businessData, setBusinessData] = useState(null);

  const handleSearch = (gstNumber) => {
    // Simulate data retrieval (replace with actual API call)
    const mockData = {
      name: 'Sample Business',
      address: '123 Main Street',
      status: 'Active',
      type:'Regular',
      date:"November 20,2021"
      // Add more fields as needed
    };

    setBusinessData(mockData);
  };

  return (
    <Container>
    <Container>
    <Row className='main'>
        <Col className='title' xs={12} md={6}>
          <Card.Title>SEARCH AND CONFIRM GST REGISTRATION</Card.Title>
          <Card.Text>Quickly verify gst number with confidence</Card.Text>
        </Col>
        <Col xs={12} md={6}>
          <Image src={gstimg} className='image' />
        </Col>
      </Row>
    </Container>
      <div className="app-container">
        <SearchBox onSearch={handleSearch} />
        <BusinessDetails data={businessData} />
      </div>
    </Container>
  );
};

export default App;
