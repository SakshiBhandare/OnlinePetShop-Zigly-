import React, { useState } from 'react';
import menulogo from '../../Assets/menulogo.png';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';


const Megamenu = () => {
    const [open, setopen] = useState(false);
   

    return (
        <>
            <div className='grid grid-rows-1'>
                <div>
                    <nav className='bg-[#21005b]'>
                        <div className='flex items-center font-medium md:justify-center justify-around h-10'>
                            <div className='z-50 p-0 md:w-auto w-full flex justify-between'>
                                <div className='flex md:hidden gap-3'>
                                    <img src={menulogo} alt="Logo" className='md:cursor-pointer h-12' />
                                    <h1 className='lg:text-3xl text-red-500 font-medium pt-2'>Little Paws</h1>
                                </div>
                                <div className='text-3xl md:hidden' onClick={() => setopen(!open)}>
                                    {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
                                    {open ? <IoClose /> : <IoMenu />}
                                </div>
                            </div>
                            <ul className='md:flex hidden text-white uppercase items-center gap-3 '>
                                <li className='hover:bg-[#F05454]'>
                                    <Link to="/homepage" className='py-2 px-3 inline-block'>
                                        Home
                                    </Link>
                                </li>
                                <Navlinks />
                                <li className='hover:bg-[#F05454]'>
                                    <Link to="/grooming" className='py-2 px-3 inline-block'>
                                        Pet Grooming
                                    </Link>
                                </li>
                                <li className='hover:bg-[#F05454]'>
                                    <Link to="/aboutpage" className='py-2 px-3 inline-block'>
                                        About Us
                                    </Link>
                                </li>
                            </ul>

                            {/* Mobile Responsive */}
                            <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
                            duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                                <li>
                                    <Link to="/" className='py-3 px-3 inline-block'>
                                        Home
                                    </Link>
                                </li>
                                <Navlinks />
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Megamenu;