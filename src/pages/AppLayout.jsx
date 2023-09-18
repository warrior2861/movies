import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components";

const AppLayout = () => {
  const { email, password } = useAuthContext();

  useEffect(() => {
    if (email && password) toast.success(`Welcome Back`);
  }, [email, password]);

  // if (!email || !password) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="sticky top-0 left-0 z-[100]">
        <Navbar />
      </div>
      <section className="relative grid grid-rows-[auto,1fr] border-box">
        <section className="w-full 2xl:w-[90%] mx-auto">
          <Outlet />
        </section>
      </section>
    </>
  );
};
export default AppLayout;
