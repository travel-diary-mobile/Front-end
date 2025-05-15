import axios from 'axios';

// Seu IP local Wi-Fi
const api = axios.create({
  baseURL: 'http://192.168.56.1:8080', // backend rodando na porta 8080
});

export default api;
