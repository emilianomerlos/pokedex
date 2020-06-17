import axios from 'axios';

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export async function getAllPokemonsName() {
	let res = await axios.get( apiUrl + '?limit=151')

	return res.data.results.map(poke => {
		return {
			params: {
				name: poke.name
			}
		}
	})

}

export async function getPokemonData(name) {
	
	let res = await axios.get( apiUrl + name);

	return res.data;

}