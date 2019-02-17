import React from 'react';
import { connect } from 'react-redux';

import SearchResult from './SearchResult';

const SearchContainer = (props) => (
  <main id='search-container'>
    <form>
      <label htmlFor='movie'>Search movie from OMDb:</label>
      <input
        id='movie'
        name='movie'
        type='text'
        placeholder='Movie Title'
      />
    </form>
    <SearchResult 
      results={props.results}
    />
  </main>
);

const mapStateToProps = (state) => (
  {
    results: state.search.results,
    page: state.search.page
  }
);

export default connect(mapStateToProps)(SearchContainer);