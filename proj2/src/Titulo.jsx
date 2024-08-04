import {useState} from 'react';

function Titulo(props) {

// let nome = "Fulano";
// const soma = 10 + 10;
// const urlImagem = "https://www.google.com.br/google.jpg";

  const [texto, setTexto] = useState("Texto Inicial");
  const [inputText, setInputText] = useState("");

  function clicou() {
    setTexto(inputText);
  }

  return(
    <div>
        {/* <h1>{props.texto}</h1>
        <h2>Olá, {nome}, {soma}</h2>
        <img width={100} src={urlImagem} alt="Google" /> */}

        <h1
            style={{color: props.cor ? props.cor : "white"}}
        >
            {/* Oi eu sou {props.nome ? props.nome:"Fulano"}</h1>
        {props.paragrafo ? <p>Este é um parágrafo</p>: null} */}
          {texto}
        </h1>
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite um texto" 
        />
        <button onClick={clicou}>Clique aqui</button>
    </div>
  ) 
}
export default Titulo;