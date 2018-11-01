import Layout from '../components/MyLayout'
import Link from 'next/link'
//Only special directory is pages, component directory can be anything

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1> Latest Posts About Me</h1>
        <ul>
            <PostLink id="hello-next" title="Hello Next.js"/>
            <PostLink id="post-one" title="Post number two"/>
            <PostLink id="post-two" title="Post number three!"/>
        </ul>
    </Layout>
)


//History awareness is beautiful :)
//Causes an error when refresh bc no real page made
//Create a server!
