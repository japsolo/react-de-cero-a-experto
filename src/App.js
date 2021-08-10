import { 
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

import Weather from './components/Weather';
import RickMorty from './components/RickMortyV2';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className="container my-5">
				<Navbar />
				
				<hr />
				
				<Switch>
					<Route exact path="/" component={ Home } />
					
					<Route path="/register" component={ Register } />
					
					<Route path="/users/:id" component={ Profile } />
					
					<Route path="/users" component={ Users } />
				
					{/* <Route path="/weather" component={ Weather } /> */}
				
					{/* <Route path="/weather">
						<Weather initialCity="London" />
					</Route> */}

					<Route path="/weather" render={ () => <Weather initialCity="Oradea" /> } />

					<Route path="/rick-morty" component={ RickMorty } />
					
					<Route path="/about" component={ About } />
					
					<Route path="/products/:id/:name?" component={ Products } />

					<Route component={ NotFound } />
				</Switch>
			</div>
		</Router>
	)
}

export default App;