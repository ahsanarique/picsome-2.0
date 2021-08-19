import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/Context";

const Login = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setLoginStatus } = useContext(Context);

  const onSubmit = (data) => {
    if (data.email === "test@test.com" && data.password === "#2021Dev") {
      setLoginStatus(true);
    } else {
      alert("Wrong username and password combination");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-lightBlue shadow-md rounded px-4 pt-6 pb-8 mt-12"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor="email"
        >
          Email (Default: test@test.com){" "}
          {errors.email && <span className="text-red">: Required</span>}
        </label>
        <input
          {...register("email", { required: true })}
          className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
          type="text"
          placeholder="Your Email"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor="password"
        >
          Password (Default: #2021Dev){" "}
          {errors.password && <span className="text-red">: Required</span>}
        </label>
        <input
          {...register("password", { required: true })}
          className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700 mb-3 "
          type="password"
          placeholder="******************"
        />
        <button className="text-sm font-bold text-gray-700 hover:text-pink italic">
          Forgot Password?
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <button
          className="bg-blue hover:bg-pink hover:opacity-70 text-gray-900 font-bold py-3 px-6 w-3/4 md:w-1/2 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <p className="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 mt-2">
          <span className="text-sm mr-2">Don't have an account ?</span>{" "}
          <button
            onClick={() => setShowLogin(false)}
            className="text-lg italic hover:text-pink"
          >
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
