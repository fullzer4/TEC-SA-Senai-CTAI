import React, {Component, useContext, PureComponent} from 'react';
import { GraficoContext } from '../../contexts/grafico';
import './test.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Buceta(){

    const { envDadosFB, getDadosFB} = useContext(GraficoContext) 
    let arr = getDadosFB();
    console.log(arr)
    const data = [
        {name: 'Lei1', vezes: 206 },
        {name: 'Lei2', vezes: 303 },
        {name: 'Lei3', vezes: 401 },
        {name: 'Lei4', vezes: 602 },
        {name: 'Lei5', vezes: 703 },
        {name: 'Lei6', vezes: 203 },
        {name: 'Lei7', vezes: 903 },
        {name: 'Lei8', vezes: 603 },
        {name: 'Lei9', vezes: 705 },
        {name: 'Lei10', vezes: 807 },
      ];
    

    //setTimeout(()=>{
       // getDadosFB(11);
    //},5000)

    return (
        <div className="cont-graph">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                    <XAxis/>
                    <Tooltip/>
                <Area type="monotone" dataKey="vezes" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
          <button onClick={()=> getDadosFB()}>Dados</button>
        </div> 
    );
}
