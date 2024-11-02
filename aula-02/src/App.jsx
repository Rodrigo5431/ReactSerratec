import Curso from './components/Curso'
import Botao from './components/Botao'
import Aluno from './components/Aluno'
import Tarefa from './components/Tarefa'
import Carro from './components/Carro'
import Caixa from './components/Caixa'
import Button from './components/Button'
import AppClasse from './components/AppClasse'


export default function App() {
  const con = {
    color: "black",
    fontSize: "20px"
    
  }
 
  return (
    <div>
      <Curso nome = "React"/>
{/*       <Botao texto = "ahhhhhhhhhh"/>
      <Aluno nome = "Rodrigo" idade = "15" prof = "Lixeiro"/>
      <Tarefa titulo = "casa" descricao = "aodiakw" estado = {false}/>
      <Carro modelo="Mustang" ano = {2000}/>
      <h1>Tipos</h1>
      <h2 style={{color: "green", fontSize: "50px"}}>ahhhh</h2>
      <h2 style={con}>estilo</h2>
      <Caixa cor = "yellow"/> */}
      <Button/>
      <button className='button'>Botao</button>
      <AppClasse curso ="React classssssssssssss"/>
    </div>
  )
}
