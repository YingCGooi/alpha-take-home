import React from 'react';

const Movie = ({ movie, favoriteInfo }) => (
  <article className='movie'>
    <div className='poster'>
      {
        (movie.poster === 'N/A')
          ? <img src='http://via.placeholder.com/300x466' />
          : <img src={ movie.poster } />
      }
    </div>
    <div className='info'>
      <div>
        <h2>{ movie.title } <span>({ movie.year })</span></h2>
        <p>{ movie.plot }</p>
      </div>
      {
        (favoriteInfo) 
          ? <button className='favorite' disabled>Added to Favorites</button>
          : <button className='favorite'>Add To Favorites</button> 
      }
    </div>
  </article>
)

export default Movie;