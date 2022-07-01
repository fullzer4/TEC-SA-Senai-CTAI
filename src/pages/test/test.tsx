import React, {Component, useContext, PureComponent} from 'react';
import { GraficoContext } from '../../contexts/grafico';
import './test.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Buceta(){

    const { envDadosFB, getDadosFB, size1, size2, size3, size4, size5, size6, size7, size8, size9, size10 } = useContext(GraficoContext) 

    const data = [
        {
          name: 'Lei1',
          uv: size1
        },
        {
          name: 'Lei2',
          uv: size2
        },
        {
          name: 'Lei3',
          uv: size3
        },
        {
          name: 'Lei4',
          uv: size4
        },
        {
          name: 'Lei5',
          uv: size5
        },
        {
          name: 'Lei6',
          uv: size6
        },
        {
          name: 'Lei7',
          uv: size7
        },
        {
          name: 'Lei8',
          uv: size8
        },
        {
          name: 'Lei9',
          uv: size9
        },
        {
          name: 'Lei10',
          uv: size10
        },
      ];
    

    setTimeout(()=>{
        getDadosFB(11);
    },5000)

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
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        {/* <button onClick={()=> sendDatas()}>DADOS</button> */}
        </div> 
    );
}
