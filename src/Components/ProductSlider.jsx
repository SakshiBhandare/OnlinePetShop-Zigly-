import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductSlider = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                navigation={true}

                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
            >
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='h-[100%] w-[100%] object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-[${props?.data?.width}] h-[${props?.data?.height}]`}
                        style={{ padding: props?.data?.padding }}
                    >
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;