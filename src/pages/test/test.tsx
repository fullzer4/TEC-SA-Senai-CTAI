import React, {Component, useContext} from 'react';
import { GraficoContext } from '../../contexts/grafico';

  
export default function Buceta(){
    
    const { envDadosFB } = useContext(GraficoContext)

    return (
        <div>
            <button onClick={() => envDadosFB(1)}>AAAAAAAA</button>
        </div>
    );
}
