// manejar una promesa para obtener el listado de productos
// la promesa debe ejecutarse dentro de un useEffect y la respuesta guardarse en un estado
// se debe aplicar la lógica de categorías para reutilizar el componente, ya sea que la categoría exista o no
// utilizar el hook useParams para aplicar la lógica de filtrado de categorías.
// debe pasar el listado a su hijo ItemList

import { useState, useEffect } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({mensaje})=>{

    const [data, setData] = useState([])
    const {type}=useParams()

    console.log('categoria: ', type)

    useEffect(()=>{
        getProducts()
        .then((res)=> {
            if(type){
                //filtrar
                setData(res.filter((prod) => prod.category === type))
            }else{
                //type es undefined y no filtro
                setData(res)
            }
        })
        .catch((error) => console.error(error))
        //tiene que estar a la escucha del cambio de categoria
    },[type])

    // console.log(data)

    return(
        <div>
            <h1>{mensaje} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data} />
        </div>
    )
}
export default ItemListContainer