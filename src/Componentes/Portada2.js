import React from 'react'
import imagen from '../Imagenes/Clicktton 2.png'
export const Portada2 = () => {
  return (
    <>
         <h3>Click Click Click</h3>
        <img className='imagen' alt='Icono del juego' src={imagen}/>
        <p>
            ¡Preciosa el boton lo mas rapido que puedas!, ¿Que tan rapido puedes precionar el boton antes de que te quedes sin tiempo?
        </p>
        <button>Jugar</button>
    </>
  )
}
