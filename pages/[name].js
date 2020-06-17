import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

import EvolutionChain from '../components/evolutionChain';
import BtnNext from '../components/btnNext';
import BtnBack from '../components/btnBack';

import {getAllPokemonsName, getPokemonData} from '../data/pokemons';
import { useState, useEffect } from 'react';

const apiImg = "https://pokeres.bastionbot.org/images/pokemon/";

export default function Pokemon({pokemon}) {

	const [desc, setDesc] = useState('');
	const [urlEvolution, setUrlEvolution] = useState('');

	useEffect(
		() => {
			setDesc('');
			setUrlEvolution('');
			axios.get( pokemon.species.url )
			.then( (response) => {
				const flavors = response.data.flavor_text_entries.filter( (ft) => {
					return ft.language.name === 'en';
				})
				setDesc( flavors[0].flavor_text );
				setUrlEvolution( response.data.evolution_chain.url );
			})
			.catch( (error) => {
				console.log(error);
			});

		}, [pokemon]
	);

	return (
		<>
			<Head>
				<title>Pokedex | {pokemon.name}</title>
			</Head>
			<div className="container">
				<section className={"pokedata-hero " + pokemon.types[0].type.name}>
					<menu className="pokedata-menu">
						<Link href="/"><div className="flecha"> <div className="fle"></div> Back </div></Link>
					</menu>
					<h1 className="pokedata-nombre nombre"> <b className="nombre">#{pokemon.id}</b> {pokemon.name} </h1>
					<div className="pokedata-cosito"></div>
					<img className="pokedata-foto" src={apiImg + pokemon.id + '.png'}></img>
				</section>
				<section className="pokedata-body">
					<section className="pokedata-body-module">
						<h2 className="titulo">Types</h2>
						{
							pokemon.types.map( (t, i) => {
								return (
									<article className={"type " + t.type.name} key={i}>
										{t.type.name}
									</article>
								)
							})
						}
					</section>
					<section className="pokedata-body-module">
						<h2 className="titulo">About</h2>
						{
							(desc === '') ? (<div className="lds-circle"><div className="mini"></div></div>) : (<p>{desc.replace('\n', ' ').replace('\f', ' ')}</p>)
						}
						
					</section>
					<EvolutionChain url={urlEvolution} />
					<section className="pokedata-body-module half-module">
						<h2 className="titulo">Height</h2>
						<p> {pokemon.height / 10} Mts </p>
					</section>
					<section className="pokedata-body-module half-module">
						<h2 className="titulo">Weight</h2>
						<p> {pokemon.weight / 10} Kg </p>
					</section>
					<section className="pokedata-body-module">
						<h2 className="titulo">Stats</h2>
						{
							pokemon.stats.map( (s, i) => {
								return (
									<article className='stat' key={i}>
										<h3 className="stat-titulo">{s.stat.name}</h3>
										<div className="bar">
											<div className={"progres " + pokemon.types[0].type.name} style={{ 'width' : s.base_stat + '%', 'maxWidth': '100%' }} ></div>
										</div>
										<p className="mount"> {s.base_stat} </p>
									</article>
								)
							})
						}
					</section>
					<section className="pokedata-body-botones">
						{
							(pokemon.id > 1) ? (<BtnBack id={pokemon.id} />) : (<p></p>)
						}
						{
							(pokemon.id < 151) ? (<BtnNext id={pokemon.id} />) : null
						}
						
					</section>
				</section>
			</div>
		</>
	)
}


export async function getStaticPaths() {
	const paths = await getAllPokemonsName();
	return {
		paths,
		fallback: false
	}
}


export async function getStaticProps({ params }) {
	const pokemon = await getPokemonData(params.name)
	return {
		props: {
			pokemon
		}
	}
}
