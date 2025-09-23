import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>Esta ruta no existe</h1>
        <Link to='/'>Volver al inicio</Link>
    </div>
  )
}

export default Error