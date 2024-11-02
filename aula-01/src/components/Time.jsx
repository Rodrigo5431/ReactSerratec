//rfc
import logo from "../assets/react.svg"

export default function Time() {
    const times = ["Vasco","Flamengo", "Botafogo", "FLuminense"]
    const pessoa = {
        nome: "Rodrigo",
        idade: 19
    }

    const dadosPessoa = (pessoa)=>{
        return pessoa.nome + "-" + pessoa.idade
    }

    const listaTimes = times.map((time,index)=>(
        <li key={index}>{time}</li>
    ));

    const soma =(a, b)=> a + b;

    function texto(textos){
        textos = textos.toUpperCase();
        return textos;
    }

  return (
    <div>
        <h1>Lista de Times</h1>
        <img src={logo} alt=""/>
        <p>Ola  {dadosPessoa(pessoa)}</p>   
        <p>Soma: {soma(10,50)}</p>
        <p>Texto: {texto("oiiiiiiiiiii")}</p>
       {/* <img src={require("../assets/react.svg")} alt="React Logo" /> */}
        <ul>
        {listaTimes}
        </ul>
    </div>
  )
}
