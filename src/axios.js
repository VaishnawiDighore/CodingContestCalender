import axios from 'axios';

const API = axios.create({
    baseURL: "https://kontests.net/api/v1",
});

export default API;