import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center', color:'#93556c'}}>
        <Spinner animation='border' role='status'/>
    </div>
  )
}

export default LoaderComponent