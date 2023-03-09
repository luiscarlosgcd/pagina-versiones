import React, { useEffect, useState } from "react";
import { getMonitor, getVersion } from "../../api/Monitor";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import "./Card.css";

import Modal from "../../components/Modal/Modal";
import Historial from "../../components/Historial/Historial";

const Cards = () => {
  const [openKey, setOpenKey] = useState({}); //almacena los indices de los elementos

  const handleOpenClick = (key) => () => {
    setOpenKey((state) => ({
      ...state, // <-- copy previous state
      [key]: !state[key], // <-- update value by index key
    }));
  };

  const [monitores, setMonitor] = useState(null);

  useEffect(() => {
    getMonitor(setMonitor);
  }, []);

  const [version, setVersion] = useState({});

  useEffect(() => {
    getVersion(setVersion);
  }, []); //me da la version actualizada

  const [infoKey, setInfoKey] = useState({});

  const infoClick = (key) => () => {
    setInfoKey((state) => ({
      ...state, // <-- copy previous state
      [key]: !state[key], // <-- update value by index key
    }));
  };

  let list = [],
    post1 = [],
    post2 = [];
  let contador1 = 0,
    contador2 = 0;

  function exist(list, data) {
    let final = false;
    list.map((li) => li === data && (final = true));
    return final;
  }

  function create(monitores) {
    let contador = 0;
    let list = [];
    monitores != null &&
      monitores.map((monitor) =>
        contador === 0
          ? ((list[contador] = monitor.clienteId), contador++)
          : !exist(list, monitor.clienteId) &&
            ((list[contador] = monitor.clienteId), contador++)
      );
    return list;
  }

  list = create(monitores);

  return (
    <div className="tarjeta__almacen">
      {monitores != null &&
        monitores.forEach((monitor) => {
          post2 = [];
          list[contador1] !== monitor.clienteId && contador1++;

          if (list[contador1] === monitor.clienteId && contador2 <= contador1) {
            contador2++;
            post1.push(
              <div className="tarjeta" key={monitor.clienteId}>
                <div className="tarjeta__grupo">
                  <button>{monitor.nombre}</button>
                  <div className="tarjeta__open-icon">
                    {infoKey[monitor.clienteId] ? (
                      <BiCaretUp onClick={infoClick(monitor.clienteId)} />
                    ) : (
                      <BiCaretDown onClick={infoClick(monitor.clienteId)} />
                    )}
                  </div>
                </div>

                <div
                  className={
                    infoKey[monitor.clienteId]
                      ? "tarjeta__tipos active"
                      : "tarjeta__tipos"
                  }
                >
                  {monitores.forEach((monitor) => {
                    monitor.clienteId === list[contador1] &&
                      post2.push(
                        <div className="tarjeta__tipo" key={monitor.macAddress}>
                          <div className="tarjeta__grupo-tipo">
                            <button>{monitor.tipo}</button>

                            <button
                              className="tarjeta__historial-link"
                              onClick={handleOpenClick(monitor.macAddress)}
                            >
                              Ver historial
                            </button>
                            <Modal
                              open={openKey[monitor.macAddress]}
                              setOpenKey={setOpenKey}
                              macAddres={monitor.macAddress}
                            >
                              <Historial
                                onClose={handleOpenClick(monitor.macAddress)}
                                id={monitor.macAddress}
                              />
                            </Modal>
                          </div>

                          <div className="tarjeta__grupo-datos">
                            <div className="tarjeta__grupo-datos-fila">
                              <div className="tarjeta__grupo-conjunto">
                                <div>
                                  <b className="tarjeta__grupo-dato tarjeta__grupo-datos-titulo">
                                    IP Address
                                  </b>
                                </div>
                                <div>
                                  <button className="tarjeta__grupo-dato">
                                    {monitor.ipAddress !== ""
                                      ? monitor.ipAddress
                                      : "------------------"}
                                  </button>
                                </div>
                              </div>

                              <div className="tarjeta__grupo-conjunto">
                                <div>
                                  <b className="tarjeta__grupo-dato tarjeta__grupo-datos-titulo">
                                    MAC Address
                                  </b>
                                </div>
                                <div>
                                  <button className="tarjeta__grupo-dato">
                                    {monitor.macAddress !== ""
                                      ? monitor.macAddress
                                      : "-----------------"}
                                  </button>
                                </div>
                              </div>

                              <div className="tarjeta__grupo-conjunto tarjeta__grupo-datoFecha">
                                <div>
                                  <b className="tarjeta__grupo-dato tarjeta__grupo-datos-titulo">
                                    Fecha
                                  </b>
                                </div>
                                <div>
                                  <button className="tarjeta__grupo-dato">
                                    {monitor.fecha}
                                  </button>
                                </div>
                              </div>

                              <div className="tarjeta__grupo-versiones tarjeta__grupo-conjunto">
                                <div>
                                  <b className="tarjeta__grupo-dato tarjeta__grupo-datos-titulo">
                                    Version
                                  </b>
                                </div>
                                <div className="tarjeta__grupo-version">
                                  <button className="tarjeta__grupo-dato">
                                    {monitor.version !== ""
                                      ? monitor.version
                                      : "-----------"}
                                  </button>
                                  <div
                                    className={
                                      monitor.version === version.version
                                        ? "circulo__grande green"
                                        : "circulo__grande"
                                    }
                                  >
                                    <div
                                      className={
                                        monitor.version === version.version
                                          ? "circulo__pequeño green"
                                          : "circulo__pequeño"
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  })}
                  {post2}
                </div>
              </div>
            );
          }
        })}

      {post1}
    </div>
  );
};

export default Cards;
