import React, { useEffect, useState } from 'react'

export default function ExemploEffect() {
    
    const [cont, setCont] = useState(0);
    const [nome, setNome] = useState("rodrigo");
    const [hora,setHora] = useState(new Date())

    useEffect(()=>{
        console.log("Executou efecct");
        
    },[cont])

    useEffect(()=>{
        // setTimeout(()=>{
        //     setNome("roni")
        // },5000);
        setInterval(()=>{
            setHora(new Date())
        },1000); 

    }) //sem nenhum parametro depois das } executa a qualquer alteracao no site
    //com concehete depois das chaves ele executa ao iniciar o site
    // com parametro, ele executa ao alterar o paramtro passado

  return (
    <div>
        <h1>{nome}</h1>
        <h1>Hora: {hora.toLocaleTimeString()}</h1>
        <h2>Contador: {cont}</h2>
        <button onClick={()=> setCont(cont + 1)}>Contador</button>
    </div>
  )
}
