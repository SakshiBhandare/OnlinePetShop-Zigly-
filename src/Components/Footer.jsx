import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import googleplay from '../Assets/googleplay.png';
import apple from '../Assets/apple.png';
import { IoMailOpen } from 'react-icons/io5';
import { Button } from '@material-tailwind/react';

const Footer = () => {
    return (
        <>
            <div className='justify-center bg-[#35155D]'>
                <div className='px-20 py-9'>
                    <h1 className='text-red-500 text-2xl font-semibold leading-8'>Hi-Ya Pets Parents !!</h1>
                    <p className='text-white leading-8'>Happy tails all around!  At Pets House, we understand the incredible bond you share with your furry (or feathery!) family. 

                        We offer a wide range of top-quality food, treats, toys, and accessories, all chosen with your pet's well-being in mind.

                        So whether you're a new pet parent or a seasoned pro, we're here to support you every step of the way. Come visit us, and let's shower your pet with all the love and care they deserve!

                        Remember, pets are family. And at Pets House, family always comes first.  #petlove #pawsome.</p>
                </div>
                <div className='grid grid-cols-4 gap-5 px-20'>
                    <div className='justify-center'>
                        <h1 className='text-red-500 text-2xl font-bold'>Shop now</h1>
                        <ul className='text-white leading-8'>
                            <li>Dog</li>
                            <li>Cat</li>
                            <li>Small Animals</li>
                            <li>Birds</li>
                            <li>Deals</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-red-500 text-2xl font-bold'>Online shopping</h1>
                        <ul className='text-white leading-8'>
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                            <li>Return Policy</li>
                            <li>Shipping Policy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-red-500 text-2xl font-bold'>The Petsy Difference</h1>
                        <ul className='leading-8'>
                            <li className='text-white'>Articles</li>
                            <li className='text-white'>Giving Back</li>
                        </ul>

                    </div>
                    <div>
                        <h1 className='text-red-500 text-2xl font-bold'>Get In Touch For Offers</h1>
                        {/* <p className='text-white'>For us it's all about the love for Pets! Subscribe to our Newsletter and receive special promotions and fun content!</p> */}
                        <div className="py-2">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <IoMailOpen className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                                </span>
                                <input
                                    className="block w-72 pl-10 py-2 outline-indigo-500 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className='py-3'>
                                <Button className='bg-red-500'>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-1 px-20 pt-9'>
                    <div className='grid grid-cols-2 justify-around'>
                        <div>
                            <h1 className='text-red-500 text-2xl font-bold'>Follow us</h1>
                            <div className='flex gap-8 pt-4'>
                                <div className='text-3xl text-white'><FaFacebook /></div>
                                <div className='text-3xl text-white'><FaInstagram /></div>
                                <div className='text-3xl text-white'><FaWhatsapp /></div>
                                <div className='text-3xl text-white'><FaYoutube /></div>
                            </div>
                        </div>
                        {/* <div className=''>
                            <h1 className='text-white '>Download The App Now</h1>
                            <div className='flex gap-8'>
                                <img src={googleplay} alt="" className='w-36 h-12' />
                                <img src={apple} alt="" className='w-36 h-11' />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='px-20 py-5 pb-12'>
                    <p className='text-white text-xs' style={{ fontSize: "14px" }}>copyright ©2024 petshouse. Designed by <span className='text-gray-600 font-semibold' style={{ fontSize: "16px" }}>SAKSHI BHANDARE</span></p>
                </div>
            </div>
        </>
    );
};

export default Footer;