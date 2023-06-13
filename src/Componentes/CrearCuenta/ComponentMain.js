import React from 'react'
import Formulario from './Formulario'
import imagen from '../../Imagenes/Clicktton.png'
import { Link } from 'react-router-dom'
export const ComponentMain = () => {
  return (
    <div className='root2'>
      <div className='principal'>
              <div>
                  <Link to='/'><img className='logo' src={imagen}/></Link>
              </div>
              <h1 className='titulo'>Crea tu cuenta</h1>
              <Formulario/>
      </div>
    </div>
  )
}
