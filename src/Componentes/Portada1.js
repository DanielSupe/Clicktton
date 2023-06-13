import React from 'react'
import imagen from '../Imagenes/Clicktton 1.png'
export const Portada1 = () => {
  return (
    <>
        <h3>¡Atrapame si puedes!</h3>
        <img className='imagen' alt='Icono del juego' src={imagen}/>
        <p>
            El boton cambiara de lugar cada que lo atrapes. ¡trata de tocarlo la mayor cantidad de veces posibles antes de que se termine el tiempo
        </p>
        <a href='#jugar1'><button>Jugar</button></a>
    </>
  )
}
