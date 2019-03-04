import Header from './header'
import Head from 'next/head'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}

const Layout = (props) => (
    <div>
        <Head>
            <title>NextJs</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>
    
        <Header /> 
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout