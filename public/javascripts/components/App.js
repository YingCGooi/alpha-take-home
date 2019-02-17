const SearchContainer = () => (
  <main id='search-container'>Search</main>
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
          >Search
          </a>
          <a 
            href='#'
            onClick={() => this.setState({ showFavorites: true })}
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

ReactDOM.render(<App />, document.getElementById('root'));