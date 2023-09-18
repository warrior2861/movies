import FormInput from "../components/Form/FormInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });
  const { setEmail, setPassword } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    setEmail(formData.email);
    setPassword(formData.password);
    navigate("/");
    reset();
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
  };

  return (
    <div className="h-full w-full bg-white px-12 py-44">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-[#333] mb-2 text-center">
          Welcome Back!
        </h2>
        <p className="text-[#666] text-lg text-center">
          Log in to your account to access the bug tracking system.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md shadow-sm w-[70%] mx-auto flex flex-col gap-6"
      >
        <FormInput register={register} errors={errors} label="email" />
        <FormInput
          register={register}
          errors={errors}
          label="password"
          type={"password"}
        />
        <button className="btn btn-active btn-neutral">Submit</button>
      </form>{" "}
      <div className="flex justify-center mt-8  font-medium">
        Don&apos;t Have an Account:
        <Link to="/register" className="text-[#339af0] ml-1">
          Sign up Instead
        </Link>
      </div>
    </div>
  );
};
export default Login;
