import React from 'react'
import icono from '../Imagenes/Clicktton.png'
export const Encabezado = () => {
  return (
    <div className='encabezado'>
        <img id='icono' src={icono} alt='icono de la pagina'/>
        <div id='titulos'>
        <p>Inicio</p>
        <p>Crear Cuenta</p>
        <p>Inicia Sesion</p>
        <p>Contactanos</p>
        </div>
    </div>
  )
}
