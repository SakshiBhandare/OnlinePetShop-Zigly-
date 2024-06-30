import { Button, Card } from '@material-tailwind/react';
import React, { useState } from 'react';
import toys from '../Assets/toys.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { calprice } from '../app/slices/productSlice';
import MarqueeTop from '../Components/MarqueeTop';
import TopMenu from './TopMenu';
import Megamenu from '../Components/Navbar/Megamenu';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';

const Wishlist = () => {

    const dispatch = useDispatch();
    const { productall } = useSelector((state) => state.product);
    const { loader } = useSelector(state => state.loader);

    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
        dispatch(calprice(productall, quantity + 1));
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(calprice(productall, quantity - 1));
        }
    };

    return (
        <>
            <div>
                <MarqueeTop />
            </div>
            <div className='p-4'>
                <TopMenu />
            </div>
            <div>
                <Megamenu />
            </div>
            {
                loader === true ?
                    <Loader /> :
                    <div className='grid grid-rows-1'>
                        <div className='grid grid-cols-4 mx-auto gap-5 py-14'>
                            <Card className='w-80 h-auto'>
                                <div className='w-72 h-82 mx-auto'>
                                    <img src={toys} alt="" />
                                </div>
                                <div className='px-3 text-gray-600'>
                                    <h1>Pedigree</h1>
                                </div>
                                <div className='px-3 text-gray-600'>
                                    <h1>Pedigree Chicken & Vegetables Adult Dry Dog Food</h1>
                                </div>
                                <div className='flex px-3 py-3 justify-between'>
                                    <h1 className='text-red-500 font-semibold text-2xl'>₹799</h1>
                                    {/* <div>
                                        <div className="flex items-center p-2">
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
                                    </div> */}
                                </div>
                                <div>
                                    <Button variant='lg' className='bg-[#21005b]' fullWidth>Add to Cart</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
            }

            <div className='grid grid-rows-1'>
                <Footer />
            </div>
        </>
    );
};

export default Wishlist;