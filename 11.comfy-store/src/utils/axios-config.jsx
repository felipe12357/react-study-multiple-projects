import axios from 'axios';

export const globalAxiosInstance = axios.create({
    baseURL:'https://strapi-store-server.onrender.com/api',

})
