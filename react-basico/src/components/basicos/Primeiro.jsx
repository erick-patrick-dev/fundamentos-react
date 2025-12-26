import React from "react";

function Primeiro() {
  return (
    <React.Fragment key="2">
      <h1>Primeiro Componente</h1>
      <h1>Seja bem-vindo!</h1>
    </React.Fragment>
  );
}

export default Primeiro;

// Além da sintaxe <React.Fragment></React.Fragment>,
// pode-se usar a sintaxe <></> para o mesmo propósito.
// Mas na segunda não é possível passar propriedades.