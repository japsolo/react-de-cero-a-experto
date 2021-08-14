export function createProductsActions (newProduct) {
	const add = () => {
		return {
			type: 'ADD_PRODUCT',
			payload: true
		}
	}
	
	const storeInState = theProduct => {
		return {
			type: 'STORE_PRODUCT',
			payload: {
				load: false,
				data: theProduct
			}
		}
	}

	return async (dispatch) => {
		dispatch(add());
		try {
			// const response = await fetch(`${process.env.REACT_APP_API_HOST}/products`, {
			// 	method: 'POST',
			// 	body: JSON.stringify(newProduct),
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	}
			// }).then(response => response.json());

			dispatch(storeInState(newProduct));
		} catch (error) {
			console.error(error);
		}
	}
}

export function getProductsActions () {
	const getAll = products => ({
		type: 'GET_PRODUCTS',
		payload: products
	})

	return async (dispatch) => {
		try {
			const products = await fetch(`${process.env.REACT_APP_API_HOST}/products`).then(response => response.json());
			await dispatch(getAll(products.products));
		} catch (error) {
			console.error(error);
		}
	}
}