import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';


export default function WorkspaceCreatePage() {
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
                greeting_sec: true,
                profile_sec: false,
                action_btn: false,
              }}
            ></Header>

            <div className="flex-1 w-full min-h-1/4 mt-8">
              <div className="w-full min-h-36">
                <div className="flex flex-wrap lg:flex-no-wrap gap-4 lg:gap-8 text-darkBlue-100 mb-4">
                  <a
                    href="/"
                    className="flex-1 rounded-15 shadow-all text-center p-2 active_tab"
                  >
                    Overview
                  </a>

                  <a
                    href="/"
                    className="flex-1 rounded-15 shadow-all text-center p-2 "
                  >
                    Media
                  </a>

                  <a
                    href="/"
                    className="flex-1 rounded-15 shadow-all text-center p-2 "
                  >
                    Documents
                  </a>

                  <a
                    href="/"
                    className="flex-1 rounded-15 shadow-all text-center p-2 "
                  >
                    Payments
                  </a>

                  <a
                    href="/"
                    className="flex-1 rounded-15 shadow-all text-center p-2 "
                  >
                    Portfolio
                  </a>
                </div>


                <div className=" hidden lg:block lg:float-left w:full lg:w-2/12 min-h-12 py-2">
                  <div className="w-full min-h-12 shadow-all rounded-md px-2 py-2 text-xxs text-darkBlue-100 mb-6">
                    <a
                      href="/"
                      className="block rounded-md shadow-all mb-2 p-2 bg-gray-300 mb-2"
                    >
                      summary
                    </a>

                    <div className="w-full min-h-12 mb-2">
                      <p>Oppurtunity</p>
                      <p>Team menbers</p>
                    </div>
                  </div>

                  <div className="w-full min-h-12 shadow-all rounded-md px-2 py-2 text-xxs text-darkBlue-100 mb-6">
                    <a
                      href="/"
                      className="block rounded-md shadow-all mb-2 p-2 bg-gray-300 mb-2"
                    >
                      Industry
                    </a>

                    <div className="w-full min-h-12 mb-2">
                      <p>Solution & benefit</p>
                      <p>Customer Profile</p>
                      <p>Competitors</p>
                    </div>
                  </div>

                  <div className="w-full min-h-12 shadow-all rounded-md px-2 py-2 text-xxs text-darkBlue-100 mb-6">
                    <a
                      href="/"
                      className="block rounded-md shadow-all mb-2 p-2 bg-gray-300 mb-2"
                    >
                      Marketing
                    </a>

                    <div className="w-full min-h-12 mb-2">
                      <p>How do you plan to sell your idea</p>
                      <p>Solution and benefit</p>
                    </div>
                  </div>

                  <div className="w-full min-h-12 shadow-all rounded-md px-2 py-2 text-xxs text-darkBlue-100 mb-6">
                    <a
                      href="/"
                      className="block rounded-md shadow-all mb-2 p-2 bg-gray-300 mb-2"
                    >
                      Branding
                    </a>

                    <div className="w-full min-h-12 mb-2">
                      <p>Slogan</p>
                      <p>Mission and vision</p>
                      <p>Colors</p>
                      <p>Logo</p>
                    </div>
                  </div>
                </div>

                <div className="lg:float-left w:full lg:w-8/12 min-h-36 lg:p-4">
                  <div className="w-full rounded-md shadow-all p-4">
                    <div className="w-full min-h-24">
                      <p>Name : Dreamer</p>
                      <p>
                        Created :{' '}
                        <span className="font-normal">
                          28 February 2021 6:16 PM
                        </span>
                      </p>
                      <p>
                        Stage : <span className="font-normal">1</span>
                      </p>
                      <p>
                        Type : <span className="font-normal">Text & Video</span>
                      </p>
                    </div>


                    <div className="w-full min-h-36 my-2">
                      <div className="gap-2 mb-2">
                        <div className="w-full min-h-36 shadow-all rounded-md my-4"></div>

                        <div className="w-full min-h-36 my-4 p-4">
                          <p className="w-3/4 py-2 mb-2 text-600 text-darkBlue-100 text-lg">
                            Updates
                          </p>

                          <div className="w-full my-2 min-h-12 text-darkBlue-100 mb-8">
                            <div className="w-1/12 h-6 float-left align-center mb-4">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>

                            <div className="w-11/12 float-right px-2 mb-4">
                              <p className="text-sm">Jane</p>
                              <p className="text-xs">
                                Oppurtunity update{' '}
                                <span className="inline-block float-right text-xxs">
                                  20 June 2021
                                </span>
                              </p>
                              <p className="text-xs font-normal">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Laborum debitis eius!
                              </p>
                            </div>
                          </div>

                          <div className="w-full my-2 min-h-12 text-darkBlue-100 mb-8">
                            <div className="w-1/12 h-6 float-left align-center mb-4">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>

                            <div className="w-11/12 float-right px-2 mb-4">
                              <p className="text-sm">Jane</p>
                              <p className="text-xs">
                                Team update{' '}
                                <span className="inline-block float-right text-xxs">
                                  20 June 2021
                                </span>
                              </p>
                              <p className="text-xs font-normal">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Laborum debitis eius! Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:float-left w-3/4 md:w-2/5 lg:w-2/12 min-h-36 py-4">
                  <div className="w-full py-3 px-1 min-h-32 shadow-all rounded-15">
                    <p className="w-full px-2 text-600 text-pinkRose-200">
                      Resources
                    </p>

                    <div className="w-full my-2 min-h-20">
                      <div className="w-2/12 float-left text-pinkRose-200 pt-4 align-center">
                        <img
                          className="inline-block mb-2 h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 m-auto"
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
                      </div>

                      <div className="w-9/12 float-right py-1 px-2 mb-2 shadow-all rounded-md border-tr-rounded-15">
                        <p className="text-xxs">Peter Williams</p>
                        <p className="text-xxs text-pinkRose-200 truncate">
                          Title : Africa Fishing report
                        </p>
                        <p className="text-xxs text-gray-500 truncate">
                          Created 11 Feb 2021
                        </p>
                      </div>
                    </div>

                    <div className="w-full my-2 min-h-20">
                      <div className="w-2/12 float-left text-pinkRose-200 pt-4 align-center">
                        <img
                          className="inline-block mb-2 h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 m-auto"
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
                      </div>

                      <div className="w-9/12 float-right py-1 px-2 mb-2 shadow-all rounded-md border-tr-rounded-15">
                        <p className="text-xxs">Peter Williams</p>
                        <p className="text-xxs text-pinkRose-200 truncate">
                          Title : Africa Fishing report
                        </p>
                        <p className="text-xxs text-gray-500 truncate">
                          Created 11 Feb 2021
                        </p>
                      </div>
                    </div>

                    <div className="w-full my-2 min-h-20">
                      <div className="w-2/12 float-left text-pinkRose-200 pt-4 align-center">
                        <img
                          className="inline-block mb-2 h-6 md:w-6 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 m-auto"
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
                      </div>

                      <div className="w-9/12 float-right py-1 px-2 mb-2 shadow-all rounded-md border-tr-rounded-15">
                        <p className="text-xxs">Peter Williams</p>
                        <p className="text-xxs text-pinkRose-200 truncate">
                          Title : Africa Fishing report
                        </p>
                        <p className="text-xxs text-gray-500 truncate">
                          Created 11 Feb 2021
                        </p>
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
