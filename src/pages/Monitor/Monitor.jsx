import React, {useEffect, useState} from 'react';
import './Monitor.css';
import Navbar from '../../components/Navbar/Navbar';
import { getMonitor } from '../../api/Monitor';
import images from '../../constants/images';
import Card from '../../components/Card/Card'

const Home = () => {

  const [monitores, setMonitor] = useState(null)

  useEffect(() => {
    getMonitor(setMonitor)
  },[])
  


  return (
    <div className='home'>
      <Navbar/>
      <div className={monitores != null ? 'content-home' : 'content-home active'}>
        <div className='content-home__center'>
          {monitores != null ? ( 
            <div className='content-monitor'>
              <div className='content-monitor__titulo'>
                <h1>Monitor de versiones Litrix</h1>
              </div>
              <Card/>
            </div>    
          ) : (<img id='content-home__loading' src={images.loadingGIF} alt='Cargando...'/>)}
        </div>
        
      </div>
    </div>
  )
}

export default Home