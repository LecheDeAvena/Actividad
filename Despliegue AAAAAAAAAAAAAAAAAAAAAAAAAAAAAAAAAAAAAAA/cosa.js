const API_URL = "http://localhost:3000/usuariosId?idUsu=1";

fetch(API_URL, {
	method: 'GET',
	mode: 'cors',
	headers: {
		 'Accept': 'application/json',
		 'Content-Type': 'application/json'}
 })
  .then(response => response.json())
  .then(data => console.log(data));