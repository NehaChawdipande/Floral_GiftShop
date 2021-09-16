import { Link } from 'react-router-dom';

export default function ProductNavbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/Products">Bouquets</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Products">Flower Baskets</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Products">Flower Seeds</Link>

      </li>
      
    </ul>
  </div>
</nav>
    )
}