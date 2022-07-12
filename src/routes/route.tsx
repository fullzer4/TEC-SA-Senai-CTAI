import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Calculadora from "../pages/calculadora/Calculadora"
import Experimento from "../pages/experimento/Experimento"
import Teoria from "../pages/teoria/teoria"
import Graphics from "../pages/graphics/graphics"
import Membros from "../pages/membros/membros"


export default function Rota() {
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "If you refresh your page you will need to use the link provided by the coordinator to access again. Do you want to continue?";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
  });
  return(
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/calculator" element={<Calculadora/>}/>
        <Route path="/experiment" element={<Experimento/>}/>
        <Route path="/teoria" element={<Teoria/>}/>
        <Route path="/graphics" element={<Graphics/>} />
        <Route path="/membros" element={<Membros/>} />
      </Routes>
    </BrowserRouter>
  )
} 

// oi :)