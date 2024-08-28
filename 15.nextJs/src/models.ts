import { Order,Product } from "@prisma/client"

export type OrderItem = Omit<Product, 'categoryId' | 'image'> & {
    quantity:number,
    subtotal:number
}

export type OrderRequest = Omit<Order, 'id' | 'orderReadyAt' | 'date' | 'status'> & {
    OrderProducts:OrderItem[]
}

export type OrderComplete = Order & {
    OrderProducts:{
        quantity:number,
        product:Pick<Product, 'name' | 'price' | 'image' | 'id'>
    }[]
}

export type ProductCreation =Omit<Product,'id'>
 
