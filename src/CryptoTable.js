// src/CryptoTable.js
import React from 'react';
import "./index.css";

const CryptoTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td>{coin.market_cap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
