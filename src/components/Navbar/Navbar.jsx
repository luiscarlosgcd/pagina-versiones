import React from "react";
import { useState, useEffect } from "react";
import { getVersion } from "../../api/Monitor";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import images from "../../constants/images";
import { sidebarData } from "../../constants/data";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [version, setVersion] = useState({});

  useEffect(() => {
    getVersion(setVersion);
  }, []);

  const handleLogout = async (e) => {
    window.localStorage.removeItem("loggedNoteAppCliente");
  };

  return (
    <>
      <div className="app__navbar">
        <div
          className={
            sidebar ? "app__navbar-hamburger active" : "app__navbar-hamburger"
          }
        >
          <Link to="#" className="app__navbar-hamburger">
            <GiHamburgerMenu onClick={showSidebar} />
          </Link>
        </div>

        <div className="app__navbar-logo">
          <img src={images.LogoLitrix} alt="Logo Red Pacifico" />
        </div>

        <div className="app__navbar-version f__sans-serif">
          <button>Version actual: {version.version}</button>
        </div>
      </div>

      <div
        className={
          sidebar
            ? "nav-sidemenu__background active"
            : "nav-sidemenu__background"
        }
      >
        <nav className={sidebar ? "nav-sidemenu active" : "nav-sidemenu"}>
          <ol className="nav-sidemenu__items">
            <div className="sidebar-heading">
              <img src={images.LogoLitrixBlanco} alt="Logo Litrix" />
            </div>

            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <button>{item.title}</button>
                  </Link>
                </li>
              );
            })}
            <li className="side-text">
              <Link to="/">
                <button onClick={handleLogout}>Cerrar sesión</button>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
