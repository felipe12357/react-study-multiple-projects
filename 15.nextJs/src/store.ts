import { create } from 'zustand';
import { OrderItem } from './models';
import { Product } from '@prisma/client';

interface Store {
    order: OrderItem[],
    addToCart: (product: Product) => void,
    increaseQuantity:(id:number)=>void,
    decreaseQuantity:(id:number)=>void,
    deleteProduct:(id:number)=>void,
    clearOrder:()=>void
}

export const useStore = create<Store>((set,get) => ({
    order: [],
    addToCart: (product: Product) => {
        const { image,categoryId, ...productN } = product;
        let { order:orderlist } = get(); //permite acceder al estado

        let currentProduct = orderlist.find(productL =>productL.id === product.id)
       
        if(currentProduct){
            orderlist =  orderlist.map((productL)=>{
                if(productL.id === product.id){
                    productL.quantity = productL.quantity+=1;
                    productL.subtotal = productL.subtotal+ product.price;
                }
                return {...productL};
            })
        }else{
            currentProduct = { ...productN, quantity:1, subtotal:productN.price }
            orderlist = [...orderlist,currentProduct];
        } 

        set((state) => ({ //state nos trae el stado aun q aca no lo estoy usando
            order:[...orderlist]
        }));
    },
    increaseQuantity:(id:number)=>{
        let { order:orderlist } = get(); 

        orderlist =  orderlist.map((productL)=>{
            if(productL.id === id){
                productL.quantity = productL.quantity+=1;
                productL.subtotal = productL.subtotal+ productL.price;
            }
            return productL;
        })
        
        set((state) => ({ //state nos trae el stado aun q aca no lo estoy usando
            order:[...orderlist]
        }));
    },
    decreaseQuantity:(id:number)=>{
        let { order:orderlist } = get(); 

        orderlist =  orderlist.map((productL)=>{
            if(productL.id === id){
                productL.quantity = productL.quantity-=1;
                productL.subtotal = productL.subtotal- productL.price;
            }
            return productL;
        })

        set((state) => ({ //state nos trae el stado aun q aca no lo estoy usando
            order:orderlist.filter(productL => productL.subtotal>0)
        }));
    },
    deleteProduct:(id:number)=>{
        set((state) => ({ 
            order:state.order.filter(productL => productL.id!==id)
        }));
    },
    clearOrder:()=>{
        set((state)=>({
            order:[]
        }))
    }
}));