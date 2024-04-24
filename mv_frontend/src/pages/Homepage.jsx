import React from 'react';
import '../pages/Homepage.css'; 
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
    <Navbar/>
      <form className="form-center" role="search">
        <input className="search-bar" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-search" type="submit">Search</button>
      </form>

      <div className='top-movie'>
        <img src="https://images.genius.com/e06aba7d007f296defa56fbdecf3b244.1000x1000x1.jpg" className="card-img-top img-fluid" alt="..." />
        <img src="https://cdn.idntimes.com/content-images/community/2023/03/whatsapp-image-2023-03-23-at-185706-d955630590742a0bb604a695ede8a79c-d7583297c8ed1ece4565c8667c7128a9.jpeg" className="card-img-top img-fluid" alt="..." />
        <img src="https://images.genius.com/e06aba7d007f296defa56fbdecf3b244.1000x1000x1.jpg" className="card-img-top img-fluid" alt="..." />
      </div>

      <div className="flex flex-col" >
        <div style={{height:"15px"}}></div>
        <h3>Korean series</h3>
        <div className="movie-list" >
          
        </div>
      </div>
    </>
  );
}

export default HomePage;
