import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = () => {
    navigate("/login");
    toast.success("Redirecting to login page...");
  };

  return (
    <div className="bg-gradient-to-b from-[#195399] to-[#061322] h-screen flex justify-center items-center">
      <div className="font-clash-variable md:w-[60vw] mx-auto border-4 border-blue-300 p-6 border-dashed rounded-3xl shadow-2xl bg-gray-200">
        <div className="text-center">
          <div className="text-md md:text-xl font-semibold mt-8 mb-8 text-black">
            Kindly register if you do not have an account.
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              className="p-3 text-md md:text-lg font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required",
              }}
              render={({ field }) => (
                <input
                  type="name"
                  {...field}
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-200 focus:border-2 focus:outline-none"
                  placeholder="Enter Your Full Name"
                  name="name"
                  required
                />
              )}
            />
          </div>
          <div className="mb-5">
            <label
              className="p-3 text-md md:text-lg font-medium mb-2"
              htmlFor="email-address"
            >
              Email address
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className={`form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-200 focus:border-2 focus:outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter Your Email Address"
                  name="email-address"
                  required
                />
              )}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="p-3 text-md md:text-lg font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Please enter your password",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Password must be at least 8 characters and include both letters and numbers",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className={`form-control block w-full px-3 py-2 text-base font(-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-200 focus:border-2 focus:outline-none ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter Your Password"
                  name="password"
                  required
                />
              )}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="text-center pt-1 pb-1">
            <button
              className={`bg-black inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight rounded-xl shadow-xl hover:opacity-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mt-4 ${
                !Object.keys(errors).length
                  ? ""
                  : "cursor-not-allowed opacity-50"
              }`}
              type="submit"
              disabled={!!Object.keys(errors).length}
            >
              Sign Up
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
