import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Calculadora from "../pages/calculadora/Calculadora"
import Experimento from "../pages/experimento/Experimento"
import Test from "../pages/test/test"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> sexo quico bonito, que cu gostoso, quico bonito, que cu maravil
        <Route path="/calculator" element={<Calculadora/>}/>
        <Route path="/experiment" element={<Experimento/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}
