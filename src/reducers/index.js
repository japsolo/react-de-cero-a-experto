import { combineReducers } from 'redux';

// Reducers
import productsReducer from './productsReducer';

export default combineReducers({
	products: productsReducer,
})