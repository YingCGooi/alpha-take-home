const initialState = [
    {
        "Title": "Star Wars: Return of the Empire",
        "Year": "2013",
        "imdbID": "tt3852250",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTY0MTZkYWQtNDc4MS00YjA1LWJlYjgtNjUyN2U5MDI1YWI3XkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
    },
    {
        "Title": "Leaked Disney Star Wars 7 Trailer",
        "Year": "2012",
        "imdbID": "tt2514386",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "Star Wars: Evolution of the Lightsaber Duel",
        "Year": "2015",
        "imdbID": "tt6289242",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmE4NGMwY2ItMWU4MS00ZWJjLWI4ZTUtNjhhODViNDVkY2M5XkEyXkFqcGdeQXVyNzMxMzYyOTI@._V1_SX300.jpg"
    },
    {
        "Title": "Inter Star Wars: The Awaking Force",
        "Year": "2015",
        "imdbID": "tt5251598",
        "Type": "movie",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BYzA4NzNjOWQtYzRmMy00NzBiLTg1ZDUtYzg5NmFlZDg1MjZiXkEyXkFqcGdeQXVyNDcwNDE0Nzk@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars Heroes & Villains",
        "Year": "2005",
        "imdbID": "tt1970025",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQ5Zjk1ZjEtYTY4YS00N2ZkLWJiZDAtNTgxNTgwMzg5MmUyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzA4NDk0NjQ@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars Pathways: Chapter I - Path of Betrayal",
        "Year": "2006",
        "imdbID": "tt1557882",
        "Type": "movie",
        "Poster": "N/A"
    },
    {
        "Title": "Alex Jones Explains the Star Wars Prequels",
        "Year": "2017",
        "imdbID": "tt7542026",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDRmYjE3ZDYtZjQ2My00N2VhLTkwZTUtZjQ2ZTAxZGE3ZjVhXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: The Last Jedi Cast Live Q&A",
        "Year": "2017",
        "imdbID": "tt7769872",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzkwMWNmMmUtYTQ2NS00ZDM3LWJhZjctMGI1M2U4YWI2NGE0XkEyXkFqcGdeQXVyMjMyMjA0NTA@._V1_SX300.jpg"
    },
    {
        "Title": "The Hypothetical Star Wars Holiday Special",
        "Year": "2015",
        "imdbID": "tt5273610",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTViNGRhM2QtYmZmYy00YTcxLWIyZjEtYjFhY2I4YWNhYmU2XkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Qui-Gon Jinn",
        "Year": "2009",
        "imdbID": "tt3477996",
        "Type": "movie",
        "Poster": "N/A"
    }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EDIT_ASSET':
      state = Object.assign({}, state, action.payload)
      break;

    case 'DELETE_ASSET':
      state = Object.assign({}, state);
      delete state[action.payload];
      break;
      
    default: return state;
  }
  return state;
}