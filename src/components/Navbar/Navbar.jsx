import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData.jsx';
import { Sidebar } from '../Sidebar/Sidebar.jsx';
import '../Sidebar/Sidebar.css';
import images from '../../constants/images';

const Navbar = () => {

  const[sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
        <div className="app__navbar">
        
          <div className={sidebar ? 'app__navbar-hamburger active' : 'app__navbar-hamburger'}>
            <Link to='#' className = 'app__navbar-hamburger'>
              <GiHamburgerMenu onClick={showSidebar}/>
            </Link>
          </div>

          <div className='app__navbar-logo'>
            <img src={images.LogoLitrix} alt='Logo Red Pacifico'/>
          </div>

          <div className="app__navbar-login">
            <a href="#login" className="p__opensans">Versiones</a>
          </div>
          
        </div>

        <div className={sidebar ? 'nav-sidemenu__background active' : 'nav-sidemenu__background'}>

          <nav className={sidebar ? 'nav-sidemenu active' : 'nav-sidemenu'}>
            <ul className='nav-sidemenu__items'>

              <div className='sidebar-heading'>
                <img src={images.LogoLitrixBlanco} alt='Logo Litrix'/>
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

        </div>
      </>
      
    );
  };

  
export default Navbar;
