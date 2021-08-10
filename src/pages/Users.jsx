import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {

	const [isLoading, setIsLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5050/users/`)
			.then(res => res.json())
			.then(data => {
				setUsers(data);
				setIsLoading(false);
			})
	}, [users])


	return (
		<>
			{ isLoading && <h2>Cargando...</h2> }

			<ul>
				{ 
					users.length > 0 && users.map(oneUser => {
						return (
							<li key={oneUser.id}>
								<Link to={`/users/${oneUser.id}`}>{oneUser.name} [ver más]</Link>
							</li>
						)
					}) 
				}
			</ul>
		</>
	)
}