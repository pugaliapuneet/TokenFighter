import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';

import metamask from '../images/metamask.svg';
import wallet from '../images/wallet.svg';

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <React.Fragment>
      <button class='play-button' onClick={() => openModal()}>
        Play
      </button>
      <ul className='non-bullet link-right'>
        <li className='list-inline home'>
          <a className='link' href='/'>
            Home
          </a>
        </li>
        <li class='list-inline farms'>
          <a class='link' href='/'>
            Farms
          </a>
        </li>
        <li class='list-inline collect link'>
          <a class='link' href='/collect'>
            Collect
          </a>
        </li>
        {/*<Link className='list inline collect link' to='/collect'>
          Collect
  </Link>*/}

        <li class='list-inline gov'>
          <a class='link' href='/'>
            Gov
          </a>
        </li>

        <li class='list-inline leaderboard'>
          <a class='link' href='/'>
            Leaderoard
          </a>
        </li>

        {/* <li class='list-inline'>
          <a class='link' href='/'>
            Tutorial
          </a>
        </li> */}
        <button className='wallet'>Unlock Wallet</button>
      </ul>

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
    </React.Fragment>
  );
};

export default Header;
