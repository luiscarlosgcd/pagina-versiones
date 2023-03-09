import axios from "axios";

const baseUrlLogin = "http://25.65.195.188:8083/api/Usuario/login";

const getLogin = async (credentials) => {
  const { data } = await axios.post(baseUrlLogin, credentials);
  return data;
};

export { getLogin };
