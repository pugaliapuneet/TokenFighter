import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayScreen({address, web3Modal, loadWeb3Modal}) {
    return web3Modal && web3Modal.cachedProvider ? (<div className="d-flex justify-content-center align-items-center" style={{height: 'calc(100vh - 100px)'}}><iframe style={{width: '100%', height: '100%'}} src={process.env.PUBLIC_URL + '/game.html'}></iframe></div>) : (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-center">
                <p className="text-white">Please navigate to Collect Tab.</p>
                <p className="text-white">Claim your Bytes reward and collect a Token Fighter.</p>
                <p className="text-white">You must have at least 1 Fighter to play game.</p>
                <Link className='btn btn-outline-light rounded-0' to='/collect'>
                  Collect
                </Link>
            </div>
        </div>
    );
}