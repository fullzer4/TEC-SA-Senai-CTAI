import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Calculadora from "../pages/calculadora/Calculadora"
import Experimento from "../pages/experimento/Experimento"
import Teoria from "../pages/teoria/teoria"
import Test from "../pages/test/test"
import Membros from "../pages/membros/membros"


export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/calculator" element={<Calculadora/>}/>
        <Route path="/experiment" element={<Experimento/>}/>
        <Route path="/teoria" element={<Teoria/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/membros" element={<Membros/>}/>
      </Routes>
    </BrowserRouter>
  )
} 

// oi :)