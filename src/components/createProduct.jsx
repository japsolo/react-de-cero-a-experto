import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createProductsActions } from '../actions/productsActions';

export default function CreateProduct () {
	const dispatch = useDispatch();
	const history = useHistory();
	const loading = useSelector(state => state.products.loading);

	const submitHandler = e => {
		// console.log(e.currentTarget.image.files[0]);
		e.preventDefault();
		console.log('Vas a enviar el formulario');
		dispatch(createProductsActions({
			name: e.currentTarget.name.value,
			price: e.currentTarget.price.value
		}));
		history.push('/');
	}

	return (
		<div>
			<h2>Creación de producto</h2>
			{loading && (
				<div className="spinner-border text-danger" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}
			<form action="/" method="POST" onSubmit={submitHandler}>
				<div>
					<label>Name:</label>
					<input type="text" name="name" />
				</div>
				<div>
					<label>Price:</label>
					<input type="text" name="price" />
				</div>
				<div>
					<label>Image:</label>
					<input type="file" name="image" />
				</div>
				<button className="btn btn-success">Add</button>
			</form>
		</div>
	)
}