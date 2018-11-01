import Layout from '../components/MyLayout'
//Only special directory is pages, component directory can be anything

export default () => (
    <Layout>
        <p style={{fontSize: 30, color:'purple'}}> Welcome to the Main Page </p>
    </Layout>
)



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