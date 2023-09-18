import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { MoviesProvider } from "./context/MoviesContext";
import { Provider } from "react-redux";
import {store} from "./store";
const App = () => {
  return (
    <div className="min-h-screen h-auto bg-[#f1f3f5]">
      {" "}
      <Provider store={store}>
        <AuthProvider>
          <MoviesProvider>
            <RouterProvider router={router} />
          </MoviesProvider>
        </AuthProvider>
      </Provider>
    </div>
  );
};
export default App;
