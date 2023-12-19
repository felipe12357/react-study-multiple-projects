import axios from "axios";

export const taskAxiosInstance = axios.create({
    baseURL:'https://api.unsplash.com/search/',

})

taskAxiosInstance.interceptors.request.use((config)=>{
    //ejemplo de como utilizar las variables de ambiente
    //se crea un archivo .env en la raiz del proyecto y alli se crea la variable
    config.url += `&client_id=${import.meta.env.VITE_API_KEY}`;
    return config
})
