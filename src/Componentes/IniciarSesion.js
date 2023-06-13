import React from 'react'
import './IniciarSesion.css'
import { Link } from 'react-router-dom'
import logo from'../Imagenes/Clicktton.png'
export const IniciarSesion = () => {
  return (
    <div className='IniciarSesion'>
        <div className='iniciar'>
            <Link to='/'><img className='logo' alt='logoClickTTon' src={logo}/></Link>
            <h1 id='title'>Iniciar sesión</h1>
            <div className='formularioInicio'>
                <input className='input' type='text' placeholder='Usuario'/>
                <input className='input' type='password' placeholder='Contraseña'/>
            </div>
            <button id='botonIngresar'>Ingresar</button>
        </div>
    </div>
  )
}
