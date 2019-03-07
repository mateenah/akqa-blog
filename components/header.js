import Link from 'next/link';

const linkStyle = {
    marginRight:15
}

const Header = () => (
   
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Stena Recycling</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a style={linkStyle} className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

)

export default Header