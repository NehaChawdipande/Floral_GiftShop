import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return open ? (
    <div className="navMenuOpen">
      <button
        className="myNavButton navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setOpen(false)}
      >
        <span className="material-icons">close</span>
      </button>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
            <h3>Home</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/ProductList"
            onClick={() => setOpen(false)}
          >
            <h3>Products</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart" onClick={() => setOpen(false)}>
            <h3>Cart</h3>
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src="Logo.png" className="logo" alt="logo"></img>
      </Link>
      <button
        className="myNavButton navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setOpen(true)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <h4>Home</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ProductList">
              <h4>Products</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Cart">
              <h4>Cart</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
