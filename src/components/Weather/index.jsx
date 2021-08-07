import React, { useState, useEffect, useRef } from 'react';

export default function Weather ({ initialCity }) {
	const [city, setCity] = useState(initialCity);
	const [cityWeather, setCityWeather] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [cityExist, setCityExist] = useState(false);

	const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
	const apiKey = 'dcd3bf7aa7b25dcb3162909c8417a2e0';

	const cityInput = useRef(null);

	const getWeather = async city => {
		let endPoint = `${baseURL}?appid=${apiKey}&units=metric&q=${city}`;
		const data = await fetch(endPoint).then(response => response.json())
		return data;
	}

	const myFunction = (theCity = city) => {
		if (theCity !== undefined) {
			getWeather(theCity)
				.then(data => {
					if (data.cod === 200) {
						setCityWeather(data);
						setIsLoading(false);
						setCityExist(true);
					}
					if (data.cod == 404) {
						setCityWeather(null);
						setIsLoading(false);
						setCityExist(false);
					}
				})
		}
	}

	useEffect(() => {
		myFunction();

		return () => {
			console.log('El componente Weather se acaba de desmontar');
		}
	}, []);
	
	// useEffect(() => {
	// 	console.log('Datos del clima de: ' + city);
	// 	console.log(cityWeather ? cityWeather : 'No hay datos para esta ciudad');
	// }, [city, cityWeather]);

	const searchCityWeather = e => {
		e.preventDefault();

		const cityName = cityInput.current.value;

		setCity(() => {
			myFunction(cityName);
			return cityName;
		});
		
		setIsLoading(true);

		cityInput.current.value = '';
	}

	return (
		<>
			<h2>Weather Hook Component</h2>

			<form onSubmit={searchCityWeather}>
				<label>Busca tu ciudad:</label>
				<input type="text" name="cityName" ref={cityInput} />
				<button type="submit">Buscar</button>
			</form>

			{!city && <h3>Comienza buscando una ciudad</h3>}

			{isLoading && city && cityExist && <p>Cargando...</p>}
			{
				!isLoading && cityExist && cityWeather && <>
					<h2>
						{cityWeather.name}
						<img src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt="weather icon" width="20px" />
					</h2>
					<ul>
						<li>Temperatura actual: {cityWeather.main.temp.toFixed()}°C</li>
						<li>Sensación térmica: {cityWeather.main.feels_like.toFixed()}°C</li>
						<li>Humedad: {cityWeather.main.humidity}%</li>
						<li>Máxima: {cityWeather.main.temp_max.toFixed()}°C</li>
						<li>Mínima: {cityWeather.main.temp_min.toFixed()}°C</li>
					</ul>
				</>
			}

			{!isLoading && !cityExist && <p>No se ha encontrado ninguna ciudad con este nombre</p>}
		</>
	)
}