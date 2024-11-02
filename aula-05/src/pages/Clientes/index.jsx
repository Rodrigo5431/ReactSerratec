import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {Card, RedButton, StyledButton} from './Button.style';

export default function cliente() {
    const {id} = useParams();
    const [active, setActive] = useState(false);
  return (
    <div>
        <h1>Pg cliente com id: {id}</h1>
        <StyledButton onClick={()=> alert("AHHHHHH")}>Clique aq </StyledButton>
        <RedButton onClick={()=> alert("beeeeeeeeeee")}>Clique</RedButton>
        <Card active={active}>
          <h1>Titulo</h1>
          <p>Descricao do card</p>
        </Card>
    </div>
  )
}
