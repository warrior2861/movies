const initialStateAccount = {
  favorites: [],
};

function favoritesReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "favorites/add": {
      return { favorites: [...state.favorites, action.payload] };
    }
    case "favorites/remove": {
      const favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      return { favorites };
    }

    default:
      return state;
  }
}

function addToFavorites(movie) {
  return { type: "favorites/add", payload: movie };
}

function removeFromFavorites(movieId) {
  return { type: "favorites/remove", payload: movieId };
}

export { addToFavorites, removeFromFavorites };
export default favoritesReducer;
