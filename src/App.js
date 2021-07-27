// Assets
import './assets/css/App.css';

// Class Component
import Counter from './components/Counter';
import RickMorty from './components/RickMorty';

let n = 15;

function App() {

	const sumar15Handler = () => {
		n += 15;
		console.log(n);
	}

	return (
		<div className="App">
			<RickMorty/>

			<Counter />
			<hr />
			<ul>
				<li><b>onClick</b></li>
				<li><b>onSubmit</b></li>
				<li><b>onFocus</b></li>
				<li><b>onBlur</b></li>
				<li><b>onChange</b></li>
				<li><b>onInput</b></li>
				<li><b>onMouseHover</b></li>
				<li><b>onMouseOut</b></li>
				<li><b>onWindowScroll</b></li>
			</ul>
			<hr />
			<h3>{n}</h3>
			<button onClick={ sumar15Handler }>Sumar 15</button>
		</div>
	);
}

export default App;
