import { useState, useEffect } from 'react';

// Helpers
import fetch from '../helpers/fetchCall';

export default function ProductsList () {
	const [products, setProducts] = useState([]);

	useEffect(() =>{
		fetch('products')
			.then(products => {
				setProducts(products);
			})
	}, []);

	return (
		<>
			<h2>Soy el componente de Productos</h2>
			{
				products.map(product => {
					return (
						<div key={product.id} >
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<span>{product.price}</span>
						</div>
					)
				})
			}
		</>
	)
}
