import axios from 'axios';

export const globalAxiosInstance = axios.create({
    baseURL:'http://localhost:3000',
})

export const fetchDataAxios = async(urlSegment:string,params:Object|null = null,token:string|null=null)=>{
    const paramsTosend = (token) ? 
    { params: {...params},headers:{ 'Authorization': `Bearer ${token}`}}
    :{ params }

    const response =await globalAxiosInstance.get(urlSegment,{...paramsTosend});
    return response.data;
}