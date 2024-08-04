import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Home from './pages/Home'
import Titulo from './Titulo'

let nome = "Fulano"

function App() {
  return(
    <div>
      {/* <Titulo nome="Leonardo" paragrafo ={false}/>
      <Titulo nome="João" cor="red" paragrafo={true} />
      <Titulo />
      <Titulo />
      <Titulo /> */}
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
          </Routes>
      </Router>
    </div>
  ) 
}



export default App