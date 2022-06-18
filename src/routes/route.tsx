import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Calculadora from "../pages/Calculadora"
import Linguagens from "../pages/Linguagens"
import Projeto from 

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calculator" element={<Calculadora/>}/>
        <Route path="/projects" element={<Linguagens/>}/>
        <Route path="/about" element={<Projeto/>}/>
        <Route path="/languages" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  )
}
