import React from 'react'
import { Encabezado } from './Encabezado'
import { Cuerpo } from './Cuerpo'
import { Juego1 } from './Juego1'
import { Juego2 } from './Juego2'
import { Juego3 } from './Juego3'

export const Principal = () => {
  return (
    <div>
        <Encabezado/>
        <Cuerpo/>
        <Juego1/>
        <Juego2/>
        <Juego3/>
    </div>
  )
}
