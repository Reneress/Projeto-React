function Titulo(props) {

// let nome = "Fulano";
// const soma = 10 + 10;
// const urlImagem = "https://www.google.com.br/google.jpg";

  return(
    <div>
        {/* <h1>{props.texto}</h1>
        <h2>Olá, {nome}, {soma}</h2>
        <img width={100} src={urlImagem} alt="Google" /> */}

        <h1
            style={{color: props.cor ? props.cor : "white"}}
        >
            Oi eu sou {props.nome?props.nome:"Fulano"}</h1>
        {props.paragrafo ? <p>Este é um parágrafo</p>: null}

    </div>
  ) 
}
export default Titulo;