export const calculateTotals=(productList)=>{

    let totalAmount=0;
    let totalPrice=0;
    
    for(const product of productList.values()){
        totalAmount = totalAmount+product.amount;
        totalPrice = totalPrice + (parseInt(product.amount)*product.price);
    }

    totalPrice = totalPrice.toFixed(2)

    return {totalAmount,totalPrice}
}