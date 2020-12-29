import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Modal } from 'react-bootstrap';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import CollectScreen from './screens/CollectScreen';
import { ModalProvider } from 'react-simple-hook-modal';

const App = () => {
  return (
    <Router>
      <ModalProvider backdropClassName='#10206c'>
        <Header />
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
