import { Link } from 'react-router-dom';

import './navbar.css';

export default function Navbar() {
	return (
		<nav className="main-navbar">
			<ul>
				<li><Link to="/"> Home </Link></li>
				<li><Link to="/register"> Register </Link></li>
				<li><Link to="/about"> About </Link></li>
				<li><Link to="/users"> Users </Link></li>
				<li><Link to="/weather"> Weather </Link></li>
				<li><Link to="/rick-morty"> Rick y Morty </Link></li>
				<li><Link to="/products/1"> Product #1 </Link></li>
				<li><Link to="/products/2"> Product #2 </Link></li>
				<li><Link to="/products/3"> Product #3 </Link></li>
				<li><Link to="/products/4"> Product #4 </Link></li>
				<li><Link to="/asdasdasd"> No existe </Link></li>
			</ul>
		</nav>
	)
}