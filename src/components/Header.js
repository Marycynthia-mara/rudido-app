import { Link } from 'react-router-dom';

function Header (props) {
    const current = new Date();
    const month = current.toLocaleString('en-us', { month: 'long' });
    const date = `${current.getDate()} ${month} ${current.getFullYear()}`;
    const { header } = props; 
    const action_btn_classes = `${header.profile_sec
        ?   'flex-1'
        :   'w-52 float-right'
    } text-pinkRose-200 rounded-30 shadow-md py-2 mb-4 px-4`;

    return (
        <>
            <div className="lg:flex w-full">
    
                <div className="lg:flex-1">
                    <div className="flex-1 text-white bg-darkBlue-100 rounded-30 px-4 w-4/5">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        <input type="text" placeholder='Search' className="placeholder-white px-4 py-2 bg-darkBlue-100 focus:outline-none w-4/5" />
                    </div>

                    {header.greeting_sec 
                        ?   <div>
                                <p className="font-black text-xl my-4">Good Morning, Amina</p>

                                {header.greeting_mid_txt 
                                    ?   <p>{ header.greeting_mid_cont }</p>
                                    :   ''
                                }
                                
                                <p>

                                    <svg width="23" height="23" viewBox="0 0 23 23" className="h-6 w-6 inline" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9091 16.7273V7.31818H6.27273V16.7273H20.9091ZM20.9091 2.09091C21.4636 2.09091 21.9955 2.3112 22.3876 2.70332C22.7797 3.09544 23 3.62727 23 4.18182V16.7273C23 17.2818 22.7797 17.8136 22.3876 18.2058C21.9955 18.5979 21.4636 18.8182 20.9091 18.8182H6.27273C5.11227 18.8182 4.18182 17.8773 4.18182 16.7273V4.18182C4.18182 3.62727 4.40211 3.09544 4.79423 2.70332C5.18635 2.3112 5.71818 2.09091 6.27273 2.09091H7.31818V0H9.40909V2.09091H17.7727V0H19.8636V2.09091H20.9091ZM17.2814 10.5173L12.6395 15.1591L9.83773 12.3573L10.9459 11.2491L12.6395 12.9427L16.1732 9.40909L17.2814 10.5173ZM2.09091 20.9091H16.7273V23H2.09091C0.930454 23 0 22.0591 0 20.9091V8.36364H2.09091V20.9091Z" fill="url(#paint0_linear_1479_2)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_1479_2" x1="6.67" y1="2.3" x2="11.96" y2="23" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F04B92"/>
                                        <stop offset="1" stop-color="#F04B92" stop-opacity="0.7"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>

                                    <span className="inline-block p-2">{ date }</span>
                                </p>
                            </div>

                        :    ''
                    } 
                </div>

                <div className="lg:flex-1 mt-4 lg:mt-0">
                
                    <figure className="flex ">

                        {header.profile_sec
                            ?   <div className="flex-auto self-end mr-4">
                                    <img className="float-right w-20 h-20 md:w-28 md:h-28 rounded-fullSide border-4 md:border-8 border-darkBlue-100" src="/images/hands.png" alt="Profile" />
                                </div>

                            :   ''
                        }
                        
                            
                        <figcaption className="flex-auto">

                            {header.action_btn
                                ?   
                                <Link className="pr-4 cursor-pointer" to={header.action}>
                                    <div className={action_btn_classes}>

                                        <svg width="20" height="16" viewBox="0 0 20 16"  className="float-right self-end" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 2H10L8 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM15.94 13L13 11.28L10.06 13L10.84 9.67L8.25 7.43L11.66 7.14L13 4L14.34 7.14L17.75 7.43L15.16 9.67L15.94 13Z" fill="url(#paint0_linear_1531_131)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1531_131" x1="5.8" y1="1.6" x2="8.81044" y2="16.325" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F04B92"/>
                                            <stop offset="1" stop-color="#F04B92" stop-opacity="0.7"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        
                                        <span >{header.action_text}</span>
                                    </div>
                                </Link>

                                :   ''
                            }

                            {header.profile_sec
                            ?    <div className="flex">
                                    <div className="flex-1">
                                        <p className="mb-2">Sarah Dayan</p>
                                        <p>Founder</p>
                                        <p>@Comic Ventures</p>
                                    </div>
                                    
                                    <div className="justify-items-end self-end">
                                        <button className="pl-0 pb-0 pr-0 float-right focus:outline-none text-pinkRose-200 pt-2">
                                            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path className="self-end" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            :   ''
                        }
                            
                        </figcaption>

                    </figure>
                </div>

            </div>
        </>
    )
}

export default Header;