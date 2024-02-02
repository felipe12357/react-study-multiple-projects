import { globalAxiosInstance } from  '../utils/axios-config';

export const UseFetchData = async(urlSegment,queryData,params=null,token=null) =>{
  
    const paramsTosend = (token) ? 
        {params:{...params},headers:{ 'Authorization': `Bearer ${token}`}}
        :{params}


    const fetchQuery = {
        queryKey: [queryData.key,params],
        queryFn: () => globalAxiosInstance.get(`/${urlSegment}`,{...paramsTosend}),
      }; 
    
    const response = await queryData.queryClient.ensureQueryData(fetchQuery);
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