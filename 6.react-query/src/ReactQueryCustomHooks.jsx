import { useQuery } from '@tanstack/react-query';
import { taskAxiosInstance } from './globalAxiosConfig';
import { useMutation,useQueryClient } from '@tanstack/react-query';
import {toast} from 'react-toastify';



export const UseFetchReactQueryCustomHook = (queryKey) =>{
    //use query es una libreria de estado, por lo q la respuesta de axios automaticamente pasa,
    //sin la necesidad de usar useState!
    const {data:taskList,isLoading} = useQuery({
        //a data la renombro con el alias de taskList
        queryKey:[queryKey],
        queryFn:async()=>{
            const {taskList} = await taskAxiosInstance.get();
           // console.log(taskList);
            return taskList
        }
      })

    return {taskList,isLoading}
} 


export const UseCreateReactQueryCustomHook = (queryKey) =>{
    const queryClient = useQueryClient();
    const {mutate:createTaskFn} = useMutation({
        mutationFn:(newElement)=>taskAxiosInstance.post('',newElement),
        onError:(error) =>{
            toast.error(error.response.data)
        },
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:[queryKey]})
        }
    })

    return createTaskFn;
}

export const UseEditReactQueryCustomHook = (queryKey) => {

    const queryClient = useQueryClient();
    const {mutate:updateTaskFn} = useMutation({
        mutationFn:({id,isDone})=>taskAxiosInstance.patch(`/${id}`,{isDone}),
        onError:(error) =>{
            toast.error(error.response.data)
        },
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:[queryKey]})
        }
    })

    return updateTaskFn
}

export const UseDeleteReactQueryCustomHook = (queryKey) => {
    const queryClient = useQueryClient();
    const {mutate:deleteTaskFn} = useMutation({
        mutationFn:(id)=>taskAxiosInstance.delete(`/${id}`),
        onError:(error) =>{
            toast.error(error.response.data)
        },
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:[queryKey]})
        }
    })

    return deleteTaskFn;
}