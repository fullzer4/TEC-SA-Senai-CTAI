import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/route'
import "./index.css"
import { CalculosProvider } from './contexts/calculos'
import { ToastContainer } from "react-toastify"
import { GraficoProvider } from './contexts/grafico';
import { ServerProvider } from './contexts/server';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculosProvider>
      <ServerProvider>
        <GraficoProvider>
          <ToastContainer autoClose={2000}/>
          <Rota />
        </GraficoProvider>
      </ServerProvider>
    </CalculosProvider>
  </React.StrictMode>
)
