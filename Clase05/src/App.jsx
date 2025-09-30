import { BrowserRouter, Routes, Route } from "react-router-dom"
import Computadoras from "./componentes/Computadoras/Computadoras"
import Sillas from "./componentes/Sillas/Sillas"
import Celulares from "./componentes/Celulares/Celulares"
import Menu from "./componentes/Menu/Menu"
import Error from "./componentes/Error/Error"

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/computadoras" element={<Computadoras/>}/>
          <Route path="/sillas/:id" element={<Sillas/>}/>
          <Route path="/celulares" element={<Celulares/>}/>
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
      </BrowserRouter>








      {/* <h1>Etiquetas de Enlaces:</h1>
      <h2>Enlaces Absolutos y realtivos</h2>
      <a href="https://www.infobae.com" target="_blank">Infobae</a>
      <a href="">Contacto</a> */}
    </div>
  )
}

export default App