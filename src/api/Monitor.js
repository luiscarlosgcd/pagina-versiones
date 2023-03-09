import axios from "axios";

let token = null;
let expiration = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const setExpiration = (newExpiration) => {
  expiration = new Date(newExpiration);
};

const getMonitor = async (state) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const peticion = await axios.get(
    "http://25.65.195.188:8083/api/Monitor/erp",
    config
  );
  state(peticion.data);
};

const getVersion = async (state) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const peticion = await axios.get(
    "http://25.65.195.188:8083/api/Componente/version",
    config
  );
  state(peticion.data);
};

export { getMonitor, getVersion, setToken, setExpiration };
