import {Component, useContext} from 'react';
import { GraficoContext } from '../../contexts/grafico';


  
export default function Buceta(){
    
    const { envDadosFB, getDadosFB, size1 } = useContext(GraficoContext) 

    setTimeout(()=>{
        envDadosFB(1);
        getDadosFB(1);    
    },1000)

    return (
        <div>
            <h1>{size1}</h1>
            <button onClick={() => getDadosFB(1)}>Receber</button>
            <button onClick={() => envDadosFB(1)}>Enviar</button>
        </div> 
    );
}
