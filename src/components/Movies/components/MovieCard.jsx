import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../favoritesSlice";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, featured }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="card card-compact w-full sm:w-[80%] 2xl:w-[90%] shadow-xl bg-[#f5f5f5]">
      <figure>
        <img src={`${imagePath}${movie?.poster_path}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-6">
          <h2 className="card-title">{movie.title}</h2>

          <div>
            {!featured ? (
              <AiOutlineStar
                onClick={() => dispatch(addToFavorites(movie))}
                className="text-xl cursor-pointer"
              />
            ) : (
              <AiTwotoneStar
                onClick={() => dispatch(removeFromFavorites(movie.id))}
                className="text-xl text-yellow-600 cursor-pointer"
              />
            )}
          </div>
        </div>
        <p>{movie.overview}</p>
        <section className="flex flex-col gap-3 mt-6">
          <p>
            <span className="font-medium mr-1">Priority:</span>
            <span className="text-gray-800"> {movie.popularity}</span>
          </p>
          <p>
            <span className="font-medium mr-1">Release Date:</span>
            <span className="text-gray-800">
              <span className="text-gray-800">{movie.release_date} </span>
            </span>
          </p>
        </section>
        <div className="card-actions justify-end mt-6">
          <button
            className=" btn bg-[#339af0] text-gray-100 hover:bg-[#228be6]"
            onClick={() => {
              navigate(`/movies/${movie.id}`);
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    status: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    vote_count: PropTypes.number,
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({
        iso_3166_1: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    production_companies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        logo_path: PropTypes.string,
        name: PropTypes.string,
        original_country: PropTypes.string,
      })
    ),
  }),
};
export default MovieCard;
