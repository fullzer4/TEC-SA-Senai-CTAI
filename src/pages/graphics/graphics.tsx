import React, {Component, useContext, PureComponent} from 'react';
import InicioGraphics from '../../components/inicioGraphics/inicioGraphics';
import Header from '../../components/Navbar/navbar';
import { GraficoContext } from '../../contexts/grafico';
import { useState } from 'react';
import './graphics.css'
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

export default function graphics(){
    const [dataS, setDataS] = useState([]);
    const [loading, setLoading] = useState("")

    const { envDadosFB, getDadosFB} = useContext(GraficoContext) 

  setTimeout(() => {      
        var res: any = getDadosFB()
        res.then(total => {
        // console.log(res) 

        var tt = total[0][1];

        var arr: any = [
            {name: "L1", vezes: tt.lei1, v3: tt.lei1 + 0.5},
            {name: "L2", vezes: tt.lei2, v3: tt.lei2 + 0.5},
            {name: "L3", vezes: tt.EficEnerg, v3: tt.EficEnerg + 0.5},
            {name: "L4", vezes: tt.RendMaq, v3: tt.RendMaq + 0.5},
            {name: "L5", vezes: tt.TrabMaq, v3: tt.TrabMaq + 0.5},
            {name: "L6", vezes: tt.EnergIntV, v3: tt.EnergIntV + 0.5},
            {name: "L7", vezes: tt.TrabGasP, v3: tt.TrabGasP + 0.5},       
            {name: "L8", vezes: tt.EnergIntT, v3: tt.EnergIntT + 0.5},  
            {name: "L9", vezes: tt.VariaInt, v3: tt.VariaInt + 0.5}
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
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <InicioGraphics/>

            <div className="graph-title">Gráfico</div>
            <div className="cont-graph">
            

                <ResponsiveContainer>
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
                <Area type="monotone" dataKey="vezes" fill="#3f3d56a3" strokeWidth={8} stroke="#e861ff" />
                <Bar dataKey="vezes" overflow="hidden" barSize={30} fill="#3F3D56" />
                <Line type="monotone" dataKey="vezes" stroke="#e861ff" />
                </ComposedChart>
            </ResponsiveContainer>
            </div> 
                </div>
            </div>
        </div>
        
    );
}
