import React from "react";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  const { toggle, toggleHandler } = props;
  return (
    <>
      <div className="container-none bg-darkBlue-100 md:bg-white rounded-30 md:rounded-0 shadow-md md:shadow-none">
        <div
          className={`${
            toggle ? "block" : "hidden"
          } overlay rounded-30 md:hidden absolute bg-black opacity-50 z-10 inset-0`}
        ></div>

        <div className="relative min-h-screen mx-4 md:mx-0 md:flex bg-white rounded-30 md:rounded-none shadow-md md:shadow-none">
          {/* -- bottom arc -- */}
          <div className="hidden md:block absolute right-0 bottom-0 w-16 h-16 rounded-tl-fullSide bg-darkBlue-100 "></div>
          {/* -- absolute container -- */}
          <div className="hidden md:block absolute top-0 right-4 bottom-6 left-28 rounded-30 shadow-md"></div>

          <Navigation toggle={toggle} toggleHandler={toggleHandler}></Navigation>

          <div className="flex-1 p-4 md:p-8 h-inherit max-h-184 md:max-h-232 overflow-y-scroll lg:p-10 text-sm font-bold ">
            <Header
              header={{
                greeting_sec: true,
                greeting_mid_txt: true,
                greeting_mid_cont: "Create Portfolio for your ideas",
                profile_sec: true,
                action_btn: true,
                action_text: "Upgrade Plan",
                action: "/upgrade",
              }}
            ></Header>

            {/* content here */}
            <div className="hidden flex-1 w-full min-h-1/4 mt-8">
              <div className="hidden md:block md:w-3/12 lg:w-2/12 h-80 py-2 px-2 md:px-1 lg:px-2 float-left shadow-md rounded-15 ">
                <p className="text-darkBlue-100">
                  My <br /> Portfolio&nbsp;
                  <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </p>
              </div>

              <div className="w-full md:w-9/12 lg:w-10/12 float-right md:pl-4">
                <div className="w-full min-h-16">
                  <div className="flex gap-3 md:gap-2 lg:gap-8 xl:gap-12 w-full md:w-9/12 float-left rounded-15 py-2 px-2 lg:px-4 text-darkBlue-100 shadow-md">
                    <p>
                      To Do <span className="text-gray-500">(0)</span>
                    </p>
                    <p>
                      In progress <span className="text-gray-500">(0)</span>
                    </p>
                    <p>
                      Done <span className="text-gray-500">(0)</span>
                    </p>
                  </div>

                  <div className="w-full min-h-8 flex gap-4 sm:gap-8 my-4 md:my-0 md:flex-none md:w-3/12 float-left md:pl-2 lg:pl-6 xl:pl-12">
                    <div className="block md:hidden flex-1 py-2 px-2 md:px-1 float-right md:mr-0 rounded-15 shadow-md">
                      <p className="text-600  text-pinkRose-200 ">
                        My Portfolio&nbsp;
                        <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>

                    <div className="flex-1 float-right md:w-full md:mr-0 rounded-15 shadow-md">
                      <Link
                        className="py-2 inline-block float-left px-2 md:px-1 xl:px-3 text-600 active_tab cursor-pointer"
                        to="/workspace/create"
                      >
                        New Idea&nbsp;
                        <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto">
                  <div className="w-full h-auto ">
                    <div className="w-50% mb-4 xl:mb-0 md:w-100% xl:w-50% xl:float-left">
                      <span className="text-darkBlue-100 text-sm md:text-lg">
                        Innovators
                      </span>

                      <span className="text-pinkRose-200 text-xs lg:text-sm">
                        Invite People
                      </span>
                    </div>

                    <div className="w-50% md:w-100% xl:w-50% xl:float-right">
                      <span className="text-darkBlue-100 text-sm md:text-lg">
                        Innovators
                      </span>

                      <span className="text-pinkRose-200 text-xs lg:text-xs">
                        Invite People
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-auto">
                    <img
                      className="w-3/4 lg-w-2/4 h-auto mx-auto"
                      src="/images/portf-1.png"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-500 text-center">
                    Click on the plus button to add an idea
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full min-h-1/4 mt-8">
              <div className="hidden md:block md:w-3/12 lg:w-2/12 h-auto py-2 px-2 md:px-1 lg:px-2 float-left shadow-md rounded-15 ">
                <p className="text-darkBlue-100 mb-4">
                  My <br /> Portfolio&nbsp;
                  <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </p>

                <div className="w-full h-30 rounded-15 p-2 shadow-md mb-8">
                  <div className="rounded-md w-10/12 xl:w-8/12 h-9/12 p-2 mb-4 bg-lightGreen-100 shadow-md">
                    <p className="text-white text-xxs">
                      Art
                      <span className="float-right text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </span>
                    </p>

                    <hr className="bg-white w-full h-1 my-2" />

                    <p className="text-white text-xxs">
                      Wilify
                      <span className="float-right text-white">10</span>
                    </p>
                  </div>

                  <p className="text-gray-500 text-xxs">
                    Due in 2 days
                    <span className="float-right text-pinkRose-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </p>
                </div>

                <div className="w-full h-30 rounded-15 p-2 shadow-md mb-8">
                  <div className="rounded-md w-10/12 xl:w-8/12 h-9/12 p-2 mb-4 bg-pinkRose-300 shadow-md">
                    <p className="text-white text-xxs">
                      Books
                      <span className="float-right text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </span>
                    </p>

                    <hr className="bg-white w-full h-1 my-2" />

                    <p className="text-white text-xxs">
                      Kofor
                      <span className="float-right text-white">10</span>
                    </p>
                  </div>

                  <p className="text-gray-500 text-xxs">
                    Due in 2 days
                    <span className="float-right text-pinkRose-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </p>
                </div>

                <div className="w-full h-30 rounded-15 p-2 shadow-md mb-8">
                  <div className="rounded-md w-10/12 xl:w-8/12 h-9/12 p-2 mb-4 bg-darkBlue-200 shadow-md">
                    <p className="text-white text-xxs">
                      Books
                      <span className="float-right text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 inline"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </span>
                    </p>

                    <hr className="bg-white w-full h-1 my-2" />

                    <p className="text-white text-xxs">
                      Kofor
                      <span className="float-right text-white">10</span>
                    </p>
                  </div>

                  <p className="text-gray-500 text-xxs">
                    Due in 2 days
                    <span className="float-right text-pinkRose-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>

              <div className="w-full md:w-9/12 lg:w-10/12 float-right md:pl-4">
                <div className="w-full min-h-16">
                  <div className="flex gap-3 md:gap-2 lg:gap-8 xl:gap-12 w-full md:w-9/12 float-left rounded-15 py-2 px-2 lg:px-4 text-darkBlue-100 shadow-md">
                    <p>
                      To Do <span className="text-gray-500">(0)</span>
                    </p>
                    <p>
                      In progress <span className="text-gray-500">(0)</span>
                    </p>
                    <p>
                      Done <span className="text-gray-500">(0)</span>
                    </p>
                  </div>

                  <div className="w-full min-h-8 flex gap-4 sm:gap-8 my-4 md:my-0 md:flex-none md:w-3/12 float-left md:pl-2 lg:pl-6 xl:pl-12">
                    <div className="block md:hidden flex-1 py-2 px-2 md:px-1 float-right md:mr-0 rounded-15 shadow-md">
                      <p className="text-600  text-pinkRose-200 ">
                        My Portfolio&nbsp;
                        <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    </div>

                    <div className="flex-1 float-right md:w-full md:mr-0 rounded-15 shadow-md">
                      <a
                        href="/workspace/create"
                        className="py-2 inline-block float-left px-2 md:px-1 xl:px-3 text-600 active_tab "
                      >
                        New Idea&nbsp;
                        <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto">
                  <div className="w-full min-h-8 mt-6 ">
                    <div className="w-50% mb-4 xl:mb-0 md:w-100% xl:w-50% xl:float-left">
                      <span className="text-darkBlue-100 text-sm md:text-sm">
                        Innovators
                      </span>
                      <div
                        style={{ display: "inline" }}
                        className=" px-1 md:px-2 flex -space-x-2 overflow-hidden"
                      >
                        <img
                          className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white text-white bg-gray-400 text-xxs pt-1">
                          {" "}
                          +10
                        </span>
                      </div>
                      <span className="text-pinkRose-200 text-xs lg:text-xs">
                        Invite Inovator
                      </span>
                    </div>

                    <div className="hidden xl:block w-50% md:w-100% xl:w-50% xl:float-right">
                      <span className="text-darkBlue-100 text-sm md:text-sm">
                        Businesses
                      </span>
                      <div
                        style={{ display: "inline" }}
                        className=" px-1 md:px-2 flex -space-x-2 overflow-hidden"
                      >
                        <img
                          className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="inline-block h-8 w-8 md:h-6 md:w-6 rounded-full ring-2 ring-white text-white bg-gray-400 text-xxs pt-1">
                          {" "}
                          +10
                        </span>
                      </div>
                      <span className="text-pinkRose-200 text-xs lg:text-xs pt-2">
                        Invite Builder
                      </span>
                    </div>

                    <div className="xl:hidden w-full min-h-12 my-4">
                      <p className="text-600 float-right text-pinkRose-200 py-2 px-2 md:px-4 rounded-15 shadow-md">
                        Builder
                      </p>
                    </div>
                  </div>

                  <div className="w-full xl:flex lg:gap-8 xl:gap-12 mt-4 mb-4">
                    <div className="xl:flex-1 text-xxs">
                      <div className="w-full min-h-32 p-4 md-p-2 xl:p-4 shadow-all rounded-15 mb-4">
                        <div className="w-full h-16">
                          <div className="w-4/6 float-left">
                            <figure className="w-full">
                              <div className="w-2/6 float-left self-end">
                                <img
                                  className="float-right w-12 h-12 mr-3 ring-2 ring-white rounded-fullSide "
                                  src="/images/rudido-logo.png"
                                  alt="User Profile"
                                />
                              </div>

                              <figcaption className="w-4/6 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">Jean Paul</p>
                                    <p>Creative</p>
                                    <p>Content Creator</p>
                                  </div>
                                </div>
                              </figcaption>
                            </figure>
                          </div>
                          <div className="w-2/6 float-right text-right">
                            <p className="mb-1 text-gray-500">Abuja Nigeria</p>
                            <p className="text-pinkRose-200">Online</p>
                          </div>
                        </div>

                        <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                          <div className="float-left rounded-md w-4/12 md:w-3/12">
                            <div className="rounded-md h-18 p-2 mb-4 bg-darkBlue-200 shadow-md">
                              <p className="text-white text-xxs">
                                Idea
                                <span className="float-right text-white">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                  </svg>
                                </span>
                              </p>

                              <hr className="bg-white w-full h-1 my-2" />

                              <p className="text-white text-xxs">
                                Kupop
                                <span className="float-right text-white">
                                  10
                                </span>
                              </p>
                            </div>

                            <p className="text-darkBlue-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 m-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </p>

                            <p>
                              Milestone
                              <span className="text-pinkRose-200 float-right">
                                (5)
                              </span>
                            </p>
                          </div>

                          <div className=" w-7/12 md:w-8/12 float-right">
                            <div className="flex">
                              <div className="flex-1">
                                <p className="mb-1 text-xs">
                                  A fast food resturant idea
                                </p>
                                <p className="text-gray-500">
                                  <span className="text-pinkRose-200">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 inline"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </span>
                                  Idea Started
                                </p>
                                <p className="text-pinkRose-200">
                                  1 January 2021
                                </p>
                                <p>level : 1</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" text-gray-500 h-8">
                          <div className="float-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline pl-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline pl-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline pl-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="w-full min-h-24 p-4 shadow-all rounded-15">
                        <div className="w-4/6 float-left">
                          <figure className="w-full">
                            <div className="w-2/6 float-left self-end">
                              <img
                                className="float-right w-12 h-12 mr-3 ring-2 ring-white rounded-fullSide "
                                src="/images/rudido-logo.png"
                                alt="company Profile"
                              />
                            </div>

                            <figcaption className="w-4/6 float-right">
                              <div className="flex">
                                <div className="flex-1">
                                  <p className="mb-1 text-xs">Jean Paul</p>
                                  <p>Creative</p>
                                  <p>Content Creator</p>
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-2/6 float-right text-right">
                          <p className="mb-1 text-gray-500">Abuja Nigeria</p>
                          <p className="text-pinkRose-200">Online</p>
                        </div>
                      </div>
                    </div>

                    <div className="xl:flex-1 text-xxs shadow-all rounded-15 p-4 my-6 xl:my-0">
                      <div className="w-full min-h-32 p-4 shadow-all rounded-15 mb-4">
                        <div className="w-4/6 float-left mb-2">
                          <figure className="w-full">
                            <div className="w-2/6 float-left self-end">
                              <img
                                className="float-right w-12 h-12 mr-3 ring-2 ring-white rounded-fullSide "
                                src="/images/rudido-logo.png"
                                alt="User Profile"
                              />
                            </div>

                            <figcaption className="w-4/6 float-right">
                              <div className="flex">
                                <div className="flex-1">
                                  <p className="mb-1 text-xs">Carol Potter</p>
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>

                        <div className="w-4/6 float-left">
                          <figure className="w-full">
                            <div className="w-2/6 float-left self-end">
                              <img
                                className="float-right w-12 h-12 mr-3 ring-2 ring-white rounded-fullSide "
                                src="/images/rudido-logo.png"
                                alt="User Profile"
                              />
                            </div>

                            <figcaption className="w-4/6 float-right">
                              <div className="flex">
                                <div className="flex-1">
                                  <p className="mb-1 text-xs">Company</p>
                                  <p className="text-pinkRose-200">
                                    Advent hub
                                  </p>
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-2/6 float-right text-right">
                          <p className="mb-1 text-gray-500">Abuja Nigeria</p>
                          <p className="text-pinkRose-200">Online</p>
                        </div>
                      </div>

                      <div className="w-full min-h-32 p-4 md-p-2 xl:p-4 shadow-all rounded-15 mb-4">
                        <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                          <div className="float-left rounded-md  w-4/12 md:w-3/12">
                            <div className="rounded-md h-18 p-2 mb-4 bg-pinkRose-300 shadow-md">
                              <p className="text-white text-xxs">
                                Content
                                <span className="float-right text-white">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                  </svg>
                                </span>
                              </p>

                              <hr className="bg-white w-full h-1 my-2" />

                              <p className="text-white text-xxs h-4">
                                <span className="float-right text-white">
                                  10
                                </span>
                              </p>
                            </div>

                            <p className="text-darkBlue-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 m-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </p>

                            <p>
                              Reviews
                              <span className="text-pinkRose-200 float-right">
                                (5)
                              </span>
                            </p>
                          </div>

                          <div className="w-7/12 md: w-8/12 float-right">
                            <div className="flex">
                              <div className="flex-1">
                                <p className="mb-1 text-xs">Marketing Basics</p>
                                <p className="text-gray-500">
                                  <span className="text-pinkRose-200">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 inline"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </span>
                                  Idea Started
                                </p>
                                <p className="text-pinkRose-200">
                                  1 January 2021
                                </p>
                                <p>level : 1</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" text-gray-500 h-8">
                          <div className="float-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline pl-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline pl-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline pl-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
