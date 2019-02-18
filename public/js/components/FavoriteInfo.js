import React from 'react';
import RatingForm from './RatingForm';

const FavoriteInfo = ({ rating, imdbId, comments }) => (
  <section>
    <RatingForm rating={ rating } imdbId={ imdbId }/>
    <p>Comments: { comments }</p>
  </section>
);

export default FavoriteInfo;