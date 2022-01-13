import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function MarketplacePage () {
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
                            <div className="w-full float-right lg:pl-4 min-h-32">

                                
                                <div className="flex flex-wrap lg:flex-no-wrap gap-1 md:gap-2 lg:gap-4 xl:gap-6 w-full mb-4 text-darkBlue-100 text-center">
                                    
                                    <div className="pt-2 pr-2 lg:pr-4 float-left w-full lg:flex-1">
                                        <p className="text-600 text-lg float-left">
                                            Portfolios
                                        </p>
                                    </div>

                                    <Link to="/" className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600 active_tab">  Innovators</Link>

                                    <Link to="/" className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600">  Skills</Link>

                                    <Link to="/" className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600">  Builders</Link>

                                    <Link to="/" className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600">  Investors</Link>

                                    <Link to="/" className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md text-600">  Sponsored</Link>

                                    
                                </div>

                                <div className="w-full min-h-32 lg:flex lg:gap-4">

                                    <div className="lg:flex-1">
                                        
                                        <div className="w-full min-h-36 text-darkBlue-100 text-xxs">
                                            <div className="w-full p-3 shadow-all rounded-md min-h-36 mb-4">
                                                <div className="w-full min-h-24 xl:min-h-24">
                                                    <div className="float-left rounded-md w-4/12 xl:w-3/12">
                                                        <div className="rounded-md h-18 p-2 mb-4 bg-red-600 shadow-md">
                                                            <p className="text-white text-xxs">
                                                                Content
                                            
                                                                <span className="float-right text-white">
                                                
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
                                                        
                                                    <div className="w-7/12 xl:w-8/12 float-right">
                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="mb-1 text-xs truncate">Marketing Basics

                                                                    <span className="text-darkBlue-100 float-right pr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                                        </svg>
                                                                    </span>   
                                                                </p>
                                                                <p className="text-gray-500">
                                                                    <span className="text-pinkRose-200">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </span>
                                                                    
                                                                    Idea Started
                                                                </p>
                                                                <p className="text-pinkRose-200">1 January 2021</p>
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
                                                        <div className=" text-gray-500 h-8">
                                                            <div className="float-right">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                                                </svg>
                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                                </svg>
                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full p-3 shadow-all rounded-md min-h-36 mb-4 active_col">
                                                <div className="w-full min-h-24 xl:min-h-24">
                                                    <div className="float-left rounded-md w-4/12 xl:w-3/12">
                                                        <div className="rounded-md h-18 p-2 mb-4 bg-darkBlue-200 shadow-md">
                                                            <p className="text-white text-xxs">
                                                                Content
                                            
                                                                <span className="float-right text-white">
                                                
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
                                                        
                                                    <div className="w-7/12 xl:w-8/12 float-right">
                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="mb-1 text-xs truncate">Marketing 101

                                                                    <span className="text-darkBlue-100 float-right pr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                                        </svg>
                                                                    </span>   
                                                                </p>
                                                                <p className="text-gray-500">
                                                                    <span className="text-pinkRose-200">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </span>
                                                                    
                                                                    Idea Started
                                                                </p>
                                                                <p className="text-pinkRose-200">1 January 2021</p>
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
                                                        <div className=" text-gray-500 h-8">
                                                            <div className="float-right">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                                                </svg>
                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                                </svg>
                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full p-3 shadow-all rounded-md min-h-36 mb-4">
                                                <div className="w-full min-h-24 xl:min-h-24">
                                                    <div className="float-left rounded-md w-4/12 xl:w-3/12">
                                                        <div className="rounded-md h-18 p-2 mb-4 bg-pinkRose-300 shadow-md">
                                                            <p className="text-white text-xxs">
                                                                Content
                                            
                                                                <span className="float-right text-white">
                                                
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
                                                        
                                                    <div className="w-7/12 xl:w-8/12 float-right">
                                                        <div className="flex">
                                                            <div className="flex-1">
                                                                <p className="mb-1 text-xs truncate">Marketing Basics

                                                                    <span className="text-darkBlue-100 float-right pr-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                                        </svg>
                                                                    </span>   
                                                                </p>
                                                                <p className="text-gray-500">
                                                                    <span className="text-pinkRose-200">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </span>
                                                                    
                                                                    Idea Started
                                                                </p>
                                                                <p className="text-pinkRose-200">1 January 2021</p>
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
                                                        <div className=" text-gray-500 h-8">
                                                            <div className="float-right">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                                                </svg>
                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                                </svg>
                            
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>

                                    <div className="hidden lg:block lg:flex-1 py-3 px-8 min-h-32 shadow-all rounded-lg text-darkBlue-100 relative">
                                    
                                        <p className="w-3/4 py-2 mb-2 text-600 text-darkBlue-100 text-lg">
                                            
                                            <span className="mr-4 inline-block relative inline-flex rounded-full h-5 w-5 bg-pinkRose-200">
                                                
                                            </span>

                                            Marketing 101
                                        </p>

                                        <div className="w-full my-2 min-h-16">

                                            <div className="w-2/12 h-6 float-left text-pinkRose-200 align-center mb-4">

                                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white float-left" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                            
                                            </div>

                                            <div className="w-10/12 float-right px-2 mb-4">
                                                <p className="text-sm">Company</p>
                                                <p className="text-xs truncate text-pinkRose-200">Adventure Hub</p>
                                                <p className="text-xs truncate text-gray-500">Location : Nigeria</p>
                                            </div>
                                        </div>

                                        <div className="w-11/12 m-auto">

                                            <div className="h-36 mb-4 overflow-hidden">

                                                <img className=" h-auto w-full" src="https://images.unsplash.com/photo-1566415633283-2f46275cb5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="" />

                                            </div>
                                        
                                            <div className="font-normal">
                                                <p className="mb-4">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, ratione eaque.
                                                </p>

                                                <p className="mb-4">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda, ratione eaque, odio corporis voluptatem laboriosam distinctio totam dignissimos consequuntur.
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
    )
}   