import { Card } from '@material-tailwind/react';
import React from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { RelFilter } from '../app/slices/productSlice';

const Sortby = () => {
    const dispatch = useDispatch();
    const { productall } = useSelector((state) => state.product);


    const [openMenu, setOpenMenu] = React.useState(false);

    const menuItems = [
        // {
        //     title: "Bestseller",
        // },
        {
            title: "Price High to Low",
        },
        {
            title: "Price Low to High",
        },
    ];
    return (
        <>
            <div className='grid grid-rows-1'>
                <Card className='flex w-[100%] items-center justify-between bg-gray-100 px-2'>
                    {/* Flex container for "Sort By" and Menu */}
                    <div className="flex items-center text-indigo-900 gap-4">
                        {/* "Sort By" Title */}
                        <h1 className='px-2'>Sort By</h1>

                        {/* Menu Component */}
                        <Menu open={openMenu} handler={setOpenMenu} allowHover>
                            <MenuHandler>
                                <Button
                                    variant="text"
                                    className="flex items-center text-base text-indigo-900 font-normal capitalize tracking-normal"
                                >
                                    Relevance{" "}
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                                            }`}
                                    />
                                </Button>
                            </MenuHandler>
                            <MenuList className="grid-cols-2 overflow-visible lg:grid">
                                <ul className="col-span-2 flex w-full flex-col gap-1">
                                    {menuItems.map(({ title }) => (
                                        <a href="#" key={title} onClick={(e) => {
                                            // title === "Bestseller" ? dispatch(RelFilter(productall, 0))
                                             title=== "Price High to Low" ? dispatch(RelFilter(productall, 1)): dispatch(RelFilter(productall, 2))
                                        }}>
                                            <MenuItem className='p-0'>
                                                <div className=" p-2">
                                                    <Typography variant="h6" color="blue-gray" className="leading-tight font-thin text-indigo-900">
                                                        {title}
                                                    </Typography>
                                                </div>
                                            </MenuItem>
                                        </a>
                                    ))}
                                </ul>
                            </MenuList>
                        </Menu>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Sortby;
