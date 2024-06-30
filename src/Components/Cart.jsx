import { Button, Drawer, IconButton, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { CiDiscount1 } from "react-icons/ci";
import food from '../Assets/food.jpg';
import { RxDividerVertical } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { TiTick } from "react-icons/ti";


const Cart = () => {
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    //QuantityBox
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const items = useSelector(state => state)
    console.log('Items', quantity)

    return (
        <>
            <div className='grid grid-row-1 float-end w-96'>
                {/* <div>
                    <Button onClick={openDrawerRight}>Open Drawer Right</Button>
                </div>
                <Drawer
                    placement="right"
                    open={openRight}
                    onClose={closeDrawerRight}
                    className="w-1/4"
                > */}
                    <div className='fixed top-3 p-2'>
                        <div className="grid grid-cols-2 mb-6">
                            <IoIosArrowRoundBack className='size-8 ' onClick={closeDrawerRight} />
                            <Typography className='text-xl text-indigo-900'>1 Items</Typography>
                        </div>
                    
                        <div className='border-b border-indigo-900 px-2 overflow-auto'>
                            <div>
                                <div className='grid grid-cols-4'>
                                    <div className=''>
                                        <img src={food} alt="" />
                                    </div>
                                    <div className='grid col-span-2 text-indigo-900 font-light'>
                                        <h3 style={{ fontSize: '15px'}}>Lorem ipsum dolor sit amet.</h3>
                                        <h1>500gm</h1>
                                    </div>
                                    <div className='px-2 flex'>
                                        <RxDividerVertical className='size-6' />
                                        <RiDeleteBin6Line className='size-6' />
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-3'>
                                <div className='flex gap-4 py-2 col-span-2'>
                                    <h1 className='text-indigo-900 pt-2'>Quantity -</h1>
                                    <div>
                                        <div className="flex items-center ">
                                            <button
                                                className="px-2 py-1 border-t border-b border-l border-gray-500 text-black rounded-l focus:outline-none"
                                                onClick={handleDecrement}
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-1 bg-white  border-gray-500 border-t border-b hover:outline-gray-500">{quantity}</span>
                                            <button
                                                className="px-2 py-1 border-t border-b border-r border-gray-500 text-black rounded-r focus:outline-none"
                                                onClick={handleIncrement}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-4 text-center text-indigo-900 font-semibold'>
                                    <h1>₹230.00</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='fixed top-2/4 bottom-10 bg-red-50 shadow-md shadow-red-800'>
                        <div className='flex justify-between px-2 pt-2 text-indigo-900'>
                            <div>
                                <h1>Discount :</h1>
                            </div>
                            <div>
                                <h1>₹0.00</h1>
                            </div>
                        </div>
                        <div className='flex justify-between px-2 text-indigo-900'>
                            <div>
                                <h1>Total Amount :</h1>
                            </div>
                            <div>
                                <h1>₹230.00</h1>
                            </div>
                        </div>
                        {/* <div className='py-2 px-2 '>
                            <h1 className='px-2 text-indigo-900 font-semibold'>Have a Coupon Code ?</h1>
                            <div className="p-2 flex">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="w-full h-10 outline-indigo-900 px-2"
                                />
                                <Button color="indigo" size="md" className=" float-right">
                                    Apply
                                </Button>
                            </div>
                        </div> */}
                        {/* <div className='w-64 bg-white shadow py-3 mx-auto'>
                            <div className='px-2 flex gap-16'>
                                <div className='flex gap-3'>
                                    <CiDiscount1 className='size-6 text-red-500' />
                                    <div className='text-xs '>
                                        <h1>FLAT5</h1>
                                        <p>(Extra 5% off)</p>
                                    </div>
                                </div>
                                <div className='text-indigo-900 font-bold'>
                                    APPLY
                                </div>
                            </div>
                        </div> */}
                    </div>


                    <div className="fixed bottom-0 bg-white">
                        <Button fullWidth className='w-80 rounded-none' color="indigo" size='lg'>
                            Checkout
                        </Button>
                    </div>

                {/* </Drawer> */}
            </div>

            
        </>
    );
};

export default Cart;