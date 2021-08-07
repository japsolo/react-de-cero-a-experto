import { Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar() {
	return (
		<nav className="main-navbar">
			<ul>
				<li><Link to="/"> Home </Link></li>
				<li><Link to="/weather"> Weather </Link></li>
				<li><Link to="/rick-morty"> Rick y Morty </Link></li>
				<li><Link to="/products"> Products </Link></li>
				<li><Link to="/asdasdasd"> No existe </Link></li>
			</ul>
		</nav>
	)
}