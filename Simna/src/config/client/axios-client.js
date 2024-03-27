import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SERVER_URL = "http://localhost:8085";
const APP_JSON = "application/json";
const AxiosClient = axios.create({
  baseURL: SERVER_URL,
});

const requestHandler = async (req) => {
  req.headers["Accept"] = APP_JSON;
  req.headers["Content-Type"] = APP_JSON;
  const userToken = await AsyncStorage.getItem("userToken");
  if (userToken) req.headers["Authorization"] = `Bearer ${userToken}`;
  return req;
};

AxiosClient.interceptors.request.use(
  async (req) => await requestHandler(req),
  (err) => Promise.reject(err)
);

AxiosClient.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => {
    console.error("Error de respuesta:", err); // Agrega esta línea para depurar
    return Promise.reject(err);
  }
);

export default AxiosClient;
