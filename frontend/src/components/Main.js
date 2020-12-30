import React from 'react';

import logoVisual from '../images/logoVisual.svg';

import { Row, Col, Image } from 'react-bootstrap';

const Main = () => {
  return (
    <Row>
      <Col>
        <Image className='image' src={logoVisual} alt='logo' />
      </Col>
      <Col>
        <text className='game-start'>game start</text>
        <text className='control-settings'>control settings</text>
        <text className='network-game'>network game (coming soon)</text>
        <text className='recording-info'>recording info (coming soon)</text>
      </Col>
    </Row>
  );
};

export default Main;
