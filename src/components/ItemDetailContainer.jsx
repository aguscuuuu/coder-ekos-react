import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import LoaderComponent from './LoaderComponent'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [inValid, setInvalid] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        setCargando(true)
        const docRef = doc(db, 'products', id) 
        getDoc(docRef)
            .then((res) => {
                if (res.exists()) {
                    setDetalle({ id: res.id, ...res.data() })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.error('Error al obtener el producto:', error))
            .finally(() => setCargando(false))
    }, [id])

    if (inValid) {
        return (
            <div className="text-center mt-5">
                <h1>El producto no existe.</h1>
                <Link to="/" className="btn btn-dark mt-3">
                    Ir al inicio
                </Link>
            </div>
        )
    }

    return (
        <>
            {cargando ? <LoaderComponent /> : <ItemDetail detalle={detalle} />}
        </>
    )
}

export default ItemDetailContainer
