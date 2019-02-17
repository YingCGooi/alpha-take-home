import React from 'react';

const SearchContainer = () => (
  <main id='search-container'>
    <form>
      <label htmlFor='movie'>Search movies from OMDb:</label>
      <input
        id='movie'
        name='movie'
        type='text'
        placeholder='Movie Title'
      />
    </form>
  </main>
)

export default SearchContainer;