import React, { Suspense, useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import DataContextFunction from './contexts/DataContext';
import I18nContextFunction from './contexts/i18nextContext';

import Loading from './components/Loading';
import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './components/Routing';

import './components/i18n'

import './styles/App.scss';

function App() {
  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng')
    document.querySelectorAll('.language')
    .forEach(el => {
      if(el.dataset.lngNative === lng) el.classList.add('current')
    })
  }, [])

  return (
    <div className="page">
      <div className="overlay"></div>
      <Router>
        <I18nContextFunction>
          <Header />
          <DataContextFunction>
            <main className='main__wrapper'>
              <Suspense fallback={<Loading/>}>
                <Routing />
              </Suspense>
            </main>
          </DataContextFunction>
          <Footer />
        </I18nContextFunction>
      </Router>
    </div>
  );
}

export default App;
