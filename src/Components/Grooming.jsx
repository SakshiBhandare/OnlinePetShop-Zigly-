import React from 'react';
import groom1 from '../Assets/groom1.png';
import groom2 from '../Assets/groom2.png';
import groom3 from '../Assets/groom3.png';
import groom4 from '../Assets/groom4.png';
import { Button } from '@material-tailwind/react';
import { FaArrowRightLong, FaQuoteLeft } from 'react-icons/fa6';
import wave from '../Assets/wave.png';
import leftwave from '../Assets/leftwave.png';
import bg1 from '../Assets/bg1.jpg';
import bg2 from '../Assets/bg2.jpg';
import bg3 from '../Assets/bg3.jpg';
import bg4 from '../Assets/bg4.jpg';
import { GoClock } from "react-icons/go";
import { TiHeart } from "react-icons/ti";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import TopMenu from './TopMenu';
import Footer from './Footer';
import Megamenu from './Navbar/Megamenu';


const Grooming = () => {
    const [activeTab, setActiveTab] = React.useState("ESSENTIALS PACKAGE");
    const data = [
        {
            bg: bg1,
            name: "ESSENTIALS PACKAGE",
            price: "1,099.00",
            time: "75",
            points: ["Bath And Blow Dry", "Cleaning Package"],
            desc: `Upon assessing your dog’s skin & coat our groomers use suitable products, ensuring that it leaves with a clean coat & ears, and trimmed paws.`,
        },
        {
            bg: bg2,
            name: "ALL IN ONE PACKAGE",
            price: "1,799.00",
            time: "120",
            points: ["Bath And Blow Dry", "Cleaning Package", "Hair Cut", "Face and Feet Trim"],
            desc: `In addition to the basic grooming our professional groomers trim and style your fur buddy’s hair to keep it camera ready, always!`,
        },
        {
            bg: bg3,
            name: "TICK AND FLEA CONTROL",
            price: "1,199.00",
            time: "50",
            points: ["Anti Tick Treatment"],
            desc: `Our groomers thoroughly check your pooch’s coat, removing the ticks/fleas manually and end the session with a medicated bath !!`,
        },
        {
            bg: bg4,
            name: "CUSTOMIZED PACKAGE",
            price: "0.00",
            time: "--",
            points: ["Bath And Blow Dry", "Dematting", "Hair Cut", "Cleaning Package"],
            desc: `Upon assessing your dog’s skin & coat our groomers use suitable products, ensuring that it leaves with a clean coat & ears, and trimmed paws.`,
        },
    ];

    return (
        <>
            <div className='grid grid-rows-1 p-5'>
                <TopMenu />
            </div>
            <div className='grid grid-rows-1'>
                <Megamenu />
            </div>
            <div className='grid grid-rows-1'>
                <div>
                    <div className='text-center pt-10'>
                        <h1 className='text-3xl tracking-wide text-[#005b96]'>Best-in-class Grooming Services</h1>
                        <p className='text-2xl tracking-widest text-[#005b96] font-thin'>because we know your pet deserves the best</p>
                    </div>
                    <div className='justify-center'>
                        <div className='flex justify-center px-20 gap-10 py-8 bg-[#b9ddf3] my-10'>
                            <div className='text-center'>
                                <div className='h-80'>
                                    <img src={groom1} alt="" />
                                </div>
                                <h3 className='text-[#005b96] font-semibold'>Breed-Specific-Haircuts</h3>
                                <p className='text-[#7f8c94]'>Zigly certified and trained groomers for your little companions.</p>
                            </div>
                            <div className='text-center'>
                                <div className='h-80'>
                                    <img src={groom2} alt="" />
                                </div>
                                <h3 className='text-[#005b96] font-semibold'>Grooming Experts</h3>
                                <p className='text-[#7f8c94]'>Zigly certified and trained groomers for your little companions.</p>
                            </div>
                            <div className='text-center'>
                                <div className='h-80'>
                                    <img src={groom3} alt="" />
                                </div>
                                <h3 className='text-[#005b96] font-semibold'>Quality-Products</h3>
                                <p className='text-[#7f8c94]'>A wide variety of tested products to ensure best care.</p>
                            </div>
                            <div className='text-center'>
                                <div className='h-80'>
                                    <img src={groom4} alt="" />
                                </div>
                                <h3 className='text-[#005b96] font-semibold'>Modern Saloon</h3>
                                <p className='text-[#7f8c94]'>State-of-the-art-services that all your pet grooming needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-10'>
                        <div className='flex gap-3 text-3xl text-[#03396c] font-semibold text-center justify-center py-5'>
                            <div className='items-center pt-1'>
                                <img src={wave} alt="" className='h-4' />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-3xl tracking-wide text-[#005b96]'>Explore Our Packs</h1>
                            </div>
                            <div className='items-center pt-1'>
                                <img src={leftwave} alt="" className='h-4' />
                            </div>
                        </div>
                        <div className='px-28'>
                            <Tabs value={activeTab}>
                                <TabsHeader
                                    className="rounded-none bg-transparent p-0 w-[70%] mx-auto"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-yellow-600 shadow-none rounded-none",
                                    }}
                                >
                                    {data.map(({ name }) => (
                                        <Tab
                                            key={name}
                                            value={name}
                                            onClick={() => setActiveTab(name)}
                                            className={activeTab === name ? "text-gray-800 " : "text-gray-400"}
                                        >
                                            {name}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                {
                                    data.map((element) => {
                                        return (
                                            <>
                                                <TabPanel key={element.name}
                                                    value={element.name}
                                                    onClick={() => setActiveTab(element.name)}
                                                    className={activeTab === element.name ? "text-gray-900" : "hidden"} >
                                                    <div className="bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${element?.bg})` }}>
                                                        <div className='grid grid-cols-1 w-[500px] float-right pt-5'>
                                                            <div className='flex justify-between pt-4'>
                                                                <div>
                                                                    <p className='text-[#03396c] text-xs'>*Prices may vary as per the breed.</p>
                                                                    <h1 className='text-[#03396c] tracking-wider py-2.5 font-medium text-[25px]'>{element?.name}</h1>
                                                                </div>
                                                                <div className='pr-14'>
                                                                    <h1>₹{element?.price}/-</h1>
                                                                    <div className='flex font-semibold'>
                                                                        <GoClock size={20} className='pt-1' />
                                                                        <h1>{element?.time} Mins</h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=''>
                                                                <h1 className='text-[#b7bbbd]'>What's Included ?</h1>
                                                                <ul className='space-y-1 py-3 text-[#03396c]'>
                                                                    {element.points.map((point, index) => (
                                                                        <li key={index} className='flex gap-2'>
                                                                            <TiHeart className='pt-1' size={20} />
                                                                            {point}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className=' pt-8'>
                                                                <div className='text-[#b7bbbd]'>
                                                                    <FaQuoteLeft size={40} />
                                                                </div>
                                                                <p className='text-[#03396c] py-3 w-[450px] text-justify'>{element?.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel >
                                            </>
                                        )
                                    })
                                }
                            </Tabs>
                        </div>
                        <div className='flex justify-center py-10'>
                            <Button className='flex gap-3 bg-[#0a3b5c] text-[16px] rounded-full p-4 px-12'>For More Visit Our Store <FaArrowRightLong className='text-[25px]' /></Button>
                        </div>
                    </div>
                </div>

                <div>
                    <Footer />
                </div>
            </div >
        </>
    );
};

export default Grooming;