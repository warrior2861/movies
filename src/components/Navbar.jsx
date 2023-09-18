import { useCallback, useEffect, useState } from "react";
import profileImage from "../assets/profileImage.avif";
import useAuthContext from "../context/AuthContext";
import useMoviesContext from "../context/MoviesContext";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { email, password, setEmail, setPassword } = useAuthContext();
  const { getMovies } = useMoviesContext();
  const { favorites } = useSelector((store) => store.favorites);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolling(true);
      else setScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    setEmail("");
    setPassword("");
  };

  const onChange = useCallback(
    (e) => {
      getMovies({ query: e.target.value });
    },
    [getMovies]
  );

  const debouncedOnChange = useCallback(debounce(onChange, 500), []);

  return (
    <div
      className={`navbar grid grid-cols-3 ${
        scrolling ? "bg-[#ced4da]" : "bg-base-100"
      }`}
    >
      <div className="flex-1 gap-3 items-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Movies
        </Link>
        <div>
          <Link
            to="/movies/favorites"
            className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Favorites
          </Link>
        </div>
      </div>

      <div></div>
      <div className="flex-none gap-2 ml-auto">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <AiTwotoneStar className="text-xl text-yellow-600 cursor-pointer" />
            <span className="text-sm">{favorites.length}</span>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 h-[2.3rem] md:w-auto"
              onChange={debouncedOnChange}
            />{" "}
          </div>
        </div>
        {email && password ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profileImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              style={{ position: "absolute", top: "30", right: "0" }}
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="mx-6">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-blue-500 hover:text-blue-700  transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
