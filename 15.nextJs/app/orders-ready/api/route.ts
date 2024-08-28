import { getOrdersReady } from "@/src/primaHandler";

export async function GET(){

    const response = await getOrdersReady();
    return Response.json(response);
}