import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

const api = "6fa2295f17a8014a3c39b7c357fab4f1";
let totalPages = null;

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState("en-US");
  const prevQuery = useRef("");

  const showPrev = useCallback(() => {
    let currentPAge = page;
    if (!currentPAge <= 1) {
      currentPAge--;
      setPage(currentPAge);
    }
  }, [page]);

  const showNext = useCallback(() => {
    let currentPAge = page;
    currentPAge++;
    setPage(currentPAge);
  }, [page]);

  const changeLang = useCallback(() => {
    setLang(lang == "en-US" ? "ar-SA" : "en-US");
  }, [lang]);

  const getMovies = useCallback(
    async ({ query }) => {
      try {
        setLoading(true);
        setError(null);
        let params = null;
        let response = null;
        if (!query) {
          params = {
            api_key: api,
            language: lang,
            page: prevQuery.current !== query ? 1 : page,
            with_origin_country: "EG",
          };

          response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular`,
            {
              params,
            }
          );
        } else {
          params = {
            api_key: api,
            language: lang,
            page: prevQuery.current !== query ? 1 : page,
            with_origin_country: "EG",
            query,
          };
          response = await axios.get(
            `https://api.themoviedb.org/3/search/movie`,
            {
              params,
            }
          );
        }

        totalPages = response.data.total_pages;
        setMovies(response.data.results);
        if (prevQuery.current !== query) setPage(1);
        prevQuery.current = query;
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [page, lang]
  );

  useEffect(() => {
    getMovies({ query: "" });
  }, [getMovies]);

  return {
    movies,
    page,
    setPage,
    totalPages,
    showPrev,
    showNext,
    changeLang,
    lang,
    error,
    loading,
    getMovies,
  };
};

export default useMovies;
