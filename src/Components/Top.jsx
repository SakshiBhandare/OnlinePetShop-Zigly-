import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getimgurl } from '../MIS/Global';
import { fetchcategoryall } from '../app/slices/categorySlice';
import { useNavigate } from 'react-router-dom';

const Top = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);

    // useEffect(() => {
    //     dispatch(fetchcategoryall({}))
        
    // }, [])

    const displayedCategories = categories?.slice(0, 4);

    return (
        <>
            <div className='flex justify-center gap-14 pt-3'>
            {
                displayedCategories?.map((element, index) => {
                    return (
                        <>
                            <div className='' onClick={() => {
                                navigate(`/ProductPage/${element?.catgid}/${element?.catgname}`)
                            }}>
                                <div className='text-center hover:scale-110 cursor-pointer'>
                                    <img src={`${getimgurl()}${element?.imgpath}`} alt="" className='w-24 h-24' />
                                    <h2 className='text-red-500 font-bold py-3'>{element?.catgname}</h2>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </>
    );
};

export default Top;