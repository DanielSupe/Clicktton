import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';

export const Cronometro = ({ activado, guardar,reiniciar = false}) => {
  const [seg, setSeg] = useState(0);
  const [miliseg, setMiliseg] = useState(0);

  let segundos;
  let milisegundos
  useEffect(() => {
    let timeout;
    console.log(activado)
    if (activado === true) {
      const start = new Date().getTime();

      const actualizarTiempo = () => {
        const tiempoActual = new Date().getTime();
        const tiempoTranscurrido = tiempoActual - start;

         segundos = Math.floor(tiempoTranscurrido / 1000);
         milisegundos = tiempoTranscurrido % 1000;

        setSeg(segundos);
        setMiliseg(milisegundos);




        if (segundos >= 10) {
          console.log(activado)
          guardar(false);
          setSeg(0)
          setMiliseg(0)
        } else {
          timeout = setTimeout(actualizarTiempo, 1);
          
        }
      };

      timeout = setTimeout(actualizarTiempo, 1);
    }else{
      guardar(false)
      clearTimeout(timeout);
      setSeg(0)
      setMiliseg(0)
    }

    return () => {
      clearTimeout(timeout);
      if(String(milisegundos).length == 2){
        milisegundos= "0" + String(milisegundos)
      }
      if(String(milisegundos).length == 1){
        milisegundos= "00" + String(milisegundos)
      }
      localStorage.setItem('clave5',`${segundos}${milisegundos}`)
      console.log(localStorage.getItem('clave5'))
    };
  }, [activado, guardar]);

  return (
    <>
      <strong id='xy' className='cronometro'>
        {seg < 10 ? `0${seg}` : seg}:{miliseg < 10 ? `00${miliseg}` : miliseg < 100 ? `0${miliseg}` : miliseg}
      </strong>

    </>
  );
};

