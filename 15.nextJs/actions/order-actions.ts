//las sever actions siempre son asyncronas y estan relacionadas cuando queremos trabajar con operaciones CRUD
"use server"

import { OrderRequest } from "@/src/models";
import { insertOrder, updateOrderState } from "@/src/primaHandler";
import { OrderSchema, ResultZoadType } from "@/src/utils/formsValidations";
import { revalidatePath } from "next/cache";


//este es un approach diferente y en los componentes tipo server la informacion se manda por medio del form
export async function updateOrderStateAction(forma:FormData){
    const id = Number(forma.get('id'));
    await updateOrderState(id);
    //con esta linea limpio la cache de la pagina y carga la nueva informacion
    revalidatePath('/admin/orders')    
}

export async function createOrderAction(data:OrderRequest){
    //debido a q zod crea un objeto diferente con algunas funciones innecesarias, toca mapear la respuesta
    //hago la validacion del formulario desde el back
    const result = OrderSchema.safeParse(data) as ResultZoadType;
    if(!result.success)
        return {
            success: result.success,
            error:{ issues:result.error.issues }
        }
    else{
        const result = await insertOrder(data);
        if(result.id)
            return {success:true}
    }
}