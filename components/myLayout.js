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
            <title>Stena Recycling!!</title>

            {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/> */}
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        </Head>

        <Header />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout

const divStyle = {
    marginRight : '10%',
    marginLeft: '10%'
  };
