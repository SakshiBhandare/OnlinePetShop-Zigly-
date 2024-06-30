import React, { useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Checkbox, Spinner, Button, usePrevious, Icon } from "@material-tailwind/react";
import { VscFilter } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategoryall } from '../app/slices/categorySlice';
import { fetchsubcategoryall } from '../app/slices/subcategorySlice';
import { fetchbrandall } from '../app/slices/brandSlice';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { Slider } from "@material-tailwind/react";
import { RelFilter } from '../app/slices/productSlice';

function FilterIcon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const Filter = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const { subcategories } = useSelector((state) => state.subcategory);
    const { brand } = useSelector((state) => state.brands);
    const { productallorg, minmaxprice } = useSelector((state) => state.product);


    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const [sliderValue, setSliderValue] = useState(minmaxprice?.min);
    const handleSliderChange = (event) => {
        // alert(event.target.value);
        const newvalue = Number(event.target.value);
        let x = Number(newvalue)/Number(minmaxprice.max)
        x = Number(x)*100;
        x = Number(x).toFixed()
        setSliderValue(newvalue)
    };

    const handleApplyFilter= () => {
        dispatch((RelFilter(productallorg, 3, {min: sliderValue, max: minmaxprice.max})));

    }

    
    return (
        <div className='mt-6'>
            <div className='flex justify-between'>
                <div>
                    <VscFilter size={20} />
                </div>
                <div>
                    <Button size="sm" color='indigo' type='button' onClick={(e) => {handleApplyFilter()}}>Apply</Button>
                </div>
            </div>
            <Accordion open={open === 1} icon={<FilterIcon id={1} open={open} />}>
                <AccordionHeader onClick={(e) => {
                    handleOpen(1);
                    categories.length <= 0 ? dispatch(fetchcategoryall({}))
                        : e.preventDefault()
                }} className="text-lg text-black font-thin px-3" >Category</AccordionHeader>
                <AccordionBody>
                    {
                        categories.length <= 0 ?
                            <Spinner className='mx-auto' /> :
                            categories?.map((element, index) => {
                                return (
                                    <>
                                        <div className="flex flex-col">
                                            <Checkbox name="type" label={`${element?.catgname}`} color="indigo" />
                                        </div>
                                    </>
                                )
                            })
                    }

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<FilterIcon id={2} open={open} />}>
                <AccordionHeader className="text-lg text-black font-thin px-3" onClick={(e) => {
                    handleOpen(2);
                    subcategories.length <= 0 ? dispatch(fetchsubcategoryall({}))
                        : e.preventDefault()
                }}
                >
                    Food Type
                </AccordionHeader>
                <AccordionBody>
                    {
                        subcategories.length <= 0 ?
                            <Spinner className='mx-auto' /> :
                            subcategories?.map((element, index) => {
                                return (
                                    <>
                                        <div className='flex flex-col'>
                                            <Checkbox name="type" label={`${element?.subcatgname}`} color="indigo" />
                                        </div>
                                    </>
                                )
                            })
                    }

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<FilterIcon id={3} open={open}  />}>
                <AccordionHeader className="text-lg text-black font-thin px-3" onClick={() => handleOpen(3)}>
                    Price
                </AccordionHeader>
                <AccordionBody>
                    <div className="flex w-72 mx-auto flex-col mt-4 gap-2">
                        <div className='flex justify-between'>
                        <h2 className='text-xl flex text-orange-900'>
                            <FaIndianRupeeSign className='pt-1 size-6' />
                            {Math.round(sliderValue)}
                        </h2>
                        <h2 className='text-xl flex text-orange-900'>
                            <FaIndianRupeeSign className='pt-1 size-6' />
                            {Math.round(minmaxprice?.max)}
                        </h2>
                        </div>
                        <Slider
                            size="sm"
                            min={minmaxprice.min} max={minmaxprice.max} step={1}
                            value={sliderValue}
                            onChange={ (e) => {(handleSliderChange(e))}}
                        />
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<FilterIcon id={4} open={open} />}>
                <AccordionHeader className="text-lg text-black font-thin px-3" onClick={(e) => {
                    handleOpen(4);
                    brand.length <= 0 ? dispatch(fetchbrandall({}))
                        : e.preventDefault()
                }}>
                    Brand
                </AccordionHeader>
                <AccordionBody>
                    {
                        brand.length <= 0 ?
                            <Spinner className='mx-auto' /> :
                            brand?.map((element, index) => {
                                return (
                                    <>
                                        <div className='flex flex-col'>
                                            <Checkbox name="type" label={`${element?.brandname}`} color="indigo" />
                                        </div>
                                    </>
                                )
                            })
                    }

                </AccordionBody>
            </Accordion>
        </div>
    );
};

export default Filter;