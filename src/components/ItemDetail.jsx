// recibe la prop de su padre ItemDetailContainer y muestra la información del producto
// aplica la lógica del carrito

import React from 'react'
import ItemCount from './ItemCount'
import '../styles/_ItemDetail.scss'

const ItemDetail = ({detalle}) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades de ${detalle.name}`)
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail-img-wrapper">
                <img src={detalle.img} alt={detalle.name} className="item-detail-img"/>
            </div>
            <h2 className="item-detail-title">{detalle.name}</h2>
            <p className="item-detail-price">
                ${detalle?.price?.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0,00'}
            </p>

            <p className="item-detail-stock">{detalle.stock} unidades disponibles.</p>
            <ItemCount stock={detalle.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail