import React from 'react';
import RatingForm from './RatingForm';

const FavoriteInfo = ({ rating, imdbID, comments }) => (
  <section>
    <RatingForm rating={ rating } imdbID={ imdbID }/>
    <p>Comments: { comments }</p>
  </section>
);

export default FavoriteInfo;