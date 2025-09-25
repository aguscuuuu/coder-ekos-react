// recibe la prop ItemListContainer con el listado de productos
// debe recorrer el array con .map y generar un nuevo componente Item por cada producto
// cada elemento generado por .map debe incluir una prop key unica para evitar errores de render 
import React from 'react'
import Item from './Item'
import '../styles/styles.css'

const ItemList = ({data}) => {
	// console.log(props)
    // const {data}= props
	return (
		<div className="item-list-container">
			{/* {data.map((prod)=> {
			return <Item key={prod.id} prod={prod}/>
			})} */}
			{/* {data.map((prod)=> (
				<Item key={prod.id} prod={prod}/>
			))} */}
			{data.map((prod)=>  <Item key={prod.id} prod={prod}/>)}
		</div>
	)
}

export default ItemList