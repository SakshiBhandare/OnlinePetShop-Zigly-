import { Button, Card, CardBody, CardFooter, CardHeader, Rating, Typography } from '@material-tailwind/react';
import { BiFoodTag } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import React from 'react';
import useProductmaster from '../../src/APIs/Hooks/useProductmaster';
import { getimgurl } from '../MIS/Global';


const ProductCard = (props) => {
    const cards = { ...useProductmaster() }

    return (
        <>
            <div className='flex gap-8'> {/*pt-10*/}
                {
                    cards?.productmasterstate.map((element, index) => {
                        return (
                            <>
                                <Card className="mt-6 w-80">
                                    <div>
                                        <div className='mx-auto w-80'>
                                            <img src={`${getimgurl()}${element?.imgpath}`} alt="" />
                                        </div>
                                        <div className='flex justify-between px-3'>
                                            <div className='flex'>
                                                <FaStar className='text-yellow-700 text-xl' />
                                                <h2>4.7</h2>
                                            </div>
                                            <BiFoodTag className='text-red-500 text-2xl' />
                                        </div>
                                    </div>
                                    <div className='px-3'>
                                        <h2>{element?.pname}</h2>
                                        <h3 className='truncate-2-lines'>{element?.pdesc}</h3>
                                    </div>
                                    <div className='flex gap-3 px-3 py-2'>
                                        <del><p className='text-xs'>₹{element?.mrp}</p></del>
                                        <p className='text-indigo-900 text-2xl font-bold'>₹{element?.fprice}</p>
                                        <h2 className='text-red-700 font-bold pt-1'>({element?.pdiscount}% OFF)</h2>
                                    </div>
                                    <div className='flex gap-4 px-3'>
                                        <Button variant="outlined" className='p-2'>2.8kg</Button>
                                        <Button variant="outlined" className='p-2'>5.5kg</Button>
                                    </div>
                                    <div className='pt-5 py-4 text-center flex px-3'>
                                        <Button className='bg-[#3d187e] h-10 w-auto py-2 mx-2'>Add To Cart</Button>
                                        <Button className='bg-[#feb204] h-10 w-auto py-2 px-9 mx-2'>Buy Now</Button>
                                    </div>

                                </Card>
                            </>
                        )
                    })
                }

            </div>


        </>
    );
};

export default ProductCard;