import { useHistory } from 'react-router-dom';

// Helpers
import fetch from '../helpers/fetchCall';

export default function Login () {
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();

		fetch('users/login', {
			method: 'POST',
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
			}),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(data => {
				if(data.status === 'success') {
					sessionStorage.setItem('token', data.token);
					history.push('/productos/crear')
				};
			})
	}

	return (
		<form action="/" method="POST" onSubmit={handleSubmit}>
			<div>
				<label>Email:</label>
				<input type="text" name="email" />
			</div>
			<div>
				<label>Contraseña:</label>
				<input type="password" name="password" />
			</div>
			<button>Entrar</button>
		</form>
	)
}