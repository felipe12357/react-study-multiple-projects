import { globalAxiosInstance } from  '../utils/axios-config';


export const UseFetchData = async(urlSegment,params=null,token) =>{
    let response;
    if(token){
        response = await globalAxiosInstance.get(`/${urlSegment}`,params,{ 
            headers: { 'Authorization': `Bearer ${token}`}
        })
    }else
        response = await globalAxiosInstance.get(`/${urlSegment}`,{params});

    return response.data;
} 

export const UsePostData = async(urlSegment,params,token) =>{
    let response;
    if(token){
        response = await globalAxiosInstance.post(`/${urlSegment}`,params,{ 
            headers: { 'Authorization': `Bearer ${token}`}
        })
    }
    else
        response = await globalAxiosInstance.post(`/${urlSegment}`,params)

    return response.data;
}