import React, { useEffect, useState } from 'react';
import Top from './Top';
import AddSlider from './AddSlider';
import TopMenu from './TopMenu';
import MarqueeTop from './MarqueeTop';
import Footer from './Footer';
import About from './About';
import BestSeller from './BestSeller';
import features from '../Assets/features.jpg';
import homevideo from '../Assets/homevideo.mp4';
import footer1 from '../Assets/footer1.webp';
import footer2 from '../Assets/footer2.webp';
import Megamenu from './Navbar/Megamenu';
import style from '../Components/total.module.css';

const HomePage = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className='grid grid-rows-1 gap-3'>
                <MarqueeTop />
            </div>
            <div className={ isSticky ? 'sticky top-0 z-50' : ''}>
                <TopMenu />
            </div>
            <div className={isSticky ? 'sticky top-20 z-50' : ''}>
                <Megamenu />
            </div>
            <div>
                <Top />
            </div>
            <div>
                <AddSlider />
            </div>
            <div className='mx-auto w-[80%] pt-6'>
                <div className='mx-auto'>
                    <BestSeller />
                </div>
            </div>
            <div>
                <About />
            </div>
            <div className='px-10 py-4'>
                <video className="h-96 w-screen rounded-lg" autoPlay loop controls>
                    <source src={homevideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='py-4 px-20'>
                <img src={footer1} alt="" />
            </div>
            <div className='py-4 px-20'>
                <img src={footer2} alt="" />
            </div>
            <div className='py-4'>
                <img src={features} alt="" />
            </div>
            <div className='pt-10'>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;