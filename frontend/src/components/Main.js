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
        <text className='game-start'>Game Start</text>
        <text className='control-settings'>Control Settings</text>
        <text className='network-game'>Network Game (Coming Soon)</text>
        <text className='recording-info'>Recording info (Coming Soon)</text>
      </Col>
    </Row>
  );
};

export default Main;
