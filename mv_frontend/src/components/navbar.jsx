import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const genreItems = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Investigation', 'Romance', 'Sci-fi', 'Thriller'];
  const countryItems = ['Chinese', 'England', 'Japan', 'Korea', 'Thai'];

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
    <nav className="navbar">
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
              <>
                {genreItems.map((genreItem, index) => (
                  <li key={index} className='genre-menu'>{genreItem}</li>
                ))}
              </>
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
              <>
              {countryItems.map((countryItems, index) => (
                <li key={index} className='genre-menu'>{countryItems}</li>
              ))}
            </>
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
