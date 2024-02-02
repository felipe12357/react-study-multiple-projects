import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 

export const products_loader =async({request},queryClient)=>{

  const queryData = {
    queryClient,
    key:'productlist'
  }

    const URLSearchParams = new URL(request.url).searchParams;
    //se pueden trabajar 1 a 1
    // console.log(URLSearchParams.get('category'));
   
    const paramsObject = Object.fromEntries(URLSearchParams);
    if(paramsObject.shipping)
      paramsObject.shipping = true;
  
    const params = (URLSearchParams.size >0) ? paramsObject : "";
    const response = await UseFetchData('products',queryData,params);
    return response;
  }