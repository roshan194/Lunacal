// src/App.js
import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app-container">
      <div className="empty-space"></div> 
      <div className="widgets-container">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
}

export default App;