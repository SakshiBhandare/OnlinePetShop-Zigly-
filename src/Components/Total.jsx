import { Alert, Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiDeleteBin6Line } from 'react-icons/ri';
import food from '../Assets/food.jpg';
import style from '../Components/total.module.css';
import { DeleteProductCart, GetProductCart } from '../app/slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getimgurl } from '../MIS/Global';
import { HandleLoginValidation } from '../app/slices/loginSlice';
import { IoClose } from 'react-icons/io5';

const Total = () => {

    const [quantity, setQuantity] = useState(1);
    const [ sumMrp , setsumMrp] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const { cart } = useSelector(state => state.cart);
    const { login, loginValidation, } = useSelector(state => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProductCart({ loginid: localStorage.getItem("loginid") }))
    }, [])

    useEffect(() => {
        let sum=0;
        cart.forEach(element => {
            sum = Number(sum)+Number(element?.vfprice || element?.fprice);
        });
        setsumMrp(sum.toFixed(2));
    }, [cart])

    // setsumMrp(Number(sumMrp) + Number(item.vfprice || item.fprice))


    useEffect(() => {
        if (loginValidation === true) {


            setTimeout(() => {
                dispatch(HandleLoginValidation(false))
            }, 3000);
        }
    }, [loginValidation])

    return (
        <>

            {/* <div className='grid grid-rows-1'>
                <div>
                    <div className='text-pink-300 py-2'>
                        <h1>Estimated Delivery Date</h1>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-14 h-16'>
                            <img src={food} alt="" />
                        </div>
                        <div className='items-center text-[13px] pt-4'>
                            <h1>Estimated delivery by <span className='font-bold'>31 Mar 2024</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-rows-1 w-80 pt-10 '>
                <div className=''>
                    <div className=''>
                        <h1 className='font-bold py-2 text-xl text-pink-300'>PRICE DETAILS <span className='text-pink-200 text-[15px]'>(1 Items)</span></h1>
                    </div>
                    <div className='flex justify-between py-2 text-black'>
                        <h1 className=''>TOTAL MRP</h1>
                        <h1 className='flex'><FaIndianRupeeSign className='pt-1 size-5' />160</h1>
                    </div>
                    <div className='flex justify-between py-2 text-black'>
                        <h1 className=''>DISCOUNT ON MRP</h1>
                        <h1 className='flex'>-<FaIndianRupeeSign className='pt-1 size-5' />74</h1>
                    </div>
                    <div className='flex justify-between py-2 border-b border-gray-500 '>
                        <h1 className='text-black'>SHIPPING FREE</h1>
                        <h1 className='flex text-green-900 font-semibold'>FREE</h1>
                    </div>
                    <div className='flex justify-between py-2 text-pink-300'>
                        <h1>TOTAL AMOUNT</h1>
                        <h1 className='flex'><FaIndianRupeeSign className='pt-1 size-5' />103</h1>
                    </div>
                    <div className='pt-5'>
                        <Button color='pink' className='w-[350px]'>Continue</Button>
                    </div>
                </div>
            </div> */}

            <div className='grid grid-rows-1 w-96'>
                <div>
                    <div style={{ zIndex: "999", position: "absolute", top: "10%", left: "50%", transform: "translate(-50%, -50%)", cursor: "pointer", display: loginValidation === true ? "block" : "none" }}>
                        <Alert color='indigo' className='w-96' icon={<IoClose className='float-end' onClick={() => { dispatch(HandleLoginValidation(false)) }} />}>{login?.msg}</Alert>
                    </div>
                    <div className='text-center pb-3 text-xl text-pink-500'>
                        <h1>{cart.length} Items in Cart</h1>
                    </div>
                    <div className='overflow-y-auto overflow-hidden max-h-72 scrollbar'>
                        {cart.map((item, index) => {
                            // setsumMrp(Number(sumMrp) + Number(item.vfprice || item.fprice))
                            return (
                                <>
                            <div className='flex gap-3 py-2 border-b border-pink-100' >
                                <div className='w-32'>
                                    <img src={`${getimgurl()}${item?.imgpath}`} alt="" />
                                </div>
                                <div className='items-center text-[13px]'>
                                    <h1>{item?.pdesc}</h1>
                                    <div className='flex justify-between'>
                                        <div className='text-xl text-pink-500 font-semibold pt-2'>
                                            <h1>₹{Number( Number(item?.qty) * Number(item?.vfprice || item?.fprice)).toFixed(2)}</h1>
                                        </div>
                                        <div className='flex gap-4 py-2 col-span-2'>
                                            <div>
                                                <div className="flex items-center ">
                                                    <button
                                                        className="px-2 py-1 border-t border-b border-l border-gray-500 text-black rounded-l focus:outline-none"
                                                        onClick={handleDecrement}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-1 bg-white  border-gray-500 border-t border-b hover:outline-gray-500">{item.qty}</span>
                                                    <button
                                                        className="px-2 py-1 border-t border-b border-r border-gray-500 text-black rounded-r focus:outline-none"
                                                        onClick={handleIncrement}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2' onClick={() => {
                                    dispatch(DeleteProductCart({loginid : localStorage.getItem("loginid"), cartid: item.cartid}))
                                }}>
                                    <RiDeleteBin6Line className='size-6 text-gray-600' />
                                </div>
                            </div>
                            </>
                        )})}
                    </div>
                    <div className='grid grid-rows-1 w-96 fixed bottom-14'>
                        <div className='py-2'>
                            <div className=''>
                                <h1 className='font-bold py-2 text-xl text-pink-300'>PRICE DETAILS <span className='text-pink-200 text-[15px]'>(1 Items)</span></h1>
                            </div>
                            <div className='flex justify-between py-1 text-black'>
                                <h1 className='text-[14px]'>TOTAL MRP</h1>
                                <h1 className='flex'><FaIndianRupeeSign className='pt-1 size-5' />{sumMrp}</h1>
                            </div>
                            <div className='flex justify-between py-1 text-black'>
                                <h1 className='text-[14px]'>DISCOUNT ON MRP</h1>
                                <h1 className='flex'>-<FaIndianRupeeSign className='pt-1 size-5' />0</h1>
                            </div>
                            <div className='flex justify-between py-1 border-b border-gray-500 '>
                                <h1 className='text-black text-[14px]'>SHIPPING FREE</h1>
                                <h1 className='flex text-[14px] text-green-900 font-semibold'>FREE</h1>
                            </div>
                            <div className='flex justify-between py-2 text-pink-300'>
                                <h1>TOTAL AMOUNT</h1>
                                <h1 className='flex'><FaIndianRupeeSign className='pt-1 size-5' />{sumMrp}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 bg-white justify-between">
                        <Button fullWidth className='w-96 rounded-none' color="pink" size='lg'>
                            Place order
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Total;