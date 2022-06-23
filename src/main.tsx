import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/route'
import "./index.css"
import { CalculosProvider } from './contexts/calculos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculosProvider>
      <Rota />
    </CalculosProvider>
  </React.StrictMode>
)
