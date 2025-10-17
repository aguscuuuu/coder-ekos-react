import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../styles/_ItemDetail.scss'

const ItemDetail = ({ detalle }) => {
    const { addItem } = useContext(CartContext)
    const [purchase, setPurchase] = useState(false)

    const onAdd = (cantidad) => {
        setPurchase(true)
        addItem(detalle, cantidad)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Agregaste ${detalle.name} al carrito`,
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000
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
                {detalle.stock} unidades disponibles.
            </p>

            <p className="item-detail-description">{detalle.description}</p>

            {purchase ? (
                <Link className="item-detail-button-go-cart"  to="/cart">
                    Ir al carrito
                </Link>
            ) : (
                <ItemCount stock={detalle.stock} onAdd={onAdd} />
            )}
        </div>
    )
}

export default ItemDetail
