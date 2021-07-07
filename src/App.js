import React from 'react'
import Navbar from './components/NavBar';
import InfoPanel from './components/InfoPanel';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <InfoPanel />
    </div>
  );
}

export default App;
