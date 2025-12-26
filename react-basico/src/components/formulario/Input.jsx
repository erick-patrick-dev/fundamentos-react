import React from "react";
import './Input.css'

// Componente Controlado (Controlled Component)

export default props => {
    const [valor, setValor] = React.useState('Inicial')

    // Toda vez que o input mudar, o valor do estado muda
    // Somente o React muda o valor do input. Caso contrário, o valor é mantido.
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2> {valor} </h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly /> {/* Somente leitura */}
                <input value={undefined}  /> {/* Componente não controlado */}
            </div>

        </div>
    )
}