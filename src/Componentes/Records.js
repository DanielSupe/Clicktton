import React, { useEffect, useState } from 'react'
import '../Records.css'
export const Records = () => {

  return (
    <div className='Records'>
        <div className='tabla'>
            <h2 id='tituloRec'>Records</h2>
            <p>¡Atrapame si puedes!</p>
            <p>{localStorage.getItem('clave')}cliks({parseFloat(localStorage.getItem('clave')/10)} click por segundo)</p>
            <p>Click Click Click</p>
            <p>{localStorage.getItem('juego2')}clicks({parseFloat(localStorage.getItem('juego2')/10)} click por segundo)</p>
            <p>¡Ni un segundo mas!</p>
            <p>{localStorage.getItem('juego3')}% de error</p>
        </div>
        <div id='formatear'>
            <button onClick={()=>{
                localStorage.clear()
                alert("Records reiniciados")
            }} id='formatearButton'>
            <p>Reiniciar records</p>  
            <img id='volver' src='https://cdn-icons-png.flaticon.com/512/13/13964.png'/>
            </button>
            
        </div>
    </div>
  )
}
