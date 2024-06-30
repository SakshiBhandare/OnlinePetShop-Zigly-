import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getimgurl } from '../MIS/Global';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbannerall } from '../app/slices/bannerSlice';


const AddSlider = () => {
    const dispatch = useDispatch();
    const { banner } = useSelector((state) => state.banner);

    useEffect(() => {
        dispatch(fetchbannerall({}))
        
    }, [])

    return (
        <>  
            <Swiper
                style={{
                    '--swiper-navigation-color': '#4B0082',
                    '--swiper-navigation-background-color': '#fff'
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    banner?.map((element, index) => {
                        return (
                            <>
                                <SwiperSlide key={index} className='text-center'>
                                    <img src={`${getimgurl()}${element?.imgpath}`} alt="" />
                                </SwiperSlide>
                            </>
                        )
                    })
                }

            </Swiper>
        </>
    );
};

export default AddSlider;