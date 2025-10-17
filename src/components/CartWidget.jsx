import "../styles/styles.css"
import { BsHandbag } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cart, cartQuantity}= useContext(CartContext)
    
    return(
        <div className="carrito" >
            <BsHandbag className="carrito-icono" />
            {cart.length > 0 && <span className="carrito-badge">{cartQuantity()}</span>}
        </div>
    )
}

export default CartWidget