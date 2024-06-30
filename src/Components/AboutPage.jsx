import React, { useEffect, useState } from 'react';
import About from './About';
import Footer from './Footer';
import TopMenu from './TopMenu';
import Megamenu from './Navbar/Megamenu';

const AboutPage = () => {

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
            <div className='grid grid-rows-1'>
                <div>
                <div className={isSticky ? 'sticky top-0 z-50' : ''}>
                        <TopMenu />
                    </div>

                    <div className={isSticky ? 'sticky top-20 z-50' : ''}>
                        <Megamenu />
                    </div>
                    <div>
                        <About />
                    </div>

                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;