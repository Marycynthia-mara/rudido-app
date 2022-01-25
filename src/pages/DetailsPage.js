import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isEmpty } from "../utils";
import { loginUser } from "../actions";
import { default as categoryData } from "../categories.js";
import { default as industryData } from "../industries.js";

export default function DetailsPage({ history }) {
  const { categories } = categoryData;
  const { industries } = industryData;

  const [show, setShow] = useState(true);

  const showCheckboxes = () => {
    // var checkboxes = document.getElementById("checkBoxes");

    if (show) {
      setShow(false);
      return;
    } else {
      setShow(true);
      return;
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
    rem: true,
  });

  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  // let { user: userData } = useSelector((state) => state);

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
      {errorMessage ? '' : ''}
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
          {/*  md absolute top right arc  */}
          <div className="hidden md:block absolute right-0 top-0 w-32 h-32 rounded-bl-fullSide bg-darkBlue-100 shadow-md z-10"></div>

          {/*  md absolute bottom right arc  */}
          <div className="hidden md:block absolute right-0 bottom-0 w-16 h-16 rounded-tl-fullSide bg-darkBlue-100 shadow-md z-10"></div>

          <div className="relative w-full h-screen md:h-full overflow-y-scroll">
            {/*  info image  */}
            <div className="md:block absolute top-12 left-2/4 -ml-32 w-64 h-64 ">
              <img src="/images/info.png" alt="" />
            </div>

            <div className="absolute top-60 md:top-56 left-0 w-full mr-4 px-8 md:px-12 lg:px-20 pt-4 pb-8">
              <p className="md:block font-bold text-2xl w-48 text-center mx-auto text-darkBlue-100 pt-8 ">
                Account Details
              </p>

              <form
                className="w-full space-y-6 sm:space-y-8"
                onSubmit={onSubmitHandler}
              >
                <div className="flex flex-wrap">
                  <label
                    htmlFor="company"
                    className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4"
                  >
                    Company name:
                  </label>

                  <input
                    id="company"
                    type="text"
                    className="form-input w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="company"
                    value={user.company}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
                    autoComplete="company"
                  />
                </div>

                <div className="flex flex-wrap">
                  <label
                    htmlFor="category"
                    className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4"
                  >
                    Your Roles
                    <sup className="text-red-700 inline-block pr-1">*</sup>
                  </label>

                  <select
                    id="category"
                    name="category"
                    required
                    autoComplete="category"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm form-input w-full "
                  >
                    {categories.map((category) => (
                      <option value={category._id} key={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-wrap">
                  <label
                    htmlFor="industries"
                    className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4"
                  >
                    Industries of intrest
                    <sup className="text-red-700 inline-block pr-1">*</sup>
                  </label>

                  <div className="w-full relative multipleSelection">
                    <div
                      className="selectBox relative"
                      onClick={() => {
                        showCheckboxes();
                      }}
                    >
                      <select
                        id="industries"
                        name="industries"
                        autoComplete="industries"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-2 focus:solid-google-100 focus:border-indigo-500 sm:text-sm form-input"
                      >
                        <option>check options</option>
                      </select>
                      <div className="absolute inset-0 overSelect"></div>
                    </div>

                    <div
                      className={
                        show
                        // absolute inset-x-0 top-10
                          ? "hidden bg-white border-indigo-500 border border-solid py-3"
                          : "block bg-white border-indigo-500 border border-solid py-3"
                      }
                      id="checkBoxes"
                    >
                      {industries.map((industry) => (
                        <label
                          className="block hover:bg-google-100 hover:text-white px-3"
                          htmlFor={industry._id}
                          key={industry._id}
                        >
                          <input
                            className={`outline-darkBlue-100 mr-2 `}
                            type="checkbox"
                            id={industry._id}
                            value={industry._id}
                            key={industry._id}
                          />
                          {industry.name}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap pt-2">
                  <button
                    type="submit"
                    className="w-full transition duration-200 select-none whitespace-no-wrap py-2 px-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-darkBlue-100 hover:bg-blue-900 sm:py-2"
                  >
                    Finish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
