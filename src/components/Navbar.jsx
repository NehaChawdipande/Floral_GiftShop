import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
      <Link className="navbar-brand" to="/Home">
      <img src="Logo.png" className="logo" alt="logo"></img>
      </Link>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ProductList">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Cart">Cart</Link>

      </li>
      
    </ul>
  </div>
</nav>
    )
}