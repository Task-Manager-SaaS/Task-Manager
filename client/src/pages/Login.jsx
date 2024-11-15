import Textbox from "../components/Textbox.jsx";
import Button from "../components/Button.jsx";
import { useDispatch } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSuccess } from "../redux/slices/authSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [errorMessage, setErrorMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/users');
      if (!response.ok) throw new Error('Network response was not ok');

      const users = await response.json();
      const user = users.find((user) => user.email === data.email && user.password === data.password);

      if (user) {
        // Dispatch login success with user and null token
        dispatch(loginSuccess({ user: user, token: null }));
        navigate("/tasks"); // Redirect to tasks page
      } else {
        setErrorMessage("Login Failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Failed to login:", error);
      setErrorMessage("Failed to fetch user data. Please try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Manage all your tasks in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-purple-700">
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit(submitHandler)} className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14">
            <div>
              <p className="text-purple-800 text-3xl font-bold text-center">Welcome back!</p>
              <span className="block mt-2 text-center text-base text-blue-500">Keep all your credentials safe</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <Textbox placeholder="email@example.com" type="email" name="email" label="Email Address" register={register("email", { required: "Email Address is required!" })} errors={errors.email ? errors.email.message : ""} />
              <Textbox placeholder="your password" type="password" name="password" label="Password" register={register("password", { required: "Password is required!" })} errors={errors.password ? errors.password.message : ""} />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <Button type="submit" label={"Submit"} className="w-full h-10 bg-purple-700 text-white rounded-full transition duration-300 ease-in-out hover:bg-purple-800 hover:shadow-lg" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;