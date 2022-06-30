import React, {Component, useContext} from 'react';
import { GraficoContext } from '../../contexts/grafico';

  
    export default function Buceta(){
    const {getDadosFB} = useContext(GraficoContext)
    
        return (
            <div>
                <button onClick={getDadosFB}>AAAAAAAA</button>
            </div>
        );
    }
