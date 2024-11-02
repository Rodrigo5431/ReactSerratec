import React, { useEffect, useState } from "react";

export default function ExemploFetch() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/rodrigo5431")
      .then((resposta) => resposta.json())
      .then((resposta) => setUser(resposta))
      .catch("Problemas na requisicao")

  }, []);

  return (
    <div>
      <h1>Dados: {user.login}</h1>
      <hr />
      <img src={user.avatar_url} alt="foto" />
    </div>
  );
}
