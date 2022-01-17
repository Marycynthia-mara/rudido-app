import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function LibraryPage () {
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

                        <Header header={{ 
                                greeting_sec : false,
                                profile_sec : false,
                                action_btn : true,
                                action_text : 'Upgrade Plan',
                                action : '/upgrade',
                            }}> 
                        </Header>

                        {/* content here */}
                        <div className="flex-1 w-full min-h-1/4 mt-8">
                            <div className="w-full min-h-36">
                                <div className="flex gap-4 lg:gap-20 text-darkBlue-100">
                                    
                                    <Link to="/" className="flex-1 rounded-15 shadow-all text-center p-2 active_tab">  Resources</Link>

                                    <Link to="/" className="flex-1 rounded-15 shadow-all text-center p-2">  Mentors</Link>

                                    <Link to="/" className="flex-1 rounded-15 shadow-all text-center p-2">  Builders</Link>

                                </div>
                                <div className="lg:float-left w:full lg:w-3/12 min-h-36 py-4">

                                    <div className="w-full min-h-36 shadow-all rounded-md px-4 py-6">

                                        <div className="w-full min-h-16 mb-2">
                                            <p>Topic : <span className="font-normal">Content Creation</span></p>
                                            <p>File Type : <span className="font-normal">Audio</span></p>
                                        </div>
                                        
                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 bg-darkBlue-100 text-white mb-2">  view now</Link>

                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 text-darkBlue-100">  view Later</Link>

                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 text-darkBlue-100">  Share</Link>

                                    </div>

                                    <div className="w-full min-h-36 shadow-all rounded-md py-4 mt-6">

                                        <div className="w-full min-h-16 p-2">
                                            <p className="mb-4">Rudido virtual Assistant</p>
                                            
                                            <Link to="/" className="block text-center rounded-all shadow-md p-2 text-darkBlue-100 mb-2">  Pitch desk</Link>
                                            
                                            <Link to="/" className="block text-center rounded-all shadow-md p-2 text-darkBlue-100 mb-2">  Prototype</Link>

                                            <Link to="/" className="block text-center rounded-all shadow-md p-2 text-darkBlue-100 mb-2">  Website</Link>
                                            
                                            <Link to="/" className="block text-center rounded-all shadow-md p-2 text-darkBlue-100 mb-2">  Idea Registration</Link>
                                            
                                            <Link to="/" className="block text-center rounded-all shadow-md p-2 text-darkBlue-100 mb-2">  Content Calenter</Link>
                                        </div>

                                    </div>
                                </div>
                                
                                
                                <div className="lg:float-left hidden lg:block w-6/12 min-h-36 lg:p-4">
                                    
                                    <div className="w-full rounded-md shadow-all p-4">
                                        <div className="w-full min-h-36">
                                            <p>Name : Jennifer Orjinta</p>
                                            <p>Bio : <span className="font-normal">Creative writer, Content writer</span></p>
                                            <p>Sector : <span className="font-normal">Creativity</span></p>
                                            <p>Skills : <span className="font-normal">CreativArt, Design</span></p>
                                            <p>Content Topic : <span className="font-normal">Creativity Writing</span></p>
                                        </div>

                                        <div className="w-full min-h-36 my-2">
                                            
                                            <div className="w-flex gap-2 mb-2">
                                                <div className="flex-1 my-2">
                                                    <div className="flex gap-2">
                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className=" rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>

                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className=" rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>

                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className="rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex-1 my-2">
                                                    <div className="flex gap-2">
                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className=" rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>

                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className=" rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>

                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className="rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex-1 my-2">
                                                    <div className="flex gap-2">
                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className=" rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>

                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className=" rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>

                                                        <div className="p-2 flex-1 rounded-md shadow-md">
                                                            <div className="rounded-md h-18 p-2 bg-pinkRose-200 shadow-md">
                                                                <p className="text-white text-xxs">
                                                                    Content
                                                
                                                                    <span className="float-right text-white">
                                                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                    </span>
                                                                </p>
                                            
                                                                <hr className="bg-white w-full h-1 my-2" />
                                            
                                                                <p className="text-white text-xxs h-4">
                                                                    
                                                                    {/* <span className="float-right text-white">
                                                                        10
                                                                    </span> */}
                                                                </p>
                                                            </div>   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full min-h-16 text-center shadow-all p-2 mt-4 rounded-md">
                                            <p className="">Rate your experience</p>
                                            <div className="w-20 pt-2 m-auto">
                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="lg:float-left hidden lg:block w-3/12 min-h-36 py-4">
                                    <div className="w-full min-h-36 shadow-all rounded-md px-4 py-6 mb-6">

                                        <div className="w-full min-h-16 mb-2">
                                            <p>Venture Name : <span className="font-normal">Edutech Lab</span></p>
                                            <p>Bio : <span className="font-normal">Helping Writers Launch and excel within Africa</span></p>
                                        </div>
                                        
                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 text-darkBlue-100 mb-2">  Message</Link>
                                        
                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 text-darkBlue-100">  Share</Link>

                                        <div className="w-full min-h-16 text-center shadow-all p-2 mt-4 rounded-md">
                                            <p className="">Rate your experience</p>
                                            
                                            <div className="w-20 pt-2 m-auto">
                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full min-h-36 shadow-all rounded-md px-4 py-6 mb-6">

                                        <div className="w-full min-h-16 mb-2">
                                            <p>Venture Name : <span className="font-normal">Edutech Lab</span></p>
                                            <p>Bio : <span className="font-normal">Helping Writers Launch and excel within Africa</span></p>
                                        </div>

                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 text-darkBlue-100 mb-2">  Message</Link>
                                        
                                        <Link to="/" className="block rounded-md shadow-all mb-2 text-center p-2 text-darkBlue-100">  Share</Link>

                                        <div className="w-full min-h-16 text-center shadow-all p-2 mt-4 rounded-md">
                                            <p className="">Rate your experience</p>
                                            
                                            <div className="w-20 pt-2 m-auto">
                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </span>

                                                <span className="float-left text-pinkRose-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
                
            </div> 
        </>
    )
}