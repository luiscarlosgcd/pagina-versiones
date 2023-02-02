import axios from "axios";

const baseUrlLogin = "http//25.65.195.188:8083/api/Usuario/login";

const getMonitor = async (state) => {
  const peticion = await axios.get("http://25.65.195.188:8083/api/Monitor/erp");
  state(peticion.data);
};

const getVersion = async (state) => {
  const peticion = await axios.get(
    "http://25.65.195.188:8083/api/Componente/version"
  );
  state(peticion.data);
};

const getLogin = async (credentials) => {
  const { data } = await axios.post(baseUrlLogin, credentials);
};

export { getMonitor, getVersion };
