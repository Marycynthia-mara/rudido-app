import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      {/* <!-- mobile menu bar --> */}
      <div className="text-white flex justify-between px-8 pt-4 md:hidden">
        {/* <!-- logo --> */}
        <Link exact to="/" className={`block p-4 content-center`}>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 stroke-white">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75"></span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </span>
        </Link>

        {/* <!-- mobile menu button --> */}
        <button className="mobile-menu-button p-4 focus:outline-none text-darkBlue-100 pt-2">
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* <!-- sidebar --> */}
      <div className="sidebar z-20 rounded-tl-30 rounded-bl-30 bg-darkBlue-100 text-blue-100 w-64 py-7 px-6 md:pt-12 overflow-y-scroll md:overflow-visible shadow-md md:rounded-30 absolute inset-y-0 md:ml-3 md:mb-14 md:mt-28 transform translate-hide md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* <!-- logo --> */}
        <Link
          exact
          to="/"
          className={`block w-16 h-16 relative left-[-3%] md:w-28 md:h-28 md:absolute md:top-[-11%] md:left-10`}
        >
          <img src="/images/rudido-logo.png" alt="Logo" />
        </Link>

        {/* <!-- nav --> */}
        <nav>
          <NavLink exact to="/" activeClassName="active" className={`nav-btn`}>
            <svg
              className="h-6 w-6 inline fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2222 1.93745V3.71522H10.6667V1.93745H14.2222ZM5.33333 1.93745V7.27078H1.77778V1.93745H5.33333ZM14.2222 9.04856V14.3819H10.6667V9.04856H14.2222ZM5.33333 12.6041V14.3819H1.77778V12.6041H5.33333ZM16 0.159668H8.88889V5.493H16V0.159668ZM7.11111 0.159668H0V9.04856H7.11111V0.159668ZM16 7.27078H8.88889V16.1597H16V7.27078ZM7.11111 10.8263H0V16.1597H7.11111V10.8263Z"
                fill="white"
              />
            </svg>

            <span className="inline-block pl-4">Home</span>
          </NavLink>

          <NavLink to="/planner" activeClassName="active" className={`nav-btn`}>
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              className="inline"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.44741 0H15.7348C17.5081 0 19 1.5523 19 3.39749V17.6025C19 19.4477 17.5081 21 15.7348 21H4.44741C2.67407 21 1.18222 19.4477 1.18222 17.6025V17.2803H0.619259C0.281481 17.2803 0 17.0167 0 16.6946C0 16.3724 0.281481 16.0502 0.619259 16.0502H1.18222V11.1297H0.619259C0.281481 11.1297 0 10.8368 0 10.5146C0 10.1925 0.281481 9.87029 0.619259 9.87029H1.18222V4.94979H0.619259C0.281481 4.94979 0 4.6569 0 4.33473C0 4.01255 0.281481 3.71967 0.619259 3.71967H1.18222V3.39749C1.18222 1.5523 2.67407 0 4.44741 0ZM17.1985 17.6025V3.39749C17.1985 2.54812 16.5511 1.87448 15.7348 1.87448H4.44741C3.63111 1.87448 2.95556 2.54812 2.95556 3.39749V3.71967H4.13778C4.44741 3.71967 4.75704 4.01255 4.75704 4.33473C4.75704 4.6569 4.44741 4.94979 4.13778 4.94979H2.95556V9.87029H4.13778C4.44741 9.87029 4.75704 10.1925 4.75704 10.5146C4.75704 10.8368 4.44741 11.1297 4.13778 11.1297H2.95556V16.0502H4.13778C4.44741 16.0502 4.75704 16.3724 4.75704 16.6946C4.75704 17.0167 4.44741 17.2803 4.13778 17.2803H2.95556V17.6025C2.95556 18.4519 3.63111 19.1548 4.44741 19.1548H15.7348C16.5511 19.1548 17.1985 18.4519 17.1985 17.6025ZM7.12148 3.71967H14.243C14.5807 3.71967 14.8341 4.01255 14.8341 4.33473C14.8341 4.6569 14.5807 4.94979 14.243 4.94979H7.12148C6.81185 4.94979 6.50222 4.6569 6.50222 4.33473C6.50222 4.01255 6.81185 3.71967 7.12148 3.71967ZM7.12148 6.17992H14.243C14.5807 6.17992 14.8341 6.4728 14.8341 6.79498C14.8341 7.14644 14.5807 7.41004 14.243 7.41004H7.12148C6.81185 7.41004 6.50222 7.14644 6.50222 6.79498C6.50222 6.4728 6.81185 6.17992 7.12148 6.17992ZM7.12148 8.64017H14.243C14.5807 8.64017 14.8341 8.93305 14.8341 9.28452C14.8341 9.6067 14.5807 9.87029 14.243 9.87029H7.12148C6.81185 9.87029 6.50222 9.6067 6.50222 9.28452C6.50222 8.93305 6.81185 8.64017 7.12148 8.64017ZM7.12148 11.1297H14.243C14.5807 11.1297 14.8341 11.4226 14.8341 11.7448C14.8341 12.0962 14.5807 12.3598 14.243 12.3598H7.12148C6.81185 12.3598 6.50222 12.0962 6.50222 11.7448C6.50222 11.4226 6.81185 11.1297 7.12148 11.1297ZM7.12148 13.59H14.243C14.5807 13.59 14.8341 13.8828 14.8341 14.2343C14.8341 14.5565 14.5807 14.8201 14.243 14.8201H7.12148C6.81185 14.8201 6.50222 14.5565 6.50222 14.2343C6.50222 13.8828 6.81185 13.59 7.12148 13.59ZM7.12148 16.0502H14.243C14.5807 16.0502 14.8341 16.3724 14.8341 16.6946C14.8341 17.0167 14.5807 17.2803 14.243 17.2803H7.12148C6.81185 17.2803 6.50222 17.0167 6.50222 16.6946C6.50222 16.3724 6.81185 16.0502 7.12148 16.0502Z"
                fill="white"
              />
            </svg>

            <span className="inline-block pl-4">Planner</span>
          </NavLink>

          <NavLink
            to="/workspace"
            activeClassName="active"
            className={`nav-btn`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="h-6 w-6 inline fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <rect width=24" height="24" fill="none"/> */}
              <path
                d="M21.0938 4.6875V8.59375H13.2812V4.6875H21.0938ZM21.0938 3.125H13.2812C12.8668 3.125 12.4694 3.28962 12.1764 3.58265C11.8834 3.87567 11.7188 4.2731 11.7188 4.6875V8.59375C11.7188 9.00815 11.8834 9.40558 12.1764 9.6986C12.4694 9.99163 12.8668 10.1562 13.2812 10.1562H21.0938C21.5082 10.1562 21.9056 9.99163 22.1986 9.6986C22.4916 9.40558 22.6562 9.00815 22.6562 8.59375V4.6875C22.6562 4.2731 22.4916 3.87567 22.1986 3.58265C21.9056 3.28962 21.5082 3.125 21.0938 3.125Z"
                fill="white"
              />
              <path
                d="M9.375 19.5312H4.6875V13.2812H9.375V11.7188H4.6875C4.2731 11.7188 3.87567 11.8834 3.58265 12.1764C3.28962 12.4694 3.125 12.8668 3.125 13.2812V19.5312C3.125 19.9457 3.28962 20.3431 3.58265 20.6361C3.87567 20.9291 4.2731 21.0938 4.6875 21.0938H9.375V19.5312Z"
                fill="white"
              />
              <path
                d="M23.4375 15.625H13.1469L15.1672 13.6047L14.0625 12.5L10.1562 16.4062L14.0625 20.3125L15.1672 19.2078L13.1469 17.1875H23.4375V15.625Z"
                fill="white"
              />
              <path
                d="M8.59375 4.6875V8.59375H4.6875V4.6875H8.59375ZM8.59375 3.125H4.6875C4.2731 3.125 3.87567 3.28962 3.58265 3.58265C3.28962 3.87567 3.125 4.2731 3.125 4.6875V8.59375C3.125 9.00815 3.28962 9.40558 3.58265 9.6986C3.87567 9.99163 4.2731 10.1562 4.6875 10.1562H8.59375C9.00815 10.1562 9.40558 9.99163 9.6986 9.6986C9.99163 9.40558 10.1562 9.00815 10.1562 8.59375V4.6875C10.1562 4.2731 9.99163 3.87567 9.6986 3.58265C9.40558 3.28962 9.00815 3.125 8.59375 3.125Z"
                fill="white"
              />
            </svg>

            <span className="inline-block pl-4">Workspace</span>
          </NavLink>

          <NavLink
            to="/marketplace"
            activeClassName="active"
            className={`nav-btn`}
          >
            <svg
              width="18"
              height="15"
              className="inline"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 0H1V1.83333H17V0ZM18 9.16667V7.33333L17 2.75H1L0 7.33333V9.16667H1V14.6667H11V9.16667H15V14.6667H17V9.16667H18ZM9 12.8333H3V9.16667H9V12.8333Z"
                fill="white"
              />
            </svg>

            <span className="inline-block pl-4">Marketplace</span>
          </NavLink>

          <NavLink to="/library" activeClassName="active" className={`nav-btn`}>
            <svg
              width="20"
              height="20"
              className="inline"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17 9H7V7H17V9ZM13 13H7V11H13V13ZM17 5H7V3H17V5Z"
                fill="white"
              />
            </svg>

            <span className="inline-block pl-4">Library</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline float-right"
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
          </NavLink>

          <NavLink to="/message" activeClassName="active" className={`nav-btn`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
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

            <span className="inline-block pl-4">Message</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline float-right"
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
          </NavLink>

          <NavLink
            to="/analytics"
            activeClassName="active"
            className={`nav-btn`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>

            <span className="inline-block pl-4">Analytics</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline float-right"
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
          </NavLink>

          <NavLink to="/finance" activeClassName="active" className={`nav-btn`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <span className="inline-block pl-4">Finance</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline float-right"
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
          </NavLink>

          <NavLink
            to="/settings"
            activeClassName="active"
            className={`nav-btn`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span className="inline-block pl-4">Settings</span>
          </NavLink>

          <NavLink to="/logout" className={`nav-btn`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="inline-block pl-4">Logout</span>
          </NavLink>

          <NavLink
            to="/notification"
            activeClassName="active"
            className={`nav-btn active rounded-30 px-6 py-5 shadow-all`}
          >
            <div className="shadow-all rounded-15 p-2 text-white">
              <span className="relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 stroke-white">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>

              <p className="text-pinkRose-200 my-4 font-medium">Notification</p>

              <p className="leading-4 text-darkPurple-200 truncate">
                Latest notification text goes here.
              </p>

            </div>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
