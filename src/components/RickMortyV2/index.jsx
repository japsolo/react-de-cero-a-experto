import { useState, useRef } from 'react';

// Helpers
import { getData } from '../../helpers'; 
import useCharacters from '../../hooks/useCharacters'; 

const RickMorty = () => {
	const [ notResults, setNotResults ] = useState(false);
	// Custom Hook
	const { characters, setCharacters, isLoading, setIsLoading } = useCharacters();

	let title = useRef();
	let inputField = useRef();

	const changeTitle = () => {
		let { current: h2 } = title; // a la key current le ponemos el alias h2
		h2.classList.add('red-title');
		h2.innerHTML = '¡Ahora esto va a cambiar!';
	}

	const handleSubmit = e => {
		e.preventDefault();
		const inputValue = inputField.current.value;

		setCharacters([]);
		setIsLoading(true);

		getData(`https://rickandmortyapi.com/api/character/?name=${inputValue}`).then(data => {
			if (!data.error) {
				setCharacters(data.results);
				setIsLoading(false);
				setNotResults(false);
			} else {
				setCharacters([]);
				setIsLoading(false);
				setNotResults(true);
			}
		});

		e.currentTarget.reset();
	}
	
	return (
   	<div className="rick-morty">
			<h2 ref={title}>Rick Morty Hook Component</h2>
			<button onClick={changeTitle}>Change title</button>
			<hr />

			<form action="" onSubmit={handleSubmit}>
				<input type="text" ref={inputField} placeholder="Search" name="search" />
				<button type="submit">Enviar</button>
			</form>

			{ isLoading && <h4>Cargando...</h4> }
			
			{notResults && <h4>No hay nada que mostrar</h4>}

			{characters.map(oneCharacter => {
				return (
					<div key={oneCharacter.id}>
						<h3>{oneCharacter.name}</h3>
						<img src={oneCharacter.image} width="200" alt={oneCharacter.name} />
						<p>{oneCharacter.species}</p>
					</div>
				)
			})}
    	</div>
  );
}

export default RickMorty;