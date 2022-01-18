import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const chatBgd = {
  backgroundImage: 'url(/images/msg-bg.png)',
  backgroundPosition: 'fixed',
  backgroundRepeat: 'repeat',
  backgroundSize: 'contain',
};

export default function MessagePage() {
  return (
    <>
      <div className="container-none bg-darkBlue-100 md:bg-white rounded-30 md:rounded-0 shadow-md md:shadow-none">
        <div className="overlay hidden rounded-30 md:hidden absolute bg-black opacity-50 z-10 inset-0"></div>

        <div className="relative min-h-screen mx-4 md:mx-0 md:flex bg-white rounded-30 md:rounded-none shadow-md md:shadow-none">
          {/* -- bottom arc -- */}
          <div className="hidden md:block absolute right-0 bottom-0 w-16 h-16 rounded-tl-fullSide bg-darkBlue-100 "></div>
          {/* -- absolute container -- */}
          <div className="hidden md:block absolute top-0 right-4 bottom-6 left-28 rounded-30 shadow-md"></div>

          <Navigation></Navigation>

          <div className="flex-1 p-4 md:p-8 h-inherit max-h-184 md:max-h-232 overflow-y-scroll lg:p-10 text-sm font-bold ">
            <Header
              header={{
                greeting_sec: false,
                profile_sec: false,
                action_btn: true,
                action_text: 'Upgrade Plan',
                action: '/upgrade',
              }}
            ></Header>

            {/* content here */}
            <div className="flex-1 w-full min-h-1/4 mt-8">
              <div className="w-full float-right lg:pl-4 min-h-32">
                <div className="flex flex-wrap lg:flex-no-wrap gap-1 md:gap-2 lg:gap-4 xl:gap-6 w-full mb-4 text-darkBlue-100 text-center">
                  <div className="pt-2 pr-2 lg:pr-4 float-left w-full lg:flex-1">
                    <p className="text-600 text-lg float-left">Messages</p>
                  </div>

                  <Link
                    to="/"
                    className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600 active_tab"
                  >
                    {' '}
                    Innovators
                  </Link>

                  <Link
                    to="/"
                    className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600"
                  >
                    {' '}
                    Teams
                  </Link>

                  <Link
                    to="/"
                    className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600"
                  >
                    {' '}
                    Innovators
                  </Link>

                  <Link
                    to="/"
                    className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600"
                  >
                    {' '}
                    Hires
                  </Link>

                  <Link
                    to="/"
                    className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600"
                  >
                    {' '}
                    Reports
                  </Link>
                </div>

                <div className="flex flex-wrap lg:flex-no-wrap gap-1 md:gap-2 lg:gap-4 xl:gap-6 w-full mb-4 text-darkBlue-100 text-center">
                  <div className="w-full lg:flex-1 my-2 min-h-16">
                    <div className="w-2/12 h-6 float-left text-pinkRose-200 align-center mb-4">
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white float-left"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>


                    <div className="w-10/12 float-left text-left px-2 mb-4">
                      <p className="text-sm mb-2">Jane Okonkwo</p>
                      <p className="w-36 bg-darkBlue-100 text-white py-1 px-2 rounded-sm shadow-md font-normal text-xs">
                        Badge : Level 1
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 19 21"
                          className="ml-2 fill-current inline"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                        </svg>
                      </p>
                    </div>
                  </div>

                  <div className="lg:flex-1 w-full">
                    <p className="w-3/4 lg:float-right align-baseline px-2 py-2 mb-8 rounded-15 shadow-all text-600 text-pinkRose-200">
                      Contact List
                      <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full min-h-32 lg:flex lg:gap-4">
                  <div className="lg:flex-1">
                    <div className="w-full min-h-36 text-darkBlue-100 text-xxs">
                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="">
                              <p className="mb-1 text-xs truncate">
                                Pauline williams
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="">
                              <p className="mb-1 text-xs truncate">
                                Pauline williams
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white active_col_msg">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="">
                              <p className="mb-1 text-xs truncate">
                                James Hook
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="">
                              <p className="mb-1 text-xs truncate">
                                Pauline williams
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="">
                              <p className="mb-1 text-xs truncate">
                                Pauline williams
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="">
                              <p className="mb-1 text-xs truncate">
                                Pauline williams
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full p-3 shadow-all rounded-md min-h-12 mb-4 bg-white">
                        <div className="w-full h-10">
                          <div className="float-left rounded-md w-2/12 xl:w-1/12">
                            <div className="w-14 h-15 float-left">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="w-10/12 xl:w-11/12 float-right">
                            <div className="xl:pl-2">
                              <p className="mb-1 text-xs truncate">
                                Pauline williams
                                <span className="text-darkBlue-100 float-right pr-2">
                                  6:16 PM
                                </span>
                              </p>

                              <p className="text-gray-500 truncate">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="hidden lg:block lg:flex-1 max-h-160 overflow-y-scroll rounded-md text-darkBlue-100 relative"
                    style={chatBgd}
                  >
                    <div className="w-full p-3 min-h-12 mb-4 bg-darkBlue-100">
                      <div className="w-full h-10">
                        <div className="float-left rounded-md w-2/12 xl:w-1/12">
                          <div className="w-14 h-15 float-left">
                            <img
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="w-10/12 xl:w-11/12 float-right">
                          <div className="xl:pl-2">
                            <p className="mb-1 text-sm text-white truncate">
                              James Hook
                            </p>

                            <p className="text-gray-500 text-xxs truncate text-pinkRose-200">
                              Online
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full min-h-16 p-4">
                      <div className="w-10/12 float-left min-h-12 text-xs text-gray-500 rounded-br-md rounded-bl-md bg-white p-3 mb-8">
                        <p className="w-full">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis ea similique repellendus maiores, totam
                          facilis, omnis ipsam eum vitae explicabo, veritatis
                          nobis culpa? Quos omnis maxime id obcaecati sequi
                          pariatur
                        </p>

                        <p className="w-full text-right text-xxs">6:16 PM</p>
                      </div>
                    </div>

                    <div className="w-full min-h-16 p-4">
                      <div className="w-10/12 float-right min-h-12 text-xs text-gray-500 rounded-br-md rounded-bl-md bg-white p-3  mb-8">
                        <p className="w-full">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis ea similique repellendus
                        </p>

                        <p className="w-full text-right text-xxs">6:16 PM</p>
                      </div>
                    </div>

                    <div className="w-full min-h-16 p-4">
                      <div className="w-10/12 float-left min-h-12 text-xs text-gray-500 rounded-br-md rounded-bl-md bg-white p-3  mb-8">
                        <p className="w-full">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis ea similique repellendus
                        </p>

                        <p className="w-full text-right text-xxs">6:16 PM</p>
                      </div>
                    </div>

                    <div className="w-10/12 p-2 min-h-10 absolute bottom-0 left-0 rounded-bl-md float-left">
                      <textarea
                        className="outline-none w-full rounded-15 p-2"
                        name=""
                        id=""
                        cols="1"
                      ></textarea>
                    </div>

                    <div className="absolute bottom-0 right-0 w-2/12 min-h-10 float-right p-2  rounded-br-md">
                      <span className="inline-block">
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
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>

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
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                      </span>
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
