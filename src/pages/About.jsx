import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function About () {

	const history = useHistory();

	useEffect(() => {

		const getData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
			return response;
		}
		
		getData()
			.then(data => {
				if(data.id !== 1) {
					history.push('/');
				}
			})
	})

	return (
		<h2>Soy el About</h2>
	)
}