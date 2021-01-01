import React from 'react';
import logo from '../images/whitelogo.svg';


const Footer = () => {
  return (
    <footer className="border-top border-secondary p-4 mt-3">
      <div className="d-flex justify-content-center">
        <ul className='list-group footer_list list-group-horizontal'>
        <li className='list-group-item bg-transparent border-0'>
          <a href='https://t.me/bestnftgame' target="_blank" rel="noreferrer">
            Telegram
          </a>
        </li>

        <li className='list-group-item bg-transparent border-0'>
          <a href='https://discord.gg/gqYwXPb' target="_blank" rel="noreferrer">
            Discord
          </a>
        </li>

        <li className='list-group-item bg-transparent border-0'>
          <a href='https://twitter.com/TokenFighter' target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>

        <li className='list-group-item bg-transparent border-0'>
          <a href='https://medium.com/@tokenfighter' target="_blank" rel="noreferrer">
            Medium
          </a>
        </li>
      </ul>
      </div>
      <div className="d-flex justify-content-center">
        <img src={logo} alt="logo"/>
      </div>
      <div className="px-3">
        <p className="text-center footer_credits">
          Token Fighter is a P2P crypto-economic DeFi game. Token Fighter and it’s affiliated digital products are wholly owned and operated by CI Ltd, a Republic of Seychelles incorporated entity or its relevant authorized affiliates.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
