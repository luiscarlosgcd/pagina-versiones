import React, {useEffect, useState} from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { getMonitor } from '../../api/Monitor';

const Home = () => {

  const [monitores, setMonitor] = useState(null)

  useEffect(() => {
    getMonitor(setMonitor)
  },[])

  return (
    <div className='home'>
      <Navbar/>
      <div className='content-home'>
        <div className='content-home__center'>
          {monitores != null ? ( 
            monitores.map(monitor => (
              <div key={monitor.macAddress} className='content-home__data'>
                <b href="#" className="content-home__data-single">{monitor.tipo}</b>
                <a href="#" className="content-home__data-single">Grupo: {monitor.group}</a>
                <a href="#" className="content-home__data-single">MAC Address: {monitor.macAddress}</a>
                <a href="#" className="content-home__data-single">IP Address: {monitor.ipAddress}</a>
                <u href="#" className="content-home__data-single">Version: {monitor.version}</u>
              </div>
            ))
          ) : ('Sin servicio')}
        </div>
      </div>
    </div>
  )
}

export default Home
