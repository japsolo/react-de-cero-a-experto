# Redux en React 

[https://es.redux.js.org/docs/introduccion/tres-principios.html](Documentación oficial)

- Store: almacena todo(s) el estado(s) de la aplicación, solo hay uno por aplicación. La fuente de verdad.
- Reducers: son funciones que saben que hacer con el estado, son quienes manipulan al estado.
- Actions: funciones que retornan objetos literales, tiene las keys type y payload (datos).
- Dispatch: ejecuta la acción y permite que se inicie la actualización del state.
- Suscribe: solo para el store, es un event listener.

## Instalación

Solo necesitamos instalar las siguientes dependencias: `redux react-redux redux-thunk`

## Crear el store

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk)
		// redux dev tools
		typeof window === 'object' &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
		window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;
```

## Creando los reducers

1. Crear la carpeta `reducers` con un archivo `index.js` y varios archivos por reducer. Este archivo `index.js`se ve así:

```js
import { combineReducers } from 'redux';

// Reducers
import productsReducer from './productsReducer';

export default combineReducers({
	products: productsReducer,
})
```

2. Crear el archivo reducer por cada entidad que deseemos manejar en nuestra aplicación. Este archivo es quien va a tener el state y la "lógica" para modificarlo. Este archivo se ve así:

```js
// Cada reducer tiene su propio state
const initialState = {
	productsList: [],
	loading: false,
}

function productsReducer (state = initialState, action) {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				...
			}
		case 'DELETE_PRODUCT':
			return {
				...
			}
		default:
			return state;
	}
}

export default productsReducer;
```

## Conectando la App con el Store

```js
import { Provider } from 'react-redux';
import store from './store';

// Dentro del return
<Provider store={store}>
	... contenido JSX
</Provider>
```

## Crear el action de cada reducer

```js
export function createProductsActions () {
	return () => {
		console.log('Estamos dentro del Action de Create Products');
	}
}
```