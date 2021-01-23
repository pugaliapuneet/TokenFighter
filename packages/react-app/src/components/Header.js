import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Dropdown, Navbar, Nav } from 'react-bootstrap';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';
import {useLocation } from 'react-router-dom';

import metamask from '../images/metamask.svg';
import wallet from '../images/wallet.svg';
import save from '../images/save.svg'

const Header = ({
  address,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const modalButtons = [];
  const blockExplorerLink = (address, blockExplorer) => `${blockExplorer || "https://etherscan.io/"}${"address/"}${address}`;
  const url = useLocation();
  const etherscanLink = blockExplorerLink(address, blockExplorer);
  if (web3Modal) {console.log(web3Modal.cachedProvider);
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Dropdown>
          <Dropdown.Toggle 
            menuAlign="right"
            variant="outline-light"
            className='rounded-0 px-4 py-1 '
            style={{ borderWidth : '3px', 'boxShadow' : '0px 0px 10px #0AC4FF', textOverflow: 'ellipsis', overflow: 'hidden', width : '150px'}}
          >
            {address}
          </Dropdown.Toggle>
          <Dropdown.Menu align="right" className="mt-2 myaccount_dropdown rounded-0 p-0">
            <Dropdown.Item className="text p-4 item disabled">
              My Account
            </Dropdown.Item>
            <Dropdown.Item className="item p-0 disabled">
              <Row className="m-0 text-white">
                <Col className="py-3 text-center" sm={6} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '25px'}}>0.00</span> TK
                </Col>
                <Col className="py-3 text-center" sm={6} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={save} alt="save" style={{ marginTop: '-8px' }}/> <span style={{ letterSpacing: '0.02em', color: '#FF00E6', textShadow: '0px 0px 4px rgba(255, 0, 230, 0.8)', fontSize: '25px'}}>{0.00}</span> Bytes
                </Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Item target={"_blank"} href={etherscanLink} className="text p-4 item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              View on Etherscan
            </Dropdown.Item>
            <Dropdown.Item className="text p-4 item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} key="logoutbutton" onClick={logoutOfWeb3Modal}>
              Sign Out Wallet
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>,
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
      <div className="container-lg nav-cont">
      {/* <Row className="text-center mx-0"> */}
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <div className="d-none d-lg-block">
          <Button variant="outline-light" className="rounded-0 px-4 py-1" onClick={() => openModal()} style={{ borderWidth : '3px', 'boxShadow' : '0px 0px 10px #0AC4FF', fontSize: '14px' }}>
              Play
          </Button>
        </div>
        
          {/* <Col className="d-flex align-items-center justify-content-center"> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              
          {/* </Col> */}
          {/* <Col className="d-flex align-items-center justify-content-center">  */}
            <ul className='list-group list-group-horizontal bg-transparent head-nav-ver header_navbar'>
              <Nav.Link>
              <li className={'list-group-item bg-transparent border-0 '+ (url.pathname === "/" ? ' active ' : '')} style={{padding: '8px 16px'}}>
                <Link className='link' to='/' style={{lineHeight: '24px'}}>
                  Home
                </Link>
              </li>
              </Nav.Link>
              <Nav.Link>
              <li className='list-group-item bg-transparent border-0 disabled'style={{padding: '8px 16px'}}>
                <a className='link' href='/' style={{lineHeight: '24px'}}>
                  Farms
                </a>
              </li>
              </Nav.Link>
              <Nav.Link>
              <li className={'list-group-item bg-transparent border-0 '+ (url.pathname === "/collect" ? ' active ' : '')} style={{padding: '8px 16px'}}>
                <Link className='link' to='/collect'  style={{lineHeight: '24px'}}>
                  Collect
                </Link>
              </li>
              </Nav.Link>
              <Nav.Link>
              <li className='list-group-item bg-transparent border-0 disabled' style={{padding: '8px 16px'}}>
                <a className='link' href='/'  style={{lineHeight: '24px'}}>
                  Gov
                </a>
              </li>
              </Nav.Link>
              <Nav.Link>
              <li className='list-group-item bg-transparent border-0 disabled' style={{padding: '8px 16px'}}>
                <a className='link' href='/'  style={{lineHeight: '24px'}}>
                  Leaderoard
                </a>
              </li>
              </Nav.Link>
            </ul>
          {/* </Col> */}
          </Nav>
      </Navbar.Collapse>
          <div className="ml-auto d-flex align-items-center justify-content-center">
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
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="b-0" style={{  border: '0px'}}/>
        </Navbar>
        
        {/* </Row> */}
        </div>
    </React.Fragment>
  );
};

export default Header;
