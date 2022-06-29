import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Calculadora from "../pages/calculadora/Calculadora"
import Projeto from "../pages/projetos/Projeto"
import Test from "../pages/test/test"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calculator" element={<Calculadora/>}/>
        <Route path="/projects" element={<Projeto/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}
