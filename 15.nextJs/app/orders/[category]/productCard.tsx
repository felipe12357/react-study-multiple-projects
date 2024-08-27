"use client"
import { useStore } from "@/src/store";
import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

export type ProductProps = {
    product:Product
}

const ProductCardComponent = ({product}:ProductProps)=>{
    const addToCart = useStore((state)=> state.addToCart);
    const handleClick = ()=>{
        addToCart(product);
    }
    return (
            <div className="border bg-white">
                <Image 
                    width={400}
                    height={300}
                    src={`/products/${product.image}.jpg`}
                    alt={`Imagen platillo ${product.name}`}
                    quality={60}
                />
                <div className="p-5">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="mt-5 font-black text-4xl text-amber-500">
                        {formatCurrency(product.price)}
                    </p>
                    <button 
                        type="button" onClick={handleClick}
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 
                                    uppercase font-bold cursor-pointer">
                        Agregar
                    </button>
                </div>
            </div>
    )
}
export default ProductCardComponent;