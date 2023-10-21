import React, { useState } from "react";
import close from "../../assets/close.png";

import { useDispatch, useSelector } from "react-redux";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { LoggingUser } from "../../Redux/slices/AuthSlice";
import { AppDispatch } from "../../Redux/store";
import Loader from "../../constants/loader";

// Define the types for your props
type LoginFormProps = {
  showLogin: boolean;
  showRegister: boolean;
  SetShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  SetShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm: React.FC<LoginFormProps> = ({
  showLogin,
  SetShowLogin,
  // showRegister,
  SetShowRegister,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(LoggingUser(formData));
    SetShowLogin(false);

    // clear form data after submission

    setFormData({
      email: "",
      password: "",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="lg:w-4/6 h-5/6 w-full bg-gray-light rounded-2xl p-10 shadow-2xl overflow-y-scroll ">
            <div className="flex items-center justify-center gap-3">
              <h4 className="text-center mb-2">
                Welcome, Please Login to proceed
              </h4>

              <img
                src={close}
                alt=""
                className="h-6 w-6 object-cover"
                onClick={() => {
                  SetShowLogin(false);
                }}
              />
            </div>

            <div className="flex">
              <button
                className="p-2 px-5 opacity-50 cursor-not-allowed w-3/6 bg-black-100 text-white h-12"
                disabled
              >
                SignIn
              </button>
              <button
                className="bg-white p-2 px-5 cursor-pointer w-3/6 h-12"
                onClick={() => {
                  SetShowLogin(false);
                  SetShowRegister(true);
                }}
              >
                Signup
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto p-4 border rounded-lg shadow-lg mt-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                  placeholder="Enter your Email Address"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2 relative"
                >
                  Password:
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                    placeholder={`Enter password `}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </label>
              </div>

              <button
                type="submit"
                className="bg-primary-orange text-white py-2 px-4 rounded-xl hover:bg-secondary-orange transition duration-300 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
