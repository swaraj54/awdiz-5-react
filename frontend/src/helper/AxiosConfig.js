import axios from "axios";

const myBackendUrl = procese.env.BACKEND_MODE === 'development'
    ? "http://localhost:8000/1pi/v1"
    : procese.env.BACKEND_MODE === 'staging' ? "http://localhost:8000/1pi/v1"
        : "http://localhost:8000/1pi/v1"

const api = axios.create({ url: myBackendUrl })

export default api;