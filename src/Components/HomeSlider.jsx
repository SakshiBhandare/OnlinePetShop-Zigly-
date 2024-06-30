import React from 'react';
import useProductmaster from '../../src/APIs/Hooks/useProductmaster';
 import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    const cards = { ...useProductmaster() }

    return (
        <>            
            <Swiper breakpoints={{
                    // When window width is >= 768px (large screens)
                    768: {
                        slidesPerView: 3,
                    },
                    // When window width is < 768px (small screens)
                    0: {
                        slidesPerView: 1,
                    },
                }}
                    spaceBetween={30}
                    navigation={true}

                    autoplay={{
                        delay: 2500, // Adjust the delay as needed (in milliseconds)
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Navigation, Autoplay]}

                >
                    {cards?.productmasterstate?.map((element, index) => {
                        return (
                            <>
                                <SwiperSlide  style={{ backgroundColor: "transparent", display: 'flex', justifyContent: 'center', paddingInline: '40px' }}>
                                    <ProductCard data={element} />
                                </SwiperSlide>
                            </>
                        )
                    })
                    }

                </Swiper>



            
        </>
    );
};

export default HomeSlider;