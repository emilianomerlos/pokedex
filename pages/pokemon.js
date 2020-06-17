import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Pokedex | Ditto</title>
			</Head>
			<div className="container">
				Pokemoncito
				<Link href="/">
					<a>Volver</a>
				</Link>
			</div>
		</>
	)
}
