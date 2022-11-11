import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='content-home'>
        <h1>Content </h1>
      </div>
    </div>
  )
}

export default Home
