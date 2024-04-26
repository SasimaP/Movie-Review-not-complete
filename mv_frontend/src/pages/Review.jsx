import React, { useState } from 'react';
import './Review.css';

function ReviewForm() {
  const genreItems = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Investigation', 'Romance', 'Sci-fi', 'Thriller'];
  const rates = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const [movieTitle, setMovieTitle] = useState('');
  const [plot, setPlot] = useState('');
  const [spoiler, setSpoiler] = useState('');
  const [leadActor, setLeadActor] = useState('');
  const [director, setDirector] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle image upload logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', {
      movieTitle,
      plot,
      spoiler,
      leadActor,
      director,
      selectedGenre,
    });
  };

  const [funRating, setFunRating] = useState('');
  const [romanceRating, setRomanceRating] = useState('');
  const [sadnessRating, setSadnessRating] = useState('');
  const [comedyRating, setComedyRating] = useState('');

  return (
    <form className='reviewForm' onSubmit={handleSubmit}>
      <div className='left-side'>
        <h1>เรื่องที่คุณต้องการรีวิว</h1>
        <div>
          <input type="text" placeholder="ชื่อเรื่อง" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="นามปากกา" value={leadActor} onChange={(e) => setLeadActor(e.target.value)} />
        </div>
        <div>
          <textarea placeholder="เรื่องย่อ" value={plot} onChange={(e) => setPlot(e.target.value)} />
        </div>
        <div>
          <textarea placeholder="สปอย" value={spoiler} onChange={(e) => setSpoiler(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="นักแสดงนำ" value={leadActor} onChange={(e) => setLeadActor(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="ผู้กำกับ" value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
      </div>
      <div className='right-side'>
        <div className="mb-3">
          <input className="img-select" type="file" style={{ width: '96%' }} onChange={handleImageUpload} />
        </div>
        <div className="dropdown">
          <label htmlFor="funRate">ความสนุก:</label>
          <select className="small-button" value={funRating} onChange={(e) => setFunRating(e.target.value)}>
            {rates.map((rate, index) => (
              <option key={index} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="finRate">ความฟิน:</label>
          <select className="small-button" value={romanceRating} onChange={(e) => setRomanceRating(e.target.value)}>
            {rates.map((rate, index) => (
              <option key={index} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="sadRate">ความเศร้า:</label>
          <select className="small-button" value={sadnessRating} onChange={(e) => setSadnessRating(e.target.value)}>
            {rates.map((rate, index) => (
              <option key={index} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="funnyRate">ความตลก:</label>
          <select className="small-button" value={comedyRating} onChange={(e) => setComedyRating(e.target.value)}>
            {rates.map((rate, index) => (
              <option key={index} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
        <label>Genre:</label>
        <div className='genre-button'>
          {genreItems.map((genreItem, index) => (
            <button key={index} className={`genre-select ${selectedGenre === genreItem ? 'selected' : ''}`} onClick={() => setSelectedGenre(genreItem)}>{genreItem}</button>
          ))}
        </div>
        <div className='post-button-container'>
          <button className='post-button' type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;