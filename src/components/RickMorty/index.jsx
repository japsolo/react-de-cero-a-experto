import React, { Component } from 'react';

class RickMorty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			characters: []
		}
	}

	componentDidMount() {
		const getData = async () => {
			let response = await fetch('https://rickandmortyapi.com/api/character');
			let data = await response.json();
			return data;
		}

		getData().then(data => { 
			this.setState({ 
				characters: data.results,
				isLoading: false
			}) 
		});
	}

	handlerSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		const inputValue = form.search.value;

		this.setState({
			characters: [],
			isLoading: true
		});
		
		const getData = async () => {
			let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`);
			let data = await response.json();
			return data;
		}

		getData().then(data => {
			console.log(data);
			if (!data.error) {
				this.setState({
					characters: data.results,
					isLoading: false,
					notResults: false,
				})
			} else {
				this.setState({
					characters: [],
					isLoading: false,
					notResults: true,
				})
			}
		});

		form.reset();
	}

	render() {
		const {isLoading, characters, notResults } = this.state;
		return (
			<>
				<h2>Rick And Morty</h2>

				<form action="" onSubmit={ this.handlerSubmit }>
					<input type="text" placeholder="Search" name="search" />
					<button type="submit">Enviar</button>
				</form>
				
				{ notResults && <h4>No hay nada que mostrar</h4> }

				{ isLoading && <h4>Cargando...</h4> }

				{ characters.map(oneCharacter => { 
					return (
						<div key={oneCharacter.id}>
							<h3>{oneCharacter.name}</h3>
							<img src={oneCharacter.image} width="200" alt={oneCharacter.name} />
							<p>{oneCharacter.species}</p>
						</div>
					)
				})}
			</>
		)
	}
}

export default RickMorty;