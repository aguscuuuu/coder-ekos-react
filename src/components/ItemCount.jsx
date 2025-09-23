import {useState} from 'react'

const ItemCount = ({stock, onAdd})=>{

    const[count, setCount] = useState(1)
    
    const sumar = ()=>{
        if(count < stock){
            setCount(count +1)
        }
    }
    const restar = ()=>{
        if(count > 0){
            setCount(count -1)
        }
    }
    const comprar = () => {
        onAdd(count)
    }

    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button onClick={comprar} disabled={stock === 0 || count === 0}>Comprar</button>
        </div>
    )
}

export default ItemCount