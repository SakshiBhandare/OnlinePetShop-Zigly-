import React, { useEffect } from 'react';
import login_pets from '../Assets/login_pets.png';
import { Alert, Card, } from '@material-tailwind/react';
import { Button } from "@material-tailwind/react";
import { IoClose, IoMailOpen } from "react-icons/io5";
import { IoIosUnlock } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Getlogin, HandleLoginChange, HandleLoginValidation, loginUser } from '../app/slices/loginSlice';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Loader from './Loader';

const Login = ({ onClose, switchToSignup }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { login, loginValidation, } = useSelector(state => state.login);

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
            <div style={{ zIndex: "9", position: "absolute", top: "0", left: "50%", transform: "translate(-50%, -50%)", cursor: "pointer", display: loginValidation === true ? "block" : "none" }}>
                <Alert color='indigo' className='w-96' icon={<IoClose className='float-end' onClick={() => { dispatch(HandleLoginValidation(false)) }} />}>{login?.msg}</Alert>
            </div>
            <div className='grid grid-rows-1 justify-center'>
                <Card className="w-96 justify-center">
                    <div className='text-white text-center bg-[#21005bca] overflow-hidden'>
                        <div className='float-end p-2 text-2xl' onClick={onClose}>
                            <IoClose />
                        </div>
                        <h1 className='pt-10 font-bold text-xl'>Hi-Ya Pet Parents!</h1>
                        <h1>Let’s raise healthy and happy pets together.</h1>
                        <img src={login_pets} alt="" className='w-96 h-52 rounded-lg' />
                    </div>
                    <div className="py-2 pt-8 px-5">
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
                                type="password"
                                placeholder="Password" name='paswd'
                                onChange={(e) => { dispatch(HandleLoginChange(e, "")) }}
                                value={login?.paswd || ""}
                            />
                        </div>
                        <div className='float-end text-xs text-indigo-600 font-semibold underline cursor-pointer'>
                            <a href="http://">Forgot Password?</a>
                        </div>
                    </div>
                    <div className='text-center pt-3'>
                        <Button size="md" className='bg-[#21005bca] px-16 items-center' type='button' onClick={() => {
                            dispatch(Getlogin(login))
                        }}>login</Button>
                    </div>
                    <div className='text-center mb-6 text-xs p-2 px-6'>
                        <p>Don't have an account?<span className='font-semibold underline text-indigo-600 cursor-pointer' onClick={switchToSignup} >SignUp</span></p>
                        <p>By continuing, I agree to the Terms of Use and Privacy & Cookie Policy</p>
                    </div>
                    {/* <div className='flex py-5 justify-center gap-4'>
                        <FaFacebook className='text-blue-500 text-4xl' />
                        <FcGoogle className='text-4xl' />
                    </div> */}
                </Card>
            </div>
        </>
    );
};

export default Login;