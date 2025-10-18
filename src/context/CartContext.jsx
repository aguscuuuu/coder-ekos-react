import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addItem = (item, qty)=>{
        if(isInCart(item.id)){
            console.log('ya existe en el carrito')
            setCart(
                cart.map((prod)=>{
                    if(item.id === prod.id){
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        return prod
                    }
                })
            )
        }else{
            setCart([...cart, {...item, quantity:qty}])
        }
    }

    const clear = ()=>{
        setCart([])
    }

    const removeItem = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart=(id)=>{
        return cart.some((prod)=> prod.id === id)
    }

    const total = () =>{
        return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity),0)
    }

    const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    const cartQuantityById = (id) => {
        const item = cart.find((p) => p.id === id)
        return item ? item.quantity : 0
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, cartQuantity, cartQuantityById }}>
            {children}
        </CartContext.Provider>
    )
}