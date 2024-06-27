import axios from 'axios';
const baseURL = `http://192.168.9.1:8080`;
const api = axios.create({
  baseURL,
});
export default api;
