import { useParams } from "react-router-dom";
import { useMovie } from "../hooks";
import { Breadcrumbs } from "../components";
import { nanoid } from "nanoid";

const imagePath = "https://image.tmdb.org/t/p/w500";

const options = [
  {
    key: nanoid(),
    text: "Movies",
    to: "/movies",
  },
];

function Movies() {
  let { id } = useParams();
  const { movie } = useMovie(id);

  return (
    <div>
      <div className="mt-3">
        <Breadcrumbs
          optionsData={[
            ...options,
            {
              key: nanoid(),
              text: id,
              to: "",
            },
          ]}
        />
      </div>

      <section className="w-[90%] mx-auto">
        <section className="bg-white px-10 py-6 mt-16 shadow-md  mb-[3rem]">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="md:flex md:flex-col">
                <img
                  src={`${imagePath}${movie?.poster_path}`}
                  alt={movie?.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="md:flex md:flex-col ml-8">
                <h1 className="text-3xl font-semibold">{movie?.title}</h1>
                <p className="text-gray-600">{movie?.overview}</p>

                {/* Genre */}
                <div className="mt-4">
                  <span className="font-semibold">Genre:</span>
                  <ul className="list-disc list-inside">
                    {movie?.genres?.map((genre) => (
                      <li key={genre?.id}>{genre?.name}</li>
                    ))}
                  </ul>
                </div>

                {/* Production Companies */}
                <div className="mt-4">
                  <span className="font-semibold">Production Companies:</span>
                  <ul className="list-disc list-inside">
                    {movie?.production_companies?.map((company) => (
                      <li key={company?.id}>{company?.name}</li>
                    ))}
                  </ul>
                </div>

                {/* Other Details */}
                <div className="mt-4">
                  <span className="font-semibold">Details:</span>
                  <ul className="list-disc list-inside">
                    <li>Original Title: {movie?.original_title}</li>
                    <li>Original Language: {movie?.original_language}</li>
                    <li>Status: {movie?.status}</li>
                    <li>Tagline: {movie?.tagline}</li>
                  </ul>
                </div>

                {/* Budget and Popularity */}
                <div className="mt-4">
                  <span className="font-semibold">Budget:</span> $
                  {movie?.budget}
                  <br />
                  <span className="font-semibold">Popularity:</span>{" "}
                  {movie?.popularity}
                </div>

                {/* Production Countries */}
                <div className="mt-4">
                  <span className="font-semibold">Production Countries:</span>
                  <ul className="list-disc list-inside">
                    {movie?.production_countries?.map((country) => (
                      <li key={country?.iso_3166_1}>{country?.name}</li>
                    ))}
                  </ul>
                </div>

                {/* User Rating */}
                <div className="mt-4">
                  <span className="font-semibold">User Rating:</span>{" "}
                  {movie?.vote_average}
                  <br />
                  <span className="font-semibold">Vote Count:</span>{" "}
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Movies;
