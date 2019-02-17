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
    { console.log(store.getState()) }
  </main>
)

const FavoritesContainer = () => (
  <main id='favorites-container'>Favorites</main>
)

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
            ? <FavoritesContainer/>
            : <SearchContainer />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));