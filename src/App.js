import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import CreateProduct from './components/createProduct';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<div className="container my-5">
					<h3>Products Site</h3>
					<ul className="nav nav-tabs">
						<li><Link className="btn btn-info mx-1" to="/">Home</Link></li>
						<li><Link className="btn btn-info mx-1" to="/products/create">Crear producto</Link></li>
					</ul>
					<hr />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/products/create" component={CreateProduct} />
					</Switch>
				</div>
			</Provider>
		</Router>
	)
}

export default App;