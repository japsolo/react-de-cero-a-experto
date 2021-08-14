// Cada reducer tiene su propio state
const initialState = {
	productsList: [],
	loading: false,
	date: new Date(),
}

function productsReducer (state = initialState, action) {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				...state,
				loading: action.payload,
			}
		case 'STORE_PRODUCT':
			return {
				...state,
				loading: action.payload.load,
				productsList: [...state.productsList, action.payload.data]
			}
		case 'GET_PRODUCTS':
			return {
				...state,
				productsList: action.payload
			}
		default:
			return state;
	}
}

export default productsReducer;