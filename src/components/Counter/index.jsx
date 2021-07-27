import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			day: null
		}
	}

	componentDidMount() {
		console.log('Component Mounted!');
	}
	
	componentDidUpdate() {
		const { day, count } = this.state;

		let p = document.querySelector('#dayParagraph');
		
		if (p) {
			p.removeAttribute('style');

			if(day === 'Saturday') {
				p.style.backgroundColor = 'Orange';
			}
		}
		
		if(count === 20) {
			window.alert('Llegas a veinte');
		}

		console.log('Component Updated!');
	}

	componentWillUnmount () {
		console.log('Component Will Unmount!');
	}

	changeDayHandler () {
		const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		const choosenDay = weekDays[Math.floor(Math.random() * weekDays.length)];
		this.setState({ day: choosenDay });
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 })
	}

	logInConsole () {
		console.log(Math.floor(Math.random() * 10));
	}

	render () {
		const { count, day } = this.state;
		return (
			<div>
				<hr />
				<h2>Soy el Counter Component</h2>
				<p>El state <b>COUNT</b> tiene como valor: {count}</p>
				{ !day && <p>Elegí un día por favor</p> }
				{ day && <p id="dayParagraph">{day}</p> }
				<button 
					onClick={ this.increment }
				> Increment Count! </button>
				
				<button 
					onClick={ () => this.changeDayHandler() }
				> Change day! </button>
				<hr />

				<button onClick={ this.logInConsole }>Haceme click</button>
			</div>
		)
	}
}

export default Counter;