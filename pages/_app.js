import Head from 'next/head';
import '../styles/styles.scss';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Pokedex</title>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
				<meta property="og:title" content="Pokedex" />
				<meta property="og:description" content="Gotta Catch 'Em All" />
				<meta property="og:image" content="/imgs/pokedex-compressor.png" />
				<meta name="twitter:card" content="summary_large_image"/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}