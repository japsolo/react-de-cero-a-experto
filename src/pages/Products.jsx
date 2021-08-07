import { Redirect } from 'react-router-dom';

export default function Products() {
	const products = [
		{id: 1, name: 'TV'},
		{id: 2, name: 'Compu'},
		{id: 3, name: 'Heladera'}
	];

	const oneProduct = products[0];

	return (
		<>
			<h2>Component Products</h2>

			{
				oneProduct === undefined ? 
				<Redirect to="/" /> :
				<>
					<p> {oneProduct.id} </p>
					<p> {oneProduct.name} </p>
				</>
			}			
		</>
	)
}