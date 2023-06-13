import React from 'react'
import imagen from '../Imagenes/Clicktton 3.png'
export const Portada3 = () => {
  return (
    <>
        <h3>¡Ni un segundo mas!</h3>
        <img className='imagen' alt='Icono del juego' src={imagen}/>
        <p>
            ¡Ponte alerta! Tienes que precionar el boton justo cuando llegue al tiempo señalado, ¿tu atencion sera suficiente para ganar?
        </p>
        <a href='#jugar3'><button>Jugar</button></a>
    </>
  )
}
