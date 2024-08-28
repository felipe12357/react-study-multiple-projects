import { PrismaClient, Product } from "@prisma/client";
import { OrderRequest, ProductCreation } from "./models";

let prismaClient:PrismaClient;

const prismaHandler = ()=>{
    //asi se hace en produccion
   /*  if(!prismaClient){
        prismaClient = new PrismaClient();
    } */

    //Asi se hace en dllo,ya q cada vez q cambia el codigo se reinicia la conexion
    if (!(global as any).prismaClient) {
        (global as any).prismaClient = new PrismaClient();
    }
    prismaClient = (global as any).prismaClient;
}

prismaHandler();

export function getCategories(){ 
    return prismaClient.category.findMany({
        orderBy:{
            name:'asc'
        }
    });
}

export function getProductById(id:number){
    return prismaClient.product.findMany({
        where:{ id }
    })
}

export function insertProduct({name,price,categoryId,image}:ProductCreation){
    return prismaClient.product.create({
        data:{
            name,
            price,
            image:'',
            categoryId
        }
    })
}

export function updateProduct({name,price,categoryId,image,id}:Product){
    return prismaClient.product.update({
        where:{
            id
        },
        data:{
            name,
            price,
            image:'',
            categoryId
        }
    })
}

export function getProductsXCategory(category:string){
    return prismaClient.product.findMany({
        where:{
            category:{slug:category}
        }
    })
}


export const getProductsWithLimit= (skipNum: number, searchTerm?:string)=>{
    const productList = prismaClient.product.findMany({
        where:{
           name:{
            contains:searchTerm,
            mode:'insensitive'
           } 
         },
        take:10,    //equivalente a limit
        skip:skipNum, //equivalente a offset
        include:{
            category:{
                select:{
                    name:true
                }
            }
            
        }
    });

    const total = prismaClient.product.count({
        where:{
            name:{
             contains:searchTerm,
             mode:'insensitive'
            } 
        }
    });
    return  Promise.all( [productList, total] )
}

export function getOrdersReady(){
    return prismaClient.order.findMany({
        take:5,
        orderBy:{ orderReadyAt:'desc'},
        where:{ orderReadyAt:{not:null}},
        include:{
            OrderProducts:{
                select:{  
                    quantity:true,
                    product:true
                }
            }
        }   
    })
}

export function getPendingOrders(){
   
    return prismaClient.order.findMany({
        where:{ status:false },
        include:{   //Se usa include cuando se quiere traer toda la data de la tabla, en este caso order
            OrderProducts:{ //con est0 accedo a la tabla orderproducts
                select:{  
                    quantity:true,
                    product:{ //con esto accedo a la tabla productos
                        select:{
                            name:true,
                            price:true,
                            image:true,
                            id:true
                        }
                    }
                }
            }
        }
    })
}



export function getPendingOrdersAllData(){
    //Se usa include cuando se quiere traer toda la data de las tablas
    return prismaClient.order.findMany({
        where:{ status:false },
        include:{ //con este includo accedo a la tabla orderproducts
            OrderProducts:{
                include:{ //hago este sengundo include para acceder a la tabla product
                    product:true,
                }
            }
        }
    })
}

//ejemplo de ordenes que tengan un producto en particular
export function getOrderXproduct(productID:number){
    return prismaClient.order.findMany({
       include:{
            OrderProducts:true,
       },
       where:{ OrderProducts:{every:{productId:productID}} }
    })
}


export function updateOrderState(id:number){
    return prismaClient.order.update({
        where:{ id:id},
        data:{ status:true, orderReadyAt: new Date() }
    })
}

export function insertOrder(orderR:OrderRequest){
    const {name,total,OrderProducts} = orderR;
    return prismaClient.order.create({
        data:{
            name,
            total,
            OrderProducts: {
                create: OrderProducts.map(product =>({
                    productId:product.id,
                    quantity: product.quantity
                }))
            }
        }
    })
}
