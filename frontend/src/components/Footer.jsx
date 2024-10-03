import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import brand from '../assets/company.png'; // Import your brand logo component here

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const logoStyle = {
    maxWidth: '100px', // Set the maximum width for the logo
    height: '35px',    // Maintain aspect ratio
    marginRight: '10px' // Add margin to separate the logo from text
    // Add any additional styles as needed
  };

  return (
    <footer style={{ backgroundColor: '#f2f2f2', color: '#333' }}>
      <Container>
        {/* Copyright */}
        
        <Row className='justify-content-center'> {/* Center align content */}
          {/* Location */}
          <Col md={4} className='text-center py-3'>
            <div style={{ marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
              <b><span style={{ color: '#333' ,fontStyle:"italic"}}>Find Us</span></b>
              <p style={{marginTop:"7px"}}>Paramathi-Velur, Namakkal-637 207</p>
            </div>
          </Col>
          {/* Email */}
          <Col md={4} className='text-center py-3'>
            <div style={{ marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
              <b><a href="mailto:info@example.com" style={{ color: '#333', textDecoration: 'none',fontStyle:"italic" }}>Mail Us</a></b>
              <p style={{marginTop:"7px"}}>srinavaladielectricals@gmail.com</p>
            </div>
          </Col>
          {/* Phone */}
          <Col md={4} className='text-center py-3'>
            <div style={{ marginBottom: '0px' }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              <b><span style={{ color: '#333',fontStyle:"italic" }}>Call Us</span></b>
              <p style={{marginTop:"7px"}}>+91 9442251951</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <p>&copy; {currentYear} Sri Navaladi & Co. All rights reserved.</p>
          </Col>
        </Row>
        {/* Additional Content */}
      </Container>
    </footer>
  );
};

export default Footer;
