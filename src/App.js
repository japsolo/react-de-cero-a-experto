import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// Components
import ProductsList from './pages/ProductsList';
import CreateProduct from './pages/CreateProduct';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/productos/crear">Crear Producto</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/productos" component={ProductsList} />
          <Route path="/productos/crear" component={CreateProduct} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
