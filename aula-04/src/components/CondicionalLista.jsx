import React from "react";
export default function CondicionalLista() {
  const produtos = ["TV", "Celular", "Monitor", "Computador"];
  return (
    <div>
      {produtos.length > 0 ? (
        produtos.map((produto, index) => <p key={index}>{produto}</p>)
      ) : (
        <p>Não existem produtos</p>
      )}
    </div>
  );
}
