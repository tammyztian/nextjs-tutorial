import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about">
            <a style={{fontSize: 30, color:'red'}}> Go to About Page </a>
        </Link>
    </div>
)

export default Index

//pages are lowercase
//Styling only applied onto components, Link is a HOC wraps component to set up component with info