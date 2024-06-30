import { Button, } from '@material-tailwind/react';
import React, { useState } from 'react';
import { IoMailOpen } from 'react-icons/io5';
import { RiUser3Fill } from "react-icons/ri";
import { IoIosUnlock } from "react-icons/io";
import { Stepper, Step } from "@material-tailwind/react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Registration = ({ switchToLogin }) => {
    // const [activeStep, setActiveStep] = React.useState(0);
    // const [isLastStep, setIsLastStep] = React.useState(false);
    // const [isFirstStep, setIsFirstStep] = React.useState(false);
    // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const [activeStep, setActiveStep] = useState(0);

    // Function to handle moving to the next step
    const handleNext = () => {
        if (activeStep < 2) {
            setActiveStep(activeStep + 1);
        }
    };

    // Function to handle moving to the previous step
    const handlePrev = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };



    return (
        <>
            <div className='grid grid-rows-1 justify-center'>
                <div className="mt-6 w-96 justify-center">
                    <div className="w-full py-4 px-8">
                        <Stepper
                            activeStep={activeStep}
                            lineClassName="bg-indigo-200"
                            activeLineClassName="bg-indigo-500"
                        >
                            <Step
                                className={`h-4 w-4 ${activeStep === 0 ? 'bg-indigo-500' : 'bg-gray-200'} text-white/75 cursor-pointer`}
                                activeClassName="ring-0 !bg-indigo-500 text-white"
                                completedClassName="!bg-indigo-500 text-white"
                                onClick={() => setActiveStep(0)}
                            >
                                <div className="absolute -bottom-[2rem] w-max text-center text-xs">
                                    <p className='text-indigo-200 font-thin'>Create Account</p>
                                </div>
                            </Step>
                            <Step
                                className={`h-4 w-4 ${activeStep === 1 ? 'bg-indigo-500' : 'bg-gray-200'} text-white/75 cursor-pointer`}
                                activeClassName="ring-0 !bg-indigo-500 text-white"
                                completedClassName="!bg-indigo-500 text-white"
                                onClick={() => setActiveStep(1)}
                            >
                                <div className="absolute -bottom-[2rem] w-max text-center text-xs">
                                    <p className='text-indigo-200 font-thin'>Verify Email</p>
                                </div>
                            </Step>
                            <Step
                                className={`h-4 w-4 ${activeStep === 2 ? 'bg-indigo-500' : 'bg-gray-200'} text-white/75 cursor-pointer`}
                                activeClassName="ring-0 !bg-indigo-500 text-white"
                                completedClassName="!bg-indigo-500 text-white"
                                onClick={() => setActiveStep(2)}
                            >
                                <div className="absolute -bottom-[2rem] w-max text-center text-xs">
                                    <p className='text-indigo-200 font-thin'>Successfull</p>
                                </div>
                            </Step>
                        </Stepper>
                    </div>

                    {activeStep === 0 && (
                        <div className='pt-8'>
                            <div className=' text-3xl text-center pt-8'>
                                <h1 className='text-indigo-700'>Create Account</h1>
                            </div>
                            <div className="py-2 pt-6 px-5">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <RiUser3Fill className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    </span>
                                    <input
                                        className="block w-full pl-10 py-2 outline-indigo-500 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        type="email"
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="py-2 px-5">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <IoMailOpen className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    </span>
                                    <input
                                        className="block w-full pl-10 py-2 outline-indigo-500 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="py-2 px-5">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <IoIosUnlock className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    </span>
                                    <input
                                        className="block w-full pl-10 py-2 outline-indigo-500 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        type="email"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="py-2 px-5">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <IoIosUnlock className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    </span>
                                    <input
                                        className="block w-full pl-10 py-2 outline-indigo-500 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        type="email"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>
                            <div className='text-center py-8 '>
                                <Button size="md" className='bg-[#21005bca] px-16 items-center' onClick={handleNext}>continue</Button>
                                <p className='text-xs pt-1'>Already have an account? <span className='font-semibold underline text-indigo-600 cursor-pointer' onClick={switchToLogin} >LogIn</span></p>
                                <p className='text-xs px-5'>By continuing, I agree to the Terms of Use and Privacy & Cookie Policy</p>
                            </div>
                        </div>
                    )}

                    {activeStep === 1 && (
                        <div>
                            <div className='mx-auto'>
                                <div className=' text-3xl text-center py-12'>
                                    <h1 className='text-indigo-700'>Verify Email</h1>
                                </div>

                                <div className='flex gap-5 px-10'>
                                    <div className='py-2'>
                                        <input  maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'></input>
                                    </div>
                                    <div className='py-2'>
                                        <input  maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'></input>
                                    </div>
                                    <div className='py-2'>
                                        <input  maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg  shadow-md'></input>
                                    </div>
                                    <div className='py-2'>
                                        <input  maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'></input>
                                    </div>
                                </div>
                                <div className='text-center py-5'>
                                    <h1>A verification code has been sent to  your email.</h1>
                                </div>
                                <div className='bg-[#2a0a62ca] py-2 rounded-lg h-10 w-40 text-center text-white mx-auto'>
                                    <button className='px-2 ' onClick={handleNext}>Verify</button>
                                </div>
                                <div className='text-gray-600 justify-center flex py-5 gap-2'>
                                    <h1 className='cursor-pointer'>Did not receive the OTP?</h1>
                                    <h1 className='text-[#513384ca] cursor-pointer underline'>Resend the OTP</h1>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className='text-center pt-10'>
                            <div className='w-full text-center pt-24 ml-40'>
                                <IoIosCheckmarkCircle className='text-[60px] text-green-400'/>
                            </div>
                            <p className='text-2xl text-indigo-700'>Thank You !</p>
                            <h1 className='text-[16px] text-indigo-300'>You Have Been Successfully Registered With Us.</h1>
                        </div>
                    )}

                    {/* <div className="pt-5 flex justify-center gap-5">
                        <Button onClick={handlePrev} disabled={isFirstStep} className='bg-[#21005bca] px-12 items-center'>
                            Prev
                        </Button>
                        <Button onClick={handleNext} disabled={isLastStep} className='bg-[#21005bca] px-12 items-center'>
                            Next
                        </Button>
                    </div> */}

                </div>
            </div>
        </>
    );
};

export default Registration;