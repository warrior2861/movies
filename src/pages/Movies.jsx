import { MoviesGrid } from "../components/Movies";
import { Breadcrumbs } from "../components";
import { nanoid } from "nanoid";
import useMoviesContext from "../context/MoviesContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const options = [
  {
    key: nanoid(),
    text: "Movies",
    to: "/movies",
  },
];

const Movies = () => {
  const { movies, page, totalPages, showPrev, showNext, changeLang, lang } =
    useMoviesContext();
  return (
    <div>
      <div className="mt-3 ml-8">
        <Breadcrumbs optionsData={options} />
      </div>

      <div className="flex justify-center gap-12 mb-12 absolute right-[3%] top-[0.3%] z-[8] ">
        <button
          className="btn btn-neutral float-end mb-12 "
          onClick={changeLang}
        >
          {lang == "en-US" ? "English" : "Arabic"}
        </button>

        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline"
            aria-label="Previous"
            onClick={showPrev}
            disabled={page == 1 ? true : false}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="join-item btn btn-outline"
            aria-label="Next"
            onClick={showNext}
            disabled={page == totalPages ? true : false}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <section className="w-full sm:w-[96%] 3xl:w-[95%] mx-auto">
        <section className="bg-white px-10 py-6 mt-16 shadow-md  mb-[3rem]">
          <MoviesGrid data={movies} />
        </section>
      </section>
      <div className="flex justify-center mb-12">
        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline"
            aria-label="Previous"
            onClick={showPrev}
            disabled={page == 1 ? true : false}
          >
            Previous page
          </button>
          <button
            className="join-item btn btn-outline"
            aria-label="Next"
            onClick={showNext}
            disabled={page == totalPages ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
