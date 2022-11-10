import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData.jsx';
import { Sidebar } from '../Sidebar/Sidebar.jsx';
import '../Sidebar/Sidebar.css';

const Navbar = () => {

  const[sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
        <div className="app__navbar">
        
          <div className='app__navbar-hamburger'>
            <Link to='#' className = 'app__navbar-hamburger'>
              <GiHamburgerMenu onClick={showSidebar}/>
            </Link>
          </div>
          
          <div className="app__navbar-logo">
            <a>LOGO</a>
          </div>

          <div className="app__navbar-login">
            <a href="#login" className="p__opensans">Version</a>
          </div>
          
        </div>

        <nav className={sidebar ? 'nav-sidemenu active' : 'nav-sidemenu'}>

          <ul className='nav-sidemenu__items'>

            <div className='sidebar-heading'>
              <a>Menú</a>
            </div>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}

          </ul>

        </nav>
      </>
      
    );
  };

  
export default Navbar;
