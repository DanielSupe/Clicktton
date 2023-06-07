import React from 'react'
import { Portada1 } from './Portada1'
import { Portada2 } from './Portada2'
import { Portada3 } from './Portada3'

export const Cuerpo = () => {
  return (
    <div className='cuerpo'>
        <div className='contenedor'>
            <div className='juego1'>
                <Portada1/>
            </div>

            <div className='juego2'>
               <Portada2/>
            </div>

            <div className='juego3'>
                <Portada3/>
            </div>
        </div>
    </div>
  )
}
