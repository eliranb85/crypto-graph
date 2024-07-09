// src/App.js
import React from 'react';
import './App.css';
import CryptoGraph from './CryptoGraph';
import StockdioWidget from './StockdioWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StockdioWidget />
        <h1>Cryptocurrency Prices</h1>
        <CryptoGraph />
        <h2>Economic News</h2>
 
      </header>
    </div>
  );
}

export default App;
