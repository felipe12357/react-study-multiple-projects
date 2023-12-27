import { useQuery } from '@tanstack/react-query';
import { globalAxiosInstance,newsletterAxiosInstance } from '../utils/axios-config';


export const UseFetchDrinksReactQueryCustomHook = (queryKey,currentSearch,searchby) =>{

    //use query es una libreria de estado, por lo q la respuesta de axios automaticamente pasa,
    //sin la necesidad de usar useState!
    const {data:drinks,isLoading,isError} = useQuery({
        //a data la renombro con el alias de taskList
        queryKey:[queryKey,currentSearch],
        //la busqueda se ejecuta cada vez q alguno de los valores del array cambie
        queryFn:async()=>{
            const {data} = await globalAxiosInstance.get(`/${SEARCH_END_POINT_ENUM[searchby]}.php?${searchby}=${currentSearch}`);
            return data.drinks
        }
      })

    return {drinks,isLoading,isError} 
} 

export const UsePostNewsLetterCustomHook = async (data)=>{
    const response = await newsletterAxiosInstance.post('',data);
    return response;
}

const SEARCH_END_POINT_ENUM = {
    s:'search',
    i:'lookup'
}

export const SEARCH_TYPE_ENUM = {
    NAME:'s',
    ID:'i'
}