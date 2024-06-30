import { Card, Button } from '@material-tailwind/react';
import React from 'react';
import { IoIosUnlock } from 'react-icons/io';

const ForgetPass = () => {
    return (
        <>
            <div className='grid grid-rows-1 justify-center'>
                <Card className="w-96 justify-center px-5">
                    <div className='text-center text-indigo-900 text-2xl font-semibold py-4'>
                        <h1>Forget  Password</h1>
                    </div>
                    <div className="py-2 px-5">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <IoIosUnlock className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                            </span>
                            <input
                                className="block w-full pl-10 py-2 outline-indigo-500 border border-indigo-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                type="email"
                                placeholder="New Password"
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
                    <div className='text-center py-3'>
                        <Button size="md" className='bg-[#21005bca] px-16 items-center'>continue</Button>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default ForgetPass;