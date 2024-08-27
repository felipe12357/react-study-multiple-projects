import { z } from 'zod'; //Esto es para la validacion de formularios
//lo bueno de zod es q esta validacion se puede hace tanto desde el front como desde back
export type ErrorList ={
    issues:{message:string,code:string}[]
}

export type ResultZoadType = {
    success:boolean,
    error:ErrorList
}

//ver orderSummary (client) y create-order-action (server)
export const  OrderSchema = z.object({
    name: z.string().min(1, 'Tu Nombre es Obligatorio'),
    total:z.number().min(1, 'La orden esta vacia'),
    OrderProducts:z.array( z.object({
        id:z.number(),
        name:z.string(),
        price:z.number(),
        quantity:z.number(),
        subtotal:z.number()
    }))
})

export const createProductSchema = z.object({
    name: z.string().trim().min(1, 'El Nombre es Obligatorio'),
    price:z.number().min(1, 'El Precio esta vacio'),
    categoryId:z.number().min(1, 'No has seleccionado una categoria'),
});

export const SingleInputRequiredSchema = z.object({
    search:z.string().trim().min(1,{message:'el campo no puede estar vacio'})
})