import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logofooter from '../images/logo.svg';

const Hrline = () =>{
  return (
    <div className='hr-line'>
      <hr />
    </div>
  )

}
const Footer = () => {
  return (
    <footer className='footer-all'>
      <Col>
      <Row>
      <ul className='non-bullet link-right footer'>
        <li className='list-inline'>
          <a className='link telegram' href='/'>
            Telegram
          </a>
        </li>

        <li className='list-inline'>
          <a className='link discord' href='/'>
            Discord
          </a>
        </li>

        <li className='list-inline'>
          <a className='link twitter' href='/'>
            Twitter
          </a>
        </li>

        <li className='list-inline'>
          <a className='link medium' href='/'>
            Medium
          </a>
        </li>
      </ul>
      </Row>
      <Row>
      <Image className='footer-image' src={logofooter} alt='logofooter' />
      </Row>
      <Row>
        <p className='footer-lines-1'>
          Copyright © [2020] by Token Fighter.
        </p>
      </Row>
      <Row>
        <p className='footer-lines-2'>
        All rights reserved. Font made from oNline Web Fonts is licensed by CC BY 3.0
        </p>
      </Row>   
      </Col>
    </footer>
  );
};
export {Hrline, Footer};
