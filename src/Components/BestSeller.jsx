import React, { useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Card, } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchproductall } from '../app/slices/productSlice';
import { getimgurl } from '../MIS/Global';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchbrandall } from '../app/slices/brandSlice';

const BestSeller = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const { productall } = useSelector((state) => state.product);
    const { brand = [] } = useSelector((state) => state.brands);

    const [activeTab, setActiveTab] = React.useState("Tab1");
    const [tabdata, setTabData] = useState([])
    const data = [
        {
            label: "BestSellers",
        },
        {
            label: "Top Categories",
        },
        {
            label: "Toys",
        },
    ];


    useEffect(() => {

        if (activeTab === "Tab2") {

        } else if (activeTab === "Tab1") {
            dispatch(fetchproductall({ islimit: 8, isgrouppid: 1, isorder: 1 }))
        } else if (activeTab === "Tab3") {
            dispatch(fetchbrandall({ islimit: 4, isgrouppid: 1, isorder: 1 }))
        }


    }, [activeTab])



    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };



    return (
        <>

            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none  bg-transparent p-0 mx-auto w-[50%]"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-4 border-indigo-900 shadow-none rounded-none",
                    }}
                >
                    <Tab
                        value="Tab1"
                        onClick={() => setActiveTab("Tab1")}
                        className={activeTab === "Tab1" ? "text-indigo-900 text-xl" : "text-red-500 text-xl"}
                    >
                        BestSellers
                    </Tab>
                    <Tab
                        value="Tab2"
                        onClick={() => setActiveTab("Tab2")}
                        className={activeTab === "Tab2" ? "text-indigo-900 text-xl" : "text-red-500 text-xl"}
                    >
                        Top Categories
                    </Tab>
                    <Tab
                        value="Tab3"
                        onClick={() => setActiveTab("Tab3")}
                        className={activeTab === "Tab3" ? "text-indigo-900 text-xl" : "text-red-500 text-xl"}
                    >
                        Brands
                    </Tab>
                </TabsHeader>

                <TabsBody>
                    {activeTab === "Tab1" && (
                        <TabPanel value={activeTab} index="Tab1">
                            <div className='grid grid-cols-4 gap-x-6 gap-y-5 mt-2 cursor-pointer'>
                                {
                                    productall?.map((element, index) => {

                                        let imgpath = JSON.parse(element?.imgpaths)
                                        if (imgpath.length>0) {
                                            imgpath=imgpath.reduce((min,element) => min.pimgid<element.pimgid?min:element)
                                        }
                                        return (
                                            <Card key={index} className="items-center shadow-sm shadow-gray-400 px-2"
                                                onClick={() => {
                                                    navigate(`/viewproduct/${element?.pid}`)
                                                }}>
                                                <img src={`${getimgurl()}${imgpath?.imgpath}`} alt={`Image ${index}`} />
                                                <h1 className='text-2xl pt-2 font-semibold text-red-500'>{element?.pname}</h1>
                                                <h1 className='text-[14px] pt-1 tracking-wide text-indigo-900 font-thin text-center h-[13%] overflow-hidden'>{element?.pdesc}</h1>
                                                <h1 className='text-xl py-1 text-indigo-900 font-semibold text-center'>₹{element?.fprice}</h1>
                                            </Card>
                                        )
                                    })

                                }
                            </div>
                        </TabPanel>
                    )}
                    {activeTab === "Tab2" && (
                        <TabPanel value={activeTab} index="Tab2">
                            <div className='grid grid-cols-4 gap-x-6 gap-y-5 mt-2 cursor-pointer'>
                                {
                                    productall?.map((element, index) => {

                                        let imgpath = JSON.parse(element?.imgpaths)
                                        if (imgpath.length>0) {
                                            imgpath=imgpath.reduce((min,element) => min.pimgid<element.pimgid?min:element)
                                        }
                                        return (
                                            <Card key={index} className="items-center shadow-sm shadow-gray-400 px-2"
                                                onClick={() => {
                                                    navigate(`/viewproduct/${element?.pid}`)
                                                }}>
                                                <img src={`${getimgurl()}${imgpath?.imgpath}`} alt={`Image ${index}`} />
                                                <h1 className='text-2xl pt-2 font-semibold text-red-500'>{element?.pname}</h1>
                                                <h1 className='text-[14px] px-2 pt-1 tracking-wide text-indigo-900 font-thin text-center h-[13%] overflow-hidden'>{element?.pdesc}</h1>
                                                <h1 className='text-xl py-1 text-indigo-900 font-semibold text-center'>₹{element?.fprice}</h1>
                                            </Card>
                                        )
                                    })

                                }
                            </div>
                        </TabPanel>
                    )}
                    {activeTab === "Tab3" && (
                        <TabPanel value={activeTab} index="Tab3">
                            <div className='grid grid-cols-4 gap-x-6 gap-y-5 mt-2 cursor-pointer'>
                                {
                                    brand?.map((element, index) => {

                                        // let imgpath = JSON.parse(element?.imgpaths)
                                        let brandids = JSON.parse(element?.brandid)
                                        const imgpath = element.imgpaths ? JSON.parse(element.imgpaths) : [];
                                        return (
                                            <div key={index} className="flex items-center justify-center w-40 h-40"
                                                onClick={() => {
                                                    navigate(`/brandproducts/${brandids}/${element?.brandname}`)
                                                }}>
                                                    <img src={`${getimgurl()}${element?.imgpath}`} alt={`Image ${index}`} />
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </TabPanel>
                    )}
                </TabsBody>
            </Tabs>

        </>
    );
};

export default BestSeller;