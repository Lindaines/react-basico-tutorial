import React from 'react';

class Componente extends React.Component{
	constructor(){
		super();
		this.state = {
			contador : 0,
		}
	}
	_somarContador(valor){
		this.setState({
			contador: this.state.contador + valor,
		})
	}

	render(){
		return (
			<div>
				<h1>Contador</h1>
				<button onClick={() => this._somarContador(1)}>Somar</button>
				<span>{this.state.contador}</span>
				<button onClick={this._somarContador.bind(this, -1)}>Subtrair</button>
			</div>
		);
	}
}

export default Componente;

