import { useState } from "react";

export default function FormState() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto , setTexto] = useState("");

  function cadastrar(e) {
    e.preventDefault();
    console.log(`dados do func: ${nome} ${email}`);
  }

  return (
    <div>
      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="preencha o nome"
          name="nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="text"
          placeholder="preencha o email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <button type="submit">enviar</button>
      
        <input type="text"
        placeholder="Digite"
        value= {texto}
        onChange={(e)=>setTexto(e.target.value)}/>
      <p>voce digitou {texto}</p>
      </form>
    </div>
  );
}
