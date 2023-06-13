import React from 'react'
import icono from '../Imagenes/Clicktton.png'
import { Link,BrowserRouter } from 'react-router-dom'
export const Encabezado = () => {
  return (
    <div className='encabezado'>
        <img id='icono' src={icono} alt='icono de la pagina'/>
        <div id='titulos'>
          
            <Link to='/Records'><p>Records</p></Link>
            <Link to='/Crear'><p>Crear Cuenta</p></Link>
            <Link to='/IniciarSesion'><p>Inicia Sesion</p></Link>
            <Link to='/Contactanos'><p>Contactanos</p></Link>
          
        </div>
    </div>
  )
}
