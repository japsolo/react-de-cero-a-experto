import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function Profile () {
	const history = useHistory();

	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:5050/users/${id}`)
			.then(res => res.json())
			.then(data => {
				if (data.name === undefined) {
					history.push('/register');
					return
				}
				setUser(data);
			})
	}, [id, history])

	return (
		<>
			<h2>Hola {user.name}</h2>
			<a href={`mailto:${user.email}`}>{user.email}</a>
		</>
	)
}