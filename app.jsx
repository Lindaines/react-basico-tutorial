import React from 'react';

class Componente extends React.Component{
	constructor(){
		super();
		this.state = {
			contador : 0,
		}
	}
	_updateContador(valor){
		this.setState({
			contador: this.state.contador + valor,
		})
	}

	render(){
		return (
			<div>
				<h1 className ={this.props.classe}>Contador</h1>
				<button onClick={() => this._updateContador(1)}>Somar</button>
				<span>{this.state.contador}</span>
				<button onClick={() => this._updateContador(-1)}>Subtrair</button>
				<p>{this.props.classe}</p>
			</div>
		);
	}
}

export default Componente;
