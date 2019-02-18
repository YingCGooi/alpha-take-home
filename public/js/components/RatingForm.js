import React from 'react';

const RatingForm = ({ rating, imdbId }) => (
  <form>
  {
    [1, 2, 3, 4, 5].map(value => (
      <label key={value}>
        <input type='radio' name='rating' value='1' />
        <i className={ (value <= rating ? 'star' : 'star outline') + ' icon' }></i>
      </label>
    ))
  }
  </form>
)

export default RatingForm;