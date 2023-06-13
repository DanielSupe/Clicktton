import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function Formulario() {

    const a = function(e){
        return usuario.length >= 6 ? 'rojo':'verde'
    }

    const [usuario, SetUsuario] = useState("")

    const [contraseña,Setcontraseña] = useState("");

    const [confirmar,Setconfirmar] = useState("");
  return (
    <div className='formulario'>
        <form>
            <input type='text' placeholder='Nombres:'/>

            <input type='text' placeholder='Apellidos: '/>
            <br/>
            <label id='label'>
                <input id='usuarioid' className={usuario.length >= 9 ? 'verde1':'rojo1'} onChange={function(e){
                    SetUsuario(e.target.value)
                }} placeholder='Nombre de usuario: '/>
            </label>
            <input onChange={function(e){
                Setcontraseña(e.target.value)
            }} className={contraseña.length >= 9 ? 'verde1':'rojo1'} id='contrasenaid'  placeholder='Contraseña: '/>

            <input onChange={function(e){
                Setconfirmar(e.target.value)
            }} className={confirmar.length >= 9 && confirmar == contraseña ? 'verde1':'rojo1'} id='contrasenaid'  placeholder='Confirmar Contraseña: '/>
            <p> </p>
            {usuario.length >= 9 && contraseña.length >= 9 && confirmar == contraseña ? (<p id='cuentavalida'>La cuenta es valida</p>):null }
            <div className='flexCuenta'>
                <p>Ya tienes cuenta?</p>
                
                <Link to='/IniciarSesion'><p id='iniciarS'>IniciarSesion</p></Link>
            </div>
            
            <button>Crear Cuenta</button>
            
            
            


        </form>
    </div>
  )
}
