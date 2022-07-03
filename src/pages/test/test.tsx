import React, {Component, useContext, PureComponent} from 'react';
import { GraficoContext } from '../../contexts/grafico';
import { useState } from 'react';
import './test.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

var hst: any = [];
let counter = 0;
let timeOut = 0;

export default function Buceta(){

    hst = [];
    counter = 0;

    const [dataS, setDataS] = useState([]);
    const [loading, setLoading] = useState("")

    const { envDadosFB, getDadosFB} = useContext(GraficoContext) 

    var res: any = getDadosFB()
    res.then(total => {          
        console.log(total[0])
    })    
  //   setTimeout(() => {      
    
  //     var res: any = getDadosFB()
      
  //     res.then(total => {
          
  //         for(let i in total){
  //           let dd = { name: total[i][0], vezes: total[i][1].Contagem };
  //           if(counter < 10){
  //             hst.push(dd)
  //             counter++;
  //           }
  //         }       
  //         setDataS(hst)   
  //         let stt = loading + "a";
  //         setLoading(stt)
  //     })     
      
  //     timeOut = 2000;
  // }, timeOut);
    
    console.log(dataS)
    
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
                {/* <XAxis dataKey="name" /> */}
                {/* <Tooltip/> */}
                <Area type="monotone" dataKey="vezes" stroke="#8884d8" fill="#8884d8" />                
                </AreaChart>
            </ResponsiveContainer>
         <button onClick={()=> envDadosFB(1)}>Dados</button>
        </div> 
    );
}
