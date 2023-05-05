import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jeangondorek-friendly-space-fiesta-54p4gg4vggj345vg-3001.preview.app.github.dev/'
});

export default api;