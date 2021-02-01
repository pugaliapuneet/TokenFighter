import React from 'react';

import Main from '../components/Main';

const HomeScreen = ({web3Modal, loadWeb3Modal}) => {
  return (
    <div>
      <Main web3Modal={web3Modal} loadWeb3Modal={loadWeb3Modal} />
    </div>
  );
};

export default HomeScreen;
