import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsActions } from '../actions/productsActions';

export default function Home() {
	const productsList = useSelector(state => state.products.productsList);

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getProductsActions());
	// }, [dispatch]);

	return (
		<div>
			<h2>Home de productos</h2>
			{ productsList.length === 0 && <p>No hay productos</p> }
			<ul>
				{productsList.map((product, i) => <li key={i}>{product.name} {product.price}</li>)}
			</ul>
		</div>
	)
}