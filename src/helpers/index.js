export const getData = async (endPoint) => {
	let response = await fetch(endPoint);
	let data = await response.json();
	return data;
}