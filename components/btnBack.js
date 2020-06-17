import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';

const btnBack = ({ id }) => {

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

	useEffect(
		() => {
			setLoading( true );
			axios.get( apiUrl + '?limit=1&offset=' + String(id - 2))
			.then( (response) => {
				setPokemon( response.data.results[0] );
				setLoading( false );
			})
			.catch( (error) => {
				console.log(error);
			});

		}, [id]
	);

	if(loading){
		return ( 
			<button className="btn btn-izq">
				<div className="lds-circle"><div className="mini"></div></div>
			</button>
		)
	}

	const urlImg ="https://pokeres.bastionbot.org/images/pokemon/"+ String(id - 1) +".png";
	return(
		<Link href="/[name]" as={"/" + pokemon.name}>
			<button className="btn btn-izq">
				<div className="flechuzka"></div> <p> {pokemon.name} </p><img src={urlImg} className="btn-img" />
			</button>
		</Link>
	)

}

export default btnBack;