import Head from 'next/head';
import '../styles/styles.scss';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Pokedex</title>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
				
				<link rel="icon" type="image/svg+xml" href="/favicon.svg">
				<link rel="alternate icon" href="/favicon.ico"></link>

				<meta property="og:title" content="Pokedex" />
				<meta property="og:description" content="Gotta Catch 'Em All" />
				<meta property="og:image" content="/imgs/pokedex-compressor.png" />
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name='twitter:title' content="Pokedex"/>
				<meta name='twitter:image' content="/imgs/pokedex-compressor.png" />
				<meta name="twitter:description" content="Gotta Catch 'Em All" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}