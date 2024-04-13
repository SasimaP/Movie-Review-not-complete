import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [moviesOpen, setMoviesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);

  const handleMoviesClick = () => {
    setMoviesOpen(!moviesOpen);
    setCountriesOpen(false);
  };

  const handleCountriesClick = () => {
    setCountriesOpen(!countriesOpen);
    setMoviesOpen(false);
  };

  return (
    <nav className="navbar-dark bg-dark">
      <ul className="navbar-nav">
        <div className="nav-group-left">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              aria-expanded={moviesOpen ? 'true' : 'false'}
              onClick={handleMoviesClick}
            >
              Movies
            </a>
            {moviesOpen && (
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Comedy</a></li>
                <li><a className="dropdown-item" href="#">Drama</a></li>
                <li><a className="dropdown-item" href="#">Fantasy</a></li>
                <li><a className="dropdown-item" href="#">Investigation</a></li>
                <li><a className="dropdown-item" href="#">Romance</a></li>
                <li><a className="dropdown-item" href="#">Sci-fi</a></li>
                <li><a className="dropdown-item" href="#">Thriller</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              aria-expanded={countriesOpen ? 'true' : 'false'}
              onClick={handleCountriesClick}
            >
              Countries
            </a>
            {countriesOpen && (
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Chinese</a></li>
                <li><a className="dropdown-item" href="#">England</a></li>
                <li><a className="dropdown-item" href="#">Japan</a></li>
                <li><a className="dropdown-item" href="#">Korea</a></li>
                <li><a className="dropdown-item" href="#">Thai</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Review</a>
          </li>
        </div>

        <div className='nav-group-right'>
          <li className="nav-item right">
            <Link to="/login">Login</Link>
            <span className="nav-separator"></span>
            <Link to="/login">Logout</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
