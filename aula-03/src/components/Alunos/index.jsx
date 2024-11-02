import React, { useContext } from 'react'
import Nome from '../Nome'
import { UserContext } from '../../contexts/user'

export default function Alunos() {
  const {nomeAluno, totalAlunos} = useContext(UserContext)
  return (
    <div>
        <h1>Componente Alunos - nome: {nomeAluno} - QTD ALN: {totalAlunos}</h1>
        <Nome/>
    </div>
  )
}
