import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SERVER_URL = "http://localhost:8085/api";
const APP_JSON = "application/json";
const AxiosClient = axios.create({
  baseURL: SERVER_URL,
});
//Web:
/*
const requestHandler = (req) => {
  req.headers["Accept"] = APP_JSON;
  req.headers["Content-Type"] = APP_JSON;
  const session = JSON.parse(localStorage.getItem("user"));
  if (session?.token) req.headers["Authorization"] = `Bearer ${session.token}`;
    return req;
};
AxiosClient.interceptors.request.use(
    (req)=> requestHandler(req),
    (err) => Promise.reject(err)
);
AxiosClient.interceptors.response.use(
    (res) => Promise.resolve(res.data),
    (err) => Promise.reject(err)
);

export default AxiosClient;

*/

//Movil:
const requestHandler = async (req) => {
  req.headers["Accept"] = APP_JSON;
  req.headers["Content-Type"] = APP_JSON;
  const session = JSON.parse(await AsyncStorage.getItem("user"));
  if (session?.token) req.headers["Authorization"] = `Bearer ${session.token}`;
  return req;
};

AxiosClient.interceptors.request.use(
  (req) => requestHandler(req),
  (err) => Promise.reject(err)
);

AxiosClient.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err)
);

export default AxiosClient;
