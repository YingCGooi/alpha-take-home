import React from 'react';

const RatingForm = ({ rating, imdbId }) => (
  <form>
  {
    [1, 2, 3, 4, 5].map(value => (
      <label key={value}>
        <input type='radio' name='rating' value={value} />
        <i className={ 'star ' + (value <= rating ? '' : 'outline') + ' icon' }></i>
      </label>
    ))
  }
  </form>
)

export default RatingForm;