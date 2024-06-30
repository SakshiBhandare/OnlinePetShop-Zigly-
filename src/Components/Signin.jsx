import React, { useEffect, useState } from 'react';
import Registration from './Registration';
import illustration1 from '../Assets/illustration1.png';
import login_pets from '../Assets/login_pets.png';
import { Button, } from '@material-tailwind/react';
import { IoChevronBackOutline, IoClose } from 'react-icons/io5';
import { IoMailOpen } from 'react-icons/io5';
import { RiUser3Fill } from "react-icons/ri";
import { IoIosUnlock, IoMdClose } from "react-icons/io";
import { Stepper, Step, Alert } from "@material-tailwind/react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GetSignIn, HandleLoginChange, HandleLoginValidation, SendOtpEmail } from '../app/slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';

const Signin = ({ onClose, switchToLogin }) => {

    const [activeStep, setActiveStep] = useState(0);

    const [otp, setOtp] = useState("")

    const dispatch = useDispatch();
    const { login, loginValidation, } = useSelector(state => state.login);

    // Function to handle moving to the next step
    const handleNext = () => {
        if (activeStep < 2) {
            let gotp = Math.floor(Math.random() * (9 * Math.pow(10, 4 - 1))) + Math.pow(10, 4 - 1)
            setOtp(gotp);
            dispatch(SendOtpEmail({ emailid: login?.uemail, otp: gotp }))
            setActiveStep(activeStep + 1);
        }
    };

    useEffect(() => {
        if (login?.sflag === true) {
            handleNext();
        }
    }, [login?.sflag])


    // Function to handle moving to the previous step
    const handlePrev = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };



    useEffect(() => {
        if (loginValidation === true) {


            setTimeout(() => {
                dispatch(HandleLoginValidation(false))
            }, 3000);
        }
    }, [loginValidation])
    return (
        <>
            <div>
                <Loader />
            </div>
            <div style={{ position: "fixed", top: "10%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "999", display: loginValidation === true ? "block" : "none" }}>
                <Alert color='indigo' icon={<IoMdClose onClick={() => { dispatch(HandleLoginValidation(false)) }} />}>{login?.msg}</Alert>
            </div>
            <div className='grid grid-row-1 mx-auto justify-center items-center'>
                <div className='w-full p-5 justify-center'>
                    <div className='float-end p-2 text-2xl' onClick={onClose}>
                        <IoClose />
                    </div>
                    <div className='flex mx-auto grid-cols-2 gap-5 '>
                        <div className=' '>
                            {/* <Registration /> */}
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
                                            // onClick={() => setActiveStep(0)}
                                            >
                                                <div className="absolute -bottom-[2rem] w-max text-center text-xs">
                                                    <p className='text-indigo-200 font-thin'>Create Account</p>
                                                </div>
                                            </Step>
                                            <Step
                                                className={`h-4 w-4 ${activeStep === 1 ? 'bg-indigo-500' : 'bg-gray-200'} text-white/75 cursor-pointer`}
                                                activeClassName="ring-0 !bg-indigo-500 text-white"
                                                completedClassName="!bg-indigo-500 text-white"
                                            // onClick={() => setActiveStep(1)}
                                            >
                                                <div className="absolute -bottom-[2rem] w-max text-center text-xs">
                                                    <p className='text-indigo-200 font-thin'>Verify Otp</p>
                                                </div>
                                            </Step>
                                            <Step
                                                className={`h-4 w-4 ${activeStep === 2 ? 'bg-indigo-500' : 'bg-gray-200'} text-white/75 cursor-pointer`}
                                                activeClassName="ring-0 !bg-indigo-500 text-white"
                                                completedClassName="!bg-indigo-500 text-white"
                                            // onClick={() => setActiveStep(2)}
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
                                                        placeholder="Username" name='uname'
                                                        onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                        value={login?.uname || ""}
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
                                                        placeholder="Email" name='uemail'
                                                        onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                        value={login?.uemail || ""}
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
                                                        placeholder="Password" name='paswd'
                                                        onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                        value={login?.paswd || ""}
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
                                                        placeholder="Confirm Password" name='cpaswd'
                                                        onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                        value={login?.cpaswd || ""}
                                                    />
                                                </div>
                                            </div>
                                            <div className='text-center py-8 '>
                                                <Button size="md" type='button' className='bg-[#21005bca] px-16 items-center' onClick={() => {
                                                    dispatch(GetSignIn(login, false))
                                                }}>continue</Button>
                                                <p className='text-xs pt-1'>Already have an account? <span className='font-semibold underline text-indigo-600 cursor-pointer' onClick={switchToLogin} >LogIn</span></p>
                                                <p className='text-xs px-5'>By continuing, I agree to the Terms of Use and Privacy & Cookie Policy</p>
                                            </div>
                                        </div>
                                    )}

                                    {activeStep === 1 && (
                                        <div>
                                            <div className='justify-start text-indigo-800 text-3xl mt-10' 
                                                onClick={() => setActiveStep(0)}>
                                                 <IoChevronBackOutline />
                                            </div>
                                            <div className='mx-auto'>
                                                <div className=' text-3xl text-center py-12'>
                                                    <h1 className='text-indigo-700'>Verify Otp</h1>
                                                </div>

                                                <div className='flex gap-5 px-10'>
                                                    <div className='py-2'>
                                                        <input maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'
                                                            name='o1'
                                                            onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                            value={login?.o1 || ""}></input>
                                                    </div>
                                                    <div className='py-2'>
                                                        <input maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'
                                                            name='o2'
                                                            onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                            value={login?.o2 || ""}></input>
                                                    </div>
                                                    <div className='py-2'>
                                                        <input maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg  shadow-md'
                                                            name='o3'
                                                            onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                            value={login?.o3 || ""}></input>
                                                    </div>
                                                    <div className='py-2'>
                                                        <input maxLength={1} className='h-16 w-16 outline-indigo-500 border border-indigo-300 text-3xl text-indigo-800 text-center rounded-lg shadow-md'
                                                            name='o4'
                                                            onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                                            value={login?.o4 || ""}></input>
                                                    </div>
                                                </div>
                                                <div className='text-center py-5'>
                                                    <h1>A verification code has been sent to  your email.</h1>
                                                </div>
                                                <div className='bg-[#2a0a62ca] py-2 rounded-lg h-10 w-40 text-center text-white mx-auto'>
                                                    <button className='px-2 ' onClick={() => {
                                                        let sotp = login?.o1 + "" + login?.o2 + "" + login?.o3 + "" + login?.o4;
                                                        if (sotp.toString() === otp.toString()) {
                                                            dispatch(GetSignIn(login, true))
                                                            setTimeout(() => {

                                                            }, 1500);
                                                            setActiveStep(activeStep + 1);
                                                        } else {
                                                            dispatch(HandleLoginValidation(true))
                                                            dispatch(HandleLoginChange("Invalid otp", "msg"))
                                                        }
                                                    }}>Verify</button>
                                                </div>
                                                <div className='text-gray-600 justify-center flex py-5 gap-2'>
                                                    <h1 className='cursor-pointer'>Did not receive the OTP?</h1>
                                                    <h1 className='text-[#513384ca] cursor-pointer underline' onClick={() => {
                                                        let gotp = Math.floor(Math.random() * (9 * Math.pow(10, 6 - 1))) + Math.pow(10, 6 - 1)
                                                        setOtp(gotp);
                                                        dispatch(SendOtpEmail({ emailid: login?.uemail, otp: gotp }))
                                                    }}>Resend the OTP</h1>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeStep === 2 && (
                                        <div className='text-center pt-10'>
                                            <div className='w-full text-center pt-24 ml-40'>
                                                <IoIosCheckmarkCircle className='text-[60px] text-green-400' />
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
                        </div>
                        <div className=''>
                            <div className='text-white text-center justify-center overflow-hidden'>
                                <div className='float-end p-2 text-2xl'>
                                    <IoClose />
                                </div>
                                <h1 className='pt-10 text-5xl font-bold text-center text-indigo-800'>SignIn</h1>
                                <h1 className='pt-1 font-medium text-xs text-[#21005bca] tracking-wider'>Hi-Ya Pet Parents!</h1>
                            </div>
                            <div className='w-[400px] h-96 justify-center items-center'>
                                <img src={illustration1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;