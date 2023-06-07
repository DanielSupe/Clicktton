import React from 'react'
import imagen from '../Imagenes/Clicktton 1.png'
export const Portada1 = () => {
  return (
    <>
        <h3>¡Atrapame si puedes!</h3>
        <img className='imagen' alt='Icono del juego' src={imagen}/>
        <p>
            El boton se movera alrededor de la pantalla. ¡trata de tocarlo la mayor cantidad de veces posibles antes de que se termine el tiempo
        </p>
        <button>Jugar</button>
    </>
  )
}
