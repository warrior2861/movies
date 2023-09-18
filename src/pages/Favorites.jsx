import { MoviesGrid } from "../components/Movies";
import { Breadcrumbs } from "../components";
import { nanoid } from "nanoid";
import useMoviesContext from "../context/MoviesContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

const options = [
  {
    key: nanoid(),
    text: "Favorites",
    to: "/movies/favorites",
  },
];

const Movies = () => {
  const { favorites } = useSelector((store) => store.favorites);

  return (
    <div>
      <div className="mt-3 ml-8">
        <Breadcrumbs optionsData={options} />
      </div>

      <section className="w-full sm:w-[96%] 3xl:w-[95%] mx-auto">
        <section className="bg-white px-10 py-6 mt-16 shadow-md  mb-[3rem]">
          <MoviesGrid data={favorites} />
        </section>
      </section>
    </div>
  );
};

export default Movies;
