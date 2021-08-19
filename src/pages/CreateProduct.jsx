import { Redirect } from 'react-router-dom';
// Helpers
import fetch from '../helpers/fetchCall';

export default function CreateProduct () {

	const token = sessionStorage.getItem('token');

	const handleSubmit = e => {
		e.preventDefault();

		const productName = e.target.name.value;
		const productPrice = e.target.price.value;
		const productDesc = e.target.description.value;

		fetch('products', {
			method: 'POST',
			body: JSON.stringify({
				name: productName,
				price: productPrice,
				description: productDesc,
			}),
			headers: { 
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		}).then (data => {
			console.log(data);
		});
	}

	return (
		<>
			{ !token && <Redirect to="/login"/> }
			<form action="/" method="POST" onSubmit={handleSubmit}>
				<h2>Crea tu producto</h2>
				<div>
					<label>Nombre:</label>
					<input type="text" name="name"/>
				</div>
				<div>
					<label>Precio:</label>
					<input type="text" name="price"/>
				</div>
				<div>
					<label>Descripción:</label> <br />
					<textarea name="description" cols="30" rows="10"></textarea>
				</div>
				<button>Crear</button>
			</form>
		</>
	)
}