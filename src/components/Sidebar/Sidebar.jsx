import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';


const Sidebar = () => {

    const[sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu'>
                        <AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.tittle}</span>
                        </Link>
                    </li>
                );
                })}
            </ul>
        </nav>
    )
}

export default Sidebar;