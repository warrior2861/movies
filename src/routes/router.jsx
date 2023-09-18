import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  AppLayout,
  Error,
  Favorites,
  Login,
  Movie,
  Movies,
  Register,
} from "../pages";
import { Auth } from "../pages";
import { NotFound } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/favorites" element={<Favorites />} />
        <Route path="movies/:id" element={<Movie />} />
      </Route>
      <Route element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
