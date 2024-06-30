import React from 'react';
import { RxDividerVertical } from "react-icons/rx";

const MarqueeTop = () => {
    return (
        <>
            <div className='grid grid-rows-1 bg-[#35155D]'>
                <div className='flex p-2.5'>
                    <div className='w-[65%] py-1'>
                        <marquee behavior="" direction="left" className="text-white">High demand alert! Orders sparkling in queues. Please expect slight delays. Grateful for your understanding!</marquee>
                    </div>
                    <div className='flex w-[35%] justify-center py-1 gap-2'>
                        <h1 className="text-gray-200">Customer Support: 9876543210</h1>
                        <RxDividerVertical className="text-gray-200 text-2xl"/>
                        <h1 className="text-gray-200">Time: 9:30AM to 7:00 PM</h1>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default MarqueeTop;