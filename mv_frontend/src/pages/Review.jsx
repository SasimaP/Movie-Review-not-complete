import React, { useState } from 'react';
import './Review.css';

const ReviewForm = () => {
  const genreItems = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Investigation', 'Romance', 'Sci-fi', 'Thriller'];
  
  const [movieTitle, setMovieTitle] = useState('');
  const [plot, setPlot] = useState('');
  const [spoiler, setSpoiler] = useState('');
  const [leadActor, setLeadActor] = useState('');
  const [director, setDirector] = useState('');
  const [image, setImage] = useState('');
  const [funRating, setFunRating] = useState('');
  const [romanceRating, setRomanceRating] = useState('');
  const [sadnessRating, setSadnessRating] = useState('');
  const [comedyRating, setComedyRating] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle image upload logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <form className='reviewForm' onSubmit={handleSubmit}>
      <div className='left-side'>
        <h1>Your Review</h1>
        <div>
          <input type="text" placeholder="Movie Title" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        </div>
        <div>
          <textarea placeholder="Plot" value={plot} onChange={(e) => setPlot(e.target.value)} />
        </div>
        <div>
          <textarea placeholder="Spoiler" value={spoiler} onChange={(e) => setSpoiler(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Lead Actor" value={leadActor} onChange={(e) => setLeadActor(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
      </div>
      <div className='right-side'>
        <div class="mb-3">
          <input class="img-select" type="file"/>
        </div>
        <div>
          <select value={funRating} onChange={(e) => setFunRating(e.target.value)}>
            <option value="">Select Fun Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <select value={romanceRating} onChange={(e) => setRomanceRating(e.target.value)}>
            <option value="">Select Romance Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <select value={sadnessRating} onChange={(e) => setSadnessRating(e.target.value)}>
            <option value="">Select Sadness Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <select value={comedyRating} onChange={(e) => setComedyRating(e.target.value)}>
            <option value="">Select Comedy Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <label>Genre:</label>
        <div className='genre-button'>
          {genreItems.map((genreItem, index) => (
            <button key={index} className='genre-select'>{genreItem}</button>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
