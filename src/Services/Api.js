import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jeangondorek-curly-carnival-7r4rvvrv64rhrj5x-3001.preview.app.github.dev/'
});

export default api;