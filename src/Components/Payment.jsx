import React from 'react';
import PaymentMode from './PaymentMode';
import Total from './Total';
import { MdVerifiedUser } from 'react-icons/md';
import { Stepper, Step, Button } from "@material-tailwind/react";
import zigly from '../Assets/zigly.gif'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, } from "react-icons/io";
import { LiaMoneyBillAlt } from "react-icons/lia";
import Address from './Address';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <>
            <div className='grid grid-rows-1 pt-10'>
                <div className='flex justify-around'>
                    <div className='flex'>
                        <img src={zigly} alt="" className='w-28 h-14 -pt-[3]' onClick={() => {
                            navigate(`/homepage`)
                        }} />
                    </div>
                    <div className="w-[500px] py-4 px-8 ">
                        <Stepper
                            activeStep={activeStep}
                            lineClassName="bg-pink-50"
                            activeLineClassName="bg-pink-500"
                            isLastStep={(value) => setIsLastStep(value)}
                            isFirstStep={(value) => setIsFirstStep(value)}
                        >
                            {/* <Step 
                                onClick={() => setActiveStep(0)}
                                activeClassName="ring-0 !bg-pink-500 text-white"
                                completedClassName="!bg-pink-500 text-white" >
                                <BsCart3 className="h-5 w-5" />
                            </Step> */}
                            <Step
                                onClick={() => setActiveStep(0)}
                                activeClassName="ring-0 !bg-pink-500 text-white"
                                completedClassName="!bg-pink-500 text-white">
                                <IoLocationOutline className="h-5 w-5" />
                            </Step>
                            <Step
                                onClick={() => setActiveStep(1)}
                                activeClassName="ring-0 !bg-pink-500 text-white"
                                completedClassName="!bg-pink-500 text-white">
                                <LiaMoneyBillAlt className="h-5 w-5" />
                            </Step>
                        </Stepper>
                    </div>
                    <div className='flex justify-center'>
                        <MdVerifiedUser className='text-green-500' size={45} />
                        <h1 className='text-xl tracking-widest uppercase pt-2'>100% Secure</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-rows-1'>
                <div className=" flex justify-between px-20">
                    <div onClick={handlePrev} disabled={isFirstStep}>
                        <IoIosArrowRoundBack className='w-10 h-10 text-pink-500' />
                    </div>
                    <div onClick={handleNext} disabled={isLastStep} color='pink'>
                        <IoIosArrowRoundForward className='w-10 h-10 text-pink-500' />
                    </div>
                </div>
            </div>
            <div className='grid grid-rows-1 mx-auto px-16 py-2'>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='pt-5 mx-auto'>
                            {/* {activeStep === 0 && <Cart />} */}
                            {activeStep === 0 && <Address />}
                            {activeStep === 1 && <PaymentMode />}
                        </div>
                        {activeStep === 0 && (
                            <div className='pt-5 object-center px-5' onClick={() => setActiveStep(1)}>
                                <Button color='pink' className='w-[650px]'>Continue</Button>
                            </div>
                        )}
                    </div>
                    <div className='float-right px-5 mx-auto border-l border-pink-100'>
                        <Total />
                        {/* <Cart /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;