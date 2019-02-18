import React from 'react';
import { connect } from 'react-redux';

import Movie from './Movie';

const SearchContainer = (props) => (
  <main id='search-container'>
    <form>
      <label htmlFor='movie'>Search a movie from OMDb:</label>
      <input
        id='movie'
        name='movie'
        type='text'
        placeholder='Movie Title'
      />
    </form>
    <Movie 
      movie={props.result}
      favoriteInfo={false}
    />
  </main>
);

const mapStateToProps = (state) => (
  {
    result: state.search,
  }
);

export default connect(mapStateToProps)(SearchContainer);