import React from "react";


export default props => {
    const min = 50
    const max = 200
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>

            <button onClick={_ => props.quandoClicar('Marco', gerarIdade(), gerarNerd())}>
                fornecer informações</button>
        </div>
    )
}