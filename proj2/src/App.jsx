import Titulo from './Titulo'

let nome = "Fulano"

function App() {
  return(
    <div>
      <Titulo nome="Leonardo" paragrafo ={false}/>
      <Titulo nome="João" cor="red" />
      <Titulo paragrafo={true}/>
    </div>
  ) 
}



export default App