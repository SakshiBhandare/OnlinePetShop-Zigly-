import { Badge, Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { MdOutlinePets } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import zigly from '../Assets/zigly.gif';
import Login from './Login';
import { fetchcategoryall } from '../app/slices/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import Registration from './Registration';
import Signin from './Signin';
import { HandleClearLogin, HandleLoginChange, HandleLoginValidation } from '../app/slices/loginSlice';

const TopMenu = () => {
    const dispatch = useDispatch();
    //LoginModal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true); //!open

    const [searchStr, setsearchStr] = useState(""); //For Search Input in the top
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true); //To toggle login & signin
    const switchToLogin = () => setIsLogin(true);
    const switchToSignup = () => setIsLogin(false);
    const { login, loginValidation, } = useSelector(state => state.login);
    useEffect(() => {
        if (login?.islogin === true) {
            handleClose()
        }
    }, [login?.islogin])


    const handleClose = () => {
        setOpen(false); // Close the dialog
    };



    useEffect(() => {
        dispatch(fetchcategoryall({}))

    }, [])

    return (
        <>
            <div className='grid grid-rows-1 bg-white py-3'>
                <div className='flex justify-around '>
                    <div className='flex gap-3 pt-3'>
                        <div className='flex'>
                            <img src={zigly} alt="" className='w-28 h-14 -pt-[3]' onClick={() => {
                                navigate(`/homepage`)
                            }} />
                        </div>
                        <div className="relative w-96">
                            <input type="text" placeholder="Type to search..." className="border border-gray-300 bg-white w-96 h-10 px-5 pr-10 rounded-full text-sm focus:outline-indigo-500 outline-indigo-500"
                                onChange={(e) => { setsearchStr(e.target.value) }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        navigate(`/products/${searchStr}`)
                                    }
                                }} />
                            <button type="button"
                                onClick={(e) => { navigate(`/products/${searchStr}`) }}
                                className="absolute right-0 top-0 mt-3 mr-4">
                                <IoSearchOutline className='' />
                            </button>
                            {/* {searchStr && products.length === 0 && (
                                <p className="text-red-500 mt-2">No such product found. Please try something else.</p>
                            )} */}
                        </div>
                    </div>

                    <div className='flex gap-12 pt-4'>
                        <div>
                            <IoHeartSharp size={33} className='text-red-500 cursor-pointer'
                                onClick={() => {
                                    navigate(`/wishlist`)
                                }} />
                        </div>
                        <div>
                            <Badge color="red">
                                <IoCartOutline size={33} className='text-gray-500 cursor-pointer'
                                    onClick={() => {
                                        if (localStorage.getItem("loginid") == null || localStorage.getItem("loginid") == undefined) {
                                            dispatch(HandleLoginValidation(true));
                                            dispatch(HandleLoginChange("Please Login First", "msg"))
                                        } else {
                                            navigate(`/payment`)
                                        }

                                    }} />
                            </Badge>
                        </div>


                        <div className='flex gap-3 py-1 cursor-pointer'>
                            <FaRegUser size={25} className='text-gray-500' onClick={handleOpen} />
                            {localStorage.getItem("loginid") == null || localStorage.getItem("loginid") == undefined ? (
                                <h1 className='text-xl text-gray-500' onClick={() => {
                                    dispatch(HandleClearLogin({}));
                                    handleOpen()
                                }}>LogIn</h1>) : (
                                <h1 className='text-xl text-gray-500' onClick={() => {
                                    localStorage.removeItem("loginid")
                                    window.location.reload();
                                }}>Logout</h1>
                            )}

                            <Dialog open={open} handler={handleClose} size={isLogin ? 'xs' : 'lg'}>
                                {isLogin ? (
                                    <Login onClose={handleClose} switchToSignup={switchToSignup} />
                                ) : (
                                    <Signin onClose={handleClose} switchToLogin={switchToLogin} />
                                )}
                            </Dialog>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default TopMenu;