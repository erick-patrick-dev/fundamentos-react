import React from "react";

function sorteio(qtd, lista) {
    for (var i = 0; i < qtd; i++) {
        const gerarNumero = () => parseInt(Math.random() * (61 - 1)) + 1
        var valor = gerarNumero()
        confere(valor, lista)
    }
}

function confere(valor, lista) {
    var repetido = false
    var indice = 0

    if (lista.length == 0) {
        lista.push(valor)
    }

    while ((repetido == false) && (indice < lista.length)) {
        if (valor == lista[indice]) {
            repetido = true
        } else if (indice == lista.length - 1) {
            if (lista[indice] == valor) {
                repetido = true
            } else {
                lista.push(valor)
            }
        }
        indice++
    }
}

export default function Mega() {
    var lista = []
    const [qtd, setQtd] = React.useState(0)

    return (
        <div>
            <h2>Mega</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',}}>
                <label htmlFor="qtdInput">Quantidade de Números:</label>
                <input id="qtdInput" value={qtd} onChange={e => setQtd(+e.target.value)} />
                <button onClick={sorteio(qtd, lista)}>Sortear</button>
            </div>

            <div>
                <h3>Números Sorteados: {lista.map((num, index) => (
                    <p key={index}>{num}</p>
                ))}</h3>
            </div>


        </div>
    )
}