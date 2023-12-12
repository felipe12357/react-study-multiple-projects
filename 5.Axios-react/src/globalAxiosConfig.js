import axios from "axios";

//De esta forma creo 2 instancias de axios.. con diferentes configuraciones
export const firstAxiosInstance = axios.create({
    baseURL:'https://course-api.com',
    headers: {Accept:'application/json'} 
})

firstAxiosInstance.interceptors.response.use((response)=>{
    return response.data
})

export const jokeAxiosInstance = axios.create({
    baseURL:'https://icanhazdadjoke.com',
    headers: {Accept:'application/json'} 
})

jokeAxiosInstance.interceptors.response.use((response)=>{
    console.log('ejemplo de interceptor',response);
    return response.data
},(error)=>{
    //aca podria mostrar un modal con el error que retorne el sistema
    console.error(error)
    return error
})