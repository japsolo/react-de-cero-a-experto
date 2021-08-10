import { useParams, useHistory } from 'react-router-dom';

export default function Products({ match }) {
	// const id = Number(match.params.id);

	// const location = useLocation();
	const history = useHistory();

	// console.log(location.search);
	// console.log(location.hash);
	// console.log(location.pathname);

	const { id } = useParams();

	const products = [
		{id: 1, name: 'TV'},
		{id: 2, name: 'Compu'},
		{id: 3, name: 'Heladera'}
	];

	const oneProduct = products.find(oneProduct => oneProduct.id === Number(id));

	const submitHandler = e => {
		e.preventDefault();
		const wordInput = e.currentTarget.word;
		const word = wordInput.value;
		if (word === 'juana') {
			history.push('/rick-morty');
		}
	}

	return (
		<>
			<h2>Component Products</h2>

			<form action="/" method="POST" onSubmit={submitHandler}>
				<input type="text" name="word" />
				<button>Enviar</button>
			</form>

			{/* <Redirect to="/" /> */}

			{ !oneProduct && <h2>No existe un producto con ese ID</h2> }
			
			{
				oneProduct && 
				<>
					<p> {oneProduct.id} </p>
					<p> {oneProduct.name} </p>
				</>
			}

			<button onClick={ () => history.goBack() }>ir atrás</button>
			<button onClick={ () => history.goForward() }>ir adelante</button>
		</>
	)
}