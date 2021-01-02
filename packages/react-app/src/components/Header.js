import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import {useLocation } from 'react-router-dom';

import metamask from '../images/metamask.svg';
import wallet from '../images/wallet.svg';

const Header = ({
  address,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const modalButtons = [];

  const url = useLocation();
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Button
          key="logoutbutton"
          variant="outline-light"
          className='rounded-0 px-4 py-1 '
          style={{ borderWidth : '3px', 'boxShadow' : '0px 0px 10px #0AC4FF' }}
          // style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          // shape="round"
          // size="large"
          onClick={logoutOfWeb3Modal}
        >
          {address}
        </Button>,
      );
    } else {
      modalButtons.push(
        <Button
          key="loginbutton"
          variant="outline-light"
          className='rounded-0 px-2 py-1'
          style={{ borderWidth : '3px', 'boxShadow' : '0px 0px 10px #0AC4FF' }}
          // style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          // shape="round"
          // size="large"
          /*type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time*/
          onClick={loadWeb3Modal}
        >
          Unlock Wallet
        </Button>,
      );
    }
  }

  return (
    <React.Fragment>
      <Row className="text-center mt-2 mx-0">
        <Col className="d-flex align-items-center justify-content-center">
          <Button variant="outline-light" className="rounded-0 px-4 py-1" onClick={() => openModal()} style={{ borderWidth : '3px', 'boxShadow' : '0px 0px 10px #0AC4FF' }}>
            Play
          </Button>
        </Col>
        <Col className="d-flex align-items-center justify-content-center"> 
          <ul className='list-group list-group-horizontal bg-transparent header_navbar'>
            <li className={'list-group-item bg-transparent border-0 '+ (url.pathname === "/" ? ' active ' : '')}>
              <a class='link' href='/'>
                Home
              </a>
            </li>
            <li className='list-group-item bg-transparent border-0 disabled'>
              <a class='link' href='/'>
                Farms
              </a>
            </li>
            <li className={'list-group-item bg-transparent border-0 '+ (url.pathname === "/collect" ? ' active ' : '')}>
              <Link class='link' to='/collect'>
                Collect
              </Link>
            </li>
            <li className='list-group-item bg-transparent border-0 disabled'>
              <a class='link' href='/'>
                Gov
              </a>
            </li>
            <li className='list-group-item bg-transparent border-0 disabled'>
              <a class='link' href='/'>
                Leaderoard
              </a>
            </li>
          </ul>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
            {modalButtons}
            {/* Modal for unlocking the wallet */}
            <Modal
              modalClassName='modal'
              id='1'
              isOpen={isModalOpen}
              transition={ModalTransition.NONE}
              onBackdropClick={closeModal}
            >
              <div
                style={{ textAlign: 'center', letterSpacing: 0.5, fontSize: '35px' }}
              >
                Unlock The Wallet to play the game!
              </div>
              <div>
                {/* <div className='metamask'>
                  {/* <Container> */}
                {/* <Image
                    src={metamask}
                    alt='metamask'
                    height='30px'
                    width='40px'
                    className='metamask-img'
                  />{' '} */}
                {/* <label className='metamask-text'>Metamask</label>{' '}
                  <Button className='metamask-button'>Connect</Button>
                  {/* </Container> */}
                {/* </div> */}
                {/* <div className='metamask'> */}
                {/* <Container> */}
                {/* <Image src={wallet} className='metamask-img' />
                <label className='metamask-text'>WalletConnect</label>
                <Button className='metamask-button'>Connect</Button> */}
                {/* </Container> */}
                {/* </div> */}
                <Image src={metamask} alt='metamask' />
                <label>Metamask</label>
                <Button>Connect</Button>

                <Image src={wallet} alt='wallet' />
                <label>WalletConnect</label>
                <Button>Connect</Button>
              </div>
            </Modal>
        </Col>
      </Row>
      
      
    </React.Fragment>
  );
};

export default Header;
