import React from 'react'
import img from '../Imagenes/Clicktton.png'
import { Link } from 'react-router-dom'
export const Contactanos = () => {
  return (
    <div className='Contactanos'>
        <Link to='/'><img className='logo' alt='IconoClicktton' src={img}/></Link>
        <p>
            Correos:<br/>
            daniel.supelanos@unac.edu.co<br/>
            andres.
        </p>
        <p>
            Telefonos:<br/>
            3052509653<br/>

        </p>
    </div>
  )
}
