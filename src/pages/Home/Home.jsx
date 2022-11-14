import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {

  return (
    <div className='home'>
      <Navbar/>
      <div className='content-home'>
        <div className='content-home__center'>
          <h1>Content </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
