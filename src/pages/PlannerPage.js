import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

export default function PlannerPage () {
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
                                greeting_sec : true,
                                greeting_mid_txt : true,
                                greeting_mid_cont : 'Create Plans for your idea',
                                profile_sec : false,
                                action_btn : false,
                            }}> 
                        </Header>
                            
                        {/* content here */}
                        <div className="flex-1 w-full min-h-1/4 mt-8">
                            <div className="w-full float-right lg:pl-4 min-h-32">

                                
                                <div className="flex gap-1 md:gap-2 lg:gap-4 xl:gap-6 w-full mb-4 text-darkBlue-100 text-center">
                                    
                                    <div className="pt-2 pr-2 lg:pr-4 hidden md:inline-block flex-1 float-left md:w-full">
                                        <p className="text-600 text-lg float-left">
                                            Tasks
                                        </p>
                                    </div>
                                    
                                    <div className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md">
                                        <p className="text-600 active_tab">
                                            Task List
                                        </p>
                                    </div>

                                    <div className="py-2 px-2 lg:px-4 flex-1 float-right md:w-full rounded-15 shadow-md">
                                        <p className="text-600">
                                            New Tasks 

                                            <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>
                            
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full min-h-32 lg:flex lg:gap-4">

                                    <div className="lg:w-8/12 xl:w-9/12">
                                        
                                        <div className="w-full min-h-36 shadow-all rounded-15 mb-8 p-4 text-darkBlue-100">
                                            <div className="h-12 p-4 mb-2 shadow-all rounded-lg text-xs">
                                                
                                                <p className="w-9/12 md:w-10/12 float-left truncate">
                                                    Visit the CAC office to register idea
                                                </p>
                                                <p className="w-3/12 md:w-2/12 float-right pl-4 text-gray-500">Jan 15</p>

                                            </div>

                                            <div className="h-12 p-4 mb-2 shadow-all rounded-lg text-xs">
                                                
                                                <p className="w-9/12 md:w-10/12 float-left truncate">
                                                    Visit the CAC office to register idea
                                                </p>
                                                <p className="w-3/12 md:w-2/12 float-right pl-4 text-gray-500">Jan 15</p>

                                            </div>

                                            <div className="h-12 p-4 mb-2 shadow-all rounded-lg text-xs">
                                                
                                                <p className="w-9/12 md:w-10/12 float-left truncate">
                                                    Visit the CAC office to register idea
                                                </p>
                                                <p className="w-3/12 md:w-2/12 float-right pl-4 text-gray-500">Jan 15</p>

                                            </div>
                                        </div>
                                        
                                        <div className="w-full min-h-36 shadow-all rounded-15 text-xxs">
                                            
                                        </div>

                                    </div>

                                    <div className="hidden lg:block lg:w-4/12 xl:w-3/12 py-3 px-4 min-h-32 shadow-all rounded-15 text-darkBlue-100">
                                    
                                        <p className="w-3/4 px-2 py-2 mb-8 rounded-15 shadow-all m-auto text-600 text-pinkRose-200">
                                            Contact List

                                            <span className="float-right relative inline-flex rounded-full h-6 w-6 bg-pinkRose-200 text-white">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkRose-100 opacity-75 text-white"></span>
                            
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-0.5 left-0.5 inline-flex" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </p>

                                        <div className="w-full my-2 min-h-6">

                                            <div className="w-2/12  h-6 float-left text-pinkRose-200 align-center mb-4 m-auto">

                                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white float-right" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                            
                                            </div>

                                            <div className="w-9/12 float-right py-1 px-2 mb-4 text-center">
                                                <p className="text-xs truncate float-left">Peter Williams</p>
                                            </div>
                                        </div>

                                        <div className="w-full my-2 min-h-6">

                                            <div className="w-2/12  h-6 float-left text-pinkRose-200 align-center mb-4 m-auto">

                                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white float-right" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                            
                                            </div>

                                            <div className="w-9/12 float-right py-1 px-2 mb-4 text-center">
                                                <p className="text-xs truncate float-left">Peter Williams</p>
                                            </div>
                                        </div>

                                        <div className="w-full my-2 min-h-6">

                                            <div className="w-2/12  h-6 float-left text-pinkRose-200 align-center mb-4 m-auto">

                                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white float-right" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                            
                                            </div>

                                            <div className="w-9/12 float-right py-1 px-2 mb-4 text-center">
                                                <p className="text-xs truncate float-left">Peter Williams</p>
                                            </div>
                                        </div>

                                        <div className="w-full my-2 min-h-6">

                                            <div className="w-2/12  h-6 float-left text-pinkRose-200 align-center mb-4 m-auto">

                                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white float-right" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                            
                                            </div>

                                            <div className="w-9/12 float-right py-1 px-2 mb-4 text-center">
                                                <p className="text-xs truncate float-left">Peter Williams</p>
                                            </div>
                                        </div>

                                        <div className="w-full my-2 min-h-6">

                                            <div className="w-2/12  h-6 float-left text-pinkRose-200 align-center mb-4 m-auto">

                                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white float-right" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                            
                                            </div>

                                            <div className="w-9/12 float-right py-1 px-2 mb-4 text-center">
                                                <p className="text-xs truncate float-left">Peter Williams</p>
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