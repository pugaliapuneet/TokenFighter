import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Modal } from 'react-bootstrap';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import CollectScreen from './screens/CollectScreen';
import { ModalProvider } from 'react-simple-hook-modal';
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useUserAddress } from "eth-hooks";
import { useUserProvider } from "./hooks";

import { INFURA_ID, DAI_ADDRESS, DAI_ABI } from "./constants";

/*
  Web3 modal helps us "connect" external wallets:
*/
const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
  theme: {
    background: "#10206c",
    main: "#fff",
    secondary: "rgb(199, 199, 199)",
    border: "2px solid #5a73d6",
    hover: "rgb(16, 26, 32)"
  }
});

const logoutOfWeb3Modal = async () => {
  await web3Modal.clearCachedProvider();
  setTimeout(() => {
    window.location.reload();
  }, 1);
};
const App = () => {
  const [injectedProvider, setInjectedProvider] = useState();

  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const userProvider = useUserProvider(injectedProvider);
  const address = useUserAddress(userProvider);

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new Web3Provider(provider));
  }, [setInjectedProvider]);
  
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  return (
    <Router>
      <ModalProvider backdropClassName='#10206c'>
        <Header
          address={address}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
      </ModalProvider>
      <main>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/collect' component={CollectScreen} />
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
