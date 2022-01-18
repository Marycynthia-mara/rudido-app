import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';


export default function WorkspaceCreate() {
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
                action_text: 'Promote Idea',
                action: '/promote',
              }}
            ></Header>

            {/* content below */}

            <div className="flex-1 w-full min-h-1/4 mt-8">
              <div className="hidden lg:block float-left lg:w-3/12 h-auto py-2 px-2 lg:px-2 float-left">
                <div className="w-full shadow-md rounded-15 min-h-32 mb-4 py-3 px-1 max-h-64">
                  <p className="bg-darkBlue-100 text-white inline-block py-1 px-2 rounded-sm shadow-md font-normal text-xs">
                    Published Portfolios
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 19 21"
                      className="fill-current inline"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                    </svg>
                  </p>

                  <div className="w-full my-2 min-h-24">
                    <div className="w-1/12 float-left text-pinkRose-200 pt-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
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

                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 19 21"
                        className="fill-current inline"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                      </svg>
                    </div>

                    <div className="w-10/12 float-right p-2 mb-2 mr-1 shadow-all rounded-md">
                      <p className="text-xs">Marketing tactics</p>
                      <p className="text-xxs">Company : ASN</p>
                      <p className="text-xxs text-gray-500">
                        Created 11 Feb 2021
                      </p>
                      <p className="text-xxs text-gray-500">
                        Content Type : Text
                      </p>
                    </div>
                  </div>

                  <div className="w-full my-2 min-h-24">
                    <div className="w-1/12 float-left text-pinkRose-200 pt-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
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

                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 19 21"
                        className="fill-current inline"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                      </svg>
                    </div>


                    <div className="w-10/12 float-right p-2 mb-2 mr-1 shadow-all rounded-md">
                      <p className="text-xs">Marketing tactics</p>
                      <p className="text-xxs">Company : ASN</p>
                      <p className="text-xxs text-gray-500">
                        Created 11 Feb 2021
                      </p>
                      <p className="text-xxs text-gray-500">
                        Content Type : Text
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full shadow-md rounded-15 min-h-32 mb-4 py-3 px-1 max-h-64">
                  <p className="bg-darkBlue-100 text-white inline-block py-1 px-2 rounded-sm shadow-md font-normal text-xs">
                    Similar Portfolios
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 19 21"
                      className="fill-current inline"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                    </svg>
                  </p>

                  <div className="w-full my-2 min-h-24">
                    <div className="w-1/12 float-left text-pinkRose-200 pt-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
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

                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 19 21"
                        className="fill-current inline"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                      </svg>
                    </div>

                    <div className="w-10/12 float-right p-2 mb-2 mr-1 shadow-all rounded-md">
                      <p className="text-xs">Marketing tactics</p>
                      <p className="text-xxs">Company : ASN</p>
                      <p className="text-xxs text-gray-500">
                        Created 11 Feb 2021
                      </p>
                      <p className="text-xxs text-gray-500">
                        Content Type : Text
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full lg:w-9/12 float-right lg:pl-4 min-h-32"
                Name
              >
                <div className="hidden lg:flex gap-1 md:gap-2 lg:gap-4 xl:gap-6 w-full mb-4 text-darkBlue-100 text-center">
                  <div className="pt-2 pr-2 lg:pr-4 flex-1 float-left md:w-full">
                    <p className="text-600">Recent&nbsp;content</p>
                  </div>

                  <div className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md">
                    <p className="text-600">Audios</p>
                  </div>

                  <div className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md">
                    <p className="text-600">Videos</p>
                  </div>

                  <div className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md">
                    <p className="text-600">Documents</p>
                  </div>
                </div>

                <div className="w-full min-h-32 lg:flex lg:gap-4">
                  <div className="lg:w-8/12 xl:w-9/12 py-3 px-2 shadow-all rounded-15">
                    <div className="flex gap-1 md:gap-2 lg:gap-1 xl:gap-6 w-full text-darkBlue-100 text-center">
                      <div className="pt-2 pr-2 flex-1 float-left md:w-full">
                        <p className="text-600">Portfolios</p>
                      </div>

                      <div className="py-2 px-2 flex-1 float-right md:w-full rounded-15 shadow-md">
                        <p className="text-600 text-pinkRose-200">Content</p>
                      </div>

                      <div className="py-2 px-2 flex-1 float-right md:w-full rounded-15 shadow-md">
                        <p className="text-600">ideas</p>
                      </div>

                      <div className="py-2 px-2 flex-1 float-right md:w-full rounded-15 shadow-md">
                        <p className="text-600">Sponsored</p>
                      </div>
                    </div>

                    <div className="w-full min-h-32 py-4 xl:py-2 text-xxs">
                      <div className="xl:flex xl:gap-2 w-full min-h-36">
                        <div className="xl:flex-1">
                          <p className="text-pinkRose-200 text-xs py-4 px-2">
                            My Portfolios
                          </p>

                          <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                            <div className="w-full min-h-28 xl:min-h-32">
                              <div className="float-left rounded-md w-4/12">
                                <div className="rounded-md h-18 p-2 mb-4 bg-red-600 shadow-md">
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
                                    {/* <span className="float-right text-white">
                                                                            10
                                                                        </span>  */}
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
                              </div>

                              <div className="w-7/12 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">
                                      Marketing Basics
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
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full min-h-8">
                              <div className="float-left w-4/12 xl:w-3/12 min-h-8">
                                <p>
                                  Reviews
                                  <span className="text-pinkRose-200 float-right">
                                    (5)
                                  </span>
                                </p>
                              </div>

                              <div className="w-7/12 xl:w-8/12 float-right min-h-8">
                                <div className="text-gray-500 float-right">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 pr-1 inline pl-2"
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
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                            <div className="w-full min-h-28 xl:min-h-32">
                              <div className="float-left rounded-md w-4/12">
                                <div className="rounded-md h-18 p-2 mb-4 bg-red-600 shadow-md">
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
                                    {/* <span className="float-right text-white">
                                                                            10
                                                                        </span>  */}
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
                              </div>

                              <div className="w-7/12 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">
                                      Marketing Basics
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
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full min-h-8">
                              <div className="float-left w-4/12 xl:w-3/12 min-h-8">
                                <p>
                                  Reviews
                                  <span className="text-pinkRose-200 float-right">
                                    (5)
                                  </span>
                                </p>
                              </div>

                              <div className="w-7/12 xl:w-8/12 float-right min-h-8">
                                <div className="text-gray-500 float-right">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 pr-1 inline pl-2"
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
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                            <div className="w-full min-h-28 xl:min-h-32">
                              <div className="float-left rounded-md w-4/12">
                                <div className="rounded-md h-18 p-2 mb-4 bg-red-600 shadow-md">
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
                                    {/* <span className="float-right text-white">
                                                                            10
                                                                        </span>  */}
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
                              </div>

                              <div className="w-7/12 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">
                                      Marketing Basics
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
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full min-h-8">
                              <div className="float-left w-4/12 xl:w-3/12 min-h-8">
                                <p>
                                  Reviews
                                  <span className="text-pinkRose-200 float-right">
                                    (5)
                                  </span>
                                </p>
                              </div>

                              <div className="w-7/12 xl:w-8/12 float-right min-h-8">
                                <div className="text-gray-500 float-right">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 pr-1 inline pl-2"
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
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="xl:flex-1">
                          <p className="text-darkBlue-100 text-xs py-4 px-2">
                            Others
                          </p>

                          <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                            <div className="w-full min-h-28 xl:min-h-32">
                              <div className="float-left rounded-md w-4/12">
                                <div className="rounded-md h-18 p-2 mb-4 bg-darkBlue-200 shadow-md">
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
                                    {/* <span className="float-right text-white">
                                                                            10
                                                                        </span>  */}
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
                              </div>

                              <div className="w-7/12 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">
                                      Marketing Basics
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
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full min-h-8">
                              <div className="float-left w-4/12 xl:w-3/12 min-h-8">
                                <p>
                                  Reviews
                                  <span className="text-pinkRose-200 float-right">
                                    (5)
                                  </span>
                                </p>
                              </div>

                              <div className="w-7/12 xl:w-8/12 float-right min-h-8">
                                <div className="text-gray-500 float-right">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 pr-1 inline pl-2"
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
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                            <div className="w-full min-h-28 xl:min-h-32">
                              <div className="float-left rounded-md w-4/12">
                                <div className="rounded-md h-18 p-2 mb-4 bg-darkBlue-200 shadow-md">
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
                                    {/* <span className="float-right text-white">
                                                                            10
                                                                        </span>  */}
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
                              </div>

                              <div className="w-7/12 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">
                                      Marketing Basics
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
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full min-h-8">
                              <div className="float-left w-4/12 xl:w-3/12 min-h-8">
                                <p>
                                  Reviews
                                  <span className="text-pinkRose-200 float-right">
                                    (5)
                                  </span>
                                </p>
                              </div>

                              <div className="w-7/12 xl:w-8/12 float-right min-h-8">
                                <div className="text-gray-500 float-right">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 pr-1 inline pl-2"
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
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w-full p-3 shadow-all rounded-15 min-h-36 mb-4">
                            <div className="w-full min-h-28 xl:min-h-32">
                              <div className="float-left rounded-md w-4/12">
                                <div className="rounded-md h-18 p-2 mb-4 bg-darkBlue-200 shadow-md">
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
                                    {/* <span className="float-right text-white">
                                                                            10
                                                                        </span>  */}
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
                              </div>

                              <div className="w-7/12 float-right">
                                <div className="flex">
                                  <div className="flex-1">
                                    <p className="mb-1 text-xs">
                                      Marketing Basics
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
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full min-h-8">
                              <div className="float-left w-4/12 xl:w-3/12 min-h-8">
                                <p>
                                  Reviews
                                  <span className="text-pinkRose-200 float-right">
                                    (5)
                                  </span>
                                </p>
                              </div>

                              <div className="w-7/12 xl:w-8/12 float-right min-h-8">
                                <div className="text-gray-500 float-right">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 pr-1 inline pl-2"
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
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 pr-1 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
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

                  <div className="hidden lg:block lg:w-4/12 xl:w-3/12 py-3 px-1 min-h-32 shadow-all rounded-15">
                    <p className="w-full px-2 text-600 text-pinkRose-200">
                      Last Activity
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

                    <div className="w-full my-4 min-h-24">
                      <div className="w-1/12 float-left text-pinkRose-200 pt-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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

                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 19 21"
                          className="fill-current inline"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                        </svg>
                      </div>

                      <div className="w-10/12 float-right p-2 mb-2 shadow-all rounded-md">
                        <p className="text-xs">John Nowas</p>
                        <p className="text-xxs">Keep fit project</p>
                        <p className="text-xxs text-gray-500">
                          Created 11 Feb 2021
                        </p>
                        <p className="text-xxs text-gray-500">
                          Attend the seminar...
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

                    <div className="w-full my-4 min-h-24">
                      <div className="w-1/12 float-left text-pinkRose-200 pt-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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

                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 19 21"
                          className="fill-current inline"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                        </svg>
                      </div>

                      <div className="w-10/12 float-right p-2 mb-2 shadow-all rounded-md">
                        <p className="text-xs">John Nowas</p>
                        <p className="text-xxs">Keep fit project</p>
                        <p className="text-xxs text-gray-500">
                          Created 11 Feb 2021
                        </p>
                        <p className="text-xxs text-gray-500">
                          Attend the seminar...
                        </p>
                      </div>
                    </div>

                    <div className="w-full my-4 min-h-24">
                      <div className="w-1/12 float-left text-pinkRose-200 pt-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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

                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 19 21"
                          className="fill-current inline"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z" />
                        </svg>
                      </div>

                      <div className="w-10/12 float-right p-2 mb-2 shadow-all rounded-md">
                        <p className="text-xs">John Nowas</p>
                        <p className="text-xxs">Keep fit project</p>
                        <p className="text-xxs text-gray-500">
                          Created 11 Feb 2021
                        </p>
                        <p className="text-xxs text-gray-500">
                          Attend the seminar...
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
