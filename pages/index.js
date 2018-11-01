import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

//Only special directory is pages, component directory can be anything

const Index = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(`Show data fetch. Count ${data.length}`)

    return {
        shows: data
    }
}

export default Index

//getInitialProps fetches data and sends them as props


//USING API FROM TVMaze

//pages are lowercase
//Styling only applied onto components, Link is a HOC wraps component to set up component with info

/*Routing Docs

    A. Lifecycle

        <Link prefetch> = Max performance pre fetch in the bg

        1. fetch component > 2. define InitialProps > 3. pushState & render new component

        Prefetch ONLY dls JS code, will need to wait for any data

    B.URL strings
            Follows  https://nodejs.org/api/url.html#url_url_strings_and_url_objects

           i.  Generating URL Strings
                <Link href={{pathname: '/about', query: {name:Tammy} }}> === localhost:3000/about?name=Tammy
           ii.  Replace
                <Link href="/about" replace>
*/