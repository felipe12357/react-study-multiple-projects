import axios from "axios";
import {toast} from 'react-toastify'

export const taskAxiosInstance = axios.create({
    baseURL:'http://localhost:5000/api/tasks',
})

taskAxiosInstance.interceptors.response.use((response)=>{
    if(response.config.method!=='get' && response.status === 200)
        toast.success('List updated');

    return response.data
})


