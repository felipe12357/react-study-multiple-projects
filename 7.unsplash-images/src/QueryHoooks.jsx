import { useQuery } from '@tanstack/react-query';
import { taskAxiosInstance } from './globalAxiosConfig';

//import {toast} from 'react-toastify';

export const UseFetchReactQueryCustomHook = (queryKey,currentSearch) =>{

    if(!currentSearch)
        currentSearch = 'cats';
    //use query es una libreria de estado, por lo q la respuesta de axios automaticamente pasa,
    //sin la necesidad de usar useState!
    const {data:imageList,isLoading,isError} = useQuery({
        //a data la renombro con el alias de taskList
        queryKey:[queryKey,currentSearch],
        //la busqueda se ejecuta cada vez q alguno de los valores del array cambie
        queryFn:async()=>{
            const {data} = await taskAxiosInstance.get(`/photos?page=1&query=${currentSearch}`);
            return data.results
        }
      })
    return {imageList,isLoading,isError} 
} 