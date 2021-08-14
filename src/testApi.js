import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
} from 'react-router-dom';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_HOST}/products`)
			.then(response => response.json())
			.then(data => {
				setProducts(data.products);
				setIsLoading(false);
			})
	}, [])

	return (
		<Router>
			<div className="container my-5">
				<h3>Products list!</h3>
				{isLoading && (
					<div className="spinner-border text-danger" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
				<div className="row">
					{
						products.map(product => {
							return (
								<div key={product.id} className="col-md-4">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">{product.name}</h5>
											<p className="card-text">{product.description}</p>
											<p className="card-text">{product.price}</p>
										</div>
									</div>
								</div>
							);
						})
					}
				</div>
			</div>
		</Router>
	)
}

export default App;