import Pokemon from '../components/pokemon';
import Searcher from '../components/searcher';
import { useState, useEffect, useCallback } from 'react';

export default function Home() {

	const suma = 10;
	const max = 151;

	const [ arrayPokemons, setArrayPokemons ] = useState([1,2,3,4,5,6,7,8,9,10]);

	useEffect(
		() => {
			document.getElementById('container').addEventListener('scroll', handleScroll2 );
			return () => document.getElementById('container').removeEventListener('scroll', handleScroll2 );
		}, [arrayPokemons]
	);


	let handleScroll2 = useCallback( (e) => {

		const scrollTop = document.getElementById('container').scrollTop;
		const scrollHeight = document.getElementById('container').scrollHeight;
		const offerHeight = document.getElementById('container').offsetHeight;

		if (( scrollHeight - offerHeight ) - scrollTop < 70){
			let arr = [];
			for (let index = arrayPokemons.length + 1; index <= arrayPokemons.length + suma; index++) {
				if(index <= max){
					arr.push(index);
				}
			}
			if(arr.length > 0){
				setArrayPokemons([...arrayPokemons, ...arr]);
			}
			
		}

	}, [arrayPokemons]);


	return (
		<div className="container" id="container">
			<Searcher />
			{
				arrayPokemons.map( (ar) => {
					return( <Pokemon key={ar} id={ar} /> );
				})
			}
			{
				(arrayPokemons.length < max) ? (<article className='pokemon loading' ><div className="lds-circle"><div></div></div></article>) : null
			}
		</div>
	)
}
