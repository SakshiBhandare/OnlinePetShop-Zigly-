import { Button, Input } from '@material-tailwind/react';
import React from 'react';

const Address = () => {
    return (
        <>
            <div className='grid grid-rows-1 w-[500px] px-6'>
                <div className=''>
                    <div className='py-4'>
                        <h1 className='text-xl text-pink-300 font-medium'>Shipping Address</h1>
                    </div>
                    <div className="flex gap-6 py-1.5">
                        <Input color="purple" label="First Name" className='' />
                        <Input color="purple" label="Last Name" className='' />
                    </div>
                    <div className='py-1.5'>
                        <Input color="purple" label="Phone" />
                    </div>
                    <div className='py-1.5'>
                        <Input color="purple" label="Address" />
                    </div>
                    <div className="flex gap-6 py-1.5">
                        <Input color="purple" label="City" className='' />
                        <Input color="purple" label="State" className='' />
                        <Input color="purple" label="Pincode" className='' />
                    </div>
                    {/* <div className='pt-5 object-center'>
                        <Button color='pink' fullWidth>Continue</Button>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Address;