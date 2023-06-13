import React,{useEffect, useState} from 'react'
import { Cronometro } from './Cronometro'

export const Juego3 = () => {
    const [activado,SeTactivado] = useState(false);
    const [click,SetClick] = useState(0);

    const reiniciar = () => {
        SeTactivado(false);
        document.getElementById("EmpezarButt").innerText = "Empezar"
       ;
      };


      useEffect(()=>{
        if(activado === false && click != 0){
            let milis = Math.abs(parseFloat(localStorage.getItem('clave5')-5000)/5000)*100

            if(localStorage.getItem('juego3')== undefined){
                localStorage.setItem('juego3',milis)
            }else{
                if(localStorage.getItem('juego3') > milis){
                    localStorage.setItem('juego3',milis)
                }
            }

            if(milis >= 80){
                alert(`Nisiquiera lo estas intentando (${milis}% de error)`)
            }
            if(milis >= 40 && milis < 80){
                alert(`¡Ponle mas ganas! (${milis}% de error)`)
            }
            if(milis >= 10 && milis < 40){
                alert(`Casi casi, pero no (${milis}% de error)`)
            }

            if(milis < 10){
                alert(`¡Por un pelin! (${milis}% de error)`)
            }
            if(milis == 0){
                alert(`Perfecto (${milis}% de error)`)
            }

            
            SetClick(0)
            SeTactivado(false)
        }
      },[click,activado])

  return (
    <div className='juego1'>
        <h2 id='jugar3'>¡Ni un segundo mas! --- Trata de presionar el boton cuando este en el segundo 5:000</h2>
        <strong className='White Crom3'><Cronometro activado={activado} guardar={SeTactivado} reiniciar={reiniciar} /></strong>
        <div className='empezar3'>
            <button onClick={function(){
                if(click == 0){
                    SeTactivado(true)
                    SetClick(click+1)
                    document.getElementById("EmpezarButt").innerText = "Pausa"
                    console.log("me active")
                }
                
                if(click == 1){
                    reiniciar()
                }
            }} id='botonEmpezar'><p id="EmpezarButt">Empezar</p></button>
        </div>
    </div>
  )
}
