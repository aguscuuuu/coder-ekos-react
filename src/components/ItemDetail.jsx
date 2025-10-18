import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../styles/_ItemDetail.scss'

const ItemDetail = ({ detalle }) => {
    const { addItem, cartQuantityById } = useContext(CartContext)
    const [purchase, setPurchase] = useState(false)

    // calcular stock disponible restando lo que ya está en el carrito
    const reserved = detalle?.id ? cartQuantityById(detalle.id) : 0
    const availableStock = Math.max((detalle?.stock || 0) - reserved, 0)

    const onAdd = (cantidad) => {
        setPurchase(true)
        addItem(detalle, cantidad)
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: `Agregaste el producto al carrito`,
            color: 'black',
            background: '#ffffff',
            fontSize: '16px',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000
        })
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail-img-wrapper">
                <img 
                    src={detalle.img} 
                    alt={detalle.name} 
                    className="item-detail-img" 
                />
            </div>

            <h2 className="item-detail-title">{detalle.name}</h2>
            
            <p className="item-detail-price">
                ${detalle?.price?.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0,00'}
            </p>

            <p className="item-detail-stock">
                {availableStock} unidades disponibles.
            </p>

            <p className="item-detail-description">{detalle.description}</p>

            {purchase ? (
                <Link className="item-detail-button-go-cart"  to="/cart">
                    Ir al carrito
                </Link>
            ) : (
                <ItemCount stock={availableStock} onAdd={onAdd} />
            )}
        </div>
    )
}

export default ItemDetail
