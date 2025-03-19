import axios from "axios"; 

const api = axios.create({
    baseURL:'https://apiteste.mobieduca.me/api/',
    headers: {
        'Content-Type': 'application/json' // Define o Content-Type globalmente
    }
});

export default api; 