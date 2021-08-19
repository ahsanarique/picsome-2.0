import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/Context";

const SignUp = ({ setShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUserData } = useContext(Context);

  const onSubmit = (data) => {
    setUserData(data);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-lightBlue shadow-md rounded px-4 pt-6 pb-8 mt-12"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name{" "}
            {errors.firstName && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("firstName", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name{" "}
            {errors.lastName && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("lastName", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-email"
          >
            Email {errors.email && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-email"
            type="email"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-password"
          >
            Password{" "}
            {errors.lastName && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("password", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-city"
          >
            City {errors.city && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("city", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-city"
            type="text"
            placeholder="City Name"
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-zip"
          >
            Zip {errors.zip && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("zip", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-zip"
            type="text"
            placeholder="Zip Code"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            htmlFor="grid-country"
          >
            Country{" "}
            {errors.country && <span className="text-red">: Required</span>}
          </label>
          <input
            {...register("country", { required: true })}
            className="shadow outline-none rounded-full w-full py-3 px-6 text-gray-700"
            id="grid-country"
            type="text"
            placeholder="Country Name"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 mx-4">
          <button
            className="bg-blue hover:bg-pink hover:opacity-70 text-gray-900 font-bold py-3 px-6 w-3/4 md:w-1/2 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <p className="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 mt-2">
            <span className="text-sm mr-2">Already have an account ?</span>{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="text-lg italic hover:text-pink"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
