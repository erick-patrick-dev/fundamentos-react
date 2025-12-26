import React from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";
import './Contador.css'

class Contador extends React.Component {
    // Sintaxe 1 - Usando construtor
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    //     this.inc = this.inc.bind(this)
    // }

    // Sintaxe 2 - Sem usar construtor
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }


    // Método sem arrow function - precisa bind no construtor
    // inc() {
    //     this.setState({
    //         numero: this.state.numero + 1
    //     });
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = novoPasso => {
        // O + converte string para número
        this.setState({
            passo: +novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        );
    }
}

export default Contador;