import { globalAxiosInstance } from  '../utils/axios-config';


export const UseFetchData = async(urlSegment,params=null,token) =>{
  
    const paramsTosend = (token) ? 
        {params:{...params},headers:{ 'Authorization': `Bearer ${token}`}}
        :{params}

    const response = await globalAxiosInstance.get(`/${urlSegment}`,{...paramsTosend});
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