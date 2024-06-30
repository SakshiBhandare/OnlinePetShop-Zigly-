import React, { useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Radio, Input, Button, } from "@material-tailwind/react";
import { CiStar } from "react-icons/ci";
import { FaRegMoneyBillAlt, FaGooglePay } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiPhonepe } from "react-icons/si";
import { AiOutlineExclamation } from "react-icons/ai";

const PaymentMode = () => {

    const [activeTab, setActiveTab] = useState("Tab1");
    const [selectedOption, setSelectedOption] = useState(null);

    function handleRadioChange(option) {
        setSelectedOption(option);
    }

    const [captchaText, setCaptchaText] = useState(generateCaptcha());
    const [userInput, setUserInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    function generateCaptcha() {
        // Generate a random string for the CAPTCHA challenge
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 4; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function handleChange(event) {
        const input = event.target.value;
        setUserInput(input);
        setIsValid(input.toLowerCase() === captchaText.toLowerCase());
    }

    function refreshCaptcha() {
        // Refresh the CAPTCHA challenge
        setCaptchaText(generateCaptcha());
        setUserInput('');
        setIsValid(false);
    }


    return (
        <>

            {/* <Tabs value={activeTab} orientation="vertical" onChange={(value) => setActiveTab(value)}>
                <TabsHeader className="w-80">
                    {data.map(({ label, value, icon }) => (
                        <Tab key={value} value={value} className={`place-items-start justify-start h-16 hover:rounded-none ${activeTab === value ? 'bg-white border-l-4 border-pink-200' : ''}`}>
                            <div className="flex gap-2">
                                {React.createElement(icon, { className: "w-5 h-6" })}
                                {label}
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className="py-0">
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs> */}

            <div className='place-content-start pb-5'>
                <h1 className='text-pink-300 text-[20px]'>Choose Payment Mode</h1>
            </div>


            <Tabs value={activeTab} orientation="vertical">
                <TabsHeader
                    className="rounded-none  bg-pink-50 p-0 mx-auto w-80"
                    indicatorProps={{
                        className:
                            "bg-gray-100 border-l-4 border-pink-300 bg-white shadow-none rounded-none",
                    }}
                >
                    <Tab
                        value="Tab1"
                        onClick={() => setActiveTab("Tab1")}
                        className={`h-16 flex place-items-start justify-start border-b border-gray-300 ${activeTab === "Tab1" ? "text-indigo-900" : "text-black"}`}
                    >
                        <div className="flex gap-2">
                            <CiStar className="w-5 h-6" />
                            Recommended
                        </div>
                    </Tab>
                    <Tab
                        value="Tab2"
                        onClick={() => setActiveTab("Tab2")}
                        className={`h-16 flex place-items-start justify-start border-b border-gray-300 ${activeTab === "Tab2" ? "text-indigo-900" : "text-black"}`}
                    >
                        <div className="flex gap-2">
                            <FaRegMoneyBillAlt className="w-5 h-6" />
                            Cash on Delivery (Cash/UPI)
                        </div>
                    </Tab>
                    <Tab
                        value="Tab3"
                        onClick={() => setActiveTab("Tab3")}
                        className={`h-16 flex place-items-start justify-start border-b border-gray-300 ${activeTab === "Tab3" ? "text-indigo-900" : "text-black"}`}
                    >
                        <div className="flex gap-2">
                            <MdQrCodeScanner className="w-5 h-6" />
                            Google Pay/Phone Pay/BHIM UPI
                        </div>
                    </Tab>
                    <Tab
                        value="Tab4"
                        onClick={() => setActiveTab("Tab4")}
                        className={`h-16 flex place-items-start justify-start border-b border-gray-300 ${activeTab === "Tab4" ? "text-indigo-900" : "text-black"}`}
                    >
                        <div className="flex gap-2">
                            <FaRegCreditCard className="w-5 h-6" />
                            Credit Card/Debit Card
                        </div>
                    </Tab>
                </TabsHeader>


                <TabsBody>
                    {activeTab === "Tab1" && (
                        <TabPanel value={activeTab} index="0" className='w-96'>
                            <div>
                                <h1>Recommended Payment Options</h1>
                            </div>
                            <div className='pt-5'>
                                <div className='flex justify-between'>
                                    <Radio color='pink' label="Cash on Delivery (Cash/UPI)" checked={selectedOption === 'cash'} onChange={() => handleRadioChange('cash')} />
                                    <FaRegMoneyBillAlt className="w-10 h-10 rounded-full border border-gray-300 p-2" />
                                </div>

                                {selectedOption === 'cash' && (
                                    <>
                                        <div className='w-80 p-1.5 px-2 bg-gray-200'>
                                            <h1 className='text-[12px]'>₹50 will be charged extra for Cash on Delivery option.</h1>
                                        </div>
                                        <div className='pt-5 flex'>
                                            <div className='w-44 h-16 tracking-widest border border-black flex items-center justify-center'>
                                                {captchaText}
                                            </div>
                                            <div className='h-16 pt-5 px-4'>
                                                <HiOutlineArrowPath className='text-pink-500' size={23} onClick={refreshCaptcha} />
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <form className="mt-4">
                                                <Input color='blue' type="text" value={userInput} onChange={handleChange}
                                                    placeholder="Enter above code*" label="Enter above code*"
                                                    className="border border-gray-300 rounded p-2"
                                                />
                                            </form>
                                            {!isValid && userInput && <p className="text-red-500 text-[12px] mt-2">CAPTCHA Incorrect!</p>}
                                            <p className='text-[12px] text-gray-500 p-2'>You can pay via Cash/UPI on delivery.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button color='pink' className='w-[350px]'>Place Order</Button>
                                        </div>
                                    </>
                                )}

                                <div className='pt-5'>
                                    <div className='flex justify-between'>
                                        <Radio color='pink' label="Google Pay" checked={selectedOption === 'googlePay'} onChange={() => handleRadioChange('googlePay')} />
                                        <FaGooglePay className="w-10 h-10 rounded-full border border-gray-300 p-2" />
                                    </div>
                                    {selectedOption === 'googlePay' && (
                                        <>
                                            <div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="text" placeholder="Enter UPI Id"
                                                        className="w-[90%] text-[14px] p-2 border border-gray-300 rounded-l focus:outline-none"
                                                    />
                                                    <div className="relative w-[38%] text-[14px]">
                                                        <select
                                                            className="block lowercase appearance-none w-full bg-white border border-gray-300 rounded-r px-2 py-2 pr-5 focus:outline-none focus:border-gray-500"
                                                        >
                                                            <option value="okicici">OKICICI</option>
                                                            <option value="okhdfcbank">OKHDFCBank</option>
                                                            <option value="oksbi">OKSBI</option>
                                                            <option value="okaxis">OKAXIS</option>
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                            <RiArrowDownSLine />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='pt-5'>
                                                    <Button color='pink' className='w-[350px]'>Pay Now</Button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className='pt-5'>
                                    <div className='flex justify-between'>
                                        <Radio color='pink' label="PhonePe" checked={selectedOption === 'phonePe'} onChange={() => handleRadioChange('phonePe')} />
                                        <SiPhonepe className="w-10 h-10 rounded-full border border-gray-300 p-2" />
                                    </div>

                                    <div className='pt-5'>
                                        {selectedOption === 'phonePe' && (
                                            <>
                                                <Button color='pink' className='w-[350px]'>Pay Now</Button>
                                            </>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </TabPanel>
                    )}

                    {activeTab === "Tab2" && (
                        <TabPanel value={activeTab} index="1" className='w-96'>
                            <div className='pt-3'>
                                <div className='py-2'>
                                    <h1>Cash on Delivery (Cash/UPI)</h1>
                                </div>

                                <div className='w-80 p-1.5 px-2 bg-gray-200'>
                                    <h1 className='text-[12px]'>₹50 will be charged extra for Cash on Delivery option.</h1>
                                </div>
                                <div className='pt-5 flex'>
                                    <div className='w-44 h-16 tracking-widest border border-black flex items-center justify-center'>
                                        {captchaText}
                                    </div>
                                    <div className='h-16 pt-5 px-4'>
                                        <HiOutlineArrowPath className='text-pink-500' size={23} onClick={refreshCaptcha} />
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <form className="mt-4">
                                        <Input color='blue' type="text" value={userInput} onChange={handleChange}
                                            placeholder="Enter above code*" label="Enter above code*"
                                            className="border border-gray-300 rounded p-2"
                                        />
                                    </form>
                                    {!isValid && userInput && <p className="text-red-500 text-[12px] mt-2">CAPTCHA Incorrect!</p>}
                                    <p className='text-[12px] text-gray-500 p-2'>You can pay via Cash/UPI on delivery.</p>
                                </div>
                                <div className='pt-3'>
                                    <Button color='pink' className='w-[350px]'>Place Order</Button>
                                </div>
                            </div>
                        </TabPanel>
                    )}

                    {activeTab === "Tab3" && (
                        <TabPanel value={activeTab} index="1" className='w-96'>
                            <div className='pt-5'>
                                <div className='flex justify-between'>
                                    <Radio color='pink' label="Google Pay" checked={selectedOption === 'googlePay'} onChange={() => handleRadioChange('googlePay')} />
                                    <FaGooglePay className="w-10 h-10 rounded-full border border-gray-300 p-2" />
                                </div>
                                {selectedOption === 'googlePay' && (
                                    <>
                                        <div>
                                            <div className="flex items-center">
                                                <input
                                                    type="text" placeholder="Enter UPI Id"
                                                    className="w-[90%] text-[14px] p-2 border border-gray-300 rounded-l focus:outline-none"
                                                />
                                                <div className="relative w-[38%] text-[14px]">
                                                    <select
                                                        className="block lowercase appearance-none w-full bg-white border border-gray-300 rounded-r px-2 py-2 pr-5 focus:outline-none focus:border-gray-500"
                                                    >
                                                        <option value="okicici">OKICICI</option>
                                                        <option value="okhdfcbank">OKHDFCBank</option>
                                                        <option value="oksbi">OKSBI</option>
                                                        <option value="okaxis">OKAXIS</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <RiArrowDownSLine />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-5'>
                                                <Button color='pink' className='w-[350px]'>Pay Now</Button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className='pt-5'>
                                <div className='flex justify-between'>
                                    <Radio color='pink' label="PhonePe" checked={selectedOption === 'phonePe'} onChange={() => handleRadioChange('phonePe')} />
                                    <SiPhonepe className="w-10 h-10 rounded-full border border-gray-300 p-2" />
                                </div>
                                <div className='pt-5'>
                                    {selectedOption === 'phonePe' && (
                                        <>
                                            <Button color='pink' className='w-[350px]'>Pay Now</Button>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className='pt-5'>
                                <div className='flex justify-between'>
                                    <Radio color='pink' label="BHIM UPI" checked={selectedOption === 'upi'} onChange={() => handleRadioChange('upi')} />
                                    <MdQrCodeScanner className="w-10 h-10 rounded-full border border-gray-300 p-2" />
                                </div>

                                <div className='pt-5'>
                                    {selectedOption === 'upi' && (
                                        <>
                                            <Input type='text' label='Enter UPI Id' placeholder='Enter UPI Id*' color='indigo' />

                                            <div className='pt-5'>
                                                <Button color='pink' className='w-[350px]'>Pay Now</Button>
                                            </div>
                                        </>
                                    )}
                                </div>

                            </div>
                        </TabPanel>
                    )}


                    {activeTab === "Tab4" && (
                        <TabPanel value={activeTab} index="1" className='w-96'>
                            <div className='pt-3'>
                                <div className='py-2'>
                                    <h1>Credit Card/Debit Card</h1>
                                </div>

                                <div>
                                    <Input label="Card Number" color='blue' icon={<FaRegCreditCard className='text-blue-200' />} />
                                </div>
                                <div className='pt-3'>
                                    <Input label='Name On Card' color='blue' placeholder='John Doe' className='pt-4' />
                                </div>
                                <div className='pt-3'>
                                    <Input label='Valid Thru (MM/YY)' color='blue' className='pt-4' />
                                </div>
                                <div className='pt-3'>
                                    <Input label="CVV" color='blue' className='w-24' icon={<AiOutlineExclamation />} />
                                </div>
                                <div className='pt-5'>
                                    <Button color='pink' className='w-[350px]'>Pay Now</Button>
                                </div>
                            </div>
                        </TabPanel>
                    )}
                </TabsBody>
            </Tabs>


        </>
    );
};

export default PaymentMode;