import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useMovies } from "../hooks";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const {
    movies,
    page,
    totalPages,
    showPrev,
    showNext,
    changeLang,
    lang,
    getMovies,
  } = useMovies();

  const value = useMemo(() => {
    return {
      movies,
      page,
      totalPages,
      showPrev,
      showNext,
      changeLang,
      lang,
      getMovies,
    };
  }, [
    movies,
    page,
    totalPages,
    showPrev,
    showNext,
    changeLang,
    lang,
    getMovies,
  ]);
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useMoviesContext;
