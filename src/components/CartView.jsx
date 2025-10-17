import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BsHandbag } from "react-icons/bs";

const CartView = () => {
    const {cart, clear, removeItem, total} = useContext(CartContext)
    const preConfirm = ()=> {
        Swal.fire({
            title:'¿Estas seguro de borrar todo el carrito?',
            icon:'question',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }else if(result.isDenied){
                //poner algo si declinan
            }
        })
    }
  return (
    <div className='cartview-container'>
        <BsHandbag style={{fontSize: "1.5rem"}}/>
        <h1 className='cartview-title'>Carrito de compras</h1>
        <div className='cartview-list'>
            {cart.map((compra)=>(
                <div key={compra.id} className='cart-item'>
                    <img src={compra.img} alt={compra.name} className='cart-item-img'/>
                    <span className='cart-item-name'>{compra.name}</span>
                    <span className='cart-item-price'>${compra.price.toLocaleString('es-AR')},00</span>
                    <span className='cart-item-quantity'>{compra.quantity}</span>
                    <span className='cart-item-finalprice'>${(compra.price*compra.quantity).toLocaleString('es-AR')},00</span>
                    <button className="item__button" onClick={()=> removeItem(compra.id)}>X</button>
                </div>
            ))}
        </div>
        <span  className='cartview-total'>Total: ${total().toLocaleString('es-AR')},00</span>
        <div className='cartview-actions'>
            <button className="item__button" onClick={preConfirm}>Vaciar Carrito</button>
            <Link to='/checkout' className="item__button">Terminar Compra</Link>
        </div>
    </div>
  )
}

export default CartView