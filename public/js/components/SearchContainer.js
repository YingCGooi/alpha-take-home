import React from 'react';
import { connect } from 'react-redux';

import Movie from './Movie';

const SearchContainer = (props) => (
  <main id='search-container'>
    <form>
      <input
        id='title'
        name='title'
        type='text'
        placeholder='Search movie title'
      />
      <button type='submit'>
        <i className='search icon'></i>
      </button>
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