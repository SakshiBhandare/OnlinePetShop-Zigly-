import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategoryall } from '../../app/slices/categorySlice';
import { fetchsubcategoryall } from '../../app/slices/subcategorySlice';

const Navlinks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const { subcategories } = useSelector((state) => state.subcategory);

    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

   


    const includeDropdownFor = ['Dogs', 'Cats', 'Birds', 'Small Pets', 'Toys'];

    return (
        <>
            {
                categories.map(element => (
                    <div key={element.name}>
                        <div className='px-3 text-left md:cursor-pointer group z-10'>
                            <h1 className='py-2 px-1 flex justify-between items-center hover:bg-[#F05454] hover:px-2'
                                onMouseOver={() => { dispatch(fetchsubcategoryall({ catid: element?.catgid })) }}
                                onClick={() => {
                                    // alert(element?.catgid)
                                    // dispatch(fetchsubcategoryall({catid: element?.catgid}))
                                    navigate(`/ProductPage/${element?.catgid}/${element?.catgname}`)

                                }}>
                                {element.catgname}
                                {includeDropdownFor.includes(element.catgname) && (
                                    <span className='text-[15px] md:mt-1 md:ml-2 inline'>
                                        <FaAngleDown />
                                    </span>
                                )}
                            </h1>

                            {includeDropdownFor.includes(element.catgname) && (
                                <div>
                                    <div className='absolute hidden group-hover:block hover:block z-20'>
                                        {/* <div className='py-2'>
                                            <div className='w-4 h-4 left-1 absolute mt-1 bg-[#FFE8E8] rotate-45'></div>
                                        </div> */}
                                        <div className='bg-[#e6ecff] p-4 grid grid-cols-3 justify-center rounded-md gap-10'>
                                            {
                                                subcategories.map((mysublinks) => (
                                                    <div onClick={() => {
                                                        navigate(`/subProductPage/${mysublinks?.subcatid}/${element?.catgid}/${mysublinks?.subcatgname}`)
                                                    }}>
                                                        <h1 className='text-[15px] text-red-500 font-semibold capitalize px-2 py-1 hover:bg-[#ff6666] hover:text-white hover:p-1.5 rounded-md'>{mysublinks?.subcatgname}</h1>
                                                        {/* {mysublinks.sublink.map(slink => (
                                                            <li className='text-sm text-gray-600 capitalize my-2.5'>
                                                                <Link to={slink.link} className='hover:text-indigo-900'>{slink.name}</Link>
                                                            </li>
                                                        ))} */}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        {/* Mobile Responsive */}
                        {/* <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                            {
                                link.sublinks.map((slinks) => (
                                    <div>
                                        <div>
                                            <h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5'
                                            onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading('')}>
                                                {slinks.Head}
                                            </h1>
                                            <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                                {slinks.sublink.map(slink => (
                                                    <li className='py-3 pl-14'>
                                                        <Link to={slink.link}>{slink.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> */}
                    </div>
                ))
            }
        </>
    );
};

export default Navlinks;