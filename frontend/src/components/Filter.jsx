import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <Form>
      <Row className='align-items-center'>
        <Col xs='auto'>
          <Form.Label className='my-1 mr-2'>Min Price:</Form.Label>
          <Form.Control
            as='input'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Col>
        <Col xs='auto'>
          <Form.Label className='my-1 mr-2'>Max Price:</Form.Label>
          <Form.Control
            as='input'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;