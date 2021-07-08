import React from 'react'
import Navbar from './components/NavBar';
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav';
import { Api } from './components/ContextApi'

import './App.css';

function App() {

  return (
    <div className='container'>
      <Api>
        <Navbar />
        <InfoPanel />
        <FootNav />
      </Api>
    </div>
  );
}

export default App;
