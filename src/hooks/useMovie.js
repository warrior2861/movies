import axios from "axios";
import { useEffect, useState } from "react";

const api = "6fa2295f17a8014a3c39b7c357fab4f1";

const useMovie = (id) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: api,
        },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return { movie };
};

export default useMovie;
