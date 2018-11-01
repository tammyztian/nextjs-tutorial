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

/*
    with Router injects the router as a property
    Using the query obj to get the title



import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Page = withRouter((props) => (
    <Layout>
       <h1>{props.router.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
))

export default Page


*/


