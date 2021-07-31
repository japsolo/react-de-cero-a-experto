import { useState, useEffect } from 'react';

// Helpers
import { getData } from '../helpers';

const useCharacters = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [characters, setCharacters] = useState([]);

	// componentDidMount()
	useEffect(() => {
		getData('https://rickandmortyapi.com/api/character').then(data => {
			setCharacters(data.results);
			setIsLoading(false);
		});
	}, []);


	return {
		characters, setCharacters, isLoading, setIsLoading
	}
}

export default useCharacters;