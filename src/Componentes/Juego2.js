import React, { useEffect, useState } from 'react'
import { Cronometro } from './Cronometro';
export const Juego2 = () => {
    const [click, setClick] = useState(0);
    const [activado,SeTactivado] = useState(false);

    useEffect(function(){
        if(activado === false){
            if(click != 0){
                alert(`¡Se acabo el tiempo! hiciste: ${click} clicks(${click/10}clicks/seg)`)
                if(localStorage.getItem('juego2')== undefined){
                    localStorage.setItem('juego2',click)
                }else{
                    if(parseFloat(localStorage.getItem('juego2')) < click){
                        localStorage.setItem('juego2',click)
                    }
                }
                document.getElementById("clickclick").innerText = "Empezar"
            }
            setClick(0)
        }
    })

  return (
    <div className='juego1'>
        <h2 id='juego2'>Click Click Click ----<strong className='White'> Clicks:{click}<Cronometro activado = {activado} guardar = {SeTactivado} /></strong></h2>
        <div className='empezar'><button id='clickclick' onClick={()=>{
            if(click == 0){
                SeTactivado(true);
                document.getElementById("clickclick").innerText = "Click Click"
            }
            setClick(click+1)
        }}>Empezar</button></div>
    </div>
  )
}
