import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Monitor.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { getMonitor, setToken } from "../../api/Monitor";
import useTokenExpiration from "../../hooks/useTokenExpiration";
import images from "../../constants/images";

const Home = () => {
  const [monitores, setMonitores] = useState(null);
  const [expired, setExpired] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppCliente");
    if (loggedUserJSON) {
      const cliente = JSON.parse(loggedUserJSON);
      setToken(cliente.data.token);
      getMonitor(setMonitores);
      setExpired(cliente.data);
    } else {
      history.push("/");
    }
  }, []);

  useTokenExpiration(expired);

  return (
    <div className="home">
      <Navbar />
      <div
        className={monitores != null ? "content-home" : "content-home active"}
      >
        <div className="content-home__center">
          {monitores != null ? (
            <div className="content-monitor">
              <div className="content-monitor__titulo">
                <h1>Monitor de versiones Litrix</h1>
              </div>
              <Card />
            </div>
          ) : (
            <div>
              <img
                id="content-home__loading"
                src={images.loadingGIF}
                alt="Cargando..."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
