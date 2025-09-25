// contador que permite aumentar hasta el stock disponible y no ir a valores negativos.
// hijo de ItemDetail
import {useState} from 'react'
import '../styles/_ItemDetail.scss'

const ItemCount = ({stock, onAdd})=>{

    const[count, setCount] = useState(1)
    
    const sumar = ()=>{
        if(count < stock){
            setCount(count +1)
        }
    }
    const restar = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const comprar = () => {
        onAdd(count)
    }

    return(
        <div className="item-count-container">
            <button className="item-count-button-add" onClick={restar}>-</button>
            <span className="item-count">{count}</span>
            <button className="item-count-button-remove" onClick={sumar}>+</button>
            <button className="item-count-button-buy" onClick={comprar} disabled={stock === 0 || count === 0}>Comprar</button>
        </div>
    )
}

export default ItemCount