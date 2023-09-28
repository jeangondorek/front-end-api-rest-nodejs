import axios from 'axios';

const apiurl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: apiurl
});

export default api;
