import './scss/custom.scss';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';

import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
	return (
		<Container>
			
			<Navbar />
			<Banner />

			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://via.placeholder.com/150"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://via.placeholder.com/150"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://via.placeholder.com/150"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>

			<Row style={{
				background: 'black'
			}}>
				<Col xs={12} sm={6} md={3} lg={2}>
					<Button variant="info" style={{
						width: '100%'
					}}>Info button</Button>
				</Col>
		
				<Col xs={12} sm={6} md={3} lg={2}> 
					<Button variant="danger" style={{
						width: '100%'
					}}>Danger button</Button>
				</Col>
		
				<Col xs={12} sm={6} md={3} lg={2}> 
					<Button variant="success" style={{
						width: '100%'
					}}>Success button</Button>
				</Col>
		
				<Col xs={12} sm={6} md={3} lg={2}> 
					<Button variant="warning" style={{
						width: '100%'
					}}>Warning button</Button>
				</Col>
		
				<Col xs={12} sm={6} md={3} lg={2}> 
					<Button variant="danger" style={{
						width: '100%'
					}}>Danger button</Button>
				</Col>
			</Row>
   	</Container>
	);
}

export default App;