import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/route'
import "./index.css"
import { CalculosProvider } from './contexts/calculos'
import { ToastContainer } from "react-toastify"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculosProvider>
      <ToastContainer autoClose={2000}/>
      <Rota />
    </CalculosProvider>
  </React.StrictMode>
)
