import React from 'react'
import { Link } from 'react-router-dom'
import { TbShoppingCartOff } from "react-icons/tb";

const EmptyCart = () => {
  return (
    <div className="cartview-container emptycart-container">
        <TbShoppingCartOff style={{ fontSize: "5rem" }} />
        <h1 className="cartview-title">Tu carrito está vacío.</h1>
        <p className="emptycart-text">Te invitamos a ver nuestros productos.</p>
        <Link to="/" className="item__button emptycart-button">Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart
