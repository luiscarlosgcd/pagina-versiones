import React from 'react';
import './Componentes.css';
import Navbar from '../../components/Navbar/Navbar';

const Componentes = () => {
  return (
    <div>
      <Navbar/>
      <div className='content-monitor'>
        <h1>Monitor</h1>
      </div>
    </div>
  )
}

export default Componentes