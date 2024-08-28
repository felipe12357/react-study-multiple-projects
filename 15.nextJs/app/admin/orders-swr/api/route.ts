import { getPendingOrders, updateOrderState } from "@/src/primaHandler";
// Esto se hace por medio de SWR de vercel
//https://swr.vercel.app/es-ES
export async function GET(){
    console.log('en el getto');
    const response = await getPendingOrders();
    return Response.json(response);
}

export async function POST(data:Request){

    const body = await data.json();
    const response = await updateOrderState(body.id);
    return Response.json(response);
}