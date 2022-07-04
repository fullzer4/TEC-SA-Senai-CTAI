import React, {Component, useContext, PureComponent} from 'react';
import { GraficoContext } from '../../contexts/grafico';
import { useState } from 'react';
import './test.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
            {name: "Le", vezes: tt.lei1},
            {name: "as", vezes: tt.lei2},
            {name: "as", vezes: tt.EficEnerg},
            {name: "as", vezes: tt.RendMaq},
            {name: "as", vezes: tt.TrabMaq},
            {name: "as", vezes: tt.EnergIntV},
            {name: "as", vezes: tt.TrabGasP},       
            {name: "as", vezes: tt.EnergIntT},  
            {name: "as", vezes: tt.VariaInt},  
            {name: "as", vezes: tt.TrabGasT},      
        ]

        //   console.log(arr)    
          setDataS(arr)   
          let stt = loading + "a";
          setLoading(stt)
      })     
      
      timeOut = 2000;
  }, timeOut);
    
    // console.log(dataS)
    
    return (
        <div className="cont-graph">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={dataS}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                {/* <YAxis/> */}
                <XAxis dataKey="name" />
                <Tooltip/>
                <Area type="monotone" dataKey="vezes" stroke="#8884d8" fill="#8884d8" />                
                </AreaChart>
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
