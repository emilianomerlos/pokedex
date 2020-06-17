import Head from 'next/head';
import '../styles/styles.scss';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Pokedex</title>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}