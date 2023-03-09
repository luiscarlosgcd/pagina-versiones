import React, { useState, useEffect } from "react";
import "./Componentes.css";
import Navbar from "../../components/Navbar/Navbar";
// import { fetchMonitor, setToken } from "../../api/MonitorPrueba.test";
import { getMonitor, setToken } from "../../api/Monitor";
import useTokenExpiration from "../../hooks/useTokenExpiration";

const Componentes = () => {
  const [monitor, setMonitor] = useState([]);
  const [expired, setExpired] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppCliente");
    if (loggedUserJSON) {
      const cliente = JSON.parse(loggedUserJSON);
      if (cliente) {
        setToken(cliente.data.token);
        getMonitor(setMonitor);
        setExpired(cliente.data);
      } else {
      }
    }
  }, []);

  useTokenExpiration(expired); // useEffect that checks if token is expired or not

  // useEffect(() => {
  //   const getMonitor = async () => {
  //     const result = await fetchMonitor();
  //     setMonitor(result);
  //   };
  //   getMonitor();
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="content-compotente">
        {monitor !== null ? <a>Permitido</a> : <a>No permitido</a>}
      </div>
    </div>
  );
};

export default Componentes;
