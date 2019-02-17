import React from 'react';
import SearchContainer from './SearchContainer';
import FavoritesContainer from './FavoritesContainer';

class App extends React.Component {
  state = {
    showFavorites: false
  }

  render() {
    return (
      <div id='app'>
        <header>OMDb Movie Tracker</header>
        <nav>
          <a 
            href='#'
            onClick={() => this.setState({ showFavorites: false })}
            className={ !this.state.showFavorites ? 'active' : '' }
          >Search
          </a>
          <a 
            href='#'
            onClick={() => this.setState({ showFavorites: true })}
            className={ this.state.showFavorites ? 'active' : '' }
          >Favorites
          </a>
        </nav>
        {
          (this.state.showFavorites)
            ? <FavoritesContainer />
            : <SearchContainer />
        }
      </div>
    )
  }
}

export default App;