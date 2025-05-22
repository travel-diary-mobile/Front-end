import axios from 'axios';

const api = axios.create({
    baseURL: 'https://traveldiary.azurewebsites.net/diarioviagens'
})

export default api;