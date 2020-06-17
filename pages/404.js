import Link from 'next/link';

export default function Custom404() {
    return (
        <section className="errorPage">
            <h1>4</h1>
            <div className="pokeball">
                <div className="pokeball-half"></div>
            </div>
            <h1>4</h1>
            <h2>Pokemon not found</h2>
            <Link href="/">
                <p>INDEX</p>
            </Link>
        </section>
    )
}