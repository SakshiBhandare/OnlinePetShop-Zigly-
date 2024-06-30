import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';

const ProductSliderTop = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'blue',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={1}
                 modules={[FreeMode]}

            >
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}                     
                    style={{height:props?.data?.height}}


                    >
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='h-[100%] w-[100%] object-cover'   />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}]`}
                     style={{height:props?.data?.height}}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" className='h-[100%] w-[100%] object-cover'/>
                    </div>
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default ProductSliderTop;