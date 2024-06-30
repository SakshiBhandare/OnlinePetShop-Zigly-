import { Input } from '@material-tailwind/react';
import React from 'react';

const Checkout = () => {
    return (
        <>
            <div className='grid grid-rows-1 bg-indigo-50'>
                <div>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='px-5 py-3'>
                            <div>
                                <h1>Personal Details</h1>
                                <div>
                                    <div className="flex gap-6 py-1.5">
                                        <Input color="purple" label="First Name" className='' />
                                        <Input color="purple" label="Last Name" className='' />
                                    </div>
                                    <div className='py-1.5'>
                                        <Input color="purple" label="First Name" />
                                    </div>
                                    <div className="flex gap-6 py-1.5">
                                        <Input color="purple" label="First Name" className='' />
                                        <Input color="purple" label="Last Name" className='' />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1 className='pt-4'>Shipping Details</h1>
                                <div>
                                    <div className='py-1.5'>
                                        <Input color="purple" label="First Name" />
                                    </div>
                                    <div className="flex gap-6 py-1.5">
                                        <Input color="purple" label="First Name" className='' />
                                        <Input color="purple" label="Last Name" className='' />
                                        <Input color="purple" label="Last Name" className='' />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1 className='pt-4'>Payment Details</h1>
                                <div className="flex items-center gap-5 bg-white">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="paymentMethod"
                                        value="paypal"
                                    // Handle radio button change
                                    />
                                    <label htmlFor="paypal" className="ml-2">PayPal</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            col 2
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;