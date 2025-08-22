import { createContext, useState } from "react";

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cart,setCart]=useState([]);

    const addItem = (item,quantity)=>{
        if (isInCart(item.id)){
            const product=cart.find(prod=>prod.id==item.id)
            product.quantity += quantity
            setCart([...cart])
        }else{
            const product={...item,quantity:quantity}
            setCart([...cart, product])
        }
    }

    const removeItem = ()=>{

    }

    const clear = ()=>{
        setCart([])
    }

    const isInCart = (id)=>{
        const validar=cart.some(item=>item.id==id)
        console.log(validar)
        return validar
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem ,clear}} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider