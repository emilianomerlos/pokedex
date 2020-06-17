import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';

const evolutionChain = ({ url }) => {

	const [loading, setLoading] = useState(true);
	const [pokemons, setPokemons] = useState([]);

	const apiImg = "https://pokeres.bastionbot.org/images/pokemon/";

	let addPoke = ( chain ) => {

		const p = pokemons;
		const splitUrl = chain.species.url.split('/');
		let id = splitUrl[6];
		
		let lvl = 'LVL 0';

		if(chain.evolution_details.length > 0){
			if(chain.evolution_details[0].min_level){
				lvl = 'LVL ' + String(chain.evolution_details[0].min_level);
			} else {
				lvl = 'USE ITEM';	
			}
			
		}

		if(id < 152){
			p.push({name: chain.species.name, id: id, level: lvl});
			setPokemons(p);
		} 
		
		chain.evolves_to.map( (ev) => {
			addPoke(ev)
		})

	};

	useEffect(
		() => {
			setLoading( true );
			setPokemons([]);
			if(url != ''){
					axios.get( url )
					.then( (response) => {

						const chain = response.data.chain;

						addPoke(chain);

						setLoading(false);

					})
					.catch( (error) => {
						console.log(error);
					});
			}
		}, [url]
	);

	if(loading){
		return(
			<section className="pokedata-body-module">
				<h2 className="titulo">Evolution Chain</h2>
				<div className="lds-circle"><div className="mini"></div></div>
			</section>
		)
	}

	return(
		<section className="pokedata-body-module">	
			<h2 className="titulo">Evolution Chain</h2>
			<section className="evolution-chain">
				{
					pokemons.map( (poke, i) => {
						return(
							<Link href="/[name]" as={"/" + poke.name} key={i}>
								<article className="poke-chain" >
									<img src={apiImg + poke.id + '.png'} />
									<p className="chain-name"> {poke.name} </p>
									<p className="chain-level">  <i>{poke.level} </i> </p>
								</article>
							</Link>
						)
					})
				}
			</section>
		</section>
	)

}

export default evolutionChain;