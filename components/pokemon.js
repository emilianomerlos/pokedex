import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';

const Poke = ({ id }) => {

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});
	
	const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
	const apiImg = "https://pokeres.bastionbot.org/images/pokemon/";

	useEffect(
		() => {
			axios.get( apiUrl + id)
			.then( (response) => {
				setPokemon( response.data );
				setLoading( false );
			})
			.catch( (error) => {
				console.log(error);
			});

		}, []
	);
	
	let body = ( 
		<article className='pokemon loading' >
			<div className="lds-circle"><div></div></div>
		</article>
	);

	if(!loading){
		body = (
			<Link href="/[name]" as={"/" + pokemon.name}>
				<article className={'pokemon ' + pokemon.types[0].type.name} >
					<h1 className='nombre'> {pokemon.name}  <b>#{ ('000' + pokemon.id).slice(-3) }</b> </h1>
					<section className="tipos">
						{
							pokemon.types.map( (typ, i) => {
								return(
									<p className='tipo' key={i} > {typ.type.name} </p>
								)
							})
						}
					</section>
					<img className='foto' alt={pokemon.name} src={apiImg + id + '.png'} />
				</article>
			</Link>
		);
	}

	return body;

}

export default Poke;