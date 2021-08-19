export default async function  fetchCall (path, config = {}) {
	const endPoint = `${process.env.REACT_APP_API_HOST}/${path}`;
	const response = await fetch(endPoint, config).then(response => response.json());
	return response;
}