import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Calculadora from "../pages/Calculadora"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calculator" element={<Calculadora/>}/>
      </Routes>
    </BrowserRouter>
  )
}
