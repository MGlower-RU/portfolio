import React, { Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import DataContextFunction from './contexts/DataContext';

import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './components/Routing';

import './styles/App.scss';

function App() {
  return (
    <div className="page">
      <div className="overlay"></div>
      <Router>
        <Header />
        <DataContextFunction>
          <main className='main__wrapper'>
            <Suspense fallback='loading...'>
              <Routing />
            </Suspense>
          </main>
        </DataContextFunction>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
