import React from 'react';
import {Col} from 'react-bootstrap';

const ReportMessage = () => {
  return (
    <Col style={{ display: 'flex', justifyContent: 'center' }}>
    <h3 className="message">Your request has been successfully registered.</h3>
    </Col>
  )
}

export default ReportMessage;
