import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';

const Searcher = () => {

	const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsShow, setPokemonsShow] = useState([]);

	const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

	useEffect(
		() => {
			axios.get( apiUrl + '?limit=151')
			.then( (response) => {
                let pokes = response.data.results.map( (p, i) => {
                    return {
                        name: p.name.toLowerCase().trim(),
                        id: i,
                        urlImg: urlImg + String(i + 1) + '.png'
                    }
                })
                setPokemons( pokes );
				setLoading( false );
			})
			.catch( (error) => {
				console.log(error);
			});

		}, []
    );
    
    const filter = (filtro) => {
       
        filtro = filtro.toLowerCase().trim();
        if(filtro === ''){
            setPokemonsShow([]);
        } else {
            const newPokespokemons = pokemons.filter( (p) => {
                const pokemonFullName = `${('000' + String(p.id + 1) ).slice(-3)} - ${p.name}`;
                return pokemonFullName.indexOf(filtro) > -1;
            } );
            
            if ( newPokespokemons.length === 0 ) {
                setPokemonsShow( [{name: 'nada'}] )
            } else {
                setPokemonsShow(newPokespokemons);
            }
            
        }

    };


	
	return(
		<section className="searcher">
            <div className="searcher-icon"></div><input onChange={ (e) => { filter(e.target.value) } } type='text' className="searcher-input" placeholder="Buscar Pokemon..." />
            <section className={ (pokemonsShow.length >= 1) ? "searcher-results" : "searcher-results ocultar" }>
                {
                    (loading) ? (<div className="lds-circle"><div className="mini"></div></div>) : null
                }
                {
                    (pokemonsShow[0] && pokemonsShow[0].name === 'nada') ? (
                        <article className="searcher-result"> 
                            <p className="searcher-nofound"> ¡UPS...! NOTHING HERE WHIT THAT NAME</p>
                        </article> 
                    ) : null
                }
                {
                    pokemonsShow.map( (poke, i) => {
                        if (poke.name === 'nada') {
                            return null
                        }
                        return(
                            <Link href="/[name]" as={"/" + poke.name} key={i}  >
                                <article className="searcher-result" > 
                                    <img src={poke.urlImg} /><p> { ('000' + String(poke.id + 1) ).slice(-3) } - {poke.name} </p>
                                </article>
                            </Link>
                        )
                    })
                }
            </section>
        </section>
	)

}

export default Searcher;