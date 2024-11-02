import React, { useState } from "react";

export default function Condicional() {
  const [log, setLog] = useState(false);

  const login = () => 
    "Login efetuado";
  
  const logout = () => 
    "Login finalizado";
  
  return (
    <div>
      <p>{log ? login() : logout()}</p>
      <button onClick={()=> setLog(!log)}>{! log ? "login" : "logout" }</button>
    </div>
  );
}
