import { globalAxiosInstance } from  '../utils/axios-config';


export const UseFetchData = async(urlSegment,params=null) =>{
    const response = await globalAxiosInstance.get(`/${urlSegment}`,{params});
    return response.data;
} 
