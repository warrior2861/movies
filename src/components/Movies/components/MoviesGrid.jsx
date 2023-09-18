import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const MoviesGrid = ({ data }) => {
  const { favorites } = useSelector((store) => store.favorites);
  return (
    <section>
      <h2 className="text-xl font-medium mb-8">Movies</h2>
      <div className="py-12 px-5 grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 ">
        {data?.map((movie) => {
          const featured = favorites.find(
            (currentMovie) => currentMovie.id === movie.id
          );
          return <MovieCard key={movie.id} movie={movie} featured={!!featured} />;
        })}
      </div>
    </section>
  );
};

MoviesGrid.propTypes = { data: PropTypes.array };

export default MoviesGrid;
