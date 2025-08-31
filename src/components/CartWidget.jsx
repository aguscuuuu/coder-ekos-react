import "../styles/styles.css"
import { BsHandbag } from "react-icons/bs";

const CartWidget = () => {
    const cantidad = 2; 
    
    return(
        <div className="carrito">
            <BsHandbag className="carrito-icono"/>
            <span className="carrito-badge">{cantidad}</span>
        </div>
    )
}
export default CartWidget