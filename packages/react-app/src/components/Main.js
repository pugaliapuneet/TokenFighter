import React from 'react';

import logoVisual from '../images/logoVisual.svg';

import { Row, Col, Image } from 'react-bootstrap';

const Main = () => {
  return (
    <div>
      <Row className="d-flex justify-content-center mx-0">
        <Col md={6} className="text-center">
          <Image className='image' src={logoVisual} alt='logo' />
        </Col>
      </Row>
      <Row className="mx-0" style={{ marginTop : "-100px" }}>
        <Col>
          <ul className="list-group game_menu">
            <li >game start</li>
            {/* <li className="active">game start</li> */}
            {/* <li>control settings</li> */}
            <li className="disabled">network game (coming soon)</li>
            <li className="disabled">recording info (coming soon)</li>
          </ul>
        </Col>
      </Row>
      {/* Additional boxes from the design */}
      {/* <Container>
        <Row className="mx-0" >
          <Col className="p-3 text-light" sm={6}>
            <div style={{ border : '3px solid #ffffff', boxShadow : "8px 8px #000000", backgroundColor : '#122478', }}>
              aaaa
            </div>
          </Col>
          <Col className="p-3 text-light" sm={6}>
            <div style={{ border : '3px solid #ffffff', boxShadow: '0px 0px 4px 2px rgba(0, 255, 224, 0.6)' }}>
              aaaa
            </div>            
          </Col>
        </Row>
      </Container> */}
      
    </div>
  );
};

export default Main;
