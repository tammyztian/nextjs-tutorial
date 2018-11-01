//import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'


const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
)


Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log('this is data', show);
    console.log(`Fetched show: ${show.name}`)

    return { show }
}


export default Post

/*

import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'

const Content = withRouter((props) => (
    <div className='content-container'>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
))

const Page = props => (
    <Layout>
        <Content />
    </Layout>
)

export default Page


    with Router injects the router as a property
    Using the query obj to get the title


*/


