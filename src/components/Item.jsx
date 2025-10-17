// recibe la prop del .map en ItemList y muestra todos los datos de cada producto en una card
// debe contener un botón, enlace o ser clickeable para navegar al detalle del producto, enviando el id en la ruta
import React from "react";
import { Link } from "react-router-dom";
import "../styles/_Item.scss";

const Item = ({ prod }) => {
    return (
        <div className="item">
            <Link to={`/item/${prod.id}`}>
                <div className="item__image">
                    <img src={prod.img} alt={prod.name}/>
                </div>
            </Link>
            <div className="item__body">
                <Link to={`/item/${prod.id}`}>
                    <h3 className="item__title">{prod.name}</h3>
                </Link>
                <p className="item__price">
                    ${prod.price.toLocaleString('es-AR')},00
                </p>
                <Link to={`/item/${prod.id}`} className="item__button">
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default Item;
