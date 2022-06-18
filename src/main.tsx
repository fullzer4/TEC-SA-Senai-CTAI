import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/route'
import "./index.css"
import {CalculoContextProvider} from "./contexts/calculo"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculoContextProvider>
      <Rota />
    </CalculoContextProvider>
  </React.StrictMode>
)
