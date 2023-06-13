import React, { useEffect, useState } from 'react'
import { Cronometro } from './Cronometro';

const posiciones = ["position1","position2","position3","position4","position5","position6","position7","position8","position9","position10","position11","position12","position13","position14","position15"]
const min = Math.ceil(0);
const max = Math.floor(14);
let anterior = null;

export const Juego1 = () => {
const [activado,SeTactivado] = useState(false);
const [click,SetClick] = useState(0);


useEffect(function(){
      if(activado === false){
        if(localStorage.getItem('clave') == undefined){
          localStorage.setItem('clave',click)
        }else{
          if(parseFloat(localStorage.getItem('clave')) < click){
            localStorage.setItem('clave',click)
          }
        }
        if(click != 0){
          alert(`¡Se acabo el tiempo! hiciste: ${click} clicks(${click/10}clicks/seg)` )
        }
        document.getElementById("botonInicio").classList.remove(posiciones[anterior])
        document.getElementById("botonInicio").innerText = "¡Empezar!"
        anterior = null
        SetClick(0)
      }
},[activado])



  return (
    <div className='juego1'>
        <h2 id='jugar1'>¡Atrapame si puedes!{"--"} <strong className='White'> Clicks:{click}<Cronometro activado = {activado} guardar = {SeTactivado} /></strong></h2>
        <div className='empezar'>
            <button onClick={() => {
                if(anterior != null){
                    document.getElementById("botonInicio").classList.remove(posiciones[anterior])
                }else{
                  SeTactivado(true);
                  document.getElementById("botonInicio").innerText = "¡Atrapame!"
                }
                let numero =Math.floor(Math.random() * (max - min) + min)
                while(anterior=== numero){
                  numero =Math.floor(Math.random() * (max - min) + min)
                }
                document.getElementById("botonInicio").classList.toggle(posiciones[numero])
                anterior = numero;
                console.log(numero)
                SetClick(click+1)
            }} id='botonInicio'>Empezar</button>
        </div>
    </div>
  )
}
