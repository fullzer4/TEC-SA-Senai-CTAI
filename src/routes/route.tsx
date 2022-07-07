import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Calculadora from "../pages/calculadora/Calculadora"
import Experimento from "../pages/experimento/Experimento"
import Teoria from "../pages/teoria/teoria"
import Test from "../pages/test/test"
import Membros from "../pages/membros/membros"
import { useState, useContext } from "react"
import { MenuContext } from "../contexts/menu"


export default function Rota() {
  const { mudarPagina} = useContext(MenuContext)
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} {...mudarPagina(1)}/>
        <Route path="/calculator" element={<Calculadora/>} {...mudarPagina(2)}/>
        <Route path="/experiment" element={<Experimento/>} {...mudarPagina(3)}/>
        <Route path="/teoria" element={<Teoria/>} {...mudarPagina(4)}/>
        <Route path="/test" element={<Test/>} {...mudarPagina(5)}/>
        <Route path="/membros" element={<Membros/>} {...mudarPagina(6)}/>
      </Routes>
    </BrowserRouter>
  )
} 

// oi :)