import React, {Component, useContext, PureComponent} from 'react';
import { GraficoContext } from '../../contexts/grafico';
import { useState } from 'react';
import './test.css'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

let timeOut = 0;

export default function Buceta(){
    const [dataS, setDataS] = useState([]);
    const [loading, setLoading] = useState("")

    const { envDadosFB, getDadosFB} = useContext(GraficoContext) 

  setTimeout(() => {      
        var res: any = getDadosFB()
        res.then(total => {
        // console.log(res) 

        var tt = total[0][1];

        var arr: any = [
            {name: "Le", vezes: tt.lei1, v3: tt.lei1 + 0.5},
            {name: "as", vezes: tt.lei2, v3: tt.lei2 + 0.5},
            {name: "as", vezes: tt.EficEnerg, v3: tt.EficEnerg + 0.5},
            {name: "as", vezes: tt.RendMaq, v3: tt.RendMaq + 0.5},
            {name: "as", vezes: tt.TrabMaq, v3: tt.TrabMaq + 0.5},
            {name: "as", vezes: tt.EnergIntV, v3: tt.EnergIntV + 0.5},
            {name: "as", vezes: tt.TrabGasP, v3: tt.TrabGasP + 0.5},       
            {name: "as", vezes: tt.EnergIntT, v3: tt.EnergIntT + 0.5},  
            {name: "as", vezes: tt.VariaInt, v3: tt.VariaInt + 0.5},  
            {name: "as", vezes: tt.TrabGasT, v3: tt.TrabGasT + 0.5},      
        ]

        //   console.log(arr)    
          setDataS(arr)   
          let stt = loading + "a";
          setLoading(stt)
      })     
      
      timeOut = 2000;
  }, timeOut);
    
    console.log(dataS)
    
    return (
        <div className="cont-graph">
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
            width={500}
            height={400}
            data={dataS}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
            >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis dataKey="name"/>
            <YAxis />
            {/* <Tooltip /> */}
            <Legend />
            <Area type="monotone" dataKey="v3" fill="#8884d8" stroke="#8884d8" />

            <Bar dataKey="vezes" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="v3" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
         <button onClick={()=> envDadosFB(1)}>Dados</button>
         <button onClick={()=> envDadosFB(2)}>Dados</button>
         <button onClick={()=> envDadosFB(3)}>Dados</button>
         <button onClick={()=> envDadosFB(4)}>Dados</button>
         <button onClick={()=> envDadosFB(5)}>Dados</button>
         <button onClick={()=> envDadosFB(6)}>Dados</button>
         <button onClick={()=> envDadosFB(7)}>Dados</button>
         <button onClick={()=> envDadosFB(8)}>Dados</button>
         <button onClick={()=> envDadosFB(9)}>Dados</button>    
         <button onClick={()=> envDadosFB(10)}>Dados</button>
        </div> 
    );
}
