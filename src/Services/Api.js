import axios from 'axios';

const api = axios.create({
    baseURL: 'link da api rodando, projeto em https://github.com/jeangondorek/api-rest-nodejs'
});

export default api;
