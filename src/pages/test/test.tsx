import {Component, useContext} from 'react';
import { GraficoContext } from '../../contexts/grafico';

  
export default function Buceta(){
    
    const { envDadosFB, getDadosFB } = useContext(GraficoContext)

    return (
        <div>
            <h1></h1>
            <button onClick={() => getDadosFB(1)}>Receber</button>
            <button onClick={() => envDadosFB(1)}>Enviar</button>
        </div>
    );
}
