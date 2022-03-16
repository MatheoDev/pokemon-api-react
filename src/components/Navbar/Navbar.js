import { Link } from "react-router-dom"

const Navbar = () => <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/home">Pokémon API</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link active">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

export default Navbar
