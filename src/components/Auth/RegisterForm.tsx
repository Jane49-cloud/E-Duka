import React, { useState } from "react";
import close from "../../assets/close.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { RegisteringUser } from "../../Redux/slices/AuthSlice";
import { AppDispatch } from "../../Redux/store";
import Loader from "../../constants/loader";

type RegisterFormProps = {
  showRegister: boolean;
  SetShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
  SetShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  showRegister,
  SetShowRegister,
  SetShowLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    userimage: "",
    location: "location",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      let concatenatedImages = "";
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Data = e.target!.result as string;
          concatenatedImages += base64Data;
        };
        reader.readAsDataURL(file);
      }
      setFormData({ ...formData, userimage: concatenatedImages });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Password validation: at least 8 characters, one special character, and one capital letter
    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must be at least 8 characters long, contain at least one special character, and have at least one capital letter."
      );
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    dispatch(RegisteringUser(formData));
    SetShowRegister(false);
    SetShowLogin(true);

    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      phone: "",
      userimage: "",
      location: "location",
      password: "",
      confirmPassword: "",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 p-5">
          <div className="lg:w-4/6 h-5/6 w-full bg-gray-light rounded-2xl p-10 shadow-2xl overflow-y-scroll ">
            <div className="flex items-center justify-center gap-3">
              <h4 className="text-center mb-2">
                Welcome, Please sign up to proceed
              </h4>

              <img
                src={close}
                alt=""
                className="h-6 w-6 object-cover"
                onClick={() => {
                  SetShowRegister(false);
                }}
              />
            </div>
            <div className="flex">
              <button
                className="text-white p-2 px-5 opacity-50 cursor-not-allowed w-3/6 bg-black-100 h-12"
                disabled
              >
                Signup
              </button>
              <button
                className="bg-white p-2 px-5 cursor-pointer w-3/6 h-12"
                onClick={() => {
                  SetShowRegister(false);
                  SetShowLogin(true);
                }}
              >
                Signin
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto p-4 border rounded-lg shadow-lg mt-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                  placeholder="Enter your First Name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="middlename"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Middle Name:
                </label>
                <input
                  type="text"
                  id="middlename"
                  name="middlename"
                  value={formData.middlename}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                  placeholder="Enter your Middle Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastname"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                  placeholder="Enter your Last Name"
                />
              </div>
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
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Location:
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                >
                  <option value="Nairobi">Nairobi</option>
                  <option value="Thika">Thika</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="userimage"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  User Image:
                </label>
                <input
                  type="file"
                  id="userimage"
                  name="userimage"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                {formData.userimage && (
                  <img
                    src={formData.userimage}
                    alt="User Preview"
                    className="h-16 w-16 mt-2"
                  />
                )}
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
                <p className="text-sm text-gray-500 px-2">
                  The password must be at least 8 characters long{" "}
                </p>
                <p className="text-sm text-gray-500 px-2">
                  Must contain a symbol, a number, and an Uppercase Letter
                </p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2 relative"
                >
                  Confirm Password:
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary-orange"
                    placeholder={`confirm your password `}
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
                onClick={() => {
                  setShowPassword(false);
                  // handleSubmit(event); // Call the handleSubmit function
                  console.log("Submit button clicked");
                }}
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

export default RegisterForm;
