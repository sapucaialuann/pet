import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pets-trabgdp-default-rtdb.firebaseio.com'
});

export default api;