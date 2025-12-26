import React from 'react'
// import Math from 'mathjs'

export default (props) => {
  const max = props.max;
  const min = props.min;
  const num = Math.floor(Math.random() * (max-min + 1)) + min
  return (
    <div>
        <h1> Valor Aleatório </h1>
        <h2>Valor mínimo: {min} </h2>
        <h2>Valor máximo: {max} </h2>
      <h2>Random Number: {num}</h2>
    </div>
  )
}