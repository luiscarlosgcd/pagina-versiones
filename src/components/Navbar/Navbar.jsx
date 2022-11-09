import react from 'react';
import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const[sidebar, setSideBar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return (

      <nav className="app__navbar">

        <div className='app__navbar-hamburger'>
          <Link to='#'>
            <GiHamburgerMenu/>
          </Link>
        </div>

        <div className="app__navbar-logo">
          <a>LOGO</a>
        </div>

        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">Version</a>
        </div>
        
        
        <div className="app__navbar-smallscreen">
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen_links">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Menu</a></li>
              <li><a>Awards</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>

        <nav className = {sidebar ? 'nav-menu active': 'nav-menu'}>
          <ul className = 'nav-menu-items'>
            <li className="navbar-toggle"></li>
              <Link to='#' className='menu-bars'>
                <a onClick={showSidebar}>Hola</a>
              </Link>
          </ul>
        </nav>

      </nav>
    );
  };
  
export default Navbar;
