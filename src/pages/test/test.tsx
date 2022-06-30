import {Component, useContext} from 'react';
import { GraficoContext } from '../../contexts/grafico';

  
export default function Buceta(){
    
    const { envDadosFB } = useContext(GraficoContext)

    return (
        <div>
            <h1></h1>
            <button onClick={() => envDadosFB(10)}>AAAAAAAA</button>
        </div>
    );
}
