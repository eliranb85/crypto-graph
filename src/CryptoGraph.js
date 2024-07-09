// src/CryptoGraph.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Modal from 'react-modal';
import CryptoTable from './CryptoTable';
import "./index.css";

// Set the app element for accessibility
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CryptoGraph = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        const result = Object.values(response.data).flat();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}id="datatable">Show Data Table</button>

      <ResponsiveContainer width="120%" height={400}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="current_price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="name" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Crypto Data Table"
      >
        <button onClick={closeModal}>Close</button>
        <CryptoTable data={data} />
      </Modal>
    </div>
  );
};

export default CryptoGraph;
