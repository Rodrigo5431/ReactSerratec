import React from 'react'

export default function Tarefa5({titulo, descricao,estado}) {
  return (
    <div>
        <p>Titulo: {titulo}</p>
        <p>Descricao: {descricao}</p>
        <p>Estado: {estado ? "Concluido" : "Pendente"}</p>
    </div>
  )
}
