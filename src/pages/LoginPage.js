import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../utils";
import { loginUser } from "../actions";
import GoogleLoginBtn from '../components/GoogleLoginBtn';

export default function LoginPage({ history }) {
  // const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    rem: true,
  });

  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  let { user: userData } = useSelector((state) => state);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrorMessage(``);
    for (const key in user) {
      if (Object.hasOwnProperty.call(user, key)) {
        const element = user[key];
        if (isEmpty(element)) {
          setErrorMessage(`Please enter a valid ${key}`);
          return;
        }
      }
    }

    dispatch(loginUser(user, history));
  };

  return (
    <div className="md:flex h-screen overflow-scroll">
      <div className="hidden md:block absolute inset-x-4 inset-y-4 rounded-30 shadow-md"></div>

      <div className="md:my-4 md:ml-4 h-auto w-full md:flex">
        <div className="md:flex-1 bg-white md:bg-darkBlue-100 rounded-tl-md rounded-bl-30 w-full md:w-2/5">
          <div className="block md:hidden absolute left-0 top-0 w-56 h-56 sm:w-60 sm:h-60 rounded-br-fullSide bg-pinkRose-200 bg-opacity-90 z-20 shadow-md z-20"></div>

          <div className="hidden md:block absolute left-[-3%] lg:left-[-2%] bottom-56 w-52 h-52  rounded-tr-fullSide bg-pinkRose-200 bg-opacity-90 z-10"></div>

          <div className="hidden md:block absolute left-[-3%] lg:left-[-2%] bottom-4 w-52 h-52  rounded-br-fullSide bg-pinkRose-200 bg-opacity-90 z-10"></div>

          <div className="block md:hidden absolute top-0 right-0 bg-darkBlue-100 w-72 h-72 sm:w-80 sm:h-80 rounded-bl-fullSide shadow-md z-10"></div>

          <div className="block absolute z-30 w-32 h-32 top-24 left-2/4 -ml-16 md:ml-0 md:left-16 md:top-24 md:w-32 md:h-32 ">
            <img src="/images/rudido-logo.png" alt="" />
          </div>

          <div className="relative w-full h-full">
            <p className="hidden md:block font-bold text-4xl md:w-3/4 text-white absolute left-16 top-60 z-20">
              The best way to source, build, showcase ideas.
            </p>

            <p className="hidden md:block text-lg md:w-4/5 text-white absolute left-16 bottom-24 z-20">
              Rudido connects you to the content, people, businesses, and
              opportunities that are best suited to build an idea from start to
              finish.
            </p>
          </div>
        </div>

        <div className="md:flex-1 w-full md:w-3/5">
          <div className="hidden md:block absolute right-0 top-0 w-32 h-32 rounded-bl-fullSide bg-darkBlue-100 shadow-md z-10"></div>

          <div className="hidden md:block absolute right-0 bottom-0 w-16 h-16 rounded-tl-fullSide bg-darkBlue-100 shadow-md z-10"></div>

          <div className="block md:hidden absolute left-0 bottom-0 w-20 h-20 rounded-tr-fullSide bg-pinkRose-200 bg-opacity-90 shadow-md z-10"></div>

          <div className="relative w-full h-screen md:h-full overflow-y-scroll">
            <div className="hidden md:block absolute top-4 left-2/4 -ml-24 w-48 h-48 ">
              <img src="/images/hands.png" alt="" />
            </div>

            <div className="absolute top-72 md:top-36 left-0 w-full mr-4 px-8 md:px-12 lg:px-20 pt-4">
              <p className="hidden md:block font-bold text-2xl w-48 text-center mx-auto text-darkBlue-100 py-8">
                Welcome Back
              </p>

              <GoogleLoginBtn></GoogleLoginBtn>

              <a
                href="{{ url('auth/facebook') }}"
                className="rounded-30 block text-white py-2 px-4 mb-8 transition duration-200 bg-facebook-100 hover:bg-darkBlue-100 text-center"
              >
                <svg
                  className="h-6 w-6 inline"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z" />
                </svg>

                <span className="inline-block pl-2">Login With Facebook</span>
              </a>

              <p className="text-gray-600 text-center pt-2">
                {" "}
                Didn't sign up with google or facebook account Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-bounce inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </p>

              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  margin: "20px auto",
                }}
              >
                {errorMessage}
              </div>
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  margin: "20px auto",
                }}
              >
                {!isEmpty(userData.error) &&
                isEmpty(userData.loading) &&
                userData.type === "login"
                  ? userData.message
                  : ""}
              </div>

              <form
                className="w-full space-y-6 sm:space-y-8"
                onSubmit={onSubmitHandler}
              >
                <div className="flex flex-wrap">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full @error('email') border"
                    name="email"
                    value={user.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
                    autoComplete="email"
                  />
                  <p className="text-red-500 text-xs italic mt-4"></p>
                </div>

                <div className="flex flex-wrap">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    className="form-input w-full @error('password') border"
                    name="password"
                    value={user.password}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
                  />
                  <p className="text-red-500 text-xs italic mt-4"></p>
                </div>

                <div className="flex items-center">
                  <label
                    className="inline-flex items-center text-sm text-gray-700"
                    htmlFor="remember"
                  >
                    <input
                      type="checkbox"
                      name="rem"
                      id="remember"
                      checked={user.rem}
                      className="form-checkbox"
                      value={user.rem}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <span className="ml-2">Remember Me</span>
                  </label>

                  {/* <a
                    className="text-sm text-blue-500 hover:text-blue-700 whitespace-no-wrap no-underline hover:underline ml-auto"
                    href="{{ route('password.request') }}"
                  ></a> */}
                </div>

                <div className="flex flex-wrap pt-2">
                  <button
                    type="submit"
                    className="w-full transition duration-200 select-none whitespace-no-wrap py-2 px-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-darkBlue-100 hover:bg-blue-900 sm:py-2"
                  >
                    {userData.loading && userData.type === "login" ? (
                      userData.message
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Login With Email
                      </>
                    )}
                  </button>

                  <p className="w-full text-center text-gray-600 mt-4 mb-12 sm:text-sm sm:mb-4 sm:mt-4">
                    Don't Have An account
                    <Link
                      to="/register"
                      className="text-red-500 hover:text-red-700 no-underline hover:underline"
                    >
                      {" "}
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
