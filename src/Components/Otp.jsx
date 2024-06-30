import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { Spinner } from "@material-tailwind/react";

const Otp = () => {
    return (
        <div className='grid grid-rows-1 py-40'>
            <div className='card shadow-2xl mx-auto rounded-xl '>
                
                <div className='float-end p-3'>
                    <RxCross2 className='text-2xl text-indigo-600'/>
                </div>
                <div className=' text-3xl text-center py-12'>
                    <h1 className='text-indigo-700'>Verify Email</h1>
                </div>
                
                <div className='flex gap-5 px-10'>
                    <div className='py-2'>
                        <input className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'></input>
                    </div>
                    <div className='py-2'>
                        <input className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'></input>
                    </div>
                    <div className='py-2'>
                        <input className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg  shadow-md'></input>
                    </div>
                    <div className='py-2'>
                        <input className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'></input>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <h1>A verification code has been sent to  your email.</h1>
                </div>
                <div className='bg-[#2a0a62ca] py-2 rounded-lg h-10 w-40 text-center text-white mx-auto'>
                    <button className='px-2 '>Verify</button>
                </div>
                <div className='text-gray-600 justify-center flex py-5 gap-2'>
                    <h1 className='cursor-pointer'>Did not receive the OTP?</h1>
                    <h1 className='text-[#513384ca] cursor-pointer underline'>Resend the OTP</h1>
                </div>
            </div>

        </div>
    );
};

export default Otp;