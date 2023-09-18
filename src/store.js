import { combineReducers, createStore } from "redux";
import favoritesReducer from "./components/Movies/favoritesSlice.js";
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer);
