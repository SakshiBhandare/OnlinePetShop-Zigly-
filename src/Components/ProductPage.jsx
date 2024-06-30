import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Footer from './Footer';
import TopMenu from './TopMenu';
import ViewallProduct from './Product/ViewallProduct';
import { useParams } from 'react-router-dom';
import RoundPagination from './RoundPagination';
import Sortby from '../Components/Sortby';
import Loader from './Loader';
import Megamenu from './Navbar/Megamenu';

const ProductPage = () => {
    let { catgname } = useParams();

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
            <div>
                <Loader />
            </div>
            <div className='grid grid-rows-1'>
                <div className='gap-5'>

                    <div className={isSticky ? 'sticky top-0 z-50' : ''}>
                        <TopMenu />
                    </div>

                    <div className={isSticky ? 'sticky top-20 z-50' : ''}>
                        <Megamenu />
                    </div>

                    <div className='flex gap-4 justify-center'>
                        <div className='grid grid-cols-1 w-[20%]'>
                            <Filter />

                        </div>
                        <div className='grid grid-cols-1 w-[75%]'>
                            <div className='flex justify-between items-center w-full px-4 py-4'>
                                <div className='text-left text-4xl text-red-500 p-3'>
                                    <h1>{catgname}</h1>
                                </div>
                                <div className='justify-end'>
                                    <Sortby />
                                </div>
                            </div>
                            <div >
                                <ViewallProduct />
                            </div>
                        </div>
                    </div>
                    <div className='items-center pt-5'>
                        <RoundPagination />
                    </div>
                    <div className='pt-20'>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};


// text-[#21005b]
export default ProductPage;