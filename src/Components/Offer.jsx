import React from 'react';
import offer1 from '../Assets/offer1.png';
import offer2 from '../Assets/offer2.png';
import offer3 from '../Assets/offer3.png';
import offer4 from '../Assets/offer4.png';
import wave from '../Assets/wave.png';
import leftwave from '../Assets/leftwave.png';


const Offer = () => {
    return (
        <>
            <div className='grid grid-rows-1'>
                <div>
                    <div className='flex gap-3 text-3xl text-[#03396c] font-semibold text-center justify-center py-5'>
                        <div className='items-center pt-1'>
                            <img src={wave} alt="" className='h-4'/>
                        </div>
                        <h1>Best Deals of the Season</h1>
                        <div className='items-center pt-1'>
                            <img src={leftwave} alt="" className='h-4'/>
                        </div>
                    </div>
                    <div className='flex justify-center gap-8 py-5'>
                        <div className='w-72 h-96'>
                            <img src={offer1} alt="" />
                        </div>
                        <div className='w-72 h-96'>
                            <img src={offer2} alt="" />
                        </div>
                        <div className='w-72 h-96'>
                            <img src={offer3} alt="" />
                        </div>
                        <div className='w-72 h-96'>
                            <img src={offer4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offer;