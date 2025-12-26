import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [name, setName] = useState("Abanda laranjinha?")
    const [age, setAge] = useState(0)
    const [n, setN] = useState(false)

    //nome idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
        setName(nome)
        setAge(idade)
        setN(nerd)
    }

    return (
        <div>
            <div>
                <span>{name}</span>
                <span><strong> {age} </strong></span>
                <span>{n ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}