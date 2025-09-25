// ruta de error en caso que la ruta no exista

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/_Error.scss'

const Error = () => {
    console.error("Error 404 - Ruta no encontrada")
    return (
        <div className="error-container">
            <h1>404</h1>
            <p>La página que estás buscando no pudo ser encontrada.</p>
            <Link to='/'>Volver al inicio</Link>
        </div>
    )
}

export default Error