import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Calculadora from "../pages/calculadora/Calculadora"
import Linguagens from "../pages/linguagens/Linguagens"
import Projeto from "../pages/projetos/Projeto"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calculator" element={<Calculadora/>}/>
        <Route path="/projects" element={<Projeto/>}/>
        <Route path="/languages" element={<Linguagens/>}/>
      </Routes>
    </BrowserRouter>
  )
}
