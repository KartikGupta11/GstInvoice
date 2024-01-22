// components/SearchBox.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ onSearch }) => {
  // const [searchInput, setSearchInput] = useState('');
  const [gstNumber, setGstNumber] = useState('');

  const handleSubmit = () => {
    onSearch(gstNumber);

    setGstNumber('');
  };

  return (
    <Form className="search-box">
      <Form.Group controlId="formGstNumber">
        <Form.Label>Enter GST Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="GST Number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
         
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} disabled={!gstNumber.trim()}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
