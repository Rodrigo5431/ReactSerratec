import React, { useState } from "react";

export default function State() {
  const [valor, setValor] = useState(100);
  const [texto, setTexto] = useState("AHHHH");

  //     function calcular(){
  //     setValor(valor*2);
  // }
  //const calcular =() => setValor(valor*2);

  return (
    <div>
      <h1>USO do state </h1>
      <p>Valor: {valor}</p>
      <p>{texto}</p>
      <button onClick={() => setValor(valor * 2)}>Calcular</button>
      <button onClick={()=>setTexto("BEEEEEEEEEEEEEEEEEEEEE")}>Texto</button>
    </div>
  );
}
