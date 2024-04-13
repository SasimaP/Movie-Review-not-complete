import React from 'react';
import '../pages/Homepage.css'; 
import Navbar from '../components/navbar';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <form className="form-center" role="search">
      <input className="search-bar" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn-search" type="submit">Search</button>
    </form>
      
    <div>
      <div className="content">
        <h1>Welcome to My Movie App</h1>
        <p>Explore a wide range of movies and categories.</p>
      </div>
    </div>
    </>
  );
}

export default HomePage;
