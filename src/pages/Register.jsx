import { useHistory } from 'react-router-dom';

export default function Register () {

	const history = useHistory();

	const handlerSubmit = e => {
		e.preventDefault();
		const name = e.currentTarget.name.value;
		const email = e.currentTarget.email.value;
		const password = e.currentTarget.password.value;
		
		const userData = { name, email, password };

		fetch('http://localhost:5050/users', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: { 
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				if (data.id) {
					history.push(`/users/${data.id}`);
				}
			})
	}

	return (
		<div>
			<form action="/" method="POST" onSubmit={handlerSubmit}>
				<div>
					<label>Name:</label>
					<input type="text" name="name" />
				</div>
				<div>
					<label>Email:</label>
					<input type="email" name="email" />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" name="password" />
				</div>
				<button>Register</button>
			</form>
		</div>
	)
}

