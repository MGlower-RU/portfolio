import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './components/Routing';

import './styles/App.scss';

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <main className='main__wrapper'>
          <Routing />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
